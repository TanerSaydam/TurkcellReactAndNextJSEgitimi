import { cookies } from "next/headers";

export async function POST(request){
    const body = await request.json();
    const cookieStore = cookies();

    if(body.userName === "taner"){
        cookieStore.set("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
        return Response.json("Login is successful")
    }

    return new Response("User name is wrong!",{
        status: 200
    });
}