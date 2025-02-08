import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { contact } from "../data";
import FlowerBackground from "./FlowerBackground";

import bgRight from '../assets/img/background/marca-dagua-esquerda.png';
import bgLeft from '../assets/img/background/marca-dagua-direita.png';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ show: false, message: '', error: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const templateParams = {
      from_name: e.target.user_name.value,
      from_email: e.target.user_email.value,
      phone: e.target.user_phone.value,
      service: e.target.service.value,
      message: e.target.message.value,
    };

    try {
      // Send form to admin only first
      const result = await emailjs.send(
        'service_2b9fry9',
        'template_c45gl48',
        templateParams,
        'xXTE1v_GIrpujGZ1K'
      );

      console.log('Success:', result);
      
      setStatus({
        show: true,
        message: 'Mensagem enviada com sucesso!',
        error: false
      });
      e.target.reset();
    } catch (error) {
      console.error('Error:', error);
      setStatus({
        show: true,
        message: `Erro ao enviar mensagem: ${error.text}`,
        error: true
      });
    } finally {
      setLoading(false);
      setTimeout(() => setStatus({ show: false, message: '', error: false }), 5000);
    }
  };

  return (
    <section className="section relative min-h-screen" id='contact'>
      {/* Background layers from bottom to top */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, #F5F2E9 0%, #EAE1D2 100%)',
          zIndex: 0
        }}
      />
      
      {/* Flowers background */}
      <div className="absolute inset-0" style={{ zIndex: 1 }}>
        <FlowerBackground />
      </div>
      
      {/* Watermark images */}
      <div 
        className="absolute left-0 top-0 h-full w-1/2 hidden lg:block"
        style={{
          backgroundImage: `url(${bgLeft})`,
          backgroundPosition: 'left center',
          backgroundRepeat: 'no-repeat',
          zIndex: 2
        }}
      />
      <div 
        className="absolute right-0 top-0 h-full w-full lg:w-1/2"
        style={{
          backgroundImage: `url(${bgRight})`,
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          zIndex: 2
        }}
      />
      
      {/* Content container with higher z-index */}
      <div className="container mx-auto relative z-30">
        <div className="flex flex-col items-center">
          {/* section title - updated to match Services styling */}
          <div className="flex flex-col items-center text-center relative mb-12 lg:mb-16">
            <span className="absolute top-[-30px] lg:top-[-100px] left-1/2 transform -translate-x-1/2 text-black font-bold text-5xl lg:text-8xl font-['MADE_Soulmaze'] z-0 [-webkit-text-stroke:_0.5px_rgba(0,0,0,0.3)] opacity-60">
              CONTATO
            </span>
            {/* Updated horizontal rule */}
            <hr className="w-80 h-[2px] mb-4 bg-[#9B8A65] opacity-100 rounded-full mt-8" />
            <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-6 lg:mb-9 relative mt-8 lg:mt-1- font-['Legquinne'] text-[#7D7255]">
              Vamos agendar uma consulta
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12 w-full max-w-[1000px] mx-auto relative">
            {/* Contact Info */}
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div
                  key={index}
                  className="flex flex-col min-h-[220px] items-start lg:items-center text-left lg:text-center 
                  p-6 lg:p-4 rounded-2xl backdrop-blur-sm
                  bg-gradient-to-b from-[#d6cb7abe] to-[#b3a06220] 
                  shadow-lg hover:shadow-xl transition-all duration-300
                  lg:backdrop-blur-none lg:bg-transparent lg:shadow-none
                  relative z-10"
                >
                  <div className="text-accent text-[40px] mb-4">{icon}</div>
                  <h4 className="text-xl font-medium mb-2 text-[#1a1918]">{title}</h4>
                  <p className="text-[#9B8A65] font-bold mb-2">{subtitle}</p>
                  <p className="text-[#7D7255]">{description}</p>
                </div>
              );
            })}
          </div>

          {/* Form with background */}
          <form 
            className="space-y-8 w-full max-w-[780px] relative z-30 p-8 rounded-2xl" 
            onSubmit={handleSubmit}
          >
            <input className="input" type="text" name="user_name" placeholder="Nome" required />
            <div className="flex gap-8">
              <input 
                className="input" 
                type="tel" 
                name="user_phone"
                placeholder="Celular" 
                pattern="[0-9()#&+*-=.]+" 
                required
                title="Apenas números são aceitos"
              />
              <input 
                className="input" 
                type="email" 
                name="user_email"
                placeholder="E-mail" 
                required 
              />
            </div>
            <label className="flex font-bold">Por qual serviço você está interessado(a)?</label>
            <select className="input" name="service" required>
              <option value="Psicoterapia Online">Psicoterapia Online</option>
              <option value="Psicoterapia Presencial">Psicoterapia Presencial</option>
              <option value="Palestra">Palestra</option>
              <option value="Parceria">Parceria</option>
            </select>
            <textarea 
              className="textarea" 
              name="message"
              placeholder="Sua mensagem"
              required
            />
            <button 
              className={`btn btn-lg bg-accent hover:bg-accent-hover ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? 'Enviando...' : 'Enviar mensagem'}
            </button>

            {status.show && (
              <div className={`text-center p-4 rounded-lg ${status.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;