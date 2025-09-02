import { updateSession } from "@/lib/supabase/middleware";
import { type NextRequest, NextResponse } from "next/server";
import { handlePreflight, setCORSHeaders } from "@/lib/cors";

export async function middleware(request: NextRequest) {
  // Handle preflight requests
  const preflightResponse = handlePreflight(request);
  if (preflightResponse) {
    return preflightResponse;
  }

  // Process session updates
  const response = await updateSession(request);
  
  // Add CORS headers
  return setCORSHeaders(response, request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
