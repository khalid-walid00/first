import { useEffect, useState } from "react"
import { Axios } from "../Axios"
import { Tokenuser } from "../../Api/api"
import Loading from "../Loading"
import { useNavigate } from "react-router-dom"
export default function Edituser(){
const [name,setname]=useState("")
const [email,setemail]=useState("")
const [role,setrole]=useState("")
const [loading,setloading]=useState(false)
const [disabled,setdisabled]=useState(true)
const id= Number( window.location.pathname.replace(`/dashbord/users/`, ""))
const nav =useNavigate()

useEffect(()=>{
  setloading(true)
Axios.get(`${Tokenuser}/${id}`)
.then((data)=>{setname(data.data.name);
    setemail(data.data.email);
    setloading(false)
}).then(()=>setdisabled(false))
.catch(()=>nav("dashbord/users/padge/404",{replace:true}))
},[0])

async function Edit(e){
    e.preventDefault()
    try{
        const res= await Axios.post(`${Tokenuser}/edit/${id}`,{
            name:name,
            email:email,
            role:role
        })
        setloading(true)
    
      window.location.pathname="/dashbord/users"
    }catch(err){
        setloading(false)
console.log(err)
    }
}


    return(<>
   
  <div className="container border  p-0 ms-0 mt-4 rounded-4 border-success">{loading && <Loading/>}
  <form className="text-success" onSubmit={Edit}> 
    <div className="col  form-floating w-50 m-5 ">
    <input type="name"  className="form-control text-success" placeholder="1" value={name} onChange={(e)=>setname(e.target.value)} required/>
     <label>new email</label>
   </div>
  
  <div className="col form-floating w-50 m-5">
    <input type="email" className="form-control text-success" placeholder="1"  value={email} onChange={(e)=>setemail(e.target.value)}required/>
    
  <label>new email</label> 
  </div>
  <div className="col w-50 m-5">
  <select className="form-select text-success" value={role} onChange={(e)=>setrole(e.target.value)}>
  <option value="" selected>select role</option>
    <option value="1995">admin</option>
    <option value="1991">writer</option>
    <option value="2001">user</option>
    <option value="1999">Categories</option>
  </select>
  </div>
  <div className="col m-5 "><button type="submit" disabled={disabled} className="btn border border-success border-1  colorgreen fs-4 fw-bold">Sign</button></div>
         
  </form>
   </div> </>)
}