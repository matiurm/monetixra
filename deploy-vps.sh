#!/usr/bin/env bash
set -euo pipefail

if [ ! -f .env.production ]; then
  cp deploy.env.example .env.production
  echo "Created .env.production from deploy.env.example"
fi

echo "Edit .env.production with your real values, then run:"
echo "  npm install"
echo "  npm test"
echo "  NODE_ENV=production PORT=3000 node server.js"
