import React from 'react';
import './VideoTextComponent.css';

const VideoTextComponent = ({ title, text, videoSrc }) => {
  return (
    <div className="media-content-wrapper">
      <div className="content-video">
        <video 
          className="video-player" 
          src={videoSrc} 
          autoPlay 
          loop 
          muted 
          playsInline 
        />
      </div>  
      <div className="content-text">
        <h1 className="content-title">{title}</h1>
        <p className="content-description">{text}</p>
      </div>
    </div>
  );
};

VideoTextComponent.defaultProps = {
  title: 'Default Title',
  text: 'Default descriptive text goes here.',
  videoSrc: '/videos/sample.mp4'
};

export default VideoTextComponent;
