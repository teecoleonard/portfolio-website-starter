import React from "react";
import { services } from "../data";

const Services = () => {
  return (
    <section id="services" className="w-full section bg-gradient-to-r from-[#F5F2E9] to-[#EAE1D2] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* section title */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left relative mb-4">
          <span className="font-bold absolute top-[-20px] lg:top-[-50px] text-black text-5xl lg:text-8xl font-['MADE_Soulmaze'] lg:left-[25rem] lg:transform lg:-translate-x-1/2 z-0 [-webkit-text-stroke:_0.5px_rgba(0,0,0,0.3)] opacity-10">
            PSICOTERAPIA
          </span>
          <h2 className="section-title relative before:-top-[2rem] before:-left-28 before:hidden before:lg:block text-black">
            Sobre o meu trabalho
          </h2>
          <p className="subtitle">
            O céu mudava de cor enquanto o vento sussurrava segredos entre as
            folhas. O sol, preguiçoso, se escondia atrás das montanhas, pintando
            o horizonte de tons alaranjados e dourados.
          </p>
        </div>
        {/* item grid */}
        <div className="grid lg:grid-cols-3 gap-4 sm:gap-8">
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <div className="bg-secondary p-6 rounded-2xl relative" key={index}>
                <div 
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    backgroundImage: `linear-gradient(rgba(23, 23, 23, 0.9), rgba(23, 23, 23, 0.9)), url(${service.image})`,
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
