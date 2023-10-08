import { useEffect, useRef, useState } from "react"
import axios from "axios"
import { Register, mainapi } from "../../Api/api";
import '../padgecss/padge.css';
import { useNavigate } from "react-router-dom";
import Cookie from"cookie-universal"
import Googleimg from "../img/google.png"
export default function Sign(){
   
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [pass,setpass]=useState("");
    const [error,seterror]=useState("");
    const [load,setload]=useState(false)
    const alert= document.getElementById("alert")
    const spinner= document.getElementById("spinner")
    const nav=useNavigate()
    const cookie=Cookie()
    const ref=useRef()
     
    useEffect(()=>{
        ref.current.focus()
    },[])



async function formif(e){
    e.preventDefault()
    try{
   let x=await axios.post(`${mainapi}${Register}`,{
    name: name,
    email: email,
    password: pass,

   })
   setload(true)
   let token=x.data.token
   cookie.set("e-commerce",token)
   if(x.status===200){
     console.log("success")
      window.localStorage.setItem("email",email);
      alert.classList.add("hidden")
     window.location.pathname="./login"
   }
  
    }catch(err){
      setload(false)
       if(err.response.status===422)
       { 
        seterror("email already sign")
        alert.classList.remove("hidden")
       }

    }
}





    return(
     <>
        <div className="container text-center " id="reg">

        <div className="row">
            
            <div className="col">
        <div className="col m-5 fs-3 fw-bold colorgreen">SIGN IN</div>
        <form onSubmit={formif} >
            <div className="col m-4 form-floating">
                <input type="text" ref={ref} className="form-control" placeholder="1" value={name} onChange={(e)=>setname(e.target.value)} min={5}  required/>
                <label>user name</label>

            </div>
            <div className="col m-4 form-floating">
                <input type="email" className="form-control" placeholder="1" value={email} onChange={(e)=>setemail(e.target.value)} required/>
                <label>email</label>

            </div>
            <div className="col m-4 form-floating">
                <input type="password" className="form-control" placeholder="1" value={pass} onChange={(e)=>setpass(e.target.value)} minLength={9} required/>
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
            <div className="col m-5" style={{height:"30px"}}>
                <div id="alert" className="alert alert-danger alert-dismissible fade show blockquote-footer hidden">{error}<button className="btn-close" data-bs-dismiss="alert"></button>
                </div>
                </div>
             
        </form>
        </div> 
        
        
          <div className="col">
          </div>
         </div>
    
        </div>
    {load && <><div id="spinnder" className="spinner-border border-5 position-absolute" style={{ top:"50%",right:"50%",width:"3rem",height:"3rem"}}>
                </div><div className="w-100 h-100 position-fixed z-3  top-0 bg-dark bg-opacity-25"></div></>} 
  
  </>
  )
}