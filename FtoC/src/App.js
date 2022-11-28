/*React application -Root components*/
/*1. component-main objective is return the user interface
2.piece of UI code
3.piece of reusable user interface code*/
import Application from "./Components/Application"
 /*extension ot required because the node ecosystem will take care of that*/
import React from "react"

let App=function App()
{
    return <div>
        <h1>App component</h1>
        <h1>hi haseena</h1>
        <p>React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.
</p>
<hr/>
<Application/>
    </div>
}
export default App