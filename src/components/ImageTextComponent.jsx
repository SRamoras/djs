import React from 'react';
import GradientButton from './GradientButton';
import './ImageTextComponent.css';

const ImageTextComponent = ({ image, title, text, reverseRow = false }) => {
  return (
    <div className={`image-text-wrapper ${reverseRow ? 'reverse' : ''}`}>
      <div className="image-container">
        <img src={image} alt="Display" />
      </div>
      <div className="text-container">
        <h1>{title}</h1>
        <p>{text}</p>
        <GradientButton onClick={() => alert('Botão clicado!')}>
          SEE MORE
        </GradientButton>
      </div>
    </div>
  );
};

export default ImageTextComponent;