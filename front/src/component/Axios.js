import axios from "axios";
import { mainapi } from "../Api/api";
import Cookie from "cookie-universal"

const cookie=Cookie()
const token =cookie.get("e-commerce")
export const Axios =axios.create({
    baseURL:mainapi,
    headers:{
        Authorization:"Bearer " + token
    }
})