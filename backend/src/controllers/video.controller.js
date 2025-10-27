import mongoose,{isValidObjectId} from "mongoose";
import { Video } from "../models/video.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { uploadOnCloudinary,deleteFromCloudinary } from "../utils/cloudinary.js";

const getAllVideos = asyncHandler(async (req, res) => {
    // Fetch all videos for admin panel
    const videos = await Video.find({}).sort({ createdAt: -1 });

    return res.status(200).json(
        new ApiResponse(200, {
            videos,
            totalVideos: videos.length
        }, "All videos fetched successfully")
    );
})

const getPublishedVideos = asyncHandler(async (req, res) => {
    // Fetch only published long videos for home page (exclude reels)
    const publishedVideos = await Video.find({ isPublished: true, isreel: false }).sort({ createdAt: -1 });

    return res.status(200).json(
        new ApiResponse(200, {
            videos: publishedVideos,
            totalVideos: publishedVideos.length
        }, "Published videos fetched successfully")
    );
})

const getPublishedReels = asyncHandler(async (req, res) => {
    // Fetch only published reel videos for carousel
    const publishedReels = await Video.find({ isPublished: true, isreel: true }).sort({ createdAt: -1 });

    return res.status(200).json(
        new ApiResponse(200, {
            videos: publishedReels,
            totalVideos: publishedReels.length
        }, "Published reels fetched successfully")
    );
})

const getAllVideosForSeeMore = asyncHandler(async (req, res) => {
    // Fetch all long videos for see more page (both published and unpublished, exclude reels)
    const videos = await Video.find({ isreel: false }).sort({ createdAt: -1 });

    return res.status(200).json(
        new ApiResponse(200, {
            videos,
            totalVideos: videos.length
        }, "All videos fetched successfully")
    );
})

const getAllReelsForSeeMore = asyncHandler(async (req, res) => {
    // Fetch all reel videos for see more page (both published and unpublished)
    const reels = await Video.find({ isreel: true }).sort({ createdAt: -1 });

    return res.status(200).json(
        new ApiResponse(200, {
            videos: reels,
            totalVideos: reels.length
        }, "All reels fetched successfully")
    );
})

const UploadVideo = asyncHandler(async (req, res) => {
    // Check video limit (max 20 videos)
    const totalVideos = await Video.countDocuments();
    if (totalVideos >= 20) {
        throw new ApiError(400, "Maximum video limit reached (20 videos)");
    }

    // Get data from body
    const { title, type } = req.body;

    // Validate required fields
    if ([title, type].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "Title and type are required");
    }

    // Check if type is valid
    if (!["reel", "video"].includes(type.toLowerCase())) {
        throw new ApiError(400, "Type must be either 'reel' or 'video'");
    }

    // Get video file path
    const videoFileLocalPath = req.files?.videoFile?.[0]?.path;
    if (!videoFileLocalPath) {
        throw new ApiError(400, "Video file is required");
    }

    // Upload video to Cloudinary
    const videoFile = await uploadOnCloudinary(videoFileLocalPath);
    if (!videoFile) {
        throw new ApiError(500, "Failed to upload video file");
    }

    console.log("Cloudinary upload response:", videoFile);

    // Create video document
    const video = await Video.create({
        videoFile: videoFile.url,
        title: title.trim(),
        isreel: type.toLowerCase() === "reel",
        isPublished: false // Default to unpublished
    });

    return res.status(201).json(
        new ApiResponse(201, video, "Video uploaded successfully")
    );
})

const deleteVideo = asyncHandler(async (req, res) => {
    const { videoId } = req.params;

    // Validate videoId
    if (!isValidObjectId(videoId)) {
        throw new ApiError(400, "Invalid video ID");
    }

    // Find and delete the video
    const video = await Video.findById(videoId);
    if (!video) {
        throw new ApiError(404, "Video not found");
    }

    // Delete video file from Cloudinary
    const publicId = video.videoFile.split('/').pop().split('.')[0]; // Extract public ID from URL
    await deleteFromCloudinary(publicId);

    // Delete video from database
    await Video.findByIdAndDelete(videoId);

    return res.status(200).json(
        new ApiResponse(200, {}, "Video deleted successfully")
    );
})

const togglePublishStatus = asyncHandler(async (req, res) => {
    const { videoId } = req.params;

    // Validate videoId
    if (!isValidObjectId(videoId)) {
        throw new ApiError(400, "Invalid video ID");
    }

    // Find the video
    const video = await Video.findById(videoId);
    if (!video) {
        throw new ApiError(404, "Video not found");
    }

    // Toggle publish status
    video.isPublished = !video.isPublished;
    await video.save();

    return res.status(200).json(
        new ApiResponse(200, {
            video,
            isPublished: video.isPublished
        }, `Video ${video.isPublished ? 'published' : 'unpublished'} successfully`)
    );
})

export { getAllVideos, getPublishedVideos, getPublishedReels, getAllVideosForSeeMore, getAllReelsForSeeMore, UploadVideo, deleteVideo, togglePublishStatus }
