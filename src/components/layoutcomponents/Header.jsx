import React, { useState, useEffect } from 'react';
import './Header.css';
import Logo from '/images/logo.png'; // Certifique-se de que o caminho está correto
import GradientButton from '../GradientButton';
const Header = () => {
  const [textColor, setTextColor] = useState('white');

  useEffect(() => {
    // Selecione o elemento de referência para a mudança de cor
    const videoContainer = document.querySelector('.video-container');
    if (!videoContainer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Quando a .video-container estiver pelo menos 50% visível, use branco
        // Caso contrário, altere para preto
        setTextColor(entry.isIntersecting ? 'white' : 'black');
      },
      {
        threshold: 0,
      }
    );

    observer.observe(videoContainer);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header className="header" style={{ color: textColor }}>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <nav className="nav-buttons">
        <button className="btn">Home</button>
        <button className="btn">About</button>
        <button className="btn">Services</button>
        <button className="btn">Contact</button>
        <GradientButton className="btn">Get Started</GradientButton>
      </nav>
    </header>
  );
};

export default Header;
