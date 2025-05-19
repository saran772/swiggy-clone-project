import { useEffect, useState } from "react"

const useonline=()=>{
    const[Isonline,setIsonline]=useState(true)
    
    useEffect(()=>{
        const handleonline=()=>{
            setIsonline(true)}

        const handleoffline=()=>{
            setIsonline(false) }

        window.addEventListener("online",handleonline)
        window.addEventListener("offline",handleoffline)

        return()=>{
           window.removeEventListener("online",handleonline)
            window.removeEventListener("offline",handleoffline)
        }
    },[])




    return Isonline;
}
export default useonline;