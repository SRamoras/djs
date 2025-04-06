import React, { useState } from 'react';
import './OptionComponent.css';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiDeliveryDrone } from "react-icons/gi"; 
import { AiOutlineAntDesign } from "react-icons/ai";
import { GrTechnology } from "react-icons/gr";
import { MdEqualizer } from "react-icons/md";

const OptionComponent = () => {
  // Lista de itens do carrossel
  const items = [
    {
      title: "Precision Engineering",
      icon: <GiDeliveryDrone size={50} />,
      text: "DJI drones incorporate advanced stabilization to capture smooth and detailed aerial footage."
    },
    {
      title: "Innovative Design",
      icon: <AiOutlineAntDesign  size={50} />,
      text: "Experience sleek and intuitive controls that set the standard in modern aerial photography."
    },
    {
      title: "Cutting-Edge Technology",
      icon: <GrTechnology  size={50} />,
      text: "From intelligent flight modes to state-of-the-art sensors, DJI drones deliver outstanding performance."
    },
    {
      title: "Unmatched Quality",
      icon: <MdEqualizer  size={50} />,
      text: "Built with precision and durability, every DJI product ensures a superior experience in any environment."
    }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevItem = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="option-component">
        <div className='option-component-text'>
   <div className='text-container-options'> <h2 className="option-title">
  Experience the Next Generation of DJI Aerial Innovations for Unparalleled Creativity and Mastery
</h2>

      <p className="option-text">
  Discover our meticulously curated selection of innovative DJI products designed to elevate your aerial experience. From state-of-the-art drones engineered with cutting-edge stabilization and precision control to high-resolution cameras that capture every detail in vivid clarity, our range blends advanced technology with artistic vision.
</p></div> 

<div className='option-component-buttons'>
<button 
          className="arrow left-arrow" 
          onClick={prevItem} 
          disabled={currentIndex === 0}
        >
        <FaArrowLeftLong />
        </button>
      
        <button 
          className="arrow right-arrow" 
          onClick={nextItem} 
          disabled={currentIndex === items.length - 1}
        >
     <FaArrowRightLong />
        </button>
</div>
</div>
<div className="carousel-container">
        <div
          className="carousel"
          style={{ transform: `translateX(-${currentIndex * 40}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            >
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
