
import react from "react"
class CompA extends react.Component {
    state = {
        message: "hello"
    }
    messageHandler1 = () => {
        console.log("Test two")
        this.setState({ message: "Hello,gm,how r u??" })
    }
    messageHandler2 = () => {
        console.log("Test three")
        this.setState({ message: "Hello,gf,how r u??" })
    }
    render() 
    {
        console.log("Test One")
        return <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card-header bg-success text-white">
                            <h3>Message Component</h3>
                        <h3>Message:{this.state.message}</h3></div>
                            <div className="card-body">
                                <button className="btn btn-outline-danger" onClick={this.messageHandler1}>GM</button>
                                <button className="btn btn-outline-success" onClick={this.messageHandler2}>GF</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
}
}
export default CompA