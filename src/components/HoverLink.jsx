import React from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import './HoverLink.css';

const HoverLink = ({ href, text, dataReplace }) => {
  // Se dataReplace for fornecido, usamos ele; caso contrário, usamos o mesmo text.
  const hoverText = dataReplace || text;
  return (
    <p className='hover-link-container'>
   
      <a href={href}>
        {/* Versão default do conteúdo */}
        <span className="default">
          {text} <MdOutlineArrowOutward />
        </span>
        {/* Versão que aparece no hover */}
        <span className="hover">
          {hoverText} <MdOutlineArrowOutward color='#ffc400'/>
        </span>
      </a>
    </p>
  );
};

export default HoverLink;
