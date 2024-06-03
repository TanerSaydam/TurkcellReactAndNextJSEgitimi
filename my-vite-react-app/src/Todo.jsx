import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import CreateTodo from './CreateTodo';

function Todo() {
    const [todos, setTodos] = useState([]);
    const [work, setWork] = useState("") //hooks
    const [isValid, setIsValid] = useState(false);

    function getAllTodoList() {
        fetch("https://localhost:7067/api/Todos/GetAll")
            .then(res => res.json())
            .then(data => setTodos(data));
    }

    useEffect(() => {
        getAllTodoList();
    }, [])

    function setWorkFunc(e) {        
        setWork(e.target.value);
        if(e.target.value.length < 3){
            e.target.className = "form-control is-invalid"
            //const divEL = document.querySelector("input + div");
            //divEL.innerHtml = e.target.validationMessage;
            setIsValid(false);
        }else{
            e.target.className = "form-control is-valid"
            setIsValid(true);
        }
    }

    function save() {
        if(!isValid){
            alert("Validation hatası!")
            return;
        }
        const data = {
            title: work,
            completed: false
        }

        fetch("https://localhost:7067/api/Todos/Create", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => {
            getAllTodoList();
            setWork("");
        });
    }

    const deleteById = (id) => {
        const result = confirm("You want to delete this record?")
        if (result) {
            fetch(`https://localhost:7067/api/Todos/DeleteById?id=${id}`)
                .then(() => getAllTodoList());
        }
    }
    return (
        <>
            <h1>Todo component</h1>
            <CreateTodo isValid={isValid} setFunc={setWorkFunc} work={work} save={save} />
            <TodoList data={todos} deleteAction={deleteById} />
        </>
    )
}

export default Todo;