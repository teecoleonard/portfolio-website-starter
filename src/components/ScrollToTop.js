import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-7 bg-black hover:bg-black-hover text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50 flex items-center justify-center"
          style={{ width: '50px', height: '50px' }}
        >
          <FaArrowUp className="text-2xl mx-auto" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;