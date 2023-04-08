import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../../Contexts/ThemeContext";
import "../../Stylesheets/index.css";
import "../../Stylesheets/Darkmode.css";
import "../../Stylesheets/visible.css";
import "../fake/fake"
import "./shows.css"
import Light from "../../Assets/Images/logoLight.png";
import Dark from "../../Assets/Images/logoDark.png";
import Red from "../../Assets/Images/pfpRed.png";
import Blue from "../../Assets/Images/pfpBlue.png";
import Yellow from "../../Assets/Images/pfpYellow.png";
import Green from "../../Assets/Images/pfpGreen.png";
import Purple from "../../Assets/Images/pfpPurple.png";

function Show() {

  const { isDarkMode, setIsDarkMode, isLeftMode, setIsLeftMode } = useContext(ThemeContext);

  useEffect(() => {
    document.querySelector(".navbar").classList.toggle("visible", isLeftMode);
    document.querySelector(".navbutton").classList.toggle("visible", isLeftMode);
    document.querySelector(".dark-button").classList.toggle("visible", isLeftMode);
    document.querySelector(".container").classList.toggle("visible", isLeftMode);
  }, [isLeftMode]);

  return (
    <div className="container">
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

export default Show;