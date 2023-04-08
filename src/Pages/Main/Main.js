import React from "react";
import { useState, useEffect, useContext } from "react";
import ThemeContext from "../../Contexts/ThemeContext";
import { Link } from "react-router-dom";
import "./Main.css";
import "../../Stylesheets/index.css";
import "../../Stylesheets/Darkmode.css";
import "../../Stylesheets/visible.css";
import "../fake/fake"
import Light from "../../Assets/Images/logoLight.png";
import Dark from "../../Assets/Images/logoDark.png";
import Red from "../../Assets/Images/pfpRed.png";
import Blue from "../../Assets/Images/pfpBlue.png";
import Yellow from "../../Assets/Images/pfpYellow.png";
import Green from "../../Assets/Images/pfpGreen.png";
import Purple from "../../Assets/Images/pfpPurple.png";

function Home() {


  const { isDarkMode, setIsDarkMode, isLeftMode, setIsLeftMode } = useContext(ThemeContext);

  useEffect(() => {
    document.querySelector(".navbar").classList.toggle("visible", isLeftMode);
    document.querySelector(".navbutton").classList.toggle("visible", isLeftMode);
    document.querySelector(".dark-button").classList.toggle("visible", isLeftMode);
    document.querySelector(".container").classList.toggle("visible", isLeftMode);
  }, [isLeftMode]);


  const [unknownText, setUnknownText] = useState(generateRandomString(6));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setUnknownText(generateRandomString(6));
    }, 50);
    return () => clearInterval(intervalId);
  }, []);

  function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  return (
    <div className="container">
      <div class="button-container">
        <a href="https://www.youtube.com/channel/UCcPOdIldwZyjXys2QTz-x9g">
          <button
            onMouseOver={() => {
              document.querySelector(".pfpBlue").classList.add("visible");
              document.querySelector(".pfpYellow").classList.add("visible");
              document.querySelector(".pfpGreen").classList.add("visible");
              document.querySelector(".pfpPurple").classList.add("visible");
              document.body.classList.add("red-mode");
            }}
            onMouseOut={() => {
              document.querySelector(".pfpBlue").classList.remove("visible");
              document.querySelector(".pfpYellow").classList.remove("visible");
              document.querySelector(".pfpGreen").classList.remove("visible");
              document.querySelector(".pfpPurple").classList.remove("visible");
              document.body.classList.remove("red-mode");
            }}
            className="pfpRed"
          >
            <img alt="lol" src={Red} />
            <div class="redBar">
              <span>Youtube</span>
            </div>
          </button>
        </a>
        <a href="https://steamcommunity.com/profiles/76561199003620198/">
        <button
          onMouseOver={() => {
            document.querySelector(".pfpYellow").classList.add("visible");
            document.querySelector(".pfpGreen").classList.add("visible");
            document.querySelector(".pfpPurple").classList.add("visible");
            document.body.classList.add("blue-mode");
          }}
          onMouseOut={() => {
            document.querySelector(".pfpYellow").classList.remove("visible");
            document.querySelector(".pfpGreen").classList.remove("visible");
            document.querySelector(".pfpPurple").classList.remove("visible");
            document.body.classList.remove("blue-mode");
          }}
          class="pfpBlue"
        >
          <img alt="lol" src={Blue} />
          <div class="blueBar">
            <span>Steam</span>
          </div>
        </button>
        </a>
        <a href="https://github.com/IbrahimIF">
        <button
          onMouseOver={() => {
            document.querySelector(".pfpGreen").classList.add("visible");
            document.querySelector(".pfpPurple").classList.add("visible");
            document.body.classList.add("yellow-mode");
          }}
          onMouseOut={() => {
            document.querySelector(".pfpGreen").classList.remove("visible");
            document.querySelector(".pfpPurple").classList.remove("visible");
            document.body.classList.remove("yellow-mode");
          }}
          class="pfpYellow"
        >
          <img alt="lol" src={Yellow} />
          <div class="yellowBar">
            <span>Github</span>
          </div>
        </button>
        </a>
        <a href="Fake">
        <button
          onMouseOver={() => {
            document.querySelector(".pfpPurple").classList.add("visible");
            document.body.classList.add("green-mode");
          }}
          onMouseOut={() => {
            document.querySelector(".pfpPurple").classList.remove("visible");
            document.body.classList.remove("green-mode");
          }}
          class="pfpGreen"
        >
          <img alt="lol" src={Green} />
          <div class="greenBar">
            <span>{unknownText}</span>
          </div>
        </button>
        </a>
        <a href="https://discordapp.com/users/431043132889628682">
        <button
          onMouseOver={() => {
            document.body.classList.add("purple-mode");
          }}
          onMouseOut={() => {
            document.body.classList.remove("purple-mode");
          }}
          class="pfpPurple"
        >
          <img alt="lol" src={Purple} />
          <div className="purpleBar">
            <span>Discord</span>
          </div>
        </button>
        </a>
      </div>
      <br /> <br />
      <div className="container2">
        <div class="box">
          <div class="title">
            <span class="block1"></span>
            <h1 className="Firsttext">
              Ibrahim Farrah<span></span>
            </h1>
          </div>

          <div class="role">
            <div class="block"></div>
            <p className="sectext">Professional Retard</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
