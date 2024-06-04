import { Suspense } from "react";
import Todos from "./todos";
import Loading from "@/app/loading";

export default function TodoPage(){
    return(
        <Suspense fallback={<Loading/>}>
            <Todos/>
        </Suspense>
    )
}

