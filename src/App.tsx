import React, { useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';

import Loader from './components/Loader'; // Import the Loader we just built!
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [isLoading, setIsLoading] = useState(true);

  // Control the loading screen timer
  useEffect(() => {
    // Locks scrolling while the loader is active
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Unlocks scrolling after the loader fades away
      document.body.style.overflow = 'auto';
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030014] text-slate-200 font-sans overflow-hidden selection:bg-fuchsia-500/30 selection:text-fuchsia-200">
      
      {/* 1. The Loader Overlay */}
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>

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

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Chatbot />
        <Footer />
      </div>
      
    </div>
  );
};

export default App;