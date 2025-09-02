import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  console.log("Callback route called");
  
  // The `/auth/callback` route is required for the server-side auth flow implemented
  // by the SSR package. It exchanges an auth code for the user's session.
  // https://supabase.com/docs/guides/auth/server-side/nextjs
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const error = requestUrl.searchParams.get("error");
  const errorDescription = requestUrl.searchParams.get("error_description");
  const state = requestUrl.searchParams.get("state");
  
  console.log("Callback parameters:", { code, error, errorDescription, state });

  // Handle OAuth errors
  if (error) {
    console.error("OAuth error received:", { error, errorDescription });
    return NextResponse.redirect(`${requestUrl.origin}/auth/login?error=${encodeURIComponent(errorDescription || error)}`);
  }

  if (code) {
    try {
      console.log("Creating Supabase client");
      // Create the Supabase client using cookies
      const supabase = await createClient();
      console.log("Supabase client created");
      
      console.log("Exchanging code for session");
      // The exchangeCodeForSession method handles PKCE automatically
      const { data, error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);
      console.log("Exchange result:", { data, error: exchangeError });
      
      if (exchangeError) {
        console.error("Error exchanging code for session:", exchangeError);
        console.error("Error details:", {
          message: exchangeError.message,
          status: exchangeError.status,
          name: exchangeError.name
        });
        // Check if this is a PKCE error specifically
        if (exchangeError.message.includes("both auth code and code verifier should be non-empty")) {
          return NextResponse.redirect(`${requestUrl.origin}/auth/login?error=pkce_error&error_description=PKCE+verification+failed.+Please+try+logging+in+again.`);
        }
        return NextResponse.redirect(`${requestUrl.origin}/auth/login?error=auth_failed&error_description=${encodeURIComponent(`Failed to exchange code: ${exchangeError.message}`)}`);
      }
      
      // Success - redirect to dashboard
      console.log("Redirecting to dashboard");
      return NextResponse.redirect(requestUrl.origin + "/dashboard");
    } catch (err) {
      console.error("Unexpected error in callback route:", err);
      // If error is an object with a message property, include it in the redirect
      const errorMessage = err instanceof Error ? err.message : "unexpected_error";
      return NextResponse.redirect(`${requestUrl.origin}/auth/login?error=unexpected_error&error_description=${encodeURIComponent(`Unexpected error: ${errorMessage}`)}`);
    }
  }

  // No code provided, redirect to login
  console.log("No code provided, redirecting to login");
  return NextResponse.redirect(`${requestUrl.origin}/auth/login?error=no_auth_code&error_description=No+authorization+code+received`);
}