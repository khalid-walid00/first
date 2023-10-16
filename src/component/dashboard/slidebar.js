import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Menu } from "../context/context";
import { faBasketShopping, faCartPlus, faCartShopping, faPenToSquare, faPlus, faUserPlus, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Axios } from "../Axios";
import { Tokenuser } from "../../Api/api";

export default function Navbar(){

    const menu=useContext(Menu)
    const isopen =menu.open
    const setopen=menu.setopen
     const [role,setrole]=useState("")
    useEffect(()=>{
         const x=Axios.get(`${Tokenuser}`)
         .then((x)=>setrole(x.data.role))
       
    },[])
 console.log(role)



    return( <> <div className="row " >
    <div className="col-2  bg-secondary-subtle" style={{width:'max-content' ,height:"95vh",position:"sticky",top:"30px"}}>
        <ul className="nav justify-content-around" id="menu" style={{ display: "block" }}>

            {role ==="1995"?<> <li className="navbar-item m-2 mt-4  ">
                <NavLink to="users"  className="navbar-link rounded-2 align-items-center text-decoration-none d-flex fs-5 " > <FontAwesomeIcon className="me-2" icon={faUsers} />
                 <div style={{display:isopen?"block":"none"}} >users</div></NavLink>
            </li>
            <li className="navbar-item m-2 mt-4  ">
                <NavLink to="adduser" className="navbar-link rounded-2 align-items-center text-decoration-none d-flex fs-5 " ><FontAwesomeIcon icon={faUserPlus} />
                 <div style={{display:isopen?"block":"none"}} >add user</div></NavLink>
            </li><li className="navbar-item m-2 mt-4  ">
                <NavLink to="writer" className="navbar-link rounded-2 align-items-center text-decoration-none d-flex fs-5 " > <FontAwesomeIcon icon={faPenToSquare}/>
                 <div style={{display:isopen?"block":"none"}} >writer</div></NavLink>
            </li>
            <li className="navbar-item m-2 mt-4  ">
                <NavLink to="categories" className="navbar-link rounded-2 align-items-center text-decoration-none d-flex fs-5 " > <FontAwesomeIcon icon={faCartShopping}/>
                 <div style={{display:isopen?"block":"none"}} >Categories</div></NavLink>
            </li>
            <li className="navbar-item m-2 mt-4  ">
                <NavLink to="categories/add" className="navbar-link rounded-2 align-items-center text-decoration-none d-flex fs-5 " > <FontAwesomeIcon icon={faCartPlus}  />
                 <div style={{display:isopen?"block":"none"}} >add Categories</div></NavLink>
            </li>
             <li className="navbar-item m-2 mt-4  ">
                <NavLink to="products" className="navbar-link rounded-2 align-items-center text-decoration-none d-flex fs-5 " > <FontAwesomeIcon icon={faBasketShopping} />
                 <div style={{display:isopen?"block":"none"}} > Products</div></NavLink>
            </li>
            <li className="navbar-item m-2 mt-4  ">
                <NavLink to="addproduct" className="navbar-link rounded-2 align-items-center text-decoration-none d-flex fs-5 " > <FontAwesomeIcon icon={faPlus} />
                 <div style={{display:isopen?"block":"none"}} >add Product</div></NavLink>
            </li>
          </> : role ==="1991" || role ==="1995"?<> <li className="navbar-item m-2 mt-4  ">
                <NavLink to="writer" className="navbar-link rounded-2 align-items-center text-decoration-none d-flex fs-5 " > <FontAwesomeIcon className="me-2" icon={faUsers} />
                 <div style={{display:isopen?"block":"none"}} >writer</div></NavLink>
            </li>
          </> : role ==="1999"||role==="1995"?<> <li className="navbar-item m-2 mt-4  ">
                <NavLink to="categories" className="navbar-link rounded-2 align-items-center text-decoration-none d-flex fs-5 " > <FontAwesomeIcon className="me-2" icon={faUsers} />
                 <div style={{display:isopen?"block":"none"}} >Categories</div></NavLink>
            </li>
            <li className="navbar-item m-2 mt-4  ">
                <NavLink to="categories/add" className="navbar-link rounded-2 align-items-center text-decoration-none d-flex fs-5 " > <FontAwesomeIcon className="me-2" icon={faUsers} />
                 <div style={{display:isopen?"block":"none"}} >add Categories</div></NavLink>
            </li>
            <li className="navbar-item m-2 mt-4  ">
                <NavLink to="categories/add" className="navbar-link rounded-2 align-items-center text-decoration-none d-flex fs-5 " > <FontAwesomeIcon className="me-2" icon={faUsers} />
                 <div style={{display:isopen?"block":"none"}} >add Product</div></NavLink>
            </li>
            <li className="navbar-item m-2 mt-4  ">
                <NavLink to="categories/add" className="navbar-link rounded-2 align-items-center text-decoration-none d-flex fs-5 " > <FontAwesomeIcon className="me-2" icon={faUsers} />
                 <div style={{display:isopen?"block":"none"}} >add Product</div></NavLink>
            </li>
          </> : console.log("khalid")}
            
           
        </ul></div>
        <div className="col  p-0" > <Outlet/></div>
</div></>)
}