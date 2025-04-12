import React, { useEffect, useRef } from 'react';
import GradientButton from './GradientButton';
import './ImageTextComponent.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ImageTextComponent = ({ image, title, text, reverseRow = false }) => {
  const textRef = useRef(null);

  useEffect(() => {
    // Select the title, paragraph and button inside the text container
    const lines = textRef.current.querySelectorAll('h1, p, button');

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
    <div className={`image-text-wrapper ${reverseRow ? 'reverse' : ''}`}>
      <div className="image-container">
        <img src={image} alt="Display" />
      </div>
      <div className="text-container" ref={textRef}>
        <h1>{title}</h1>
        <p>{text}</p>
        <GradientButton onClick={() => alert('Botão clicado!')}>
          SEE MORE
        </GradientButton>
      </div>
    </div>
  );
};

export default ImageTextComponent;
