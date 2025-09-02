import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  if (
    request.nextUrl.pathname.includes("/broken") ||
    request.nextUrl.pathname.includes("/working") ||
    request.nextUrl.pathname.includes("/mega-broken")
  ) {
    return NextResponse.rewrite(
      new URL(
        "rewrite" + request.nextUrl.pathname + request.nextUrl.search,
        request.url
      )
    );
  }
  return NextResponse.next();
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
