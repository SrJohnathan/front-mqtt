'use client'


import {createContext, ReactNode} from "react";




import  "beercss";
import  "material-dynamic-colors";
import "../app/globals.css"

const Theme = ({children} : {children:ReactNode}) => {



    return (

        <>
            {children}
        </>

    )



}

export default Theme