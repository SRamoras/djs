import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './OptionComponent.css';
import { GiDeliveryDrone } from "react-icons/gi"; 
import { AiOutlineAntDesign } from "react-icons/ai";
import { GrTechnology } from "react-icons/gr";
import { MdEqualizer } from "react-icons/md";

const OptionComponent = () => {
  const textOptionsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const lines = textOptionsRef.current.querySelectorAll('.line');
    
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
          trigger: lines[0],
          start: 'top 80%',
       
        }
      }
    );
  }, []);

  const items = [
    {
      title: "Precision Engineering",
      icon: <GiDeliveryDrone size={50} />,
      text: "DJI drones incorporate advanced stabilization to capture smooth and detailed aerial footage."
    },
    {
      title: "Innovative Design",
      icon: <AiOutlineAntDesign size={50} />,
      text: "Experience sleek and intuitive controls that set the standard in modern aerial photography."
    },
    {
      title: "Cutting-Edge Technology",
      icon: <GrTechnology size={50} />,
      text: "From intelligent flight modes to state-of-the-art sensors, DJI drones deliver outstanding performance."
    },
    {
      title: "Unmatched Quality",
      icon: <MdEqualizer size={50} />,
      text: "Built with precision and durability, every DJI product ensures a superior experience in any environment."
    }
  ];
  
  // Duplicamos os itens para criar 2 conjuntos consecutivos
  const extendedItems = [...items, ...items];

  return (
    <div className="option-component">
      <div className="option-component-text">
        <div className="text-container-options" ref={textOptionsRef}>
          <h2 className="option-title line">
          Elevate Your Aerial Experience: Unleashing Creativity and Precision in the Skies
          </h2>
          <p className="option-text line">
          Discover our meticulously curated selection of innovative DJI products designed to transform the way you capture the world from above. Each drone is built with advanced stabilization systems, precision control, and intelligent flight modes that deliver smooth, reliable performance in every scenario. Whether you're shooting expansive landscapes or dynamic, fast-paced action, our high-resolution cameras render every detail with vibrant clarity and depth. Embrace a harmonious blend of cutting-edge technology and creative artistry that empowers both professionals and enthusiasts to push the boundaries of aerial photography and videography. With DJI, elevate your perspective and unlock endless creative possibilities in every flight.
          </p>
        </div>
      </div>
      <div className="carousel-container">
        <div className="carousel">
          {extendedItems.map((item, index) => (
            <div key={index} className="carousel-item">
              <span className="carousel-item-icon">{item.icon}</span>
              <h3 className="carousel-item-title">{item.title}</h3>
              <p className="carousel-item-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OptionComponent;
