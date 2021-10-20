import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
function App() {
  return (
    <>
    <Navbar Title="Textutils" About="About Us"/>
    <div className="container my-5">
    <TextForm heading="Enter the text to analyze"/>
    </div>
    
    </> 
  );
}

export default App;
