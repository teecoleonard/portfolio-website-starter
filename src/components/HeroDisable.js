import React from "react";

// import imagem

import OwnerImg from "../assets/img/banner-sara-semfundo2.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex
    items-center lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden bg-primary" 
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-10">
          {/* lado esquerdo */}
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-lg text-accent mb-[22px]">Olá, Eu sou Sara 👋</p>
            <h1 className="text-4xl leading-[44px] md:text-5x1 md:leading-tight lg:text-7x1 lg:leading-[1.2] font-bold md:tracking-[-2px]">
                Sua Psicóloga
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">Especializada em *****. Meu objetivo é ajudar você a encontrar equilíbrio emocional, superar desafios e construir uma vida mais leve e significativa. Com um espaço acolhedor e sem julgamentos, estou aqui para caminhar ao seu lado nessa jornada de autoconhecimento e transformação. Vamos juntos?"</p>
            <button className="btn btn-md bg-accent hover:bg-accent md:btn-lg transition-all">Me contate</button>    
        </div>
          {/* lado direito */}
          <div className="hidden lg:flex flex-1 justify-end items-end h-full">
            <img src={OwnerImg} alt=""
                style={{
                    objectFit: "cover",
                    objectPosition: "top",
                    width: "100%",
                    height: "100%",
                }}></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
