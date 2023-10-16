
import axios from "axios"
import Cookie from "cookie-universal"
import { Loogout, mainapi } from "../../Api/api"
const cookie=Cookie()
export default function Logout(){

const token=Cookie.get("e-commerce")
  
async function out(){
    try{
      const x=await axios.get(`${mainapi}${Loogout}`,{
        headers:{
            Authorization:"Bearer " + token
        }
      })
    }catch(err){
   console.log(err)
    }
}






    return(<button className="btn btn-success" onClick={out}>out</button>)
}