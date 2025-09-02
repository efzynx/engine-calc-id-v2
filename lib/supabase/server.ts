import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * Especially important if using Fluid compute: Don't put this client in a
 * global variable. Always create a new client within each function when using
 * it.
 */
export async function createClient() {
  const cookieStore = await cookies();
  
  console.log("Creating server client with URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);

  const client = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY!,
    {
      cookies: {
        getAll() {
          const allCookies = cookieStore.getAll();
          console.log("Getting all cookies, count:", allCookies.length);
          // Log cookie names (but not values for security)
          console.log("Cookie names:", allCookies.map(c => c.name));
          return allCookies;
        },
        setAll(cookiesToSet) {
          try {
            console.log("Setting cookies, count:", cookiesToSet.length);
            // Log cookie names being set (but not values for security)
            console.log("Setting cookie names:", cookiesToSet.map(c => c.name));
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch (error) {
            console.error("Error setting cookies:", error);
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
      auth: {
        // Enable debug logging for auth operations
        debug: process.env.NODE_ENV === 'development',
      },
    },
  );
  
  return client;
}
