import React from 'react';
import { useState } from "react";
import './Main.css';
import '../../Stylesheets/index.css';
import '../../Stylesheets/Darkmode.css';
import '../../Stylesheets/visible.css';
import Light from '../../Assets/Images/logoLight.png';
import Dark from '../../Assets/Images/logoDark.png';
import Red from '../../Assets/Images/pfpRed.png';
import Blue from '../../Assets/Images/pfpBlue.png';
import Yellow from '../../Assets/Images/pfpYellow.png';
import Green from '../../Assets/Images/pfpGreen.png';
import Purple from '../../Assets/Images/pfpPurple.png';


function Home() {
  return (
    <div className="container">

      <div class="button-container">
        <button class="pfpRed">
        <img alt="lol" src={Red}/>
        </button>
        <button class="pfpBlue">
        <img alt="lol" src={Blue}/>
        </button>
        <button class="pfpYellow">
        <img alt="lol" src={Yellow}/>
        </button>
        <button class="pfpGreen">
        <img alt="lol" src={Green}/>
        </button>
        <button class="pfpPurple">
        <img alt="lol" src={Purple}/>
        <div class="longBar"></div>
        </button>
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