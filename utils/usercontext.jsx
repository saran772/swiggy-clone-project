import { createContext } from "react";


const userContext=createContext({
    user:{
        name:"saran",
        email:"hello@gmail.com"
    }
})

export default userContext