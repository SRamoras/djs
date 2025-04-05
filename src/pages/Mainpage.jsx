import React from 'react';
import './Mainpage.css';
import Heading from '../components/Heading';
import Component1 from '../components/Cards';
import Defaultcomponent from '../components/Defaultcomponent';
import Textcomponent from '../components/Textcomponent';
const Mainpage = () => {
  return (
    <div className="main-page-container">
      <Heading />  
      <Textcomponent />
      <Defaultcomponent />
      <Component1 />
    
<div className='main-page-content-text'>
      <h1>Welcome to the World of Drones</h1>
      <p>DJI drones represent the pinnacle of aerial innovation, combining cutting-edge technology with unrivaled precision. As the industry leader, DJI has set the benchmark for both amateur enthusiasts and professional cinematographers alike. Their state-of-the-art drones offer advanced stabilization, intuitive controls, and high-resolution imaging, enabling users to capture breathtaking perspectives from the skies.</p>
    </div>


    
    
    </div>
  );
};

export default Mainpage;
