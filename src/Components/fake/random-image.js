import React, { useState } from 'react';

const mediaList = [
  { type: 'image', url: 'https://example.com/image1.jpg' },
  { type: 'image', url: 'https://example.com/image2.jpg' },
  // Add 18 more images and videos to the list
];

function chooseRandomMedia() {
  const randomIndex = Math.floor(Math.random() * mediaList.length);
  const media = mediaList[randomIndex];
  if (media.type === 'image') {
    return <img src={media.url} alt="Random" />;
  } else {
    return <video src={media.url} autoPlay muted />;
  }
}

function App() {
  const [media, setMedia] = useState(chooseRandomMedia());

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

export default App;