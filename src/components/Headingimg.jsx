import React from 'react';
import './HeaderImage.css';

const HeaderImage = ({ image, title, text }) => {
  return (
    <div className="heading-wrapper">
      <div className="video-overlay">
        <img className="bg-image" src={image} alt="Background" />
      </div>
      <div className="heading-content">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

// Caso não sejam passados os props, serão usados os valores padrão:
HeaderImage.defaultProps = {
  image: '/images/6.jpg',
  title: 'DJI Kids: Inspiring Young Flyers',
  text: 'DJI Kids introduces children to drone flight with simple controls, robust safety features, and a durable design. Perfect for sparking creativity and exploration, it turns playtime into a safe aerial adventure.'
};

export default HeaderImage;
