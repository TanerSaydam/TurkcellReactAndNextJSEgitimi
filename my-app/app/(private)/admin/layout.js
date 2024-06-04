'use client'

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import classes from './admin.module.css'

import { useEffect } from "react"

export default function AdminLayout({children}){
    const router = useRouter();
    const pathName = usePathname();

    function gotoLogin(){
        router.push("/admin/login")        
    }

    useEffect(()=> {
       // console.log("Admin layout is working...");
        
    },[]);

    return(
        <>
        <nav>
            <h3>Admin Layout Page</h3>
            <Link className={pathName === "/admin" ? classes.active : ''} href="/admin/">Admin Page</Link> || 
            <Link className={pathName === "/admin/users" ? classes.active : ''} href="/admin/users">Users Page</Link> ||
            <Link href="/admin/todos">Todos Page</Link>
            
            <button onClick={gotoLogin}>Sign Out</button>
        </nav>

        {children}
        </>
    )
}