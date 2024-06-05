import { Suspense } from "react";
import Todos from "./todos";
import Loading from "@/app/loading";
import CreateTodo from "./create";

export default function TodoPage(){    
    
    

    return(
        <>
        <CreateTodo/>
        <Suspense fallback={<Loading/>}>
            <Todos/>
        </Suspense>
        </>
    )
}

