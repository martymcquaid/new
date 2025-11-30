import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className='min-h-screen bg-white'>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Home;