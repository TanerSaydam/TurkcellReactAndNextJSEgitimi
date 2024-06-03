import { useEffect } from "react";

function TodoList({data, deleteAction}){
    const redStyle = {color: "red"};   

    return (
        <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Completed</th>
                <th>Operations</th>
            </tr>
        </thead>
        <tbody>
            {data.map((val,i) => {                        
                const num = "1";
                //ternary operatörü // single if line
                return(
                    <tr key={i}>
                        <td>{i + +num}</td>
                        <td>{val.title}</td>
                        <td>{val.completed 
                                ? <span style={{color: "green"}}>Completed</span>  
                                : <span style={redStyle}>Not Completed</span>}</td>
                        <td>
                            <button>Update</button>
                            <button onClick={() => deleteAction(val.id)}>Delete</button>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    </table>
    )
}

export default TodoList;