import { useState } from "react";

function Todo() {
    const [todos, setTodos] = useState([]);
    const [work, setWork] = useState("") //hooks

    function setWorkFunc(e){
        setWork(e.target.value);
    } //13:15 görüşelim

    function save(){
        setTodos((prev) => [...prev,work]);
        setWork("");
    }

    return (
        <>
            <h1>Todo component</h1>
            <input onChange={setWorkFunc} value={work}/>
            <button onClick={save}>Save</button>
            <ul>
                {todos.map((val, i) =>
                    <li key={i}>{val}</li>)}
            </ul>
        </>
    )
}

export default Todo;