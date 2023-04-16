import React from "react";
import {useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../../Components/Contexts/ThemeContext";
import "./Anime.css"
import "../../Stylesheets/visible.css"
import SteinsGate from "../../Assets/Image buttons/SteinsGate.png"
import kekkeisensen from "../../Assets/Image buttons/kekkeisensen.png"

function Anime() {

  const {isLeftMode} = useContext(ThemeContext);

  useEffect(() => {
    document.querySelector(".navbar").classList.toggle("visible", isLeftMode);
    document.querySelector(".navbutton").classList.toggle("visible", isLeftMode);
    document.querySelector(".dark-button").classList.toggle("visible", isLeftMode);
    document.querySelector(".container").classList.toggle("visible", isLeftMode);
  }, [isLeftMode]);

  return (
  <div className="container">
    <div className="box">
      <div className="textContainer">
        <br /> <br />
        <div className="title">
          <span className="block-title"></span>
          <h1 className="firstText">Top 10 anime</h1>
        </div>
      </div>
      <div className="Anime" >
      <Link to="/Anime" className="one" name="#1">SteinsGate</Link>
        <br />
        <Link to="/Anime" className="two" name="#2">Kekkai Sensen</Link>
        <br />
        <Link to="/Anime" className="three" name="#3">Kekkai Sensen</Link>
        <br />
      <Link to="/Anime" className="four" name="#4">Kekkai Sensen</Link>
        <br />
        <Link to="/Anime" className="five" alt="BloodBlockateBattlefront" name="#5">number 5</Link>
        <br />
        <Link to="/Anime" className="six" alt="BloodBlockateBattlefront" name="#6">Kekkai Sensen</Link>
        <br />
        <Link to="/Anime" className="seven" alt="BloodBlockateBattlefront" name="#7">Kekkai Sensen</Link>
        <br />
        <Link to="/Anime" className="eight" alt="BloodBlockateBattlefront" name="#8">Kekkai Sensen</Link>
        <br />
        <Link to="/Anime" className="nine" alt="BloodBlockateBattlefront" name="#9">Kekkai Sensen</Link>
        <br />
        <Link to="/Anime" className="ten" alt="BloodBlockateBattlefront" name="#10">Kekkai Sensen</Link>
        <br />
      </div>
    </div>
  </div>
  );
}

export default Anime;