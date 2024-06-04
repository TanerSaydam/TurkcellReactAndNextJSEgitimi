'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react";

export default function NotFound(){
    const router = useRouter();

    // useEffect(()=> {
    //     router.push("/")
    // },[])

    return(
        <>
        <h1>Page not found</h1>
        <button onClick={()=> router.push("/")}>Return home page</button>
        </>
    )
}