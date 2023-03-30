import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark")
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
      // setInterval(()=>{
      //   document.title = "TextUtils - Amazing"
      // }, 2000);
      // setInterval(()=>{
      //   document.title = " Install TextUtils Now"
      // }, 1500);


    }
    else {
      setmode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode"

    }
  }
  return (
    <>
      {/* <Navbar /> */}
      {/* <Navbar title= "TextUtils"/> */}
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            {/* /users --->Component -1
                 /users/home  --->Component -2 */}
            <Route exact path="/about"
              element={<About mode={mode} />}>
            </Route>
            <Route exact path="/"
              element={<TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
