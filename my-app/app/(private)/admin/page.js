'use client'

import { useSearchParams } from "next/navigation"

export default function AdminPage(){
    const searchParams = useSearchParams();
    
    function order(value){        
        const params= new URLSearchParams(searchParams.toString());
        params.set("sort", value)
        window.history.replaceState(null,'',`?${params.toString()}`)
    }
    return(
        <>
            <h1>Admin Page</h1>
            <button onClick={()=> order("asc")}>Order Ascending</button>
            <button onClick={()=> order("desc")}>Order Descending</button>
        </>
    )
}