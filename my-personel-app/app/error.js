'use client'

export default function Error({error, reset}){
    return(
        <>
        <h1>Something went wrong!</h1>
        <p style={{color:"red"}}>Error: {error.message}</p>
        <button onClick={()=> reset()}>Return same page</button>
        </>
    )
}