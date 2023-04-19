import React from "react";
import {useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../../Components/Contexts/ThemeContext";
import "./Anime2.css"
import "../../Stylesheets/visible.css"
import kekkeisensen from "../../Assets/Image buttons/bloodblockadebattlefront.png"
import steins from "../../Assets/Image buttons/stiensgateclocks.png"
import aot from "../../Assets/Image buttons/attackontitanbg.png"
import onePunch from "../../Assets/Image buttons/onepunchmanbg.png"
import nichijou from "../../Assets/Image buttons/nichijoutitle.png"
import ghoul from "../../Assets/Image buttons/tokyo-ghoulbg.png"
import jojo from "../../Assets/Image buttons/Stardust.Crusadersbg.png"
import onepiece from "../../Assets/Image buttons/Onepiecebg.png"
import fmab from "../../Assets/Image buttons/full-metal-alchemistbg.png"
import note from "../../Assets/Image buttons/DeathNotebg.png"
import stone from "../../Assets/Image buttons/dr-stonebg.png"
import jujutsu from "../../Assets/Image buttons/Jujutsu-Kisenbg.png"
import slayer from "../../Assets/Image buttons/demon-slayer.png"

function Anime() {

  const [showExplanation, setShowExplanation] = useState("");

  const {isLeftMode} = useContext(ThemeContext);


  useEffect(() => {
    document.querySelector(".navbar").classList.toggle("visible", isLeftMode);
    document.querySelector(".navbutton").classList.toggle("visible", isLeftMode);
    document.querySelector(".dark-button").classList.toggle("visible", isLeftMode);
    document.querySelector(".container").classList.toggle("visible", isLeftMode);
  }, [isLeftMode]);

  const explanationTexts = {
    "hover": "hover over a button to see the explanation",
    "#1": "Explanation text for link 1 goes here...",
    "#2": "Explanation text for link 2 goes here...",
    "#3": "Explanation text for link 3 goes here...",
    "#4": "Explanation text for link 4 goes here...",
    "#5": "Explanation text for link 5 goes here...",
    "#6": "Explanation text for link 6 goes here...",
    "#7": "Explanation text for link 7 goes here...",
    "#8": "Explanation text for link 8 goes here...",
    "#9": "Explanation text for link 9 goes here...",
    "#10": "Explanation text for link 10 goes here...",
  };

  return (
    <div className="container">
      <div className="box2">
        <div className="Title">
          <div className="textContainer2">
            <br /> <br />
            <div className="title">
              <span className="block-title"></span>
              <h1 className="firstText">Top 10 anime</h1>
            </div>
          </div>
          <div className="text-area">
            <div className={`text-section ${showExplanation && "show"}`}>
              <p>{explanationTexts[showExplanation]}</p>
            </div>
          </div>
          <div className="text-section2">
            <h3>Honurable mentions:</h3>
            <span> </span>
          </div>
        </div>
        <div className="top-10">
          <div className="Anime">
            <Link onMouseOver={() => {
                setShowExplanation("#1");
                /*tests.start()*/
              }}
              onMouseOut={() => {
                  setShowExplanation("");
                /*tests.pause();*/
              }} 
            to="/Anime" alt="Steins Gate" name="#1" className="one" style={{backgroundImage: `url(${steins})`, borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link  onMouseOver={() => {
                setShowExplanation("#2");
                /*tests.start()*/
              }}
              onMouseOut={() => {
                setShowExplanation("");
                /*tests.pause();*/
              }} 
            to="/Anime" alt="BloodBlockateBattlefront" name="#2" className="two" style={{backgroundImage: `url(${kekkeisensen})`, borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link to="/Anime" alt="Attack on Titan" name="#3" className="three" style={{backgroundImage: `url(${aot})`, borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link to="/Anime" alt="Tokyo Ghoul" name="#4" className="four" style={{backgroundImage: `url(${ghoul})`, borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link to="/Anime" alt="One punch man" name="#5" className="five" style={{backgroundImage: `url(${onePunch})`, borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link to="/Anime" alt="jojo" name="#6" className="six" style={{backgroundImage: `url(${jojo})`, borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link to="/Anime" alt="onepiece" name="#7" className="seven" style={{backgroundImage: `url(${onepiece})`, borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link to="/Anime" alt="Fullmetal aclhemist" name="#8" className="eight" style={{backgroundImage: `url(${fmab})`, borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link to="/Anime" alt="DeathNote" name="#9" className="nine" style={{backgroundImage: `url(${note})`, borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link to="/Anime" alt="Dr Stone" name="#10" className="ten" style={{backgroundImage: `url(${stone})`, borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link to="/Anime" alt="nichijou" name="#11" className="eleven" style={{backgroundImage: `url(${nichijou})`, borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link to="/Anime" alt="JujutsuKisen" name="#12" className="twelve" style={{backgroundImage: `url(${jujutsu})`, borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link to="/Anime" alt="demonslayer" name="#13" className="thirteen" style={{backgroundImage: `url(${slayer})`, borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Anime;



