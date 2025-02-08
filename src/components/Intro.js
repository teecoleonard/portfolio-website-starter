import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MobileBg from '../assets/img/background/background-mobile.jpg';

const Intro = () => {
  const [isVisible, setIsVisible] = useState(true);
  const hasScrolled = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !hasScrolled.current) {
        setIsVisible(false);
        hasScrolled.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Reset hasScrolled when component unmounts or page is refreshed
    return () => {
      window.removeEventListener('scroll', handleScroll);
      hasScrolled.current = false;
    };
  }, []);

  // Reset state when page is refreshed
  useEffect(() => {
    setIsVisible(true);
    hasScrolled.current = false;
  }, []);

  return (
    <AnimatePresence>
      {isVisible && !hasScrolled.current && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 0.95,
            transition: { 
              duration: 0.5,
              ease: "easeInOut"
            }
          }}
          className="fixed inset-0 z-50 lg:hidden"
        >
          <motion.div
            className="w-full h-full bg-cover bg-center relative"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${MobileBg})`
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-white"
            >
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl font-bold mb-8 font-[Legquinne] text-orange-300"
              >
                Olá, Bem-vindo(a)
              </motion.h1>
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1] 
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-center"
              >
                <p className="mb-2 text-lg">Role para baixo</p>
                <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Intro;