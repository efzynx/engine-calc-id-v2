import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const { searchParams } = new URL(request.url);
  const error = searchParams.get("error");
  const error_description = searchParams.get("error_description");

  if (error) {
    console.error("OAuth error:", error, error_description);
    // Handle OAuth errors appropriately
    return NextResponse.redirect(`${requestUrl.origin}/auth/error?error=${error}&error_description=${error_description}`);
  }

  const supabase = await createClient();

  // Get the OAuth tokens from the provider
  const { error: sessionError } = await supabase.auth.getSession();
  
  if (sessionError) {
    console.error("Error getting session:", sessionError);
    return NextResponse.redirect(`${requestUrl.origin}/auth/error?message=Failed to get session`);
  }

  // Redirect to calculators page after successful sign in
  return NextResponse.redirect(`${requestUrl.origin}/calculators`);
}