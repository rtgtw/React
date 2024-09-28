import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greeting from './components/Greeting';
import {FirstComponent as FC, SecondComponent} from './components/MyComponent';
import MyComponent from './components/MyComponent';
import HelloWorld from './components/HelloWorld';
import Student from './components/Student';
import Employee from './components/Employee';
import User from './components/User';
import EventHandling from './components/EventHandling';
//use props to pass things



function App() {

  // const student = {
  //   firstName : "Soupy",
  //   lastName : "Johnson",
  //   email : "this@tmail.com"
  // }

  //create an array
  const skills = ['HTML','CSS','JavaScript'];

  return (
    <div className="App">
       {/* <Welcome name = "That guy"/>
       <Welcome name = "is he Him?"/> */}
  
{/* 
        <Greeting name = "Himothy"/>
        <FC/>
        <SecondComponent/>
        <MyComponent/> */}
        {/* <HelloWorld />  */}
        {/* <Student
          data = {skills}
          /> */}

          {/* <Student
          firstName = "Hilthrow"
          lastName = "Bolson"
          email = "meme@email.com"
          /> */}

          {/* <Employee/> */}

          {/* <User/>
         */}

         <EventHandling/>
         
       
        
        

    </div>
  );
}

export default App;
