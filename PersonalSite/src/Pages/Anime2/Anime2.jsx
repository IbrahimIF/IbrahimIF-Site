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
import nichijou from "../../Assets/Image buttons/nichijoubg.png"
import ghoul from "../../Assets/Image buttons/tokyo-ghoulbg.png"
import jojo from "../../Assets/Image buttons/Stardust.Crusadersbg.png"
import onepiece from "../../Assets/Image buttons/Onepiecebg.png"
import fmab from "../../Assets/Image buttons/full-metal-alchemistbg.png"
import note from "../../Assets/Image buttons/DeathNotebg.png"
import stone from "../../Assets/Image buttons/dr-stonebg.png"
import jujutsu from "../../Assets/Image buttons/Jujutsu-Kisenbg.png"
import slayer from "../../Assets/Image buttons/demon-slayer.png"

import slayerAudio from "../../Assets/Audio/Demon Slayer.mp3"
import steinsAudio from "../../Assets/Audio/Steins;Gate.mp3"
import aotAudio from "../../Assets/Audio/Attack on titan.mp3"
import onepunchAudio from "../../Assets/Audio/One Punch Man.mp3"
import nichijouAuido from "../../Assets/Audio/Nichijou.mp3"
import onepieceAudio from "../../Assets/Audio/One Piece.mp3"
import drstoneAudio from "../../Assets/Audio/Dr Stone.mp3"
import fmabAudio from "../../Assets/Audio/Fmab.mp3"
import noteAudio from "../../Assets/Audio/Death Note.mp3"
import jojoAudio from "../../Assets/Audio/JoJo's bizzare adventure.mp3"
import bbbfAudio from "../../Assets/Audio/Kekkai Sensen.mp3"
import tokyoAudio from "../../Assets/Audio/Tokyo Ghoul.mp3"
import JujutsuAudio from "../../Assets/Audio/Jujutsu Kaisen.mp3"


function useAudio(src) {
  const [audio] = useState(new Audio(src));

  const play = () => {
    audio.currentTime = 0;
    audio.play();
  };

  const stop = () => {
    audio.pause();
  };

  return { play, stop };
}

