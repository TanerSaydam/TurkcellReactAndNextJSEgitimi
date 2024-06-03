import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Layout(){
    const navigate = useNavigate()

    function checkAuthentication(){
        const token = localStorage.getItem("token");

        if(!token) navigate("/login");
    }

    useEffect(()=> {
        checkAuthentication();
    },[]);

    return(
        <>
        <nav>
            <ul>
                <li><Link to="/">Ana Sayfa</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>

        <Outlet/>
        </>
    )
}

export default Layout;