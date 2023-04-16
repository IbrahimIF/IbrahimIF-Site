import React from "react";
import {useEffect, useContext } from "react";
import ThemeContext from "../../Components/Contexts/ThemeContext";
import "./Projects.css"

function Show() {

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
        <h1 className="firstText">Projects</h1>
      </div>

      <div className="subTitle">
        <div className="block-subTitle"></div>
        <p className="subText">What I have done in the 4 years of my experience</p>
      </div>

    </div>
  </div>

    </div>
  );
}

export default Show;