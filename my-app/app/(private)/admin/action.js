'use server'

import { redirect } from "next/navigation";

export async function create(){    
    await new Promise(resolve => setTimeout(resolve, 2000));

    redirect("/");
}