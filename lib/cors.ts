import { NextRequest, NextResponse } from 'next/server';

// Define allowed origins (you can customize this based on your needs)
const allowedOrigins = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'http://localhost:3001',
  'https://tkjasavmzebmemjbxbpt.supabase.co',
  // Add your production domain here
  // 'https://yourdomain.com'
];

// Check if the origin is allowed
export function isOriginAllowed(origin: string | null): boolean {
  if (!origin) return false;
  return allowedOrigins.some(allowedOrigin => 
    origin === allowedOrigin || 
    (allowedOrigin.startsWith('*.') && origin.endsWith(allowedOrigin.substring(1)))
  );
}

// Set CORS headers
export function setCORSHeaders(response: NextResponse, request: NextRequest): NextResponse {
  const origin = request.headers.get('origin');
  
  // If origin is allowed or we're in development, allow all origins
  if (process.env.NODE_ENV === 'development' || isOriginAllowed(origin)) {
    response.headers.set('Access-Control-Allow-Origin', origin || '*');
  }
  
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  response.headers.set('Access-Control-Max-Age', '86400'); // 24 hours
  
  return response;
}

// Handle preflight requests
export function handlePreflight(request: NextRequest): NextResponse | null {
  if (request.method === 'OPTIONS') {
    const response = new NextResponse(null, { status: 204 });
    return setCORSHeaders(response, request);
  }
  return null;
}