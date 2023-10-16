import { useEffect, useState } from "react";
import { Axios } from "../Axios";
import { PRO, pro } from "../../Api/api";
import Showtabel from "./Generaltabel";
export default function Categories(){
const [proo,setproo]=useState([])

useEffect(()=>{

Axios.get(`${PRO}`)
.then((data)=>setproo(data.data))
.catch((err)=>console.log(err))

},[])

const header =[
  {
    key:"title",
    name:"Title"
  },

  {
    key:"description",
  name:"Description"
},
{ key:"rating",
  name:"Rating"
},
{ key:"price",
  name:"Price"
}

]

async function delet(id) {
  console.log(id)
   try {
       const up = await Axios.delete(`${pro}/${id}`)
      setproo((prev)=>prev.filter((item)=>item.id!==id))
     
   } catch (err) {
       console.log(err)
   
}
}

    return(
        <>
      <Showtabel header={header} linkto={"add"} titletable={"PRODUCTS"} add={"add product"} currentuser={true} data={proo} delet={delet} />
      
        
        </>
    )
}