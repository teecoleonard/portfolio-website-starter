import React from 'react';
import Intro from './components/Intro';

// import components
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services'
import Hero from './components/Hero';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import Faq from './components/Faq';

const App = () => {
  return (
    <div>
      <Intro />
      <Header />
      <Hero />
      <About />
      <Services />
      <Faq />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default App;
