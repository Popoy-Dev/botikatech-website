const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The desktop app's package-lock.json sits one level up; pin the workspace
  // root to this folder so Next.js doesn't infer the parent project.
  turbopack: {
    root: path.join(__dirname),
  },
};

module.exports = nextConfig;
