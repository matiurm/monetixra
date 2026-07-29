# Video/Audio Transcoding Setup Guide

This guide explains how to set up server-side video/audio transcoding for Monetixra using FFmpeg.

## Prerequisites

### 1. Install FFmpeg

**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install ffmpeg
```

**CentOS/RHEL:**
```bash
sudo yum install epel-release
sudo yum install ffmpeg
```

**macOS:**
```bash
brew install ffmpeg
```

**Windows:**
- Download from https://ffmpeg.org/download.html
- Extract and add to PATH
- Or use Chocolatey: `choco install ffmpeg`

**Verify Installation:**
```bash
ffmpeg -version
```

### 2. Install Node.js Dependencies

The server already includes the necessary dependencies. No additional packages needed.

## Server Configuration

The transcoding system is already integrated into `server.js`. It includes:

- **Video Resolutions:** 240p, 360p, 480p, 640p, 720p, 1080p, 2K
- **Audio Qualities:** 144kbps, 240kbps, 320kbps
- **Automatic Cleanup:** Old jobs are removed after 1 hour
- **Fallback:** If FFmpeg is not available, it simulates transcoding

## API Endpoints

### Start Transcoding Job
```http
POST /api/transcode/start
Content-Type: application/json

{
  "type": "video",
  "url": "https://example.com/video.mp4",
  "quality": "720p",
  "postId": "post123"
}
```

**Response:**
```json
{
  "jobId": "job_1234567890_abc123",
  "status": "started"
}
```

### Check Job Status
```http
GET /api/transcode/status/:jobId
```

**Response:**
```json
{
  "status": "processing",
  "progress": 45,
  "type": "video",
  "quality": "720p"
}
```

### Download Transcoded File
```http
GET /api/transcode/download/:jobId
```

## Frontend Integration

The frontend is already integrated. When users click download:

1. Resolution selection modal appears
2. Server transcoding job is started
3. Progress bar shows real-time progress
4. File downloads when transcoding completes

## Deployment

### Local Development

1. Install FFmpeg (see above)
2. Start server:
```bash
node server.js
```
3. The transcoding system will automatically detect FFmpeg

### Production Deployment

#### Option 1: VPS/Cloud Server

1. **Deploy to Ubuntu VPS:**
```bash
# SSH into server
ssh user@your-server.com

# Install FFmpeg
sudo apt update
sudo apt install ffmpeg

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Clone repository
git clone <your-repo-url>
cd monetixra-main

# Install dependencies
npm install

# Start server
node server.js
```

2. **Use PM2 for Process Management:**
```bash
# Install PM2
npm install -g pm2

# Start server with PM2
pm2 start server.js --name monetixra

# Enable auto-restart on server reboot
pm2 startup
pm2 save
```

#### Option 2: Docker Deployment

Create `Dockerfile`:
```dockerfile
FROM node:18

# Install FFmpeg
RUN apt-get update && apt-get install -y ffmpeg

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000
CMD ["node", "server.js"]
```

Build and run:
```bash
docker build -t monetixra .
docker run -p 3000:3000 monetixra
```

#### Option 3: Render.com / Railway.app

These platforms support FFmpeg. Just deploy the repository and FFmpeg will be available.

## Performance Optimization

### 1. Limit Concurrent Jobs

Add to server.js:
```javascript
const MAX_CONCURRENT_JOBS = 3;
let activeJobs = 0;

// In processTranscodingJob:
if (activeJobs >= MAX_CONCURRENT_JOBS) {
  // Queue the job
  return;
}
activeJobs++;
// ... process job ...
activeJobs--;
```

### 2. Use GPU Acceleration

If server has NVIDIA GPU:
```bash
# Install NVIDIA drivers
sudo apt install nvidia-driver-535

# Install FFmpeg with NVENC
sudo apt install ffmpeg libavcodec-extra
```

Update transcoding command:
```javascript
const command = `ffmpeg -i "${inputPath}" -vf scale=${res.width}:${res.height} -c:v h264_nvenc -b:v ${res.bitrate} -c:a ${res.acodec} -b:a ${res.abitrate} "${outputPath}" -y`;
```

### 3. Cloud Storage Integration

For production, upload transcoded files to cloud storage:

```javascript
// After transcoding, upload to Cloudinary/S3
const cloudinary = require('cloudinary').v2;
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

await cloudinary.uploader.upload(outputPath, {
  resource_type: 'video',
  folder: 'transcoded'
});
```

## Troubleshooting

### FFmpeg Not Found
```bash
# Check if FFmpeg is installed
which ffmpeg

# If not found, install it (see Prerequisites)
```

### Permission Denied
```bash
# Ensure temp directory is writable
mkdir -p temp
chmod 755 temp
```

### Transcoding Slow
- Use GPU acceleration (see above)
- Reduce resolution options
- Use faster codec: `-c:v libx264 -preset fast`

### Memory Issues
- Limit concurrent jobs
- Use smaller resolution options
- Add swap space to server

## Monitoring

Add monitoring to track transcoding jobs:

```javascript
// Log transcoding statistics
setInterval(() => {
  const stats = {
    total: transcodingJobs.size,
    processing: Array.from(transcodingJobs.values()).filter(j => j.status === 'processing').length,
    completed: Array.from(transcodingJobs.values()).filter(j => j.status === 'completed').length,
    failed: Array.from(transcodingJobs.values()).filter(j => j.status === 'failed').length
  };
  console.log('[Transcode Stats]', stats);
}, 60000);
```

## Security

1. **Rate Limiting:** Already implemented in server.js
2. **File Size Limits:** Add to transcoding endpoint:
```javascript
const MAX_FILE_SIZE = 500 * 1024 * 1024; // 500MB
if (url.length > MAX_FILE_SIZE) {
  return res.status(400).json({ error: 'File too large' });
}
```
3. **Input Validation:** Validate URLs and quality parameters

## Testing

Test the transcoding system:

```bash
# Start server
node server.js

# Test with curl
curl -X POST http://localhost:3000/api/transcode/start \
  -H "Content-Type: application/json" \
  -d '{"type":"video","url":"https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4","quality":"720p"}'

# Check status
curl http://localhost:3000/api/transcode/status/{jobId}
```

## Support

For issues:
1. Check FFmpeg installation: `ffmpeg -version`
2. Check server logs for errors
3. Verify temp directory permissions
4. Test with small video files first
