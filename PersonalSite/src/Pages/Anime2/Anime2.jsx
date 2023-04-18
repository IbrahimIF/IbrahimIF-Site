import React from "react";
import {useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../../Components/Contexts/ThemeContext";
import "./Anime2.css"
import "../../Stylesheets/visible.css"
import SteinsGate from "../../Assets/Image buttons/SteinsGate.png"
import kekkeisensen from "../../Assets/Image buttons/bloodblockadebattlefront.png"
import steins from "../../Assets/Image buttons/stiensgateclocks.png"
import aot from "../../Assets/Image buttons/attackontitanbg.png"
import lupinIII from "../../Assets/Image buttons/lupin.png"
import onePunch from "../../Assets/Image buttons/onepunchmanbg.png"
import nichijou from "../../Assets/Image buttons/nichijoutitle.png"
import ghoul from "../../Assets/Image buttons/tokyo-ghoulbg.png"
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
        <div className="Title">
          <div className="textContainer">
            <br /> <br />
            <div className="title">
              <span className="block-title"></span>
              <h1 className="firstText">Top 10 anime</h1>
            </div>
          </div>
        </div>
        <div className="top-10">
          <div className="Anime">
            <Link to="/Anime" alt="Steins Gate" name="#1" className="one" style={{backgroundImage: `url(${steins})`, borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link to="/Anime" alt="BloodBlockateBattlefront" name="#2" className="two" style={{backgroundImage: `url(${kekkeisensen})`, borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link to="/Anime" alt="Attack on Titan" name="#3" className="three" style={{backgroundImage: `url(${aot})`, borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link to="/Anime" alt="Tokyo Ghoul" name="#4" className="four" style={{backgroundImage: `url(${ghoul})`, borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link to="/Anime" alt="One punch man" name="#5" className="five" style={{backgroundImage: `url(${onePunch})`, borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link to="/Anime" alt="lupin the third" name="#6" className="six" style={{backgroundImage: `url(${lupinIII}})`, borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link to="/Anime" alt="BloodBlockateBattlefront" name="#7" className="seven" style={{backgroundImage: `url(${steins})`, borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
              Kekkai Sensen
            </Link>
            <Link to="/Anime" alt="BloodBlockateBattlefront" name="#8" className="eight" style={{backgroundImage: `url(${steins})`, borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
              Kekkai Sensen
            </Link>
            <Link to="/Anime" alt="BloodBlockateBattlefront" name="#9" className="nine" style={{backgroundImage: `url(${steins})`, borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
              Kekkai Sensen
            </Link>
            <Link to="/Anime" alt="BloodBlockateBattlefront" name="#10" className="ten" style={{backgroundImage: `url(${nichijou})`, borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
              Kekkai Sensen
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Anime;



