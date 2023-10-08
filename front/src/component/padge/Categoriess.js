import { useEffect, useState } from "react";
import { Axios } from "../Axios";
import { CAT ,cat } from "../../Api/api";
import Showtabel from "./Generaltabel";
export default function Categories(){
const [catt,setcat]=useState([])

useEffect(()=>{

Axios.get(`${CAT}`)
.then((data)=>setcat(data.data))
.catch((err)=>console.log(err))

},[])

const header =[
  {
    key:"id",
    name:"id"
  },

  {
    key:"title",
  name:"Title"
},
{ key:"image",
  name:"Image"
}

]

async function delet(id) {
  console.log(id)
   try {
       const up = await Axios.delete(`${cat}/${id}`)
      setcat((prev)=>prev.filter((item)=>item.id!==id))
     
   } catch (err) {
       console.log(err)
   
}
}

    return(
        <>
      <Showtabel header={header} linkto={"add"} titletable={"Categories"} add={"add categories"} currentuser={true} data={catt} delet={delet} />
      
        
        </>
    )
}