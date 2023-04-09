import React from "react";
import { useState, useEffect, useContext } from "react";
import ThemeContext from "../../Components/Contexts/ThemeContext";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faSteam } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";


//pfp images
import "./Main.css";
import Red from "../../Assets/Images/pfpRed.png";
import Blue from "../../Assets/Images/pfpBlue.png";
import Yellow from "../../Assets/Images/pfpYellow.png";
import Green from "../../Assets/Images/pfpGreen.png";
import Purple from "../../Assets/Images/pfpPurple.png";

function Home() {
  //is used to move everything to the left and saves it as a prefrence within themecontext for other pages
  const { isLeftMode } = useContext(ThemeContext);

  useEffect(() => {
    document.querySelector(".navbar").classList.toggle("visible", isLeftMode);
    document.querySelector(".navbutton").classList.toggle("visible", isLeftMode);
    document.querySelector(".dark-button").classList.toggle("visible", isLeftMode);
    document.querySelector(".container").classList.toggle("visible", isLeftMode);
  }, [isLeftMode]);

  // used for generating a random set of texts within pfp green
  const [unknownText, setUnknownText] = useState(generateRandomString(6));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setUnknownText(generateRandomString(6));
    }, 50);
    return () => clearInterval(intervalId);
  }, []);

  function generateRandomString(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  }

  // html of the page
return (
<div className="container">
  <div class="button-container">

{/* youtube profile picture */}
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
        className="pfpRed">
        <img alt="redpfp" src={Red} />
          <div class="redBar">
            <span>{" "}<FontAwesomeIcon icon={faYoutube} />{" "}Youtube</span>
          </div>
      </button>
    </a>

{/* steam profile picture */}
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
        class="pfpBlue">
        <img alt="bluepfp" src={Blue} />
          <div class="blueBar">
            <span>{" "}<FontAwesomeIcon icon={faSteam} />{" "}Steam</span>
          </div>
      </button>
    </a>

{/* github profile picture */}
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
        class="pfpYellow">
        <img alt="yellowpfp" src={Yellow} />
          <div class="yellowBar">
            <span>{" "}<FontAwesomeIcon icon={faGithub} />{" "}Github</span>
          </div>
      </button>
    </a>

{/* a broken(green) profile picture */}
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
        class="pfpGreen">
        <img alt="greenpfp" src={Green} />
          <div class="greenBar">
            <span>{unknownText}</span>
          </div>
      </button>
    </a>

{/* discord profile picture */}
    <a href="https://discordapp.com/users/431043132889628682">
      <button
        onMouseOver={() => {
        document.body.classList.add("purple-mode");
        }}
        onMouseOut={() => {
        document.body.classList.remove("purple-mode");
        }}
        class="pfpPurple">
        <img alt="purplepfp" src={Purple} />
          <div className="purpleBar">
            <span>{" "}<FontAwesomeIcon icon={faDiscord} />{" "}Discord</span>
          </div>
      </button>
    </a>
  </div>

<br /> <br />

{/* section for info */}
  <div className="box">
    <div class="textContainer">
      <br /> <br />
      <div class="title">
        <span class="block-title"></span>
        <h1 class="firstText">Ibrahim Farrah</h1>
      </div>

      <div class="subTitle">
        <div class="block-subTitle"></div>
        <p class="subText">Uknown regions</p>
      </div>

        <div className="icons">
          <a class="icons" href="https://mail.google.com/mail/u/0/?zx=knxh55u8nye4#inbox">
            <FontAwesomeIcon icon={faEnvelope} /><span class="icon-text">ibrahimfarrah30@</span>
          </a>
          <a class="icons" href="https://twitter.com/home?lang=en">
            <FontAwesomeIcon icon={faTwitter} /><span class="icon-text">Twitter</span>
          </a>
          <a class="icons" href="https://www.linkedin.com/in/ibrahim-farrah-b742471a6/">
            <FontAwesomeIcon icon={faLinkedin} /><span class="icon-text">Linklden</span>
          </a> 
      </div>

    </div>
  </div>
</div>

  );
}

export default Home;
