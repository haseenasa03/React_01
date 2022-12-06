import React,{useState} from "react"

const Message=()=>
{
    let [msg,setMsg]=useState("hello.......hi");
    return (
        <div>
    
   
        <h1>{msg}</h1>
        <button onClick={()=>{setMsg("goodmorning")}}>GM</button>

        <button onClick={()=>{setMsg("goodnight")}}>GN</button>
    </div>
    )
}
export default Message