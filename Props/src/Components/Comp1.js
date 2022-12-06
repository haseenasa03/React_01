//import Comp2 from ".Components/Comp2"
import Compclass from "./Compclass"
let Comp1=()=>
{
    let ename="haseena"
    return <div>
        <h1>Component 1</h1>
        <hr/>

        {/*function to function-props method-communicate between two compoents*/}
        {/*At first we have to import the component and the sending the data as a property*/}
        {/*<Comp2 ename={ename}/>*/} {/*ename={ename} is a property*/}
        {/*we have some data(let ename="haseena") and i am sending that data as a property*/}

        <Compclass ename={ename}/>  {/*fuction to class*/}
        </div>

}
export default Comp1