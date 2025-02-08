import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/solid';
import FlowerBackground from "./FlowerBackground";

const faqData = [
  {
    question: "Como funciona a terapia online?",
    answer: "A terapia online acontece através de videochamada em um ambiente seguro e confidencial, oferecendo a mesma qualidade do atendimento presencial."
  },
  {
    question: "Qual a duração das sessões?",
    answer: "As sessões têm duração de 50 minutos, realizadas semanalmente ou conforme a necessidade de cada pessoa."
  },
  {
    question: "Quanto custa uma sessão?",
    answer: "Os valores variam de acordo com o formato escolhido. Entre em contato para conversarmos sobre valores e pacotes disponíveis."
  },
  {
    question: "Preciso me comprometer por quanto tempo?",
    answer: "O tempo de terapia varia para cada pessoa, dependendo dos objetivos e do processo terapêutico individual."
  }
];

const Faq = () => {
  return (
    <section id="faq" className="section bg-accent relative">
      <div className="absolute inset-0 z-0">
        <FlowerBackground />
      </div>

      <div className="container mx-auto relative z-0">
        <div className="flex flex-col items-center text-center relative mb-12 lg:mb-16">
          {/* Background title "DÚVIDAS" */}
          <span className="absolute top-[-30px] lg:top-[-100px] left-1/2 transform -translate-x-1/2 text-black font-bold text-5xl lg:text-8xl font-['MADE_Soulmaze'] z-0 [-webkit-text-stroke:_0.5px_rgba(0,0,0,0.3)] opacity-60">
            DÚVIDAS
          </span>
          {/* Updated horizontal rule */}
          <hr className="w-80 h-[2px] mb-4 bg-white opacity-40 rounded-full mt-8" />
          {/* Main title "Perguntas Frequentes" */}
          <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-6 lg:mb-9 relative mt-8 lg:mt-1- font-['Legquinne']">
            Perguntas Frequentes
          </h2>
          {/* Description text */}
          <p className="max-w-[580px] text-gray-300 text-center px-4">
            Aqui você encontra respostas para as dúvidas mais comuns sobre o processo terapêutico. 
            Se sua pergunta não estiver listada, não hesite em entrar em contato diretamente comigo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="bg-tertiary p-6 rounded-2xl relative"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{item.question}</h3>
              </div>
              
              <motion.div
                initial={{ opacity: 1 }}
                className="overflow-hidden"
              >
                <p className="text-gray-300">{item.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;