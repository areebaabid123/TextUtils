import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
  


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0a3548';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode"
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode"


    }

  }

  return (
    <>
      {/* <Navbar title = "TextUtils" aboutText="About us"/> */}
      {/* <Navbar/> */}
  
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert} />

        <div className="container my-3">

          <Router>
            <Routes>
              <Route path="/about" element={<About/>} />
              <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
            </Routes>
          </Router>

          {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} /> */}

          {/* <About heading="About Us" mode={mode} /> */}
        </div>
    
    </>

  );
}

export default App;


