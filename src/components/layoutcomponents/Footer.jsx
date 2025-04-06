import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Footer.css';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const coverRef = useRef(null);

  useEffect(() => {
    // Cria uma timeline que será acionada durante o scroll
    gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top bottom", // inicia quando o topo do footer alcançar o fundo da viewport
        end: "bottom bottom", // termina quando o fundo do footer atingir o fundo da viewport
        scrub: true, // sincroniza a animação com o scroll
      }
    }).to(coverRef.current, { x: "100%", ease: "none" });
  }, []);

  return (
    <footer ref={footerRef} className="footer">
      {/* Camada que cobre o footer e será animada */}
      <div className="footer-cover" ref={coverRef}></div>

      <div className="footer-options">
        <div>
          <p>© 2025 Script Runner. All rights reserved.</p>    
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
        <div>
          <a href="mailto:sales@scriptrunner.ai">sales@scriptrunner.ai</a> 
          <a href="/book-a-demo">Book a demo</a>
          <a
            href="https://www.linkedin.com/company/scriptrunner"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </div>
      </div>

      <div className="footer-text">
        <h1>DJI Technology</h1>
      </div>
    </footer>
  );
};

export default Footer;
