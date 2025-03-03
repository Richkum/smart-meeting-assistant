import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

/**
 * The callback route is used to handle the redirect back to the
 * client application after the user has been authenticated
 * by the Supabase auth server.
 *
 * The route will redirect the user to the dashboard page
 * with an authorization session cookie.
 */
export async function GET(request: Request) {
  // Get the authorization code from the query string
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  // If the code is present, exchange it for a session cookie
  if (code) {
    // Create the Supabase client instance
    const supabase = createRouteHandlerClient({ cookies });
    // Exchange the authorization code for a session cookie
    await supabase.auth.exchangeCodeForSession(code);
  }

  // Redirect the user to the dashboard page
  return NextResponse.redirect(new URL("/dashboard", request.url));
}
