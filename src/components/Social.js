import React from "react";

// import social data
import { social } from "../data.js";

const Social = () => {
  return (
    <ul className="flex space-x-6">
      {social.map((item, index) => {
        return (
          <li
            className="text-accent cursor-pointer"
            key={index}
          >
            <a className="flex items-center gap-2 text-base transition-all duration-300 hover:text-gray-500" href={item.href}>
              {item.icon}
              <p className='text-accent text-sm transition-all duration-300 hover:text-gray-500'>Instagram</p>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Social;
