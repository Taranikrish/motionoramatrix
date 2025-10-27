# Production Readiness Tasks

## Backend
- [x] Remove hardcoded default admin creation in db/index.js
- [x] Update CORS origins in app.js for production domains (motionoramatrix.in and motionoramatrix.netlify.app)
- [ ] Ensure NODE_ENV=production is set for secure cookies
- [ ] Verify all secrets are in environment variables (no hardcoding)

## Frontend
- [x] Update VITE_API_URL in .env to https://motionoramatrix.in
- [x] Fix admin login to store accessToken instead of admin object in localStorage

## Database Cleanup (for mixed content fix)
- [x] Create script to delete existing videos and logos with HTTP URLs
- [x] Run cleanup script on local DB (0 videos, 0 logos deleted - DB was already clean)
- [x] Delete cleanup script file

## Testing
- [ ] Test admin login and auth flow
- [ ] Test video/logo uploads generate HTTPS URLs
- [ ] Test CORS allows requests from frontend domain
- [ ] Deploy backend to motionoramatrix.in
- [ ] Update frontend build and deploy
