import { cookies } from "next/headers";

export function GET(request){
    const cookieStore = cookies();
    cookieStore.delete("token");

    return Response.json({message:"Cookie is deleted"});
}
