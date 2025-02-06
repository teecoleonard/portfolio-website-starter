import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/solid';

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
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section bg-accent">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center relative mb-8">
          <span className="absolute top-[-20px] lg:top-[-50px] left-1/2 transform -translate-x-1/2 text-black font-bold text-5xl lg:text-8xl font-['MADE_Soulmaze'] z-0 [-webkit-text-stroke:_0.5px_rgba(0,0,0,0.3)] opacity-10">
            DÚVIDAS
          </span>
          <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3">
            Perguntas Frequentes
          </h2>
          <p className="max-w-[580px] text-gray-300 mb-8 text-center">
            Aqui você encontra respostas para as dúvidas mais comuns sobre o processo terapêutico. 
            Se sua pergunta não estiver listada, não hesite em entrar em contato diretamente comigo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="bg-tertiary p-6 rounded-2xl hover:bg-opacity-90 transition-all duration-300 cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{item.question}</h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDownIcon className="w-5 h-5 text-accent" />
                </motion.div>
              </div>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-300">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;