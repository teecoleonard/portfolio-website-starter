import React from "react";
import { services } from "../data";
import { motion } from "framer-motion";
import { GiFlowerStar, GiFlowerTwirl, GiFlowerPot } from 'react-icons/gi';
import { FaSpa } from 'react-icons/fa';

const FlowerBackground = () => {
  const flowers = [
    // Left side flowers
    { Icon: GiFlowerStar, size: "30px", left: "5%", top: "10%" },
    { Icon: GiFlowerTwirl, size: "25px", left: "15%", top: "25%" },
    { Icon: FaSpa, size: "20px", left: "8%", top: "40%" },
    { Icon: GiFlowerPot, size: "35px", left: "12%", top: "60%" },
    { Icon: GiFlowerStar, size: "28px", left: "7%", top: "80%" },
    
    // Center flowers
    { Icon: GiFlowerTwirl, size: "32px", left: "45%", top: "15%" },
    { Icon: FaSpa, size: "24px", left: "52%", top: "35%" },
    { Icon: GiFlowerStar, size: "28px", left: "48%", top: "55%" },
    { Icon: GiFlowerPot, size: "30px", left: "50%", top: "75%" },
    { Icon: GiFlowerTwirl, size: "22px", left: "47%", top: "90%" },
    
    // Right side flowers
    { Icon: GiFlowerStar, size: "35px", left: "85%", top: "8%" },
    { Icon: FaSpa, size: "26px", left: "90%", top: "30%" },
    { Icon: GiFlowerTwirl, size: "28px", left: "88%", top: "50%" },
    { Icon: GiFlowerPot, size: "32px", left: "92%", top: "70%" },
    { Icon: GiFlowerStar, size: "24px", left: "86%", top: "85%" },
    
    // Additional scattered flowers
    { Icon: GiFlowerTwirl, size: "20px", left: "25%", top: "20%" },
    { Icon: FaSpa, size: "22px", left: "35%", top: "65%" },
    { Icon: GiFlowerStar, size: "26px", left: "70%", top: "25%" },
    { Icon: GiFlowerPot, size: "24px", left: "75%", top: "45%" },
    { Icon: GiFlowerTwirl, size: "28px", left: "65%", top: "80%" }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {flowers.map((flower, index) => (
        <motion.div
          key={index}
          className="absolute text-[#9B8A65]"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 3
          }}
          style={{
            left: flower.left,
            top: flower.top,
            fontSize: flower.size
          }}
        >
          <flower.Icon />
        </motion.div>
      ))}
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="w-full section bg-gradient-to-r from-[#F5F2E9] to-[#EAE1D2] overflow-hidden relative">
      <FlowerBackground />
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="flex flex-col items-center text-center relative mb-12 lg:mb-16">
          <span className="absolute top-[-30px] lg:top-[-100px] left-1/2 transform -translate-x-1/2 text-black font-bold text-5xl lg:text-8xl font-['MADE_Soulmaze'] z-0 [-webkit-text-stroke:_0.5px_rgba(0,0,0,0.3)] opacity-60">
            SERVIÇOS
          </span>
          <hr className="w-80 h-[2px] mb-4 bg-[#9B8A65] opacity-100 rounded-full mt-8" />
          <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-6 lg:mb-9 relative mt-8 lg:mt-1- font-['Legquinne'] text-[#7D7255]">
            Sobre o meu trabalho
          </h2>
          <p className="subtitle">
          Oferecemos diversas terapias e serviços de Psicoterapia, com o objetivo de proporcionar um atendimento cada vez mais completo e eficaz para auxiliá-lo da melhor forma possível.


          </p>
        </div>
        {/* item grid */}
        <div className="grid lg:grid-cols-3 gap-4 sm:gap-8">
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <motion.div 
                className="bg-secondary p-6 rounded-2xl relative cursor-pointer"
                key={index}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <div 
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    backgroundImage: `linear-gradient(rgba(23, 23, 23, 0.7), rgba(23, 23, 23, 0.7)), url(${service.image})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    zIndex: 0
                  }}
                />
                <div className="relative">
                  <div className="text-accent rounded-sm w-12 h-12 flex items-center justify-center mb-24 text-[28px]">
                    {icon}
                  </div>
                  <h4 className="text-xl font-medium mb-2 text-white">{name}</h4>
                  <p className="text-gray-300">{description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
