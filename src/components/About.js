import React from "react";
import Image from "../assets/img/about-sara.jpg";
import FlowerBackground from "./FlowerBackground";

const About = () => {
  return (
    <section id="about" className="section bg-accent relative">
      <FlowerBackground />
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center relative mb-12 lg:mb-16">
          <span className="absolute top-[-30px] lg:top-[-100px] left-1/2 transform -translate-x-1/2 text-black font-bold text-5xl lg:text-8xl font-['MADE_Soulmaze'] z-0 [-webkit-text-stroke:_0.5px_rgba(0,0,0,0.3)] opacity-60">
            SOBRE
          </span>
          <hr className="w-80 h-[2px] mb-4 bg-white opacity-40 rounded-full mt-8" />
          <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-6 lg:mb-9 relative mt-8 lg:mt-1- font-['Legquinne']">
            Sara Martins
          </h2>
        </div>
        <div className="flex flex-col xl:flex-row gap-10">
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=""
          ></img>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left relative mb-4">
            <hr className="mb-8 opacity-20" />
            <p className="mb-8 text-white">
              Sou uma psicóloga dedicada, especializada em terapia cognitivo-comportamental. Com uma abordagem empática e baseada em evidências, auxilia seus pacientes no desenvolvimento do autoconhecimento e no enfrentamento de desafios emocionais. Com vasta experiência em saúde mental, trabalha tanto em consultório particular quanto em projetos sociais, promovendo bem-estar e qualidade de vida. Seu compromisso com o aprendizado contínuo e a escuta ativa a tornam uma profissional respeitada e admirada.
            </p>
            <a 
              href="https://wa.me/553591591652?text=Olá%20Sara,%20gostaria%20de%20agendar%20uma%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-md bg-secondary hover:bg-secondary-hover transition-all"
            >
              Fale comigo diretamente
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
