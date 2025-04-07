import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Img from '/images/5.jpg';
import './DefaultComponent.css';

// Registra o plugin do ScrollTrigger no GSAP
gsap.registerPlugin(ScrollTrigger);

const DefaultComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    // Animação para o container de texto
    gsap.fromTo(
      textRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
      
        }
      }
    );

    // Animação para o container da imagem
    gsap.fromTo(
      imgRef.current,
      { y: 20, filter: 'blur(5px)', opacity: 0 },
      {
        y: 0,
        filter: 'blur(0px)',
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: imgRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
   
        }
      }
    );

    // Seleciona as linhas dentro do container de texto
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
          trigger: lines[0], // usa o primeiro elemento como trigger
          start: 'top 80%',
   
        }
      }
    );

    // Seleciona os headers do accordion
    const accordionHeaders = textRef.current.querySelectorAll('.accordion-header');
    gsap.fromTo(
      accordionHeaders,
      { y: 20, filter: 'blur(5px)', opacity: 0 },
      {
        y: 0,
        filter: 'blur(0px)',
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.3,
   
        scrollTrigger: {
          trigger: accordionHeaders[0], // usa o primeiro header como trigger
          start: 'top 80%',
       
        }
      }
    );
  }, []);

  const accordionData = [
    {
      number: "01",
      title: "Advanced Flight Stability",
      content:
        "Enjoy smooth, stable flights with DJI's state-of-the-art stabilization technology, designed to perform flawlessly in diverse conditions."
    },
    {
      number: "02",
      title: "High-Resolution Imaging",
      content:
        "Capture stunning aerial photography and videography with high-resolution cameras that deliver vivid colors and extraordinary detail."
    },
    {
      number: "03",
      title: "Intelligent Flight Modes",
      content:
        "Unlock creative possibilities with automated flight paths and intelligent tracking features, making it easier than ever to capture dynamic shots."
    }
  ];

  const handleAccordionClick = (index) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
    }
  };

  return (
    <div className="default-component-container">
      <div className="img-container" ref={imgRef}>
        <img src={Img} alt="DJI Drone" />
      </div>

      <div className="default-component-text" ref={textRef}>
        <div className="text-container-sup">
          <h1>
            <span className="line">Revolutionize Your Aerial Perspective with DJI</span>
          </h1>
          <p>
            <span className="line">
              Experience next-level aerial photography and videography with DJI drones. 
              Engineered for precision and equipped with innovative features, our drones empower you to capture stunning visuals from the sky.
            </span>    


          </p>
        </div>

        <ul className="accordion">
          {accordionData.map((item, index) => (
            <li
              key={index}
              className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleAccordionClick(index)}
            >
              <div className="accordion-header">
                <span className="accordion-number">{item.number}</span>
                <div className="accordion-title-container">
                  <h3 className="accordion-title">{item.title}</h3>
                  <div className={`accordion-content-wrapper ${activeIndex === index ? 'active' : ''}`}>
                    <p className="accordion-content">{item.content}</p>
                    <a href="">Read more</a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DefaultComponent;
