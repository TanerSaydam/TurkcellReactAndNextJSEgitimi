import Link from "next/link"

export default function BlogPage(){
    const blogs = [
        {
            id: 1,
            title: "Blog 1"
        },
        {
            id: 2,
            title: "Blog 2"
        }
    ]

    return (
        <>
        <h1>Blog Page</h1>
        <ul>
            {blogs.map((val, i)=> {
                return <li key={i}>
                    <Link href={`/blog/detail/${val.id}`}>{val.title}</Link>
                </li>
            })}
        </ul>
        </>
    )
}