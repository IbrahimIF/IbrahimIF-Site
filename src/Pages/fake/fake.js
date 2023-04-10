import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../../Components/Contexts/ThemeContext";
import { useRandomText } from "../../Components/RandomText/useRandomText";
import "./fake.css";
import "../../Stylesheets/index.css";
import "../../Stylesheets/Darkmode.css";
import "../../Stylesheets/visible.css";

function Fake() {
  // Theme context
  const { isDarkMode, setIsDarkMode, isLeftMode, setIsLeftMode } = useContext(ThemeContext);
  // Random text hook
  const unknownText = useRandomText();

  // Toggle dark mode
  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  const navigate = useNavigate();

  // Media state
  const [media, setMedia] = useState(null);
  const [timeoutDuration, setTimeoutDuration] = useState(null);

  // Choose random media
  useEffect(() => {
    function chooseRandomMedia() {
      const mediaList = [
              // Media list (images and videos)
              { type: 'image', url: 'https://i.postimg.cc/mkgq17LH/giganigga.jpg' },
              { type: 'image', url: 'https://i.postimg.cc/cCzDKjkp/IMG-4608.jpg' },
              { type: 'image', url: 'https://i.postimg.cc/xTH7JjYg/troll-face-gif.jpg' },

              { type: 'video', url: 'https://www.youtube.com/embed/_JuFBDI1jkg?autoplay=1&controls=0'}, 
              { type: 'video', url: 'https://www.youtube.com/embed/ddWJatRxfz8?autoplay=1&controls=0'},
              { type: 'video', url: 'https://www.youtube.com/embed/IGprEUpFmz0?autoplay=1&controls=0'},
              { type: 'video', url: 'https://www.youtube.com/embed/IRPo671GHxI?autoplay=1&controls=0'},
              { type: 'video', url: 'https://www.youtube.com/embed/yUGZwlLoZh0?autoplay=1&controls=0'},
              { type: 'video', url: 'https://www.youtube.com/embed/K-bP87jsrW4?autoplay=1&controls=0'},
              { type: 'video', url: 'https://www.youtube.com/embed/u3MFk4qTsFI?autoplay=1&controls=0'},
              { type: 'video', url: 'https://www.youtube.com/embed/h7FJ9ddRNdA?autoplay=1&controls=0'},

              { type: 'short', url: 'https://www.youtube.com/embed/ny09IWBXVEo?autoplay=1&controls=0'},
              { type: 'short', url: 'https://www.youtube.com/embed/MfA6NAha2K0?autoplay=1&controls=0'},
              { type: 'short', url: 'https://www.youtube.com/embed/tY875eoXAj4?autoplay=1&controls=0'},
              { type: 'short', url: 'https://www.youtube.com/embed/ygPmpYr3Q8A?autoplay=1&controls=0', url2: 'https://www.youtube.com/embed/ygPmpYr3Q8A?autoplay=1&controls=0'},
              { type: 'short', url: 'https://www.youtube.com/embed/08XyCs4yVEU?autoplay=1&controls=0'},
              { type: 'short', url: 'https://www.youtube.com/embed/SqE2J9V3a8A?autoplay=1&controls=0'},
              { type: 'short', url: 'https://www.youtube.com/embed/5edf0roC98A?autoplay=1&controls=0'},
              { type: 'short', url: '?autoplay=1&controls=0'},

              { type: 'horror', url: 'https://i.postimg.cc/XNFqJFZP/horror-image.png' },
              // Add more images and YouTube links to the list
      ];

      const randomIndex = Math.floor(Math.random() * mediaList.length);
      const media = mediaList[randomIndex];

      if (media.type === 'image') {
        setTimeoutDuration(3000); // Set the timeout to 10 seconds
        return (
          <div>
            <img width="900" height="655" src={media.url} alt="random" />
          </div>
        );
      } else if (media.type === 'horror') {
        setTimeoutDuration(3000); // Set the timeout to 15 seconds
        return (
          <div className="horror">
            <img width="600" height="355" src={media.url} alt="horror" />
          </div>
        );
      } else if (media.type === 'video') {
        setTimeoutDuration(15000); // Set the timeout to 15 seconds
        return (
          <div>
            <iframe width="900" height="655" src={media.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        );
      } else if (media.type === 'short') {
        setTimeoutDuration(8000); // Set the timeout to 8 seconds
        return (
          <div>
            <iframe width="900" height="655" src={media.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <iframe width="700" height="455" src={media.url2} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        );
      }
    }

    setMedia(chooseRandomMedia());
  }, []);

  // Set the timeout based on the selected media type
  useEffect(() => {
    if (timeoutDuration !== null) {
      const timer = setTimeout(() => {
        navigate("/");
      }, timeoutDuration);

      // Cleanup function
      return () => {
        clearTimeout(timer);
      };
    }
  }, [timeoutDuration, navigate]);

  // Refresh media on click
  function refreshMedia() {
    setMedia(null);
  }

  return (
    <div className="container2">
      <div className="media" onClick={refreshMedia}>
        {media}
        {media && media.props.className === "horror" && <p>{unknownText}     he    {unknownText}     sees     {unknownText}      you     {unknownText}</p>}
      </div>
    </div>
  );
}

export default Fake;