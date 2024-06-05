import { NextResponse } from "next/server";

const langs = ["/tr","/en","/es"]

export function middleware(request){
    const {pathname} = request.nextUrl;

    const pathnameHas = langs.some((lang) => pathname.startsWith(lang));
    if(!pathnameHas){
        return NextResponse.redirect(new URL("/tr/" + pathname, request.url))
    }
}

export const config = {
    matcher: "/((?!_next).*)"
}