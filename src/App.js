import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import React, { useState } from 'react'
import Alert from './Component/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);
  const showAlert =(message, type)=>{
       setalert({
         msg : message,
         Type: type
       })
       setTimeout(() => {
         setalert(null);
       }, 2000);
  }
  const toggleMode =()=>{
   if (mode ==='light'){
     setMode('dark');
     document.body.style.backgroundColor = '#042743';
     showAlert("Dark Mode has been enabled","Success");
     document.title = "TextUtils - Dark Mode";
   } 
   else{
     setMode('light');
     document.body.style.backgroundColor = 'white';
     showAlert("Light Mode has been enabled","Success") 
     document.title = "TextUtils - Light Mode"; 
   }
  }
  return (
    <>
    <Router>
      <Navbar Title="Textutils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
        <div className="container my-5">
            <Switch>
              <Route exact path="/about">
                <About/>
              </Route>
              <Route exact path="/">
                <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
              </Route>
              {/* <Route path='/about' element={<About/>} />
              <Route path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>} /> */}
            </Switch>   
        </div>
    </Router>
    
    </> 
  );
}

export default App;
