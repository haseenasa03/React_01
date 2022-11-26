import React from "react"
import Haseena from "./Components/Haseena"
import Ramya from "./Components/Ramya"


//while using class componet we need to import react dependency or package
//because react dependency or package have inbuld class componentwhich contain one constructor and many methods
//one of the method is render(),we use this render() method -method by overriding it to return user interface code.
//Inheritance concept is used to fetch data from parent class which is React.Component to child class which is App

class App extends React.Component
{
    render()
    {
        return <div>
            <hr/>
            <h1>Web Series</h1>
            <hr/>
            <h2>The originals</h2>
            <hr/>
            <p>React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.
</p><hr/>
<Haseena/>
<hr/>
<Ramya/>
<hr/>
        </div>
    }
}
export default App