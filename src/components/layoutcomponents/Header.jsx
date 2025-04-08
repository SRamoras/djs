import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import Logo from '/images/logo.png';
import WhiteLogo from '/images/logowhite.png';
import GradientButton from '../GradientButton';

const Header = () => {
  const [textColor, setTextColor] = useState('white');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const videoContainer = document.querySelector('.video-container');
    if (!videoContainer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setTextColor(entry.isIntersecting ? 'white' : 'black');
      },
      { threshold: 0 }
    );

    observer.observe(videoContainer);
    return () => observer.disconnect();
  }, []);

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header" style={{ color: textColor }}>
      <div className="header-top">
        <div className="logo">
          <Link to="/" onClick={handleLogoClick}>
            <img src={textColor === 'white' ? WhiteLogo : Logo} alt="Logo" />
          </Link>
        </div>
        <div className="header-actions">
          {/* Botão hamburger: visível apenas no mobile */}
          <button className="hamburger-btn" onClick={toggleMenu}>
            <span className="hamburger-icon"></span>
          </button>
          {/* Navegação inline: visível apenas no desktop */}
          <nav className="nav-links" style={{ color: textColor }}>
            <Link to="/" style={{ color: textColor }}>Home</Link>
            <Link to="/kids" style={{ color: textColor }}>Dji kids</Link>
            <Link to="/agriculture" style={{ color: textColor }}>Dji Agriculture</Link>
            <Link to="/transportation" style={{ color: textColor }}>Dji Transportation</Link>
          </nav>
          {/* Botão Gradient sempre visível */}
          <GradientButton className="gradient-btn">Get Started</GradientButton>
        </div>
      </div>
      {/* Menu dropdown para mobile */}
      {isMenuOpen && (
        <nav className="nav-dropdown" style={{ color: textColor }}>
          <ul>
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)} style={{ color: textColor }}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} style={{ color: textColor }}>About</Link>
            </li>
            <li>
              <Link to="/services" onClick={() => setIsMenuOpen(false)} style={{ color: textColor }}>Services</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} style={{ color: textColor }}>Contact</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
