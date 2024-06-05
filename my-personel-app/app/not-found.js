import Link from "next/link";

export default function NotFound(){
    return(
        <>
        <h1>We cannot found the page</h1>
        <Link href="/">Return home page</Link>
        </>
    )
}