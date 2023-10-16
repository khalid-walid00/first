import { createContext, useEffect, useState } from "react"

export const width= createContext(null)

export default function Con({children}) {
const [width,setwidth]=useState(window.innerWidth)
useEffect(()=>{
function changewidth(){
    setwidth(window.innerWidth)
}window.addEventListener("resize",setwidth)
return ()=>{window.removeEventListener("resize",setwidth)};
},[])

    return (
       <width.Provider value={{width,setwidth}}>{children}</width.Provider>
    )

}