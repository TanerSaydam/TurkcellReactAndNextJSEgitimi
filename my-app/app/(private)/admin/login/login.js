import { create } from "../action";

export default function Login(){
    return(
        <form action={create}>
            <label>UserName</label>
            <input placeholder="username"/>
            <button type="submit">Login</button>
        </form>
    )
}