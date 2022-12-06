import React,{useState} from 'react'
const Messageusestate=()=>
{
    let [msg,setMsg]=useState("Hello....");
    let gmHandler=()=>
    {
        setMsg("GM")
    }
    let gnHandler=()=>
    {
        setMsg("GN")
    }
    return (
        <div>
            <h1>{msg}</h1>
            <button onClick={gmHandler}>GM</button>
            <button onClick={gnHandler}>GN</button>
        </div>
    )
}
export default Messageusestate