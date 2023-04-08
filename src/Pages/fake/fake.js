import React from "react";
import "./fake.css"
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Stylesheets/index.css";
import "../../Stylesheets/Darkmode.css";
import ThemeContext from "../../Contexts/ThemeContext";
import "../../Stylesheets/visible.css";


function chooseRandomMedia() {
    const mediaList = [
      { type: 'image', url: 'https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&w=1000' },
      { type: 'image', url: 'https://i.postimg.cc/Xv2nv6qJ/matrix.webp' },
      { type: 'youtube', url: 'https://www.youtube.com/watch?v=ddWJatRxfz8&ab_channel=OctagonCollaboration' },
      { type: 'horror', url: 'https://i.pinimg.com/736x/00/a0/6d/00a06db4c3876537327ad51a60b71de6.jpg' },
      // Add more images and YouTube links to the list
    ];
  
    const randomIndex = Math.floor(Math.random() * mediaList.length);
    const media = mediaList[randomIndex];
  
    if (media.type === 'image') {
      return<div>
<img src={media.url} alt="random" /> test
      </div>;
      
    } else if (media.type === 'youtube') {
      // Extract the video ID from the YouTube URL
      const videoId = media.url.split('=')[1];
  
      // Set the player options
      const playerOpts = {
        height: '360',
        width: '640',
        videoId: videoId,
        playerVars: {
          autoplay: 1,
        },
      };
  
      // Create a new YouTube player if the YouTube API has finished loading
      if (window.YT) {
        const player = new window.YT.Player('youtube-player', playerOpts);
        return <div id="youtube-player" />;
      } else {
        return <div>YouTube API is loading...</div>;
      }
    } else if (media.type === 'horror') {
      return <div className="horror">
        <img src={media.url} alt="random" />
      </div>;

  }
}

 

function Fake() {
  const { isDarkMode, setIsDarkMode, isLeftMode, setIsLeftMode } = useContext(ThemeContext);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  const [media, setMedia] = useState(chooseRandomMedia());
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000); // Set the timeout to 5 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  function refreshMedia() {
    setMedia(chooseRandomMedia());
  }

  return (
    <div className="container">
      <div className="media" onClick={refreshMedia}>
        {media}

    </div>

    </div>
  );
}

export default Fake;