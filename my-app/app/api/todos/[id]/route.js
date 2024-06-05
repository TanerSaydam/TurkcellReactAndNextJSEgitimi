export async function GET(request, {params}){
    const id = params.id;

    return Response.json({message: "Todo get request id: " + id})
}