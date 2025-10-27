import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import {Admin} from "../models/admin.model.js";
import jwt from "jsonwebtoken";


const generateAccessTokenAndRefreshToken=async (adminId)=>{
    const admin=await Admin.findById(adminId);
    if(!admin){
        throw new ApiError(404,"admin not found")

    }
    try {
        const accessToken=admin.generateAccessToken();
        const refreshToken=admin.generateRefreshToken();

        admin.refreshToken=refreshToken;

        await admin.save({validateBeforeSave:false});

        return {accessToken,refreshToken};
    } catch (error) {
        throw new ApiError(500,"Failed to generate tokens");
    }

}

const loginAdmin=asyncHandler(async (req,res)=>{
    //get data from body
    const {email,password}=req.body;

    //validation
    if([email,password].some((field)=>field?.trim()==="")){
        throw new ApiError(400,"All fields are required")
    }

    const admin=await Admin.findOne({email}).select("+password");

    if(!admin){
        throw new ApiError(404,"admin not found")
    }

    const isPasswordCorrect=await admin.isPasswordCorrect(password);

    if(!isPasswordCorrect){
        throw new ApiError(401,"Password is incorrect")
    }

    const {accessToken,refreshToken}=await generateAccessTokenAndRefreshToken(admin._id);
    const loggedInadmin=await Admin.findById(admin._id).select("-password -refreshToken");
    if(!loggedInadmin){
        throw new ApiError(500,"Something went wrong while logging in") ;
    }

    const options={
        httpOnly:true,
        secure:process.env.NODE_ENV==="production",
        sameSite: process.env.NODE_ENV === "production" ? 'strict' : 'lax'
    }

        return res
            .status(200)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", refreshToken, options)
            .json(
                new ApiResponse(
                    200,
                    {
                        admin: loggedInadmin,
                        accessToken,
                        refreshToken
                    },
                    "admin logged in"
                )
            );
})

const refreshAccessToken=asyncHandler(async (req, res) => {
    const incomingRefreshToken=req.cookies.refreshToken||req.body.refreshToken;

    if(!incomingRefreshToken){
        throw new ApiError(401,"Refresh token is missing")
    }
    try {
        const decodedToken=jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET,

        )
        const admin=await Admin.findById(decodedToken?._id);
        if(!admin){
            throw new ApiError(401,"Invalid admin");
        }
        if(incomingRefreshToken!==admin?.refreshToken){
            throw new ApiError(401,"Invalid refresh token");
        }

        const options={
            httpOnly:true,
            secure:process.env.NODE_ENV==="production",
            sameSite: process.env.NODE_ENV === "production" ? 'strict' : 'lax'
        }

        const {accessToken,refreshToken:newRefreshToken}=
            await generateAccessTokenAndRefreshToken(admin._id);

        return res
                .status(200)
                .cookie("accessToken",accessToken,options)
                .cookie("refreshToken",newRefreshToken,options)
                .json(
                    new ApiResponse(
                        200,
                        {
                            accessToken,
                            refreshToken: newRefreshToken
                        },
                        "Refresh token refreshed successfully"
                    )
                )
    } catch (error) {
        throw new ApiError(500,"Something went wrong while refreshing token");
    }
})

const logoutAdmin=asyncHandler(async (req, res) => {
    await Admin.findByIdAndUpdate(req.admin._id,
        {
            $set:{refreshToken:undefined}
        },
        {
            new:true
        })
    const options={
        httpOnly:true,
        secure:process.env.NODE_ENV==="production",
        sameSite: process.env.NODE_ENV === "production" ? 'strict' : 'lax'
    }
    return res
            .status(200)
            .clearCookie("accessToken",options)
            .clearCookie("refreshToken",options)
            .json(new ApiResponse(200,{},"admin logged out successfully"))

})

const verifyAdmin=asyncHandler(async (req, res) => {
    return res
            .status(200)
            .json(new ApiResponse(200, {admin: req.admin}, "Admin verified successfully"))
})


export {loginAdmin,refreshAccessToken,logoutAdmin,verifyAdmin}
