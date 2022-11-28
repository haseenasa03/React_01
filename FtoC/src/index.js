/*React application -Root components*/
/*1. component-main objective is return the user interface
2.piece of UI code
3.piece of reusable user interface code*/

import Application from "./Components/Application";
import App from "./App" /*extension ot required because the node ecosystem will take care of that*/
import ReactDom from "react-dom"

/*ReactDom.render(<h1>"Hello GM"</h1>,document.getElementById("root")); /*method1*/

/*ReactDom.render(<div><Application/><App/></div>,document.getElementById("root")) /*method2*/ 

ReactDom.render(<Application/>,document.getElementById("root")) /*method3*/

// here i used 3-ReactDom,render,while executing the application ReactDom.render which is given at the last will execute.//
