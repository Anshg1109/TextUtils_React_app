import './App.css';
// import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode =()=>{
   if (mode ==='light'){
     setMode('dark');
     document.body.style.backgroundColor = '#042743'; 
   } 
   else{
     setMode('light');
     document.body.style.backgroundColor = 'white';
   }
  }
  return (
    <>
    <Navbar Title="Textutils" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-5">
    <TextForm heading="Enter the text to analyze" mode={mode}/>
    {/* <About/> */}
    </div>
    
    </> 
  );
}

export default App;
