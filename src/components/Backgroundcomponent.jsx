import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Backgroundcomponent.css';
import GradientButton from './GradientButton';
import Video3 from '/videos/video3.mp4';

const Backgroundcomponent = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lines = textRef.current.querySelectorAll('.line');

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
        }
      }
    );
  }, []);

  return (
    <div className="background-component-container">
      <div className="text-content" ref={textRef}>
        <h1 className="line">Revolutionize Your Aerial Perspective with DJI</h1>
        <p className="line background-component-container-text">
          Experience next-level aerial photography and videography with DJI drones. Engineered for precision and equipped with innovative features, our drones empower you to capture stunning visuals from the sky.
        </p>
        <div className="line">
          <GradientButton className="explore-button">Explore More</GradientButton>
        </div>
      </div>

      <div className="video-container-background">
        <video
          className="background-video-background"
          src={Video3}
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
};

export default Backgroundcomponent;
