// BackgroundVideo.js
import React from 'react';
import './Background.css'; // Import your CSS file

const BackgroundVideo = () => {
  return (
    <div className="background-video">
      <video autoPlay loop muted className="video">
        <source src="/honeypie[enhanced].mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
