//functional component

import { useState } from "react"

const User = () => {
//    const [firstName, setFirstName] =  useState('Him')
//    const [lastName, setLastName] = useState('Hilborow')

    const [user, setUser] = useState({
        firstName: "that guy",
        lastName : "Trueee"
    })

   function updateUser(){
    // setFirstName('Ham')
    // setLastName('Burry')
    setUser({
       firstName : "first",
       lastName : "last"
    })
   }
   return (
    <div>
        <h1>User details</h1>
        <p>{user.firstName}</p>
        <p>{user.lastName}</p>


        <button onClick={updateUser}>Update User</button>
    </div>
   )
}

export default User