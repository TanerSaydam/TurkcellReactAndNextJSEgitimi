export async function getTodos(){
    await new Promise(resolve => setTimeout(resolve, 3000));
    const todos = ["List1","List2"]
    return todos;
}

export default async function Todos(){
    const todos = await getTodos();
    return(
        <ul>
            {todos.map((val,i)=> <li key={i}>{val}</li>)}
        </ul>
    )
}