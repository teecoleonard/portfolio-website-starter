import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511999999999" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50"
      style={{ width: '60px', height: '60px' }}
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
};

export default WhatsAppButton;