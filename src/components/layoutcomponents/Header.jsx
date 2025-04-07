import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import Logo from '/images/logo.png';
import WhiteLogo from '/images/logowhite.png';
import GradientButton from '../GradientButton';

const Header = () => {
  const [textColor, setTextColor] = useState('white');
  const location = useLocation();

  useEffect(() => {
    const videoContainer = document.querySelector('.video-container');
    if (!videoContainer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Se a .video-container estiver visível, mantenha o texto (e o logo) em branco; caso contrário, use preto
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

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="header" style={{ color: textColor }}>
      <div className="logo">
        <Link to="/" onClick={handleLogoClick}>
          <img src={textColor === 'white' ? WhiteLogo : Logo} alt="Logo" />
        </Link>
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
