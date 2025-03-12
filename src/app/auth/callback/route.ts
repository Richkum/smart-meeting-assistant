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
  try {
    // Get the authorization code from the query string
    const requestUrl = new URL(request.url);
    const code = requestUrl.searchParams.get("code");

    // Check if code is present and not null
    if (!code) {
      throw new Error("Authorization code not found in the request");
    }

    // Create the Supabase client instance
    const supabase = createRouteHandlerClient({ cookies });

    // Attempt to exchange the authorization code for a session cookie
    await supabase.auth.exchangeCodeForSession(code);

    // Redirect the user to the dashboard page
    return NextResponse.redirect(new URL("/dashboard", request.url));
  } catch (error) {
    console.error("Error handling the callback route:", error);
    // Handle errors such as logging and redirecting to an error page if necessary
    return NextResponse.redirect(new URL("/error", request.url));
  }
}
