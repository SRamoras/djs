import React, { useEffect, useRef } from 'react';
import './VideoTextComponent.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VideoTextComponent = ({ title, text, videoSrc }) => {
  const textRef = useRef(null);

  useEffect(() => {
    // Select the h1 and p elements within the content-text container
    const lines = textRef.current.querySelectorAll('h1, p');

    gsap.fromTo(
      lines,
      { y: 20, filter: 'blur(5px)', opacity: 0 },
      {
        y: 0,
        filter: 'blur(0px)',
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.3,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

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
      <div className="content-text" ref={textRef}>
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