function formatExplanationText(explanation) {
  return explanation.map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
}



  function Anime() {

  const [showExplanation, setShowExplanation] = useState("");

  const {isLeftMode} = useContext(ThemeContext);

  const steinsAudioHook = useAudio(steinsAudio);
  const bbbfAudioHook = useAudio(bbbfAudio);
  const aotAudioHook = useAudio(aotAudio);
  const tokyoAudioHook = useAudio(tokyoAudio);
  const onepunchAudioHook = useAudio(onepunchAudio);
  const jojoAudioHook = useAudio(jojoAudio);
  const onepieceAudioHook = useAudio(onepieceAudio);
  const fmabAudioHook = useAudio(fmabAudio);
  const noteAudioHook = useAudio(noteAudio);
  const drstoneAudioHook = useAudio(drstoneAudio);
  const nichijouAudioHook = useAudio(nichijouAuido);
  const JujutsuAudioHook = useAudio(JujutsuAudio);
  const slayerAudioHook = useAudio(slayerAudio);

  useEffect(() => {
    document.querySelector(".navbar").classList.toggle("visible", isLeftMode);
    document.querySelector(".navbutton").classList.toggle("visible", isLeftMode);
    document.querySelector(".dark-button").classList.toggle("visible", isLeftMode);
    document.querySelector(".container").classList.toggle("visible", isLeftMode);
  }, [isLeftMode]);

  const explanationTexts = {
    "": [],
    "hover": "hover over a button to see the explanation",
    "#1": ["#1 - Steins Gate","", "lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum"],
    "#2": ["#2 - Kekkei Sensen", "", "lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum"],
    "#3": ["#3 - Attack on Titan", "", "lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum"],
    "#4": ["#4 - Tokyo Ghoul", "", "lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum"],
    "#5": ["#5 - One Punch Man", "", "lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum"],
    "#6": ["#6 - Jojo's Bizzare Adventure", "", "lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum"],
    "#7": ["#7 - One Piece", "", "lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum"],
    "#8": ["#8 - Fullmetal Alchemist", "", "lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum"],
    "#9": ["#9 - Deathnote", "", "lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum"],
    "#10": ["#10 - Dr Stone", "", "lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum"],
    "#11": ["#11 - Nichijou", "", "lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum"],
    "#12": ["#12 - Jujutsu Kisen", "", "lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum"],
    "#13": ["#13 - Demon Slayer", "", "lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum"],
  };

  return (
    <div className="container">
      <div className="boxAnime">
        <div className="ContentBox">
          <div className="titleContainer">
            <div className="title">
              <span className="block-title"></span>
              <h1 className="firstText">Top 10 anime</h1>
            </div>
          </div>
          <div className="text-box">
            <div className={`text-section ${showExplanation && "show"}`}>
              <p>{formatExplanationText(explanationTexts[showExplanation])}</p>
            </div>
          </div>
          <div className="text-box2">
            <h3>Honurable mentions:</h3>
            <span> </span>
          </div>
        </div>
          <div className="ContentAnime">
          <div className="Anime">
            <Link onMouseOver={() => {
              steinsAudioHook.play();
                setShowExplanation("#1");
              }}
              onMouseOut={() => {
                steinsAudioHook.stop();
                  setShowExplanation("");
              }} 
            to="/Anime" alt="Steins Gate" name="#1" className="one" style={{backgroundImage: `url(${steins})`, backgroundPosition: "center 10%", borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link  onMouseOver={() => {
              bbbfAudioHook.play();
                setShowExplanation("#2");
              }}
              onMouseOut={() => {
                bbbfAudioHook.stop();
                setShowExplanation("");
              }} 
            to="/Anime" alt="BloodBlockateBattlefront" name="#2" className="two" style={{backgroundImage: `url(${kekkeisensen})`, backgroundPosition: "center 10%", borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link onMouseOver={() => {
              aotAudioHook.play();
                setShowExplanation("#3");
              }}
              onMouseOut={() => {
                aotAudioHook.stop();
                setShowExplanation("");
              }} 
            to="/Anime" alt="Attack on Titan" name="#3" className="three" style={{backgroundImage: `url(${aot})`, backgroundPosition: "center 20%", borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link onMouseOver={() => {
              tokyoAudioHook.play();
                setShowExplanation("#4");
              }}
              onMouseOut={() => {
                tokyoAudioHook.stop();
                setShowExplanation("");
              }} 
            to="/Anime" alt="Tokyo Ghoul" name="#4" className="four" style={{backgroundImage: `url(${ghoul})`, borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link onMouseOver={() => {
              onepunchAudioHook.play();
                setShowExplanation("#5");
              }}
              onMouseOut={() => {
                onepunchAudioHook.stop();
                setShowExplanation("");
              }} 
            to="/Anime" alt="One punch man" name="#5" className="five" style={{backgroundImage: `url(${onePunch})`,  borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link onMouseOver={() => {
              jojoAudioHook.play();
                setShowExplanation("#6");
              }}
              onMouseOut={() => {
                jojoAudioHook.stop();
                setShowExplanation("");
              }} 
            to="/Anime" alt="jojo" name="#6" className="six" style={{backgroundImage: `url(${jojo})`, backgroundPosition: "center 44%",borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link onMouseOver={() => {
                onepieceAudioHook.play();
                setShowExplanation("#7");
              }}
              onMouseOut={() => {
                onepieceAudioHook.stop();
                setShowExplanation("");
              }} 
            to="/Anime" alt="onepiece" name="#7" className="seven" style={{backgroundImage: `url(${onepiece})`, borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link onMouseOver={() => {
              fmabAudioHook.play();
                setShowExplanation("#8");
              }}
              onMouseOut={() => {
                fmabAudioHook.stop();
                setShowExplanation("");
              }} 
            to="/Anime" alt="Fullmetal aclhemist" name="#8" className="eight" style={{backgroundImage: `url(${fmab})`, backgroundPosition: "center 40%", borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link onMouseOver={() => {
              noteAudioHook.play();
                setShowExplanation("#9");
              }}
              onMouseOut={() => {
                noteAudioHook.stop();
                setShowExplanation("");
              }} 
             to="/Anime" alt="DeathNote" name="#9" className="nine" style={{backgroundImage: `url(${note})`, backgroundPosition: "center 60%", borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link onMouseOver={() => {
             drstoneAudioHook.play();
                setShowExplanation("#10");
              }}
              onMouseOut={() => {
                drstoneAudioHook.stop();
                setShowExplanation("");
              }} 
             to="/Anime" alt="Dr Stone" name="#10" className="ten" style={{backgroundImage: `url(${stone})`, borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link onMouseOver={() => {
              nichijouAudioHook.play();
                setShowExplanation("#11");
              }}
              onMouseOut={() => {
                nichijouAudioHook.stop();
                setShowExplanation("");
              }} 
            o="/Anime" alt="nichijou" name="#11" className="eleven" style={{backgroundImage: `url(${nichijou})`, backgroundPosition: "center 100%", borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link onMouseOver={() => {
              JujutsuAudioHook.play();
                setShowExplanation("#12");
              }}
              onMouseOut={() => {
                JujutsuAudioHook.stop();
                setShowExplanation("");
              }}  
            to="/Anime" alt="JujutsuKisen" name="#12" className="twelve" style={{backgroundImage: `url(${jujutsu})`, borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link onMouseOver={() => {
              slayerAudioHook.play();
                setShowExplanation("#13");
              }}
              onMouseOut={() => {
                slayerAudioHook.stop();
                setShowExplanation("");
              }} 
              to="/Anime" alt="demonslayer" name="#13" className="thirteen" style={{backgroundImage: `url(${slayer})`, borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
          </div>
          </div>
          
      </div>
    </div>
  );
}

export default Anime;



