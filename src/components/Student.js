//Functional arrow component
const Student = (props) => {

    return (
        <div>
            <h1>Student Details</h1>
            <p>Student First Name : {props.cats.firstName}</p>
            <p>Student Last Name : {props.cats.lastName}</p>
            <p>Student email address: {props.cats.email}</p>
        </div>
    )
}

export default Student