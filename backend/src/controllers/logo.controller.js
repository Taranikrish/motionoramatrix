import mongoose, { isValidObjectId } from "mongoose";
import { Logo } from "../models/logo.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { uploadOnCloudinary, deleteFromCloudinary } from "../utils/cloudinary.js";

const getAllLogos = asyncHandler(async (req, res) => {
    // Fetch all logos for admin panel
    const logos = await Logo.find({}).sort({ createdAt: -1 });

    return res.status(200).json(
        new ApiResponse(200, {
            logos,
            totalLogos: logos.length
        }, "All logos fetched successfully")
    );
});

const getPublishedLogos = asyncHandler(async (req, res) => {
    // Fetch only published logos for frontend display
    const publishedLogos = await Logo.find({ isPublished: true }).sort({ createdAt: -1 });

    return res.status(200).json(
        new ApiResponse(200, {
            logos: publishedLogos,
            totalLogos: publishedLogos.length
        }, "Published logos fetched successfully")
    );
});

const uploadLogo = asyncHandler(async (req, res) => {
    // Check logo limit (max 50 logos)
    const totalLogos = await Logo.countDocuments();
    if (totalLogos >= 50) {
        throw new ApiError(400, "Maximum logo limit reached (50 logos)");
    }

    // Get logo file path
    const logoFileLocalPath = req.files?.logoFile?.[0]?.path;
    if (!logoFileLocalPath) {
        throw new ApiError(400, "Logo file is required");
    }

    // Upload logo to Cloudinary
    const logoFile = await uploadOnCloudinary(logoFileLocalPath);
    if (!logoFile) {
        throw new ApiError(500, "Failed to upload logo file");
    }

    console.log("Cloudinary upload response:", logoFile);

    // Create logo document
    const logo = await Logo.create({
        logoFile: logoFile.url,
        isPublished: true // Default to published for logos
    });

    return res.status(201).json(
        new ApiResponse(201, logo, "Logo uploaded successfully")
    );
});

const deleteLogo = asyncHandler(async (req, res) => {
    const { logoId } = req.params;

    // Validate logoId
    if (!isValidObjectId(logoId)) {
        throw new ApiError(400, "Invalid logo ID");
    }

    // Find and delete the logo
    const logo = await Logo.findById(logoId);
    if (!logo) {
        throw new ApiError(404, "Logo not found");
    }

    // Delete logo file from Cloudinary
    const publicId = logo.logoFile.split('/').pop().split('.')[0]; // Extract public ID from URL
    await deleteFromCloudinary(publicId);

    // Delete logo from database
    await Logo.findByIdAndDelete(logoId);

    return res.status(200).json(
        new ApiResponse(200, {}, "Logo deleted successfully")
    );
});

const togglePublishStatus = asyncHandler(async (req, res) => {
    const { logoId } = req.params;

    // Validate logoId
    if (!isValidObjectId(logoId)) {
        throw new ApiError(400, "Invalid logo ID");
    }

    // Find the logo
    const logo = await Logo.findById(logoId);
    if (!logo) {
        throw new ApiError(404, "Logo not found");
    }

    // Toggle publish status
    logo.isPublished = !logo.isPublished;
    await logo.save();

    return res.status(200).json(
        new ApiResponse(200, {
            logo,
            isPublished: logo.isPublished
        }, `Logo ${logo.isPublished ? 'published' : 'unpublished'} successfully`)
    );
});

export { getAllLogos, getPublishedLogos, uploadLogo, deleteLogo, togglePublishStatus };
