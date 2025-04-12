import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'; // certifique-se de instalar: npm install @studio-freight/lenis
import './Mainpage.css';

import TextCenter from '../components/Textcenter';
import Defaultcomponent from '../components/Defaultcomponent';
import Videocomponent from '../components/Videocomponent';
import ImageTextComponent from '../components/ImageTextComponent';
import HeaderImage from '../components/Headingimg';

import Image1 from '/images/drone1.png';
import Image2 from '/images/drone2.png';
import Image3 from '/images/drone3.png';
import Image4 from '/images/drone4.png';
import MainImg from '/images/6.jpg';

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
      // Se houver algum método de destruição para o Lenis, chame-o aqui.
    };
  }, []);

  return (
    <div className="main-page-container">
      <div className='space-between'>  
        <HeaderImage 
          image={MainImg}
          title="DJI Kids: Inspiring Young Flyers"
          text="DJI Kids introduces children to drone flight with simple controls, robust safety features, and a durable design. Perfect for sparking creativity and exploration, it turns playtime into a safe aerial adventure."
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
          title="ROBOMASTER S1"
          text="RoboMaster S1 is an intelligent educational robot that helps you learn programming, robot control, and artificial intelligence in an entertaining way. S1 supports omnidirectional movement, bringing an immersive first-person driving and water shooting experience, and has single-player and multiplayer competitive modes, allowing you to play to your heart's content!"
          reverseRow={true}
        />
        <ImageTextComponent 
          image={Image3}
          title="ROBOMASTER TT"
          text="As DJI's educational aerial drone, RoboMaster TT is committed to lowering the threshold for learning robotics and artificial intelligence, and cultivating students' curiosity and self-confidence when they first come into contact with science and technology education. To this end, RoboMaster TT embraces open source and upgrades based on Tello EDU, realizing multi-machine collaborative control, artificial intelligence applications, etc. through rich software and hardware expandability. At the same time, TT's comprehensive drone and artificial intelligence courses and new competition system bring a brand new experience to robotics education and fully stimulate students' creativity."
          reverseRow={false}
        />
        <ImageTextComponent 
          image={Image4}
          title="TELLO EDU"
          text="Tello EDU is a powerful educational programming drone that allows you to easily learn programming languages ​​such as Scratch, Python and Swift. It supports SDK 2.0, which allows for richer command and data interactions. You can combine the 'Battle Card' to write code to command multiple Tello EDUs to fly in formation, or develop wonderful AI (artificial intelligence) applications for it, making programming lively and interesting."
          reverseRow={true}
        />
      </div> 

      <div className='main-page-content-text'>
        <h1>Cost-effective, reliable and flown by hundreds of professionals today.</h1>
      </div>
    </div>
  );
};

export default Mainpage;
