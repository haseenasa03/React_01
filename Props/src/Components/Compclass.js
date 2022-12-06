//Function to class
/* how to print object in browser by using {JSON.stringify(this.props)
    this keyword has to use while fetching the data in class members
    In function to class or class to class,we have to use props-keywords to gt the property from one component to another
//we have to write inside the div tag <pre>{JSON.stringify(props)}</pre>*/

import react from "react"
class Compclass extends react.Component
{
    render()
    {
        return <div> <pre>{JSON.stringify(this.props)}</pre></div>
    }
}
export default Compclass