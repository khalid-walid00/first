import axios from "axios"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { auth, mainapi } from "../../Api/api"

export default function (){
   const location=useLocation()
   useEffect(()=>{

async function Callback(){
   try{
    const x=await axios.get(`${mainapi}${auth}${location.search}`);
    console.log(x);
}catch(err){console.log(err);}



}




Callback()
   },[])




    return(
        <h1>kkkkkkkkkkkkkkkkkkk</h1>
    )
}