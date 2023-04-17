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

              { type: 'troll', url: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png' },

              { type: 'troll2', url: 'https://www.youtube.com/embed/ygPmpYr3Q8A?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1', 
                                url2: 'https://www.youtube.com/embed/ygPmpYr3Q8A?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1',
                                url3: 'https://www.youtube.com/embed/ygPmpYr3Q8A?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1', 
                                url4: 'https://www.youtube.com/embed/ygPmpYr3Q8A?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1',
                                url5: 'https://www.youtube.com/embed/ygPmpYr3Q8A?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1',
                                url6: 'https://www.youtube.com/embed/ygPmpYr3Q8A?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1', 
                                url7: 'https://www.youtube.com/embed/ygPmpYr3Q8A?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1',
                                url8: 'https://www.youtube.com/embed/ygPmpYr3Q8A?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1', 
                                url9: 'https://www.youtube.com/embed/ygPmpYr3Q8A?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1',
                                url10: 'https://www.youtube.com/embed/ygPmpYr3Q8A?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'
              },


              { type: 'snoopDog', url: 'https://www.youtube.com/embed/DJfg39WkMvE?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'snoopDog', url: 'https://www.youtube.com/embed/dBqMxvqLQuw?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1&start=4'},

              { type: 'jackBlack', url: 'https://www.youtube.com/embed/ddWJatRxfz8?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1&start=50'},
              
              { type: 'video', url: 'https://www.youtube.com/embed/IGprEUpFmz0?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'video', url: 'https://www.youtube.com/embed/yUGZwlLoZh0?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'video', url: 'https://www.youtube.com/embed/K-bP87jsrW4?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'video', url: 'https://www.youtube.com/embed/h7FJ9ddRNdA?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'video', url: 'https://www.youtube.com/embed/Z93msbCiHnM?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'video', url: 'https://www.youtube.com/embed/PGfhtLrwiKo?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1&start=7'},

              { type: 'short', url: 'https://www.youtube.com/embed/2gMemLkfYWY?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'short', url: 'https://www.youtube.com/embed/iRTNUTcPZL4?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'short', url: 'https://www.youtube.com/embed/ny09IWBXVEo?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'short', url: 'https://www.youtube.com/embed/MfA6NAha2K0?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'short', url: 'https://www.youtube.com/embed/tY875eoXAj4?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'short', url: 'https://www.youtube.com/embed/08XyCs4yVEU?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'short', url: 'https://www.youtube.com/embed/SqE2J9V3a8A?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'short', url: 'https://www.youtube.com/embed/5edf0roC98A?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'short', url: 'https://www.youtube.com/embed/6eA4YXjOEnQ?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'short', url: '?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},

              { type: 'horror', url: 'https://i.postimg.cc/XNFqJFZP/horror-image.png' },
              // Add more images and YouTube links to the list
      ];

      const randomIndex = Math.floor(Math.random() * mediaList.length);
      const media = mediaList[randomIndex];

      if (media.type === 'image') {
        setTimeoutDuration(3000); // Set the timeout to 3 seconds
        return (
          <div>
            <img width="900" height="655" src={media.url} alt="random" />
          </div>
        );
      } else if (media.type === 'troll') {
        setIsDarkMode(false); // Set isDarkMode to false
        setTimeoutDuration(1000); // Set the timeout to 1 seconds
        return (
          <div>
            <img width="900" height="655" src={media.url} alt="random" />
          </div>
        );
      }else if (media.type === 'snoopDog') {
        setTimeoutDuration(79200); // Set the timeout to 1 seconds
        return (
          <div>
            <iframe width="900" height="655" src={media.url} title="YouTube video player" allow=" autoplay;  encrypted-media;"></iframe>
          </div>
        );
      }else if (media.type === 'longer') {
        setTimeoutDuration(1000); // Set the timeout to 1 seconds
        return (
          <div>
            <iframe width="900" height="655" src={media.url} title="YouTube video player" allow=" autoplay;  encrypted-media;"></iframe>
          </div>
        );
      }else if (media.type === 'horror') {
        setTimeoutDuration(3000); // Set the timeout to 15 seconds
        return (
          <div className="horror">
            <img width="600" height="355" src={media.url} alt="horror" />
          </div>
        );
      } else if (media.type === 'video') {
        setTimeoutDuration(15000); // Set the timeout to 15 seconds
        return (
          <div style={{ pointerEvents: 'none' }}>
            <iframe width="900" height="655" src={media.url} title="YouTube video player" allow=" autoplay;  encrypted-media;"></iframe>
          </div>
        );
      } else if (media.type === 'short') {
        setTimeoutDuration(9000); // Set the timeout to 8 seconds
        return (
          <div style={{ pointerEvents: 'none' }} >
            <iframe width="900" height="655" src={media.url} title="YouTube video player" allow="autoplay; encrypted-media;"></iframe>
          </div>
        );
      } else if (media.type === 'jackBlack') {
        setTimeoutDuration(33000); // Set the timeout to 33 seconds
        return (
          <div style={{ pointerEvents: 'none' }} >
            <iframe width="900" height="655" src={media.url} title="YouTube video player" allow="autoplay; encrypted-media;"></iframe>
          </div>
        );
        } else if (media.type === 'troll2') {
        setTimeoutDuration(8000); // Set the timeout to 8 seconds
        return (
          <div style={{ pointerEvents: 'none' }} >
            <iframe width="900" height="655" src={media.url} title="YouTube video player" frameborder="0" allow="autoplay; encrypted-media;"></iframe>
            <iframe width="900" height="655" src={media.url2} title="YouTube video player" frameborder="0" allow=" autoplay;  encrypted-media; " ></iframe>
            <iframe width="900" height="655" src={media.url3} title="YouTube video player" frameborder="0" allow=" autoplay;  encrypted-media; " ></iframe>
            <iframe width="900" height="655" src={media.url4} title="YouTube video player" frameborder="0" allow=" autoplay;  encrypted-media; " ></iframe>
            <iframe width="900" height="655" src={media.url5} title="YouTube video player" frameborder="0" allow=" autoplay;  encrypted-media; " ></iframe>
            <iframe width="900" height="655" src={media.url6} title="YouTube video player" frameborder="0" allow=" autoplay;  encrypted-media; " ></iframe>
            <iframe width="900" height="655" src={media.url7} title="YouTube video player" frameborder="0" allow=" autoplay;  encrypted-media; " ></iframe>
            <iframe width="900" height="655" src={media.url8} title="YouTube video player" frameborder="0" allow=" autoplay;  encrypted-media; " ></iframe>
            <iframe width="900" height="655" src={media.url9} title="YouTube video player" frameborder="0" allow=" autoplay;  encrypted-media; " ></iframe>
            <iframe width="900" height="655" src={media.url10} title="YouTube video player" frameborder="0" allow=" autoplay;  encrypted-media; " ></iframe>
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
    <div className="container3">
<div className="media" onClick={refreshMedia}>
        {media}
        {media && media.props.className === "horror" && <p>{unknownText}     he    {unknownText}     sees     {unknownText}      you     {unknownText}</p>}
      </div>
    </div>
  );
}

export default Fake;