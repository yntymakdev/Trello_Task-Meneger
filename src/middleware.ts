import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(); // Без параметров

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
  // Указываем публичные маршруты здесь
  publicRoutes: ["/"],
  // afterAuth(auth, req) {
  //   if (auth.user.id && auth.isPublicRoute) {
  //     let path = "/select-org";
  //     if (auth.orgId) {
  //       path = `/organization/${auth.orgId}`;
  //     }
  //     const orgSelection = new URL(path, req.url);
  //     return NextResponse.redirect(orgSelection);
  //   }
  //   if (!auth.userId && !auth.isPublicRoute) {
  //     return redirectToSignIn({ returnBackUrl: req.url });
  //   }

  //   if (auth.userId && !auth.orgId && req.nextUrl.pathname !== "/select-org") {
  //     const orgSelection = new URL();
  //   }
  // },
};
