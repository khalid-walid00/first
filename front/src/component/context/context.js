import { createContext, useState } from "react"

export const Menu= createContext("")

export default function Con({children}) {
const [open,setopen]=useState(true)
   

    return (
       <Menu.Provider value={{open,setopen}}>{children}</Menu.Provider>
    )

}