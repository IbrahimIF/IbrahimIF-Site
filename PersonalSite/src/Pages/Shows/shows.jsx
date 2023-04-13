import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../../Components/Contexts/ThemeContext";
import "./shows.css"

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
        <h1 class="firstText">Top 10 shows</h1>
      </div>
    </div>
  </div>

    </div>
  );
}

export default Show;