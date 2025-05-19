import { useState } from "react"
const Section=({title,discription , isvisible,setIsvisible})=>{
    return(
        <div className="border border-black m-2 p-2">
       <h3 className="text-2xl underline">{title}</h3>
       {isvisible? <button className="cursor-pointer font-bold" onClick={()=>{setIsvisible(false)}}>Hide</button>:
       <button className="cursor-pointer font-bold" onClick={()=>{setIsvisible(true)}}>Show</button>}
      
       {isvisible && <p>{discription}</p>}
       </div>
    
    )
}
  
  
  
  
  const Instamart=()=>{
   const[visiblesection,setvisiblesection]=useState("")
    return(
        <div>
    <h1 className="text-3xl m-2 p-2 font-bold">Instamart</h1>
    <Section title={"About Instamart"}
    discription={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."}
    isvisible={visiblesection==="about"}
    setIsvisible={()=>
        setvisiblesection(visiblesection==="about"?"":"about")
    }
    />
  

<Section title={"Team Instamart"}
    discription={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."}
    isvisible={visiblesection==="team"}
    setIsvisible={()=>
        setvisiblesection(visiblesection==="team"?"":"team")
    }
    />

<Section title={"Career"}
    discription={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."}
    isvisible={visiblesection==="career"}
    setIsvisible={()=>
        setvisiblesection(visiblesection==="career"?"":"career")
    }
    />
    </div>
    )

}
export default Instamart

