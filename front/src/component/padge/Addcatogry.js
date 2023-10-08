import Slidebar from "../dashboard/slidebar"
import Navbar from "../dashboard/navbar"
import Dashbord from "../dashboard/dashbord"
import { useEffect, useState } from "react"
import { Axios } from "../Axios"
import { Tokenuser, cat } from "../../Api/api"
import Loading from "../Loading"
import { Form } from "react-router-dom"
export default function Dashboard() {

const [title,settitle]=useState("")
const [image,setimage]=useState("")

const [loading,setloading]=useState(false)


async function Addcat(e){
e.preventDefault()
const form = new FormData()
form.append("title",title)
form.append("image",image)
    try{
     
        const x= await Axios.post(`${cat}/add`,form)
        setloading(true)
        window.location.pathname="dashbord/categories"
  
    


    }catch(err){
  console.log(err)
    }
}




return (<>
    
      
  <div className="container border  p-0 ms-0 mt-4 rounded-4 border-success">
  <form className="text-success" onSubmit={Addcat}>{loading&&<Loading/>} 
    <div className="col  form-floating w-50 m-5 ">
    <input type="name"  className="form-control text-success" placeholder="1" value={title} onChange={(e)=>settitle(e.target.value)} required/>
     <label> Title</label>
   </div>
  
  
  <div className="col form-floating w-50 m-5">
    <input type="file" className="form-control text-success" placeholder="1"  onChange={(e)=>setimage(e.target.files.item(0))} required/>
    
  <label>Image</label> 
  </div>

  <div className="col m-5 "><button type="submit" disabled={title.length>0?false:true} className="btn border border-success border-1  colorgreen fs-4 fw-bold">add</button></div>
         
  </form>
   </div> 

   </>)
}