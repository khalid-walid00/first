import { useEffect, useRef, useState } from "react"
import axios from "axios"
import { Login, mainapi } from "../../Api/api";
import '../padgecss/padge.css';
import { useNavigate } from "react-router-dom";
import Googleimg from "../img/google.png"
import Cookie from "cookie-universal"
import Loading from "../Loading";
import Error404 from "./Error404";
export default function Sign(){
   
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [pass,setpass]=useState("");
    const [error,seterror]=useState(false);
    const [load,setload]=useState(false)
   const cookie= Cookie()
    const inputname= document.getElementById("email")
    const inputpassword= document.getElementById("password")
    const nav=useNavigate()


   const ref= useRef("")
   useEffect(()=>{
    ref.current.focus()
   },[])
 

async function formif(e){
    e.preventDefault()
    try{
   let x=await axios.post(`${mainapi}${Login}`,{
    name: name,
    email: email,
    password: pass,

   })
   setload(true)
   let token= x.data.token
   const role=x.data.user.role
   const go =role ==="1995"?"dashbord/users":role==="1991"? "dashbord/writer" : role==="2001"? "home":<Error404/>
   console.log(token)
   cookie.set("e-commerce",token)
   inputname.classList.add("is-valid")
   inputpassword.classList.add("is-valid")
   inputname.classList.remove("is-invalid")
   inputpassword.classList.remove("is-invalid")
   if(x.status===200){
 seterror(false)
     document.location.pathname=`${go}`

   }
  
    }catch(err){
      setload(false)
       if(err.response.status===401)
       { 
        seterror(true)
       inputname.classList.add("is-invalid")
       inputpassword.classList.add("is-invalid")
 
       }

    }
}





    return(
     <>
        <div className="container text-center " id="reg">

        <div className="row">
            
            <div className="col">
        <div className="col m-5 fs-3 fw-bold colorgreen">LOGIN</div>
        <form onSubmit={formif} >
        
            <div className="col m-4 form-floating">
                <input type="email" id="email" ref={ref} className="form-control" placeholder="1" value={email} onChange={(e)=>setemail(e.target.value)} required/>
                <label>email</label>

            </div>
            <div className="col m-4 form-floating">
                <input type="password" id="password" className="form-control" placeholder="1" value={pass} onChange={(e)=>setpass(e.target.value)}  required/>
                <label>passowrd</label>

            </div>
          
            <div className="col m-5 "><button className="btn border border-success border-1  colorgreen fs-4 fw-bold">Sign</button></div>
            <div className="col m-5 ">
                  <div className="d-flex google-btn bg-success p-1 rounded-1 w-50">
                <img src={Googleimg} className="bg-white rounded-1"></img>
                <a href={`http://127.0.0.1:8000/login-google`} className="text-decoration-none">
                    <div className="text-white ms-2 fw-bold">login with google</div>
                </a>
            </div>
            
            </div>
        
            <div className="col " style={{height:"30px"}}>
             { error &&<div id="alert2" className="alert alert-danger alert-dismissible fade show blockquote-footer ">
                    wrong in email or password<button className="btn-close" data-bs-dismiss="alert"></button>
                </div>} 
                </div>
                
             
        </form>
        </div> 
        
        
          <div className="col">
          </div>
         </div>
    
        </div>
    {load &&<Loading/>} 
  
  </>
  )
}