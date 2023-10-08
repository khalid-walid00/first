import { Link } from "react-router-dom";
import "../padgecss/padge.css"
export default function Error403(){
    return(

        
        <div className="w-100 h-100 text-center"> 
         <img src="https://i.imgur.com/cz6Ew4u.jpeg" width={"30%"}/>
        <h1 className="text-danger  fw-bold m-5">ERROR 404</h1>
        <h4 className="text-info">not allowed to acees this padge</h4>
        </div>
    )
}