import Slidebar from "../dashboard/slidebar"
import Navbar from "../dashboard/navbar"
import Dashbord from "../dashboard/dashbord"
import { useEffect, useState } from "react"
import { Axios } from "../Axios"
import { Tokenuser } from "../../Api/api"
import Loading from "../Loading"
export default function Dashboard() {

const [name,setname]=useState("")
const [email,setemail]=useState("")
const [pass,setpass]=useState("")
const [role,setrole]=useState("")
const [loading,setloading]=useState(false)
const [disabled,setdisabled]=useState(true)

async function Adduser(e){
e.preventDefault()
    try{
     
        const x= await Axios.post(`${Tokenuser}/add`,{
            name:name,
            email:email,
            password:pass,
            role:role
        })
        setloading(true)
        window.location.pathname="dashbord/users"
  
    


    }catch(err){

    }
}




return (<>
    
      
  <div className="container border  p-0 ms-0 mt-4 rounded-4 border-success">
  <form className="text-success" onSubmit={Adduser}>{loading&&<Loading/>} 
    <div className="col  form-floating w-50 m-5 ">
    <input type="name"  className="form-control text-success" placeholder="1" value={name} onChange={(e)=>setname(e.target.value)} required/>
     <label> name</label>
   </div>
  
  <div className="col form-floating w-50 m-5">
    <input type="email" className="form-control text-success" placeholder="1" value={email} onChange={(e)=>setemail(e.target.value)} required/>
    
  <label> email</label> 
  </div>
  
  <div className="col form-floating w-50 m-5">
    <input type="password" className="form-control text-success" placeholder="1" value={pass} onChange={(e)=>setpass(e.target.value)} required/>
    
  <label>password</label> 
  </div>
  <div className="col w-50 m-5">
  <select className="form-select text-success" required value={role} onChange={(e)=>setrole(e.target.value)} >
  <option value="" selected>select role</option>
    <option value="1995">admin</option>
    <option value="1991">writer</option>
    <option value="2001">user</option>
    <option value="1999">Categories</option>
  </select>
  </div>
  <div className="col m-5 "><button type="submit" disabled={name.length>0&&pass.length>0&&email.length>0&&role!==""?false:true} className="btn border border-success border-1  colorgreen fs-4 fw-bold">add</button></div>
         
  </form>
   </div> 

   </>)
}