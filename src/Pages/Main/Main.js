import React from 'react';
import { useState } from "react";
import './Main.css';
import '../../index.css';
import Light from '../../Assets/Images/logoLight.png';
import Dark from '../../Assets/Images/logoDark.png';
import Red from '../../Assets/Images/pfpRed.png';

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className="container">

      <div class="button-container">
        <button class="plus"></button>
        <button class="plus"></button>
        <button alt="Logo5" src={Red} class="plus">
        <img alt="lol" src={Red}/>
        </button>

        <br />  <br />
        <br />  <br />
        <br />  <br />
        <br />  <br />
        
        <img
        alt="Logo" className='logo'
        src={isDarkMode ? Dark : Light}
      />
      </div>
 
      <br />  <br />
      

      
<div className="container2">
<div class="box">

<div class="title">
    <span class="block1"></span>
    <h1 className="Firsttext">Ibrahim Farrah<span></span></h1>
</div>

<div class="role">
    <div class="block"></div>
    <p className="sectext">Professional Retard</p>
</div>

</div>
</div>
</div>
  );
};

export default Home;