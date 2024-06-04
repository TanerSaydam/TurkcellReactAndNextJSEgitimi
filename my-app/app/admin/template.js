'use client'

import { useEffect } from "react"

export default function AdminTemplate({children}){
    useEffect(()=> {
        console.log("Admin template is working...");
    },[]);
    return(
        <>
            <h3>Admin Template</h3>
            {children}
        </>
    )
}