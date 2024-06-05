import { cookies } from "next/headers";
import { NextResponse } from "next/server"

export function middleware(request){
    if(request.nextUrl.pathname === ""){

    }
    const cookieStore = cookies();      
    //console.log(cookieStore.get("token"));  
    //if(!cookieStore.get("token")){
        return NextResponse.redirect(new URL("/login", request.url));
        //return NextResponse.rewrite(new URL("/login", request.url));
    //}    
}

export const config = {
    //matcher: ["/admin/todos/:path*", "/admin/users"]
    //matcher: '/((?!api|_next/static'
    matcher: "/admin/:path*"
}