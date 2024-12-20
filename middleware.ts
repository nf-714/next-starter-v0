import NextAuth from "next-auth";
import { authConfig } from "./auth/auth.config";
import { LOGIN, PROTECTED_ROUTES, ROOT } from "./utils/route";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;

  const isAuthenticated = !!req.auth;

  const isProtectedRoute = PROTECTED_ROUTES.find((route) =>
    nextUrl.pathname.startsWith(route)
  );

  if (!isAuthenticated && isProtectedRoute) {
    return Response.redirect(new URL(LOGIN, nextUrl));
  }
  if (isAuthenticated && nextUrl.pathname == LOGIN) {
    return Response.redirect(new URL(ROOT, nextUrl));
  }
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
};
