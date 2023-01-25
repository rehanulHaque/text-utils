import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message,
      type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "Sucess");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "Sucess");
    }
  };

  return (
    <>
    {/* <Router> */}
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <TextForm heading="Enter Your Text" mode={mode} showAlert={showAlert}/>
      {/* <Routes> */}
        {/* <Route exact path="/" element={<TextForm heading="Enter Your Text" mode={mode} showAlert={showAlert}/>}/>
        <Route path="/about" element={<About />} />
      </Routes>
      </Router> */}
    </>
  );
}

export default App;
