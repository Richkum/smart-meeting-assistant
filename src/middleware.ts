import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * The middleware function that is executed for every incoming request.
 *
 * The middleware function can either return a response directly, or return
 * nothing to continue with the execution of the Next.js page.
 *
 * The middleware function can also throw an error, which will be caught by
 * Next.js and converted to a 500 status code error.
 *
 * The middleware function can also call `next()` to continue with the
 * execution of the Next.js page.
 *
 * @param req - The NextRequest object from the incoming request.
 * @returns The response from the middleware function.
 */
export async function middleware(req: NextRequest) {
  try {
    // Get the response object from Next.js
    const res = NextResponse.next();

    // Create the Supabase client instance
    const supabase = createMiddlewareClient({ req, res });

    // Get the session from the Supabase client instance
    const sessionResponse = await supabase.auth.getSession();
    const session = sessionResponse?.data?.session;

    // Protect routes that require authentication
    if (!session && req.nextUrl.pathname.startsWith("/dashboard")) {
      // Create a new URL object with the same properties as the
      // current URL object, but with a different pathname
      const redirectUrl = req.nextUrl.clone();
      redirectUrl.pathname = "/login";

      // Redirect the user to the login page
      return NextResponse.redirect(redirectUrl);
    }

    // Return the response from the middleware function
    return res;
  } catch (error) {
    console.error("Middleware error:", error);
    // In case of an error, redirect to an error page or handle it accordingly
    const errorRedirectUrl = req.nextUrl.clone();
    errorRedirectUrl.pathname = "/error";
    return NextResponse.redirect(errorRedirectUrl);
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|public).*)",
  ],
};
