import { Link } from "react-router-dom";

export default function Error403({allow}){
    return(

        
        <div className="w-100 h-100 text-center">  
        <h1 className="text-danger  fw-bold m-5">ERROR 403</h1>
        <h4 className="text-info">not allowed to acees this padge</h4>
        {console.log(allow)}
        {allow.includes("1991")?<Link to="writer" className="btn btn-primary m-4">Go to writer padge</Link>:<Link to="home" className="btn btn-primary m-4">Go to home padge</Link>}
   
        </div>
    )
}