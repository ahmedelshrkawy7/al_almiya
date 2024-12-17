import { NextResponse, type NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("auth_token");
  console.log("🚀 ~ middleware ~ token:", token);

  if (pathname.includes("/website") && !token) {
    // return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matchers: "/website",
};
