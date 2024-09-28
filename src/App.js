import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greeting from './components/Greeting';
import {FirstComponent as FC, SecondComponent} from './components/MyComponent';
import MyComponent from './components/MyComponent';
import HelloWorld from './components/HelloWorld';
import Student from './components/Student';
//use props to pass things



function App() {

  const student = {
    firstName : "Soupy",
    lastName : "Hilrow",
    email : "this@email.com"
  }

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
        <Student
          cats = {student}
          />

          {/* <Student
          firstName = "Hilthrow"
          lastName = "Bolson"
          email = "meme@email.com"
          />
         */}
       
        
        

    </div>
  );
}

export default App;
