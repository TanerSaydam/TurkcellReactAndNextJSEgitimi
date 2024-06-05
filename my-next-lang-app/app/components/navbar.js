'use client'

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar(props) {
    const [lang, setLang] = useState("tr")       

    useEffect(()=> {
        if(localStorage.getItem("lang")){
            setLang(localStorage.getItem("lang"))
        }
    },[])

    function getSelectedLang(e){
        const lang =  e.target.value 
        localStorage.setItem("lang", lang)
        window.location.href = "/" + lang
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        eCommerce
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link href="/" className="nav-link active" aria-current="page">
                                    {props.lang.navbar.home}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/products" className="nav-link">
                                {props.lang.navbar.products}
                                </Link>
                            </li>                         
                        </ul>
                        <select style={{width: '30%'}} onChange={getSelectedLang} className="form-control" value={lang}>
                            <option value="tr">{props.lang.navbar.turkish}</option>
                            <option value="en">{props.lang.navbar.english}</option>
                        </select>
                    </div>
                </div>
            </nav>

        </>
    )
}