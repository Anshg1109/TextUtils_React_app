import './App.css';
// import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import React, { useState } from 'react'
import Alert from './Component/Alert';

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
     showAlert("Dark Mode has been enabled","Success") 
   } 
   else{
     setMode('light');
     document.body.style.backgroundColor = 'white';
     showAlert("Light Mode has been enabled","Success") 

   }
  }
  return (
    <>
    <Navbar Title="Textutils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-5">
    <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
    {/* <About/> */}
    </div>
    
    </> 
  );
}

export default App;
