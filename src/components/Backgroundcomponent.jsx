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
        <h1 className="line">Transform Your Skies: DJI's Aerial Revolution</h1>
        <p className="line background-component-container-text">
        Step into a new era of aerial exploration with DJI, where cutting-edge technology meets limitless creativity. Our drones are meticulously engineered with innovative flight systems and intelligent controls, enabling smooth maneuvers and precise performance even in the most challenging conditions. Capture crisp, detailed imagery and seamless video that brings your vision to life. With DJI, every flight is an invitation to explore, create, and push the boundaries of aerial photography and videography.
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
