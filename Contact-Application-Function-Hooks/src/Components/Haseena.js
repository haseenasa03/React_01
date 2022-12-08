//class component//
//to read a dta from in react we have to use react expression which is {} /*

import React from "react";
//import react from "react"
class Haseena extends React.Component
{
    character_name="Haseena"  //inside a class we cannot declare a variable//
    age=24
    role="Developer"

    render()
    {
        return <div>
            <h1>Character:{this.character_name}</h1>     {/*this keyword is used to fetch the data insidethe members*/}
            <h1>Age:{this.age}</h1>                      {/*this keyword is a poinetr pointing to current object*/}
            <h1>Role:{this.role}</h1> 
        </div>
    }
}

export default Haseena