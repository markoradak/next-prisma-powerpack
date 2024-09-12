import { auth } from '@/auth';
import { LOGIN_ROUTE, PUBLIC_ROUTES, ROOT } from '@/routes';

export default auth((req) => {
 const { nextUrl } = req;

 const isAuthenticated = !!req.auth;
 const isLoginRoute = nextUrl.pathname === LOGIN_ROUTE;
 const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname);

 if (isLoginRoute && isAuthenticated)
  return Response.redirect(new URL(ROOT, nextUrl));

 if (!isAuthenticated && !isPublicRoute)
  return Response.redirect(new URL(LOGIN_ROUTE, nextUrl));
});

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|jpg|jpeg|png|gif|webp|ico|bmp|tiff|mp4|mp3|wav|pdf|css|woff|woff2|ttf|otf|eot)).*)",
  ],
}