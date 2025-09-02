import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure allowed development origins for CORS
  allowedDevOrigins: [
    'localhost',
    '127.0.0.1',
    'local-origin.dev',
    '*.local-origin.dev',
    'https://tkjasavmzebmemjbxbpt.supabase.co'
  ],
  // Add headers to handle CORS issues
  async headers() {
    return [
      {
        source: '/auth/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*'
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS'
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization'
          }
        ]
      }
    ];
  }
};

export default nextConfig;
