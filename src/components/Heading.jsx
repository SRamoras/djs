import React from 'react';
import './Heading.css';
import Mainvideo from '/videos/4k.mp4';

const Heading = () => {
  return (
    <div className="container">
      <div className="video-container">
        <video
          className="background-video"
          src={Mainvideo}
          autoPlay
          loop
          muted
        />
      </div>
      <div className="main-heading-text">
        <h1>Improving access to healthcare</h1>
        <p>Transform your existing pharmacy with AI powered prescription delivery and last-mile solutions.</p>
      </div>
    </div>
  );
};

export default Heading;
