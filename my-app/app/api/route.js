import { cookies, headers } from "next/headers";

export const revalidate = 0;

export async function GET(request){
    const cookieStore = cookies();
    const header = headers();

    const secretKey = header.get("secret-key");
    console.log(secretKey);

    const token = cookieStore.get("token");
    cookieStore.set("token", "asdasdsa");

    const response = await fetch("http://localhost:5284/api/todos/getall",{
        next: {revalidate:0}
    });
    const result = await response.json();

    //return Response.json(result)
    return new Response(JSON.stringify({message: "API is working.."}),{
        status: 200,
        headers: {
            "Content-Type":"application/json"
        }
    })
}


//GET POST PUT DELETE PATCH OPTIONS