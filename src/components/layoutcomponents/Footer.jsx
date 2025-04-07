import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Footer.css';
import HoverLink from '../HoverLink'; // ajuste o caminho conforme sua estrutura de pastas

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
          <HoverLink href="/privacy-policy" text="Privacy Policy" />
        </div>
        <div>
          <HoverLink href="mailto:sales@scriptrunner.ai" text="sales@scriptrunner.ai" />
          <HoverLink href="/book-a-demo" text="Book a demo" />
          <HoverLink
            href="https://www.linkedin.com/company/scriptrunner"
            target="_blank"
            rel="noopener noreferrer"  
            text="Linkedin"
          />
        </div>
      </div>

      <div className="footer-text">
        {/* <h1>DJI Technology</h1> */}
        <img src="/images/djibrand.png" alt="DJI Brand" />
      </div>
    </footer>
  );
};

export default Footer;
