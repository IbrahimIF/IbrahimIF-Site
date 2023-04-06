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
        <button onMouseOver={() =>{
              document.querySelector(".pfpBlue").classList.add("visible");
              document.querySelector(".pfpYellow").classList.add("visible");
              document.querySelector(".pfpGreen").classList.add("visible");
              document.querySelector(".pfpPurple").classList.add("visible");
            }}

            onMouseOut={() =>{
              document.querySelector(".pfpBlue").classList.remove("visible");
              document.querySelector(".pfpYellow").classList.remove("visible");
              document.querySelector(".pfpGreen").classList.remove("visible");
              document.querySelector(".pfpPurple").classList.remove("visible");
            }}
          className="pfpRed">
        <img alt="lol" src={Red}/>
        <div class="redBar"><span>Youtube</span></div>
        </button>
        <button onMouseOver={() =>{
              document.querySelector(".pfpYellow").classList.add("visible");
              document.querySelector(".pfpGreen").classList.add("visible");
              document.querySelector(".pfpPurple").classList.add("visible");
            }}

            onMouseOut={() =>{
              document.querySelector(".pfpYellow").classList.remove("visible");
              document.querySelector(".pfpGreen").classList.remove("visible");
              document.querySelector(".pfpPurple").classList.remove("visible");
            }}
            class="pfpBlue">
        <img alt="lol" src={Blue}/>
        <div class="blueBar"><span>Steam</span></div>
        </button>
        <button onMouseOver={() =>{
              document.querySelector(".pfpGreen").classList.add("visible");
              document.querySelector(".pfpPurple").classList.add("visible");
            }}

            onMouseOut={() =>{
              document.querySelector(".pfpGreen").classList.remove("visible");
              document.querySelector(".pfpPurple").classList.remove("visible");
            }}

            class="pfpYellow">
        <img alt="lol" src={Yellow}/>
        <div class="yellowBar"><span>Github</span></div>
        </button>
        <button onMouseOver={() =>{
              document.querySelector(".pfpPurple").classList.add("visible");
            }} 

            onMouseOut={() =>{
              document.querySelector(".pfpPurple").classList.remove("visible");
            }}
        class="pfpGreen">
        <img alt="lol" src={Green}/>
        <div class="greenBar"><span>uknown</span></div>
        </button>
        <button class="pfpPurple">
        <img alt="lol" src={Purple}/>
        <div className="purpleBar"><span>Discord</span></div>
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




