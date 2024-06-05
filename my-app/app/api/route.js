export const revalidate = 0;

export async function GET(request){
    
    const response = await fetch("http://localhost:5284/api/todos/getall",{
        next: {revalidate:0}
    });
    const result = await response.json();

    return Response.json(result)
    // return new Response("API is working...",{
    //     status: 200,
    //     headers: {
    //         "Content-Type":"application/json"
    //     }
    // })
}


//GET POST PUT DELETE PATCH OPTIONS