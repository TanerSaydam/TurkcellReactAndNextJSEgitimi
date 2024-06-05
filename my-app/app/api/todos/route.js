export async function GET(request){
    console.log(request.nextUrl);
    const searchParams = request.nextUrl.searchParams;
    const name = searchParams.get("name");

    
    return Response.json({message: `name is ${name}`})
}