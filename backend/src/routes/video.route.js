import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { getAllVideos, getPublishedVideos, getPublishedReels, getAllVideosForSeeMore, getAllReelsForSeeMore, UploadVideo, deleteVideo, togglePublishStatus } from "../controllers/video.controller.js";

const router = Router();

// Public routes
router.route("/published").get(getPublishedVideos);
router.route("/reels").get(getPublishedReels);
router.route("/see-more/videos").get(getAllVideosForSeeMore);
router.route("/see-more/reels").get(getAllReelsForSeeMore);

// All other routes require authentication
router.use(verifyJWT);

// Routes
router.route("/").get(getAllVideos);
router.route("/upload").post(
    upload.fields([
        { name: "videoFile", maxCount: 1 }
    ]),
    UploadVideo
);
router.route("/:videoId").delete(deleteVideo);
router.route("/toggle/publish/:videoId").patch(togglePublishStatus);

export default router;
