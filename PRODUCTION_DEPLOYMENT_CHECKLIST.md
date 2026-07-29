# Production Deployment Checklist for Monetixra

This checklist is for deploying the app to a production environment with a verified, reachable Supabase project.

## 1) Prepare the Supabase project

1. Create a new Supabase project in the Supabase dashboard.
2. Copy the project URL and anon key from Project Settings → API.
3. If needed, copy the service role key from Project Settings → API.
4. Apply the SQL schema from:
   - [supabase_schema.sql](supabase_schema.sql)
   - [SUPABASE_TABLES_SETUP.sql](SUPABASE_TABLES_SETUP.sql)
5. Confirm the project has public access or the required policies for the tables used by this app.

Recommended env values:

- SUPABASE_URL=https://your-project.supabase.co
- SUPABASE_ANON_KEY=your-anon-key
- SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

## 2) Backend environment variables

Set these in the runtime environment for Render, VPS, or any Node host.

```env
NODE_ENV=production
PORT=10000

JWT_SECRET=replace-with-long-random-secret
ADMIN_ID=admin_matiur
ADMIN_PASS=replace-with-strong-password
ADMIN_API_SECRET=replace-with-secure-secret
ALLOWED_ORIGINS=https://your-frontend-domain.com,https://your-backend-domain.com
FRONTEND_URL=https://your-frontend-domain.com
ALLOWED_DB_TABLES=users,posts,transactions,media

SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-cloud-key
CLOUDINARY_API_SECRET=your-cloud-secret

GOOGLE_API_KEY=your-google-key
GOOGLE_VISION_KEY=your-google-vision-key
METERED_API_KEY=your-metered-key

VAPID_PUBLIC_KEY=your-vapid-public
VAPID_PRIVATE_KEY=your-vapid-private
VAPID_EMAIL=mailto:you@example.com
```

## 3) Render deployment

1. Connect the GitHub repo to Render.
2. Use the existing [render.yaml](render.yaml) blueprint or create a Web Service with:
   - Build Command: `npm install`
   - Start Command: `node server.js`
   - Health Check Path: `/health`
3. Add the env vars above in Render → Environment.
4. Deploy.
5. Confirm the health endpoint:

```bash
curl https://your-render-app.onrender.com/api/health
curl https://your-render-app.onrender.com/api/config
```

Expected response should include:
- `ok: true`
- `supabaseConfigured: true`
- `supabaseReachable` depending on real network access

## 4) Netlify / static frontend deployment

If the frontend is hosted on Netlify:

1. Deploy the frontend build or static assets to Netlify.
2. Make sure the backend is hosted on Render/VPS and reachable from the frontend.
3. Set these values in the production environment of the backend:
   - `FRONTEND_URL=https://your-netlify-site.netlify.app`
   - `ALLOWED_ORIGINS=https://your-netlify-site.netlify.app,https://your-backend-domain.com`
4. If the frontend needs to know the backend URL, set it in the runtime config or the app shell before build.
5. Verify the frontend can reach:

```bash
curl https://your-netlify-site.netlify.app/
curl https://your-backend-domain.com/api/config
```

## 5) VPS / self-hosted deployment

For a VPS, use the same env vars above.

1. Install Node.js and npm.
2. Clone the repo.
3. Run:

```bash
npm install
npm test
NODE_ENV=production PORT=3000 node server.js
```

4. Use a reverse proxy such as Nginx or Caddy and forward traffic to the Node port.
5. Set the production env vars in the shell, systemd service, or `.env` file.
6. Verify:

```bash
curl http://your-vps-ip:3000/api/health
curl http://your-vps-ip:3000/api/config
```

## 6) Post-deployment verification

Run these checks after deployment:

```bash
curl https://your-backend-domain.com/api/health
curl https://your-backend-domain.com/api/config
curl https://your-backend-domain.com/api/sync/status
```

Verify:
- `/api/health` returns `200`
- `/api/config` returns the Supabase URL and configuration marker
- `/api/sync/status` shows the persistence mode and runtime fallback state

## 7) Expected production outcome

When the Supabase URL, anon key, and network path are correct, the app should:
- connect to the Supabase project for persistence
- serve the app health and config endpoints correctly
- expose runtime fallback only if the remote host is unreachable
