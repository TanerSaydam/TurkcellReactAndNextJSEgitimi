export default function UILayout({children}){
    return(
        <>
        <nav>
            <ul>
                <li>Home</li>
                <li>Admin</li>
                <li>Login</li>
            </ul>
        </nav>

        {children}

        <footer>This is a footer</footer>
        </>
    )
}