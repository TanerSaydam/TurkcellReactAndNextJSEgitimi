export const revalidate = 0;

export async function getTodos(){    
    const todos = await fetch("http://localhost:3000/api").then(res=> res.json());
    return todos;
}

export default async function Todos(){
    const todos = await getTodos();

    return(
        <ul>
            {todos.map((val,i)=> <li key={i}>{val.title}</li>)}
        </ul>
    )//10:27
}