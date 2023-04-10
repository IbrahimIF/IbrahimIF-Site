import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../../Components/Contexts/ThemeContext";
import "./Projects.css"

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
<div className="box">
    <div class="textContainer">
      <br /> <br />
      <div class="title">
        <span class="block-title"></span>
        <h1 class="firstText">Projects</h1>
      </div>

      <div class="subTitle">
        <div class="block-subTitle"></div>
        <p class="subText">I have done in the 4 years of my experience</p>
      </div>

    </div>
  </div>

    </div>
  );
}

export default Show;