import React from "react";
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

export default FlowerBackground;
