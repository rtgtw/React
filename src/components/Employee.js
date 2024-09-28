import React from 'react';


class Employee extends React.Component{

    constructor(props){
        //pass props to the super class
        super(props)

        //specify the state object
        this.state = {
            firstName : "Jerremy",
            lastName : "Bango"
        }
    }

    updateEmployee(){
        this.setState({
            firstName : "Benny",
            lastName : "Porche"
        })
    }

    render(){
        return (
            <div>
                <h1>Employee Details</h1>
                <p>{this.state.firstName}</p>
                <p>{this.state.lastName}</p>
                <button onClick={() => this.updateEmployee()}   >Update Employee</button>
            </div>
        )
    }

}

export default Employee