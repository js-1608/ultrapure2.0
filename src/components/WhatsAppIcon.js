import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function WhatsAppIcon() {
  return (
    <div className=' '>
    <a
      href="https://wa.me/7428534141" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4   rounded-full bg-green-500 p-2 z-50  hover:bg-green-600 transition duration-300 pb-1g text-white shadow-lg"
    >
      <FontAwesomeIcon icon={faWhatsapp} size="2x" />
    </a>
    </div>
  );
}

export default WhatsAppIcon;
