import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import './Mainpage.css';

import TextCenter from '../components/Textcenter';
import Defaultcomponent from '../components/Defaultcomponent';
import Videocomponent from '../components/Videocomponent';
import ImageTextComponent from '../components/ImageTextComponent';
import HeaderImage from '../components/Headingimg';

import Image1 from '/images/12.jpg';
import Image2 from '/images/13.jpg';
import Image3 from '/images/drone3.png';
import Image4 from '/images/drone4.png';
import MainImge from '/images/drone10.jpg';

const Mainpage = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      // Se houver um método de destruição para o Lenis, invoque-o aqui.
    };
  }, []);

  return (
    <div className="main-page-container">
      <div className="space-between">  
        <HeaderImage 
          image={MainImge}
          title="DJI FlyCart 30"
          text="DJI FlyCart 30 is officially launched, dedicated to transporting goods. DJI FlyCart 30 is a long-distance heavy-duty transport aircraft with powerful signals and intelligence. It supports both cargo box and air crane modes, breaking the limitations of the traditional logistics industry and providing a safe, affordable and efficient aerial transportation solution."
        /> 
<TextCenter 
  title="DJI Transportation: Redefining Aerial Logistics"
  text="DJI Transportation redefines how goods traverse the skies. With cutting-edge control systems, robust engineering, and efficient automation, it transforms routine deliveries into dynamic missions. Every flight optimizes supply chains, enhances connectivity, and paves the way for groundbreaking innovation in aerial logistics."
/>

        <ImageTextComponent 
          image={Image1}
          title="ROBOMASTER EP"
          text="The RoboMaster Education Expansion Kit opens the official SDK based on the RoboMaster S1 educational robot. It has rich software and hardware expansion capabilities, and is equipped with complete artificial intelligence, competition courses and the new RoboMaster Youth Challenge; it allows teachers to teach easily and students to learn easily, bringing a brand new experience to the classroom and expanding the new boundaries of future education."
          reverseRow={false}
        />
        <ImageTextComponent 
          image={Image2}
          title="DJI DeliveryHub"
          text="DJI DeliveryHub is a one-stop aerial transportation management platform. It helps achieve efficient operation planning, comprehensive operation status monitoring, centralized team resource management, and data collection and analysis."
          reverseRow={true}
        />
      </div> 

      <div className="main-page-content-text">
        <h1>Cost-effective, reliable and flown by hundreds of professionals today.</h1>
      </div>
    </div>
  );
};

export default Mainpage;