import React from "react";

// import social data
import { social } from "../data.js";

const Social = () => {
  return (
    <ul className="flex space-x-6">
      {social.map((item, index) => {
        return (
          <li
            className="flex justify-center items-center text-accent"
            key={index}
          >
            <a className="text-base" href={item.href}>
              {item.icon}
              <p className='text-accent text-sm'>Instagram</p>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Social;
