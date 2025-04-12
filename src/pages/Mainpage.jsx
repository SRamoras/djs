import React from 'react';
import './Mainpage.css';
import Heading from '../components/Heading';
import Component1 from '../components/Cards';
import Defaultcomponent from '../components/Defaultcomponent';
import Textcomponent from '../components/Textcomponent';
import Header from '../components/layoutcomponents/Header';
import OptionComponent from '../components/optioncomponent'; 
import Footer from '../components/layoutcomponents/Footer';
import Videocomponent from '../components/Videocomponent';
import Backgroundcomponent from '../components/Backgroundcomponent'; 
import HoverLink from '../components/HoverLink'; // Importando o componente HoverLink
const Mainpage = () => {
  return (
    <div className="main-page-container">
      {/* <Header /> */}
      <Heading />  
      <Textcomponent />
          <div className='space-between'>
      <Defaultcomponent />
 
      <Component1 />
     
      <OptionComponent />  
     
      <Backgroundcomponent />
     
      <Videocomponent />
   </div> 
      {/* <Footer />  */}
{/* <div className='main-page-content-text'>
      <h1>Welcome to the World of Drones</h1>
      <p>DJI drones represent the pinnacle of aerial innovation, combining cutting-edge technology with unrivaled precision. As the industry leader, DJI has set the benchmark for both amateur enthusiasts and professional cinematographers alike. Their state-of-the-art drones offer advanced stabilization, intuitive controls, and high-resolution imaging, enabling users to capture breathtaking perspectives from the skies.</p>
    </div> */}


<div className='main-page-content-text'>
<h1>Cost-effective, reliable and flown by hundreds of professionals today.</h1>
</div>




    </div>
  );
};

export default Mainpage;
