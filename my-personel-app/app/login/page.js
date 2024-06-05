'use client'

import axios from "axios";
import { redirect } from "next/navigation";
import {useFormState} from 'react-dom';

const initialState = {
    message: ''
}

export default function Login(){
    const [state, formAction] = useFormState(action, initialState)

    async function action(prevState, formData){
        'use action'
        const userName = formData.get("userName");
        const response = await axios.post("http://localhost:3000/api/login", {userName: userName});

        if(response.data === "Login is successful"){
            redirect("/");
        }

        return {
            message: "User name not found!"
        }
    }

    return(
        <>
         <h1>Login Page</h1>   
         <p>Result: {state?.message}</p>
         <form action={formAction}>
            <div>
                <label>UserName</label>
                <input name="userName"/>
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
         </form>
        </>
    )
}