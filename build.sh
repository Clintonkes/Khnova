#!/usr/bin/env bash
set -o errexit

# Install frontend dependencies and build (Node.js is pre-installed on Render)
cd UI
npm install
npm run build
cd ..

# Install backend dependencies
pip install -r backend/requirements.txt
