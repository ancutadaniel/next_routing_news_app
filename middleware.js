import { NextResponse } from "next/server";

export default function middleware(req, res, next) {
  // console.log(req, "req");

  return NextResponse.next();
}

export const config = {
  matcher: "/",
  name: "middleware",
  type: "middleware",
  version: 1,
};
