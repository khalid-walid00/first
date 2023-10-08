import { useEffect, useState } from "react"
import { Tokenuser, mainapi, users } from "../../Api/api"
import Cookie from "cookie-universal"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faJar, faTrash, faUserPen } from "@fortawesome/free-solid-svg-icons"
import { Link, Navigate } from "react-router-dom"
import { Axios } from "../Axios"
import Generaltabel from "../padge/Generaltabel"
import Showtabel from "../padge/Generaltabel"

const cookie = Cookie()
export default function Users() {
    const [data, setdata] = useState([])
    const [dataforon, setdataforon] = useState()
    const [dataforoneid, setdataforoneid] = useState()
    const [update, setupdate] = useState(true)
    const [nodata, setnodata] = useState(true)
    useEffect(() => {
        Axios.get(`${Tokenuser}`).then((rr) => (setdataforon(rr.data.name), setdataforoneid(rr.data.id)))
    }, [])

    useEffect(() => {
        axios.get(`${mainapi}${users}`, {
            headers: {
                Accept: "application/json",
                Authorization: 'Bearer ' + cookie.get("e-commerce"),
            },
        }).then((data) => (setdata(data.data)))
            .then(() => setnodata(true))
            .catch((err) => Navigate(("dashbord/user/padge/404",{replace:true})))

    }, [update])
    console.log(dataforoneid)
    async function delet(id) {
       console.log(id)
        try {
            const up = await Axios.delete(`${Tokenuser}/${id}`)
           setdata((prev)=>prev.filter((item)=>item.id!==id))
          
        } catch (err) {
            console.log(err)
        
    }
}


   // <tr key={index}><td>{index}</td><td>{el.name === dataforonename ? el.name + " (you)" : el.name}</td><td>{el.email}</td>

    const header= [
        { 
            key:"id", 
            name:"id" }, 
        { 
            key:"name", 
            name:"name" }, 
        { 
            key:"email", 
            name:"email" }, 
        { 
            key:"role", 
            name:"role" },

    
    ]

    return (<>
       <Showtabel header={header} linkto={"/dashbord/adduser"} data={data} titletable={"users"} add={"add user"} delet={delet} user={"user"} currentuser={dataforon}/>
    </>)
}