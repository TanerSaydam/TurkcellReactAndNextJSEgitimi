import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function middleware(request){
    const {pathname} = request.nextUrl;
    
    if(pathname.includes("/login") || pathname.includes("/api")){
        return;   
    }

    const cookieStore = cookies();
    const token = cookieStore.get("token");

    if(token === undefined){
        return NextResponse.redirect(new URL("/login",request.url));
    }


    const decode = jwtDecode(token.value);
    console.log(decode);
}

export const config = {
    matcher: "/"
}