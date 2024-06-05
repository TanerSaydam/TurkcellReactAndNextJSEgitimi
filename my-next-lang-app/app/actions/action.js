export async function myaction(userId,formData){
    try {
        return formData;
    // if(formData.get("email").length < 3){
    //     return {
    //         message: "Please enter a valid email"
    //     }
    // }
    } catch (error) {
        return {
            message: error.message
        }
    }
    
}

'use client'

import { useEffect } from 'react';
import {useFormState} from 'react-dom';

export default function CreatePage(){
    // const userId = 10;
    //const newAction = myaction.bind(null, userId)
    //const [state, formAction] = useFormState(data, initialState)

    // async function myaction(formData){
    //     'use action'
    // }

    useEffect(()=> {
        const action = async() =>{
            const response = await myaction();
            //istediğim herhangi bir işlem
        }

        action();
    },[])

    return(
        <>
        <input onChange={async () => {
            const response = await myaction();
            //istediğim herhangi bir işlem
        }}/>
        <button onClick={async () => {
            const response = await myaction();
            //istediğim herhangi bir işlem
        }}></button>
        </>
        // <form action={newAction}>
        //     <input name="email"/>
        //     <input value={userId} hidden/>
        //     <p>{state?.message}</p>
        //     <button type="submit">Save</button>
        // </form>
    )
}