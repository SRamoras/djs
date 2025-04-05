import React, { useState } from 'react';
import Img from '/images/5.jpg';
import './Defaultcomponent.css';

const DefaultComponent = () => {
  // Set the first accordion item (index 0) as expanded by default.
  const [activeIndex, setActiveIndex] = useState(0);

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
      <div className="img-container">
        <img src={Img} alt="DJI Drone" />
      </div>

      <div className="default-component-text">
        <div className="text-container-sup">
          <h1>Revolutionize Your Aerial Perspective with DJI</h1>
          <p>
            Experience next-level aerial photography and videography with DJI drones. Engineered for precision and equipped with innovative features, our drones empower you to capture stunning visuals from the sky.
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
                <span className="accordion-number accordion-title">{item.number}</span>
               
                <div className='accordion-title-container'>
                <h3 className="accordion-title">{item.title}</h3>
             
              {activeIndex === index && (
                <>
                  <p className="accordion-content">{item.content}</p>  
                  <a href="">Read more</a>
                </>
              )} 
              
           
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
