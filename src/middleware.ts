import { type NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const token = request.cookies.get("token")?.value;

    if (!token) {
        // If no token, redirect to log in
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {
    // Exclude login route from this middleware to prevent redirection loop
    matcher: [
        "/testside/:path*",
    ],
};
