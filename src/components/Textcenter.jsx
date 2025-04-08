import React from 'react';
import './TextCenter.css';

const TextCenter = ({ title, text }) => {
  return (
    <div className="text-center-container">
      <h1 className="option-title">{title}</h1>
      <p className="option-text">{text}</p>
    </div>
  );
};

TextCenter.defaultProps = {
  title: 'Default Title',
  text: 'Default descriptive text goes here.'
};

export default TextCenter;
