//import { GoogleLogin } from '@react-oauth/google';
import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./Components/navbar/Navbar";

import Main from "./Pages/Main/Main";
import Fake from "./Pages/fake/fake";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Main />} />
        </Route>
        <Route path="/Fake" element={<Fake />} />
      </Routes>
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