import React from "react";
import OwnerImg from "../assets/img/banner-sara-semfundo2.png";
import FlowerBackground from "./FlowerBackground";
import BgMobile1 from "../assets/img/background/background-mobile2.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen lg:h-[85vh] flex
      items-center lg:bg-cover lg:bg-center lg:bg-no-repeat overflow-hidden 
      bg-gradient-to-r from-[#F5F2E9] to-[#EAE1D2] relative py-8 lg:py-0 pt-28 lg:pt-32" // Increased top padding
    >
      {/* First mobile background image */}
      <div className="lg:hidden absolute top-24 left-1/2 transform -translate-x-1/2 w-40 h-40 z-10">
        <img 
          src={BgMobile1} 
          alt="" 
          className="w-full h-full object-cover rounded-2xl border-2 border-[#9B8A65] shadow-md"
        />
      </div>

      <FlowerBackground />
      <div className="container mx-auto">
        <div className="flex items-center">
          {/* lado esquerdo */}
          <div className="flex-1 flex flex-col items-center lg:items-start space-y-6 lg:space-y-6 mt-20 lg:mt-8">
            <p className="text-lg text-[#9B8A65] mt-12 lg:mt-0">
              Eu sou Sara 👋
            </p>
            
            <h1 className="font-['Legquinne'] text-3xl lg:text-4xl leading-[44px] md:text-5x1 md:leading-tight lg:text-7x1 lg:leading-[1.2] font-bold md:tracking-[-2px] text-[#7D7255] mt-4">
              Sua Psicóloga
            </h1>
            
            <p className="max-w-[480px] text-base lg:text-lg text-center lg:text-left text-[#7d7255] mt-4 px-4 lg:px-0">
              Meu objetivo é ajudar você a encontrar equilíbrio emocional, superar desafios e construir uma vida mais leve e significativa. 
              Com um espaço acolhedor e sem julgamentos, estou aqui para caminhar ao seu lado nessa jornada de autoconhecimento e transformação. 
              Vamos juntos?
            </p>
            
            <div className="mt-8 mb-12 lg:mb-0">
              <a 
                href="https://wa.me/553591591652?text=Olá%20Sara,%20gostaria%20de%20agendar%20uma%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-md bg-[#9B8A65] text-white hover:bg-[#7D7255] md:btn-lg transition-all inline-flex items-center"
              >
                Me contate
              </a>
            </div>
          </div>
          
          {/* lado direito */}
          <div className="hidden lg:flex flex-1 justify-end items-end h-full">
            <img 
              src={OwnerImg} 
              alt="Sara Martins"
              className="rounded-xl mt-24" // Increased top margin
              style={{
                objectFit: "contain",
                objectPosition: "bottom",
                width: "100%",
                height: "auto",
                maxWidth: "600px",
                marginBottom: "-2rem" // Adjust this value to control how close to the next section
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;