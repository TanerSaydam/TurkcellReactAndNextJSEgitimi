import { useEffect, useState } from "react";

function Todo() {
    const [todos, setTodos] = useState([]);
    const [work, setWork] = useState("") //hooks

    function getAllTodoList(){
        fetch("https://localhost:7067/api/Todos/GetAll")
        .then(res => res.json())
        .then(data => setTodos(data));
    }

    useEffect(() => {        
        getAllTodoList();
    },[])

    function setWorkFunc(e){
        setWork(e.target.value);
    } 

    function save(){
        setTodos((prev) => [...prev,work]);
        setWork("");
    }
    
    const redStyle = {color: "red"};
    return (
        <>
            <h1>Todo component</h1>
            <input onChange={setWorkFunc} value={work}/>
            <button onClick={save}>Save</button>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User Id</th>
                        <th>Title</th>
                        <th>Completed</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((val,i) => {                        
                        const num = "1";
                        //ternary operatörü // single if line
                        return(
                            <tr>
                                <td>{i + +num}</td>
                                <td>{val.userId}</td>
                                <td>{val.title}</td>
                                <td>{val.completed 
                                        ? <span style={{color: "green"}}>Completed</span>  
                                        : <span style={redStyle}>Not Completed</span>}</td>
                                <td>
                                    <button>Update</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Todo;