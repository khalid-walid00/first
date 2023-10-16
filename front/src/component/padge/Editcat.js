import { useEffect, useState } from "react"
import { Axios } from "../Axios"
import { Tokenuser, cat } from "../../Api/api"
import Loading from "../Loading"
import { useNavigate } from "react-router-dom"

import Photo from "../img/picture.png"
export default function Edituser(){
const [title,settitle]=useState("")
const [image,setimage]=useState("")
const [loading,setloading]=useState(false)
const [disabled,setdisabled]=useState(true)

const id= Number( window.location.pathname.replace(`/dashbord/categories/`, ""))
const nav =useNavigate()

useEffect(()=>{

Axios.get(`${cat}/${id}`)
.then((data)=>{settitle(data.data.title);
    setimage(data.data.image);
setdisabled(false)
})
},[0])

async function Edit(e){
    e.preventDefault()
    const form = new FormData()
     form.append("title",title)
     form.append("image",image)
    try{
        const res= await Axios.post(`${cat}/edit/${id}`,form)
       
     console.log(res)
        setloading(true)
      window.location.pathname="/dashbord/categories"
    }catch(err){
        setloading(false)
console.log(err)
    }
}


    return(<>
   
  <div className="container border  p-0 ms-0 mt-4 rounded-4 border-success">{loading && <Loading/>}
  <form className="text-success" onSubmit={Edit}> 
    <div className="col  form-floating w-50 m-5 ">
    <input type="name"  className="form-control text-success" placeholder="1" value={title} onChange={(e)=>settitle(e.target.value)} required/>
     <label>new title</label>
   </div>
  
  <div className="col d-flex form-floating w-50 m-5">
    <input type="file" className="form-control text-success" placeholder="1"   onChange={(e)=>setimage(e.target.files.item(0))}required/>
    
  <label>new image</label>
   { image !==""?<img src={image} className="ms-5"  width={"70px"}/>: <img srcSet={Photo} className="ms-5"  width={"70px"}/> } 
  </div>
 
  <div className="col m-5 "><button type="submit" disabled={disabled} className="btn border border-success border-1  colorgreen fs-4 fw-bold">Sign</button></div>
         
  </form>
   </div> </>)
}