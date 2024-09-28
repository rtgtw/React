// functional components is a javascript function, arrow function that returns JSX
//functional components should start with caps
//App is the root component
// function Welcome(){
    //JSX (javascript xml)is a javascript extension that allows us to write html in javascript
    //in order to use this component with another component, we have to export it
//     return <h1>Welcome to React</h1>
// }

//its export default (give component an Alias, which is its name)
// export default Welcome

//Arrow function

// const Welcome = () => {
//     return <h1>Welcome to this webpage</h1>
// }

//simplified even more
const Welcome = (props) => <h1>Welcome {props.name}, to this webpage</h1>

export default Welcome