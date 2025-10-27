import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://motionoramatrix.netlify.app",
  "https://motionoramatrix.in",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // allow Postman, server-to-server
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        console.warn("❌ Blocked by CORS:", origin);
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes
import adminRoute from "./src/routes/admin.route.js";
import videoRoute from "./src/routes/video.route.js";
import logoRoute from "./src/routes/logo.route.js";

app.use("/api/v1/admin", adminRoute);
app.use("/api/v1/videos", videoRoute);
app.use("/api/v1/logos", logoRoute);

export default app;
