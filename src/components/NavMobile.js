import React, { useState } from "react";
import { FaSpa, FaInstagram } from 'react-icons/fa';  // Add FaInstagram import
import { GiFlowerPot, GiFlowerStar, GiFlowerTwirl } from 'react-icons/gi';

// import navigation data
import { navigation } from "../data";

// import icons
import { XIcon } from "@heroicons/react/outline";
import { MenuAlt3Icon } from "@heroicons/react/outline";

// import motion
import { motion } from "framer-motion";

// import link
import { Link } from "react-scroll";
const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Add handler to close menu
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // framer motion variantes
  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };
  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  const decorationVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 0.3, 
      y: 0,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <nav className="relative">
      {/* menu icon */}
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer text-white"
      >
        <MenuAlt3Icon className="w-8 h-8" />
      </div>

      {/* circle */}
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="w-4 h-4 rounded-full bg-[#9B8A65] fixed top-0 right-0"
      ></motion.div>

      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className={`${
          isOpen ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center 
        transition-all duration-300 overflow-hidden
        bg-gradient-to-b from-[#F5F2E9] to-[#EAE1D2]
        backdrop-blur-lg`}
      >
        {/* Instagram Icon */}
        <a 
          href="https://www.instagram.com/saramartins16/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-10 left-1/2 transform -translate-x-1/2 text-[#9B8A65] hover:text-[#7D7255] transition-all duration-300"
        >
          <FaInstagram className="w-8 h-8" />
        </a>

        {/* Decorative Elements */}
        <motion.div
          variants={decorationVariants}
          initial="initial"
          animate="animate"
          className="absolute top-20 left-10 text-[#9B8A65] opacity-30"
        >
          <GiFlowerPot className="w-12 h-12" />
        </motion.div>
        
        <motion.div
          variants={decorationVariants}
          initial="initial"
          animate="animate"
          className="absolute bottom-20 right-10 text-[#7D7255] opacity-30"
        >
          <FaSpa className="w-10 h-10" />
        </motion.div>

        <motion.div
          variants={decorationVariants}
          initial="initial"
          animate="animate"
          className="absolute top-1/3 right-20 text-[#9B8A65] opacity-30"
        >
          <GiFlowerStar className="w-8 h-8" />
        </motion.div>

        <motion.div
          variants={decorationVariants}
          initial="initial"
          animate="animate"
          className="absolute bottom-1/3 left-20 text-[#9B8A65] opacity-30"
        >
          <GiFlowerTwirl className="w-8 h-8" />
        </motion.div>

        {/* close icon */}
        <div
          onClick={() => setIsOpen(false)}
          className="cursor-pointer absolute top-8 right-8 
          bg-[#9B8A65] p-2 rounded-full hover:bg-[#7D7255] transition-all duration-300"
        >
          <XIcon className="w-6 h-6 text-white" />
        </div>
        {navigation.map((item, index) => {
          return (
            <li key={index} className="mb-8 relative group">
              <Link
                to={item.href}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-xl cursor-pointer capitalize text-[#7D7255] hover:text-[#9B8A65]
                transition-all duration-300 relative
                after:content-[''] after:absolute after:bottom-[-4px] after:left-0 
                after:w-0 after:h-[2px] after:bg-[#9B8A65] 
                after:transition-all after:duration-300
                hover:after:w-full"
                onClick={handleLinkClick}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </motion.ul>
    </nav>
  );
};

export default NavMobile;
