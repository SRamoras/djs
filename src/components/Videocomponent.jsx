import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Mainvideo from '/videos/video2.mp4';
import './Videocomponent.css';
import GradientButton from './GradientButton';

const Videocomponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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

  const handleAccordionClick = (index) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
    }
  };

  return (
    <div className="default-component-container">
      <div className="img-container">
        <video
          className="background-video"
          src={Mainvideo}
          autoPlay
          loop
          muted
        />
      </div>

      <div className="default-component-text" ref={textRef}>
        <div className="text-container-sup">
          <h1 className="line">Elevate Your Vision with DJI</h1>
          <p className="line">
          Discover the art of aerial imaging with DJI’s state-of-the-art drone technology. Designed with advanced stabilization and smart flight systems, DJI drones open up new creative horizons. Whether capturing sweeping landscapes or dynamic action shots, every moment is rendered with exceptional clarity and precision. Explore the skies and transform your creative vision into reality with DJI.
          </p>
        </div>
        {/* Envolvemos o botão para aplicar a animação */}
        <div className="line">
          <GradientButton onClick={() => alert('Botão clicado!')}>
            SEE MORE
          </GradientButton>
        </div>
      </div>
    </div>
  );
};

export default Videocomponent;
