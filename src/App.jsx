import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BackgroundAnimation from './components/BackgroundAnimation';
import ScrollToTop from './components/ScrollToTop';

// Lazy load non-critical components
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Achievements = lazy(() => import('./components/Achievements'));
const Freelance = lazy(() => import('./components/Freelance'));
const Contact = lazy(() => import('./components/Contact'));

// Loading component for lazy-loaded sections
const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-8 h-8 border-2 border-accent-500/30 border-t-accent-500 rounded-full animate-spin"></div>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <div className="App">
        <SEO />
        
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-dark-950"
            >
              <div className="text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 border-4 border-accent-500/30 border-t-accent-500 rounded-full mx-auto mb-4"
                />
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-2xl font-bold gradient-text"
                >
                  Loading Portfolio...
                </motion.h2>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <BackgroundAnimation />
            <Navbar />
            <main>
              <Hero />
              
              <Suspense fallback={<SectionLoader />}>
                <About />
                <Projects />
                <Skills />
                <Achievements />
                <Freelance />
                <Contact />
              </Suspense>
            </main>
            <ScrollToTop />
          </motion.div>
        )}
      </div>
    </HelmetProvider>
  );
}

export default App;