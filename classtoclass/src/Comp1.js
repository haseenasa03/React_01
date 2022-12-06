//Props-Class to Class communication  /**Props -used to send the data from one component to another as number/string/object/boolean/function or method 
///**Props -used to send the data from one component to another as number/string/object/boolean/function or method 
import react from "react"
import Comp2 from "./Comp2"
class Comp1 extends react.Component
{
    emp_id=100;
    emp_name="haseena"
    emp_age=27;
    render()
    {
        return <>
        <h1> Class Component 1</h1>
        <Comp2 Employee_Id={this.emp_id} Employee_Name={this.emp_name} Employee_Age={this.emp_age}/>
       
        </>
    }
    }
export default Comp1

