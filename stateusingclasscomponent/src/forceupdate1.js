import react from "react"
class forceUpdate1 extends react.Component
{
    message="Hello"
    messageHandler=()=>
    {
        console.log("Test 123")
        this.message="Gm"
        console.log(this.message)
        this.forceUpdate()
    }
    render()
    {
        return <>
        <h1>Message Component</h1>
        <h3>Message:{this.message}</h3>
        <button className="btn btn-outline-danger" onClick={this.messageHandler}>GM</button>
        <button className="btn btn-outline-warning" onClick={this.messageHandler}>GN</button>
        </>
    }
}
export default forceUpdate1