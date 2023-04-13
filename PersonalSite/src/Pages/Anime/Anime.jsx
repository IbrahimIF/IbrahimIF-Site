import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../../Components/Contexts/ThemeContext";
import "./Anime.css"
import SteinsGate from "../../Assets/Image buttons/SteinsGate.png"

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
          <h1 class="firstText">Top 10 anime</h1>
        </div>
      </div>
      <div className="Anime" >
      <Link to="/Anime" src={SteinsGate} alt="steinsGate" name="#1">SteinsGate</Link>
      <br />
      <Link to="/Anime" src="" alt="BloodBlockateBattlefront" name="#2">Kekkai Sensen</Link>
      <br />
    </div>
  </div>

    </div>
  );
}

export default Show;