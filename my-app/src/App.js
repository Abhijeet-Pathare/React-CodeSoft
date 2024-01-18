import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


let name = "Abhijeet";
function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Text Utils" />
      {/* <Navbar/> */}
      <div className="container">
        <TextForm heading="Enter the text to analyze below"/>
        {/* <About /> */}
      </div>

    </>
  );
}

export default App;
