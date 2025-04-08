import React from 'react';

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
  return (
    <div className="main-page-container">
      {/* <Header /> */}
 

          <div className='space-between'>  
    
          <HeaderImage 
        image={MainImge}
        title="DJI FlyCart 30"
        text="DJI FlyCart 30 is officially launched, dedicated to transporting goods. DJI FlyCart 30 is a long-distance heavy-duty transport aircraft with powerful signals and intelligence. It supports both cargo box and air crane modes, breaking the limitations of the traditional logistics industry and providing a safe, affordable and efficient aerial transportation solution."
      /> 
                    <TextCenter 
                 title="DJI Kids: A Flight of Fun and Discovery"
                  text="DJI Kids redefines the way young aviators explore the skies. With user-friendly controls, advanced safety systems, and a resilient design, it transforms play into a thrilling adventure. Every flight inspires creativity, nurtures new skills, and opens up a world of discovery for budding pilots."
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



<div className='main-page-content-text'>
<h1>Cost-effective, reliable and used by hundreds of pharmacies today</h1>
</div>




    </div>
  );
};

export default Mainpage;
