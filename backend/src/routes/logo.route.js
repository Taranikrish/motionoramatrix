import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { getAllLogos, getPublishedLogos, uploadLogo, deleteLogo, togglePublishStatus } from "../controllers/logo.controller.js";

const router = Router();

// Public routes
router.route("/published").get(getPublishedLogos);

// All other routes require authentication
router.use(verifyJWT);

// Routes
router.route("/").get(getAllLogos);
router.route("/upload").post(
    upload.fields([
        { name: "logoFile", maxCount: 1 }
    ]),
    uploadLogo
);
router.route("/:logoId").delete(deleteLogo);
router.route("/toggle/publish/:logoId").patch(togglePublishStatus);

export default router;
