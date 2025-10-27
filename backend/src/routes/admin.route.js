import { Router } from "express";
import {loginAdmin,refreshAccessToken,logoutAdmin,verifyAdmin} from "../controllers/admin.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router=Router();
router.route("/login").post(loginAdmin);
router.route("/refresh-token").get(refreshAccessToken);
router.route("/verify").get(verifyJWT,verifyAdmin);
router.route("/logout").post(verifyJWT,logoutAdmin);
export default router
