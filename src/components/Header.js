import React, { useState, useEffect } from "react";

// importar componentes
import Logo from "../assets/img/logo.png";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Social from "./Social";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? "bg-tertiary h-20" : "h-20"
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300 bg-tertiary`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* logo */}
        <a href="#">
          <img
            src={Logo}
            alt="logo"
            style={{
              width: "200px",
              height: "auto",
            }}
          />
        </a>
        {/* nav */}
        <div className="hidden lg:block">
            <Nav />
        </div>
        {/* social */}
        <div className="hidden lg:block">
            <Social />
        </div>
        {/* nav mobile */}
        <div className="lg:hidden">
            <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
