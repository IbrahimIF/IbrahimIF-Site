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
              { type: 'image', url: 'https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&w=1000' },
              { type: 'image', url: 'https://i.postimg.cc/Xv2nv6qJ/matrix.webp' },
              { type: 'video', url: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1'},
              { type: 'video', url: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1'},
              { type: 'horror', url: 'https://i.pinimg.com/736x/00/a0/6d/00a06db4c3876537327ad51a60b71de6.jpg' },
              // Add more images and YouTube links to the list
      ];

      const randomIndex = Math.floor(Math.random() * mediaList.length);
      const media = mediaList[randomIndex];

      if (media.type === 'image') {
        setTimeoutDuration(10000); // Set the timeout to 10 seconds
        return (
          <div>
            <img src={media.url} alt="random" /> test
          </div>
        );
      } else if (media.type === 'horror') {
        setTimeoutDuration(15000); // Set the timeout to 15 seconds
        return (
          <div className="horror">
            <img src={media.url} alt="random" />
          </div>
        );
      } else if (media.type === 'video') {
        setTimeoutDuration(3000); // Set the timeout to 3 seconds
        return (
          <div>
            <iframe src={media.url} title="tesssssts" allowFullScreen />
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
    <div className="container">
      <div className="media" onClick={refreshMedia}>
        {media}
        {media && media.props.className === "horror" && <p>{unknownText}</p>}
      </div>
    </div>
  );
}

export default Fake;