import React from "react";

// import image
import Image from "../assets/img/about-sara.jpg";

const About = () => {
  return (
    <section id="about" className="section bg-accent">
      <div class="container mx-auto">
        <div class="flex flex-col xl:flex-row gap-24">
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=""
          ></img>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left relative mb-4">
        {/* Texto de fundo (SVG ou texto estilizado) */}
            <span className="absolute top-[-20px] lg:top-[-50px] left-[100px] text-black font-bold text-5xl lg:text-8xl font-['MADE_Soulmaze'] lg:left-[11.2rem] lg:transform lg:-translate-x-1/2 z-0 [-webkit-text-stroke:_0.5px_rgba(0,0,0,0.3)] opacity-10">
            SOBRE
            </span>

        {/* Conteúdo principal */}
          <div className="relative">
            <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3">
              Sara Martins
            </h2>
            <p className="mb-4 text-secondary underline">Psicóloga</p>
            <hr className="mb-8 opacity-5" />
            <p className="mb-8 text-white">
              Sou uma psicóloga dedicada, especializada em terapia cognitivo-comportamental. Com uma abordagem empática e baseada em evidências, auxilia seus pacientes no desenvolvimento do autoconhecimento e no enfrentamento de desafios emocionais. Com vasta experiência em saúde mental, trabalha tanto em consultório particular quanto em projetos sociais, promovendo bem-estar e qualidade de vida. Seu compromisso com o aprendizado contínuo e a escuta ativa a tornam uma profissional respeitada e admirada.
            </p>
          </div>
            <button className="btn btn-md bg-secondary hover:bg-secondary-hover transition-all">
              Fale comigo diretamente
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
