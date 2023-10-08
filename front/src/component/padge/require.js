import { Outlet, useNavigate } from "react-router-dom";
import Cookie from "cookie-universal"
import { useEffect, useState } from "react";
import { Tokenuser } from "../../Api/api";

import Loading from "../Loading";
import { Axios } from "../Axios";
import Error403 from "./Error403";
const cookie = Cookie()
const token = cookie.get("e-commerce")

export default function Requir({allowrole}) {

   const allow =allowrole



const Navigate =useNavigate()
    const [user, setuser] = useState("")
    const [role, setrole] = useState("")

    useEffect(() => {
       Axios.get(`${Tokenuser}`).then((data) =>( setuser(data.data),setrole(data.data.role)))
        .catch(() => Navigate("/login", { replace: true }))
    }, [])
    return token ? (

        user === "" ? (<Loading />) : allow.includes(role) ?(<Outlet />) :<Error403 allow={role} />

    ) : (<Navigate to={"/login"} replace={true} />)






}