import Coookie from "cookie-universal"
import { Navigate, Outlet } from "react-router-dom"
export default function Requirback({}) {

   const cookie = Coookie()
   const token=cookie.get("e-commerce")

   return(

   token ?window.history.back() :<Outlet/>
   
   
   
   
   
   )
 
 
 
 
 }