export async function POST(request){
    //const res = await request.json();
    //return Response.json(res);
    const formData = await request.formData();
    const data = {
        title: formData.get("title"),
        completed: formData.get("completed"),
        file: formData.get("file")
    }

    //console.log(formData.get("file"));
    //return Response.json(data);
    return new Response("Hello, next.js",{
        status: 200,
        headers: {
            "SecretKey": "My secret key: guess"
        }
    })
}