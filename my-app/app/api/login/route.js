import { cookies } from "next/headers";

export async function GET(){
    const cookieStore = cookies();
    cookieStore.set("token", "My token...");

    return Response.json({message: "Login is successfull"});
}