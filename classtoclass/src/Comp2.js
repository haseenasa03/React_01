import react from "react"
//If we want to print the object in brower by using class then <pre>{JSON.stringify(this.props)}</pre> should be use inside the div tag or fragment //
class Comp2 extends react.Component
{
    render()
    {
        return <>
        <h1>Class Component 2</h1>
        <hr/>
        <pre>{JSON.stringify(this.props)}</pre>
        
        <hr/>
        <h2>Employee ID:{this.props.emp_id}</h2>
        <h2>Employee Name:{this.props.emp_name}</h2>
        <h2>Employee Age:{this.props.emp_age}</h2>
        <hr/>
        </>
    }
}
export default Comp2