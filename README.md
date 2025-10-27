# Motionora Matrix

A full-stack web application for managing video content and client logos with admin dashboard functionality.

## Features

- **Admin Dashboard**: Secure admin login with JWT authentication
- **Video Management**: Upload and manage long videos and reels
- **Logo Management**: Upload and display client logos
- **Responsive Design**: Modern UI built with React and Tailwind CSS
- **File Upload**: Cloudinary integration for media storage
- **CORS Security**: Configured for production domains

## Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- React Router
- Axios (for API calls)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Cloudinary (file uploads)
- bcryptjs (password hashing)

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB database
- Cloudinary account (for file uploads)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd motionoramatrix
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env with your actual values
   npm run dev
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   cp .env.example .env
   # Edit .env with your API URL
   npm run dev
   ```

### Environment Variables

#### Backend (.env)
```env
MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net
ACCESS_TOKEN_SECRET=your_access_token_secret_here
REFRESH_TOKEN_SECRET=your_refresh_token_secret_here
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
PORT=8000
NODE_ENV=production
```

#### Frontend (.env)
```env
VITE_API_URL=https://motionoramatrix.in
```

## Production Deployment

### Backend Deployment
1. Set environment variables on your server
2. Run `npm run start` (uses node, not nodemon)
3. Ensure MongoDB is accessible
4. Configure reverse proxy (nginx/apache) for your domain

### Frontend Deployment
1. Build the frontend: `npm run build`
2. Deploy the `dist` folder to your hosting service
3. Set `VITE_API_URL` environment variable to your backend URL

## API Endpoints

### Admin Routes
- `POST /api/v1/admin/login` - Admin login
- `GET /api/v1/admin/verify` - Verify admin token
- `POST /api/v1/admin/refresh` - Refresh access token

### Video Routes
- `GET /api/v1/videos/` - Get all videos (admin)
- `POST /api/v1/videos/upload` - Upload video
- `DELETE /api/v1/videos/:id` - Delete video
- `PATCH /api/v1/videos/toggle/publish/:id` - Toggle publish status
- `GET /api/v1/videos/published` - Get published videos
- `GET /api/v1/videos/reels` - Get published reels

### Logo Routes
- `POST /api/v1/logos/upload` - Upload logo
- `GET /api/v1/logos/published` - Get published logos

## Security Features

- JWT-based authentication
- Password hashing with bcrypt
- CORS protection
- Secure cookie handling
- Environment variable configuration
- No hardcoded secrets

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

ISC License
