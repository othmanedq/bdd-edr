#!/usr/bin/env bash

# Simple helper to launch the EdRAM Competitive Intelligence dashboard.

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR/dashboard"

if [ ! -d "node_modules" ]; then
  echo "Installing dependencies (this can take a minute)..."
  npm install
fi

echo "Starting Vite dev server on http://localhost:5173 ..."
npm run dev

