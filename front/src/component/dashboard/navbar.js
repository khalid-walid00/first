import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "../context/context";
import { faBars, faCrown, faFeather, faUser } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { Axios } from "../Axios";
import { Loogout, Tokenuser } from "../../Api/api";
import Cookie from "cookie-universal"
export default function Navbar(){

    const menu=useContext(Menu)
    const setopen=menu.setopen
    const [name,setname]=useState()
    const [role,setrole]=useState("")
    const cookie =Cookie()
    useEffect(()=>{
        Axios.get(`${Tokenuser}`)
        .then((data)=>(setname(data.data.name) ,setrole(data.data.role)))
    })
    return( <> <div className="row shadow-sm bg-secondary-subtle z-3 position-sticky top-0">
    <div className="col-2 align-items-center">
        <div className="d-flex"><div className="fs-4 fw-bold text-uppercase me-3">
            e-commerce</div><FontAwesomeIcon onClick={()=>setopen((prev) =>(!prev))} cursor={"pointer"} size="2xl" icon={faBars} style={{color: "#d2cc19",}} /></div>
        </div>
    <div className="col">
    <ul className="nav justify-content-around">
        <li className="navbar-item">
           
        </li>
        <li className="navbar-item">
            <a onclik className="navbar-link text-decoration-none text-dark fs-5">Home</a>
        </li>
        <li className="navbar-item">
            <a className="navbar-link text-decoration-none text-dark fs-5">About</a>
        </li>
        <li className="navbar-item">
            <a className="navbar-link text-decoration-none text-dark fs-5">Shop</a>
        </li>
        <li className="navbar-item">
            <a className="navbar-link text-decoration-none text-dark fs-5">Content</a>
        </li>
        <li className="navbar-item">
            <a className="navbar-link text-decoration-none text-dark fs-5 ">
               <div className="btn-group dropdown">
              
                <button className="btn btn-light dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown"></button>
                <button className="btn btn-primary rounded-end-2">{name} {role === "2001"? <FontAwesomeIcon beat icon={faUser} style={{color: "#b7c313",}} />: role ==="1995"?<FontAwesomeIcon icon={faCrown} beat style={{color: "#c2bd1e",}} /> : role === ""? "": <FontAwesomeIcon beat icon={faFeather} style={{color: "#b1d115",}} />}</button>
                
                <ul className="dropdown-menu">
                    <li className="dropdown-item">Logout</li>
                </ul>
                
                 </div>
                
            </a>
        </li>
    </ul>
</div>
</div></>)
}