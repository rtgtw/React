//Functional component
//arrow function
 // const myElement = <h1>Hello world!</h1>
    // return React.createElement('h1', null, 'Hello')


import React from "react"

 const HelloWorld = () => {

    

    function handleClick(){
        alert("button clicked!")
    }

    //can get javascript expression or variable with {}
    const name = "himmothy";

    const addition = 1+2;

    return(
    <div><h1>Title</h1>
    <h2 className = "title" >Sub Title</h2>
    <p>Paragraph</p>
    <p>{name}</p>
    <p> {addition}</p>
    <button onClick={handleClick}> Click Me </button>
    </div>)
   
}

//create react element using create Element 




export default HelloWorld