// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeContext from "./Components/Contexts/ThemeContext";

import Saved from "./Components/savedChanges/SavedChanges";
import Main from "./Pages/Main/Main";
import Fake from "./Pages/fake/fake";
import Show from "./Pages/Shows/shows";
import Project from "./Pages/Projects/Projects";
import About from "./Pages/About/About";
import Anime from "./Pages/Anime/Anime";
//import from "./Pages/";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("isDarkMode") === "true");
  const [isLeftMode, setIsLeftMode] = useState(localStorage.getItem("isLeftMode") === "true");


  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode);
    localStorage.setItem("isLeftMode", isLeftMode);
  }, [isDarkMode, isLeftMode]);
  

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode, isLeftMode, setIsLeftMode }}>
        <Routes>
          <Route path="/" element={<Saved />}>
            <Route path="/" element={<Main />} />
            <Route path="/Show" element={<Show />} />
            <Route path="/Anime" element={<Anime />} />
            <Route path="/Projects" element={<Project />} />
            <Route path="/About" element={<About />} />
          </Route>
          <Route path="/Fake" element={<Fake />} />
        </Routes>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}
export default App;


/* <div className="App">
      <GoogleLogin
        onSuccess = {credentialResponse => {
        console.log(credentialResponse);
        }}
        onError = {() => {
        console.log('Login Failed');
        }}
      />
    </div> */