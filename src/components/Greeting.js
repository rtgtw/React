//Create class components
//class component should extend the component class from the react library
import React from "react";

//Should have a render function to return the JSX
//props automatically available in a class component

class Greeting extends React.Component{

    render(){
        return <h1>This is a statement 
            from the greetings class function, {this.props.name}</h1>
    }
}

export default Greeting 