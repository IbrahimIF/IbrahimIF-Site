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
    "": ["its very difficult to rank anime"],
    "#1": ["#1 - Fullmetal Alchemist", "", "10/10 songs", "comes full circle and nothings left behind", "compacted story, keeps you entertained", "10/10 writing, watched it 3 times", "", "I like it 10/10 would recommend to people who want to start on anime"],
    "#2": ["#2 - One Punch Man", "", "Saitama vs goku", "saitama vs suoperman", "saitama vs saitama", "saitama vs one punchman", "", "I like it 9/10 would recommend to people who want to start on anime"],
    "#3": ["#3 - Attack on Titan", "", "very good", "Very good", "VERY GOOD", "too many finals in the title", "", "I like it 8.9/10 would recommend to people who don't like anime or are too edgy"],
    "#4": ["#4 - Steins Gate","", "About time travelling nuff said", "some parts drag out, however the anime's best parts are the twists and shock value of the story", "its also based off a game", "", "feels very realistic I like it 9/10"],
    "#5": ["#5 - Kekkei Sensen", "", "best parts are the chase scenes", "", "I like it, 10/10, would watch again"],
    "#6": ["#6 - Dr Stone", "", "YES", "10/10 song", "Animation is 10/10", "I like it science and stuff, taught me more then my science lessons", "", "I like it 9/10"],
    "#7": ["#7 - Jujutsu Kisen", "", "Animation is sick 10/10", "song is elite", "that white haired guy is overatted", "", "I like it 9/10"],
    "#8": ["#8 - Nichijou", "", "very random", "I like random", "as in VERY RANDOM", "floring a deer in a wwe style reastling match out of no where", "opening is 100/10", "", "I like it 8.9/10"],
    "#9": ["#9 - Jojo's Bizzare Adventure", "", "part 1 is elite", "part 2 is leite", "part 3 is a dub", "part 4 is 10/10", "part 5 I haven't watched", "part 6 (I know its out)", "", "I like it 7.5/10 "],
    "#10": ["#10 - One Piece", "", "stoped at episode 518 in 2016", "cba for fishman islnad", "G8 arc is best arc 10/10", "I like chase scenes", "I WATCHED DUBBED GO AWAY", "", "I like it 7.8/10 would recommend to people who can firm 1000 episodes"],
    "#11": ["#11 - Demon Slayer", "", "Animation is elite", "song is elite", "the anime is overated", "8/10"],
    "#12": ["#12 - Tokyo Ghoul", "", "season 1 elite", "opening is elite", "season 2 fell off (not as hard as promise neverland)", "season 3 makes me want to vomit", "", "I like season 1 and 2 only it 8/10 "],
    "#13": ["#13 - Deathnote", "", "I take achip and eat it", "L", "near is shite", "I like the first part and the big brain moves in the anime", "", "I like it 8.9/10"],
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
            <span> my hero academia, vinland saga, lupin III, promised neverland</span>
          </div>
        </div>
          <div className="ContentAnime">
          <div className="Anime">

        {/*Fullmetal Alchemist*/}
        <Link onMouseOver={() => { fmabAudioHook.play(); setShowExplanation("#1"); }}
              onMouseOut={() => { fmabAudioHook.stop(); setShowExplanation(""); }} 
              to="https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood?q=fullmeta&cat=anime" alt="Fullmetal Alchemist" name="#8" className="fmabh" style={{backgroundImage: `url(${fmab})`, backgroundPosition: "center 40%", borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
        </Link>

        {/* One Punch Man*/}
        <Link onMouseOver={() => { onepunchAudioHook.play(); setShowExplanation("#2"); }}
              onMouseOut={() => { onepunchAudioHook.stop(); setShowExplanation(""); }} 
              to="https://myanimelist.net/anime/30276/One_Punch_Man?q=one%20punch&cat=anime" alt="One Punch Man" name="#5" className="one-punch" style={{backgroundImage: `url(${onePunch})`,  borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
        </Link>

        {/*Attack on Titan */}
        <Link onMouseOver={() => { aotAudioHook.play(); setShowExplanation("#3"); }}
              onMouseOut={() => { aotAudioHook.stop(); setShowExplanation(""); }} 
              to="https://myanimelist.net/anime/16498/Shingeki_no_Kyojin?q=attack%20on%20tit&cat=anime" alt="Attack on Titan" name="#3" className="attack-on-titan" style={{backgroundImage: `url(${aot})`, backgroundPosition: "center 20%", borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
        </Link>

        {/*Steins Gate*/}
        <Link onMouseOver={() => { steinsAudioHook.play(); setShowExplanation("#4");}}
              onMouseOut={() => { steinsAudioHook.stop(); setShowExplanation("");}} 
              to="https://myanimelist.net/anime/9253/Steins_Gate?q=steins%20gate&cat=anime" alt="Steins Gate" name="#1" className="steins-gate" style={{backgroundImage: `url(${steins})`, backgroundPosition: "center 10%", borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
        </Link>
      
        {/*Blood Blockade Battlefront*/}
        <Link onMouseOver={() => { bbbfAudioHook.play(); setShowExplanation("#5"); }}
              onMouseOut={() => { bbbfAudioHook.stop(); setShowExplanation(""); }} 
              to="https://myanimelist.net/anime/24439/Kekkai_Sensen?q=blood%20blockade&cat=anime" alt="Blood Blockade Battlefront" name="#2" className="bb-bf" style={{backgroundImage: `url(${kekkeisensen})`, backgroundPosition: "center 10%", borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
        </Link>

        {/*Dr. Stone*/}
        <Link onMouseOver={() => { drstoneAudioHook.play(); setShowExplanation("#6"); }}
              onMouseOut={() => { drstoneAudioHook.stop(); setShowExplanation(""); }} 
              to="https://myanimelist.net/anime/38691/Dr_Stone?q=dr%20stone&cat=anime" alt="Dr Stone" name="#10" className="dr-stone" style={{backgroundImage: `url(${stone})`, borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
        </Link>

        {/*Jujutsu Kaisen*/}
        <Link onMouseOver={() => { JujutsuAudioHook.play(); setShowExplanation("#7"); }}
              onMouseOut={() => { JujutsuAudioHook.stop(); setShowExplanation(""); }}  
              to="https://myanimelist.net/anime/40748/Jujutsu_Kaisen?q=jujutsu&cat=anime" alt="Jujutsu Kaisen" name="#12" className="jujutsu-kisen" style={{backgroundImage: `url(${jujutsu})`, borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
        </Link>

        {/*Nichijou*/}
        <Link onMouseOver={() => { nichijouAudioHook.play(); setShowExplanation("#8"); }}
              onMouseOut={() => { nichijouAudioHook.stop(); setShowExplanation(""); }} 
              to="https://myanimelist.net/anime/10165/Nichijou?q=nichi&cat=anime" alt="Nichijou" name="#11" className="nichijou" style={{backgroundImage: `url(${nichijou})`, backgroundPosition: "center 100%", borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
        </Link>

        {/*JoJo's Bizarre Adventure*/}
        <Link onMouseOver={() => { jojoAudioHook.play(); setShowExplanation("#9"); }}
              onMouseOut={() => { jojoAudioHook.stop(); setShowExplanation("");}} 
              to="https://myanimelist.net/anime/14719/JoJo_no_Kimyou_na_Bouken_TV?q=jojo&cat=anime" alt="JoJo's Bizarre Adventure" name="#6" className="jojos-ba" style={{backgroundImage: `url(${jojo})`, backgroundPosition: "center 44%", borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
        </Link>

        {/*One Piece*/}
        <Link onMouseOver={() => { onepieceAudioHook.play(); setShowExplanation("#10"); }}
              onMouseOut={() => { onepieceAudioHook.stop(); setShowExplanation(""); }} 
              to="https://myanimelist.net/anime/21/One_Piece" alt="One Piece" name="#7" className="one-piece" style={{backgroundImage: `url(${onepiece})`, borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
        </Link>

        {/*Demon Slayer*/}
        <Link onMouseOver={() => { slayerAudioHook.play(); setShowExplanation("#11"); }}
              onMouseOut={() => { slayerAudioHook.stop(); setShowExplanation(""); }} 
              to="https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba?q=demon&cat=anime" alt="Demon Slayer" name="#13" className="demon-slayer" style={{backgroundImage: `url(${slayer})`, borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
        </Link>

        {/*Death Note*/}
        <Link onMouseOver={() => { noteAudioHook.play(); setShowExplanation("#13"); }}
              onMouseOut={() => { noteAudioHook.stop(); setShowExplanation(""); }} 
              to="https://myanimelist.net/anime/1535/Death_Note?q=deathnote&cat=anime" alt="Death Note" name="#9" className="death-note" style={{backgroundImage: `url(${note})`, backgroundPosition: "center 60%", borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
        </Link>

        {/*Tokyo Ghoul*/}
        <Link onMouseOver={() => { tokyoAudioHook.play(); setShowExplanation("#12");}}
              onMouseOut={() => { tokyoAudioHook.stop(); setShowExplanation(""); }} 
              to="https://myanimelist.net/anime/22319/Tokyo_Ghoul?q=tok&cat=anime" alt="Tokyo Ghoul" name="#4" className="tokyo-ghoul" style={{backgroundImage: `url(${ghoul})`, borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
        </Link>

          </div>
          </div>
      </div>
    </div>
  );
}

export default Anime;



