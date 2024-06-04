
export async function action(){
    await new Promise(resolve => setTimeout(resolve, 3000));
    return "";
}

export async function BlogDetail(){
    await action();
    return(
        <>
        <h1>Blog Detail Page: Id</h1>
        </>
    )
}