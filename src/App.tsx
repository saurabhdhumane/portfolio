
import React from 'react';
import { motion, useScroll } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative min-h-screen bg-[#030014] text-slate-200 font-sans overflow-hidden selection:bg-fuchsia-500/30 selection:text-fuchsia-200">
      
      {/* Neon Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-blue-500 z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Animated Ambient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.2, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-fuchsia-600/20 blur-[120px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-600/20 blur-[150px]"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Chatbot/>
      <Footer />
      
    </div>
  );
};

export default App;