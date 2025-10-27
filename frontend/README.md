# Motionora Matrix - Full Stack Application

A React + Vite frontend with Express backend for managing logos and videos, featuring admin authentication and public access via tunnels.

## 🚀 Setup Commands

To get the application running with tunnels for external access:

1. **Start Backend Server** (in `backend/` directory):
   ```bash
   cd backend
   npm install
   npm run dev
   ```
   Backend will run on http://localhost:8000

2. **Start Frontend Server** (in `frontend/` directory):
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   Frontend will run on http://localhost:5173

3. **Setup Tunnels** (in separate terminals):
   - **Frontend Tunnel** (ngrok): `ngrok http 5173`
   - **Backend Tunnel** (DevTunnel): Use VS Code DevTunnel extension or CLI to expose port 8000

4. **Update Configurations**:
   - Update `frontend/vite.config.js` with new ngrok URL in `allowedHosts`
   - Update `backend/app.js` with new tunnel URLs in CORS origins
   - Test public API: `GET /api/v1/logos/published`

## 📡 Access URLs

| Type | URL | Notes |
|------|-----|-------|
| Frontend (ngrok) | https://nonlegal-figuredly-joleen.ngrok-free.dev | For mobile and public access |
| Backend (DevTunnel) | https://08dq8kfg-8000.inc1.devtunnels.ms | API tunnel exposed for frontend requests |
| Local Frontend | http://localhost:5173 | Vite dev server |
| Local Backend | http://localhost:8000 | Express server |

## 🧩 Frontend Configuration

**vite.config.js**
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // allows access from network/ngrok
    allowedHosts: [
      'nonlegal-figuredly-joleen.ngrok-free.dev' // current ngrok URL
    ],
    port: 5173,
  },
})
```

🟢 **Purpose**
- Enables ngrok host to access Vite dev server
- Fixes Vite's "Blocked request: host not allowed" error
- Allows testing the frontend on mobile devices

## ⚙️ Backend Configuration

**app.js**
```javascript
import cors from "cors";

app.use(cors({
  origin: [
    "https://nonlegal-figuredly-joleen.ngrok-free.dev",
    "http://localhost:5173",
    "http://localhost:3000",
    "http://08dq8kfg-5173.inc1.devtunnels.ms"
  ],
  credentials: true
}));
```

🟢 **Purpose**
- Allows both local and external tunnels to call APIs
- Fixed previous CORS errors completely

## 🔗 Frontend API Call Example

```javascript
const response = await fetch(
  "https://08dq8kfg-8000.inc1.devtunnels.ms/api/v1/logos/published",
  { credentials: "include" } // required only if cookies are used
);
```

## ✅ Verified Working Route

**Endpoint:** `GET /api/v1/logos/published`

**Response:**
```json
{
  "statusCode": 200,
  "data": {
    "logos": [
      {
        "_id": "68fb97766c276b10f644a271",
        "logoFile": "http://res.cloudinary.com/motionoramatrix/image/upload/v1761318776/jdlluua8pla59ecchodm.png",
        "isPublished": true
      }
    ],
    "totalLogos": 1
  },
  "message": "Published logos fetched successfully",
  "success": true
}
```

🟢 **Meaning:** Backend public route is working correctly from both local and mobile devices.

## ⚠️ Remaining Issue — "Unauthorized"

The error appears only when calling protected routes. It's unrelated to CORS — caused by missing/invalid JWT or cookie.

**Possible causes:**
- verifyJWT middleware applied globally
- Missing Authorization header or token
- Auth-required route accessed without login

**✅ Fix Suggestion**
Keep `/api/v1/logos/published` public. Use:
```javascript
router.get("/my-logos", verifyJWT, getUserLogos);
```
instead of applying middleware globally.

## 🧾 Current Status Summary

| Component | Status | Notes |
|-----------|--------|-------|
| Frontend (Vite) | ✅ Working through ngrok | Mobile access enabled |
| Backend (Express) | ✅ Working through DevTunnel | Responds correctly |
| CORS | ✅ Fixed | All origins configured |
| Auth Routes | ⚠️ Needs token validation | "Unauthorized" only for protected APIs |
| Public APIs | ✅ Verified | `/api/v1/logos/published` works |
| Mobile Testing | ✅ Functional | Tested via ngrok link |

## 📦 Dependencies

### Frontend
- React 19.1.1
- Vite 7.1.7
- Tailwind CSS 4.1.15
- React Router DOM 7.9.4

### Backend
- Express 5.1.0
- MongoDB (Mongoose 8.19.2)
- JWT Authentication
- Cloudinary for file uploads
- CORS enabled

## 🛠️ Development

1. Install dependencies: `npm install` in both `frontend/` and `backend/`
2. Start backend: `npm run dev` in `backend/`
3. Start frontend: `npm run dev` in `frontend/`
4. Access local development at http://localhost:5173

## 📱 Mobile Testing

Use ngrok tunnel URL to test on mobile devices. Ensure `vite.config.js` includes the current ngrok URL in `allowedHosts`.
