import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
function App() {
  return (
    <>
    <Navbar Title="Textutils" About="About Us"/>
    <div className="container my-5">
    <TextForm heading="Enter the text to analyze"/>
    {/* <About/> */}
    </div>
    
    </> 
  );
}

export default App;
