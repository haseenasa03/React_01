import React from "react"

//props is used to communicate between the two components
//Function to Function or Function to Class or Class to Function or class to class

const Comp2=(props)=>
{
    return <div>
        <h1>Component 2</h1>
        <pre>{JSON.stringify(props)}</pre>
    </div>
}
export default Comp2

// how to print object in browser by using {JSON.stringify(props)//
//we have to write inside the div tag <pre>{JSON.stringify(props)}</pre>//