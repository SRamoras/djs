import React from 'react';

import './Mainpage.css';

import Defaultcomponent from '../components/Defaultcomponent';
import Videocomponent from '../components/Videocomponent';
import ImageTextComponent from '../components/ImageTextComponent';
import HeaderImage from '../components/Headingimg';

import Image1 from '/images/drone1.png';
import Image2 from '/images/drone2.png';
import Image3 from '/images/9.jpg';
import Image4 from '/images/8.jpg';
import MainImg from '/images/7.jpg';
import SampleVideo from '/videos/video5.mp4';
import TextCenter from '../components/Textcenter';

import VideoTextComponent from '../components/VideoTextComponent';
const Mainpage = () => {
  return (
    <div className="main-page-container">
      {/* <Header /> */}
 

          <div className='space-between'>  

           <HeaderImage 
         image={MainImg}
         title="DJI Agriculture: Cultivating the Future of Farming"
         text="DJI Agriculture empowers modern farmers by harnessing state-of-the-art drone technology to optimize crop production and promote sustainable practices."
       />  



             <TextCenter 
        title="Intelligent and efficient, leading the future of agriculture" 
        text="The progress of agricultural production is inseparable from technological innovation. DJI Agriculture is guided by user needs and driven by technological innovation. It provides smart agriculture solutions based on drone technology to users around the world and promotes the transformation and upgrading of agricultural production."
      />
             



             <VideoTextComponent 
        title="DJI AGRAS T50"
        text="DJI AGRAS T50 takes drone farming to a whole new level. The system inherits a powerful coaxial twin-rotor propulsion system and a split anti-torque structure, providing greater stability when carrying a 40 kg spray or 50 kg spreading load ."
        videoSrc={SampleVideo}
      />



          <ImageTextComponent 
        image={Image1}
        title="DJI Mavic 3M"
        text="To make invisible problems visible, more precise eyes are needed. The new Mavic 3M aerial surveying drone integrates a visible light camera with a multispectral camera, allowing a full view of crop growth status and precise management of agricultural production."
        reverseRow={false}
      />
            <ImageTextComponent 
        image={Image2}
        title="DJI Terra"
        text="It can simulate and reconstruct farmland, orchards, and forest environments, conduct map construction and analysis on multispectral data, provide prescription maps for variable spraying/fertilization operations, plan autonomous operation routes, and comprehensively improve operation efficiency."
        reverseRow={true}
      />





<TextCenter 
        title="Solution" 
        text="
DJI Agriculture not only provides advanced agricultural intelligent equipment, but also provides smart agricultural solutions for customers such as farmers, growers, agricultural cooperatives, and agricultural service agencies. From sowing to harvesting, agricultural practitioners can save time, effort and worry."
      />


            <ImageTextComponent 
        image={Image3}
       title="Food Crop Solutions"
        text="Digital, intelligent and precise management of the planting of food crops such as rice, wheat and corn can be carried out to provide agricultural practitioners with more convenient and efficient farmland management solutions, reduce operating costs, and increase production, quality and income."
        reverseRow={false}
      />
                  <ImageTextComponent 
        image={Image4}
       title="Cash Crop Solutions"
        text="Digital, intelligent, and precise management of the planting of economic crops such as cotton, citrus, apples, and tea is carried out to provide agricultural practitioners with more convenient and efficient farmland management solutions, reduce operating costs, and increase production, quality, and income."
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
