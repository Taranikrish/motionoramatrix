import jwt from "jsonwebtoken"
import { Admin } from "../models/admin.model.js"
import { ApiError } from "../utils/ApiError.js"
import { asyncHandler } from "../utils/asyncHandler.js"

export const verifyJWT=asyncHandler(async (req,_,next)=>{
  const token= req.cookies.accessToken|| req.header("Authorization")?.replace("Bearer ","");

  if(!token){
    return next(new ApiError(401,"Unauthorized"));
  }
  try {
    const decodedToken=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);

    const admin=await Admin.findById(decodedToken._id).select("-password -refreshToken");

    if(!admin){
      return next(new ApiError(401,"Unauthorized"));
    }

    req.admin=admin;
    next();
  } catch (error) {
        throw new ApiError(401,error?.message||"Unauthorized");
  }

})
