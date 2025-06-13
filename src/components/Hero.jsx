import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Computer & Systems Engineer';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const handleResumeDownload = () => {
    // Create a download link for the resume
    const link = document.createElement('a');
    link.href = '/resume/Abdelrahman_Hany_Resume.pdf';
    link.download = 'Abdelrahman_Hany_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating elements - repositioned for left layout */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-accent-500/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: `${10 + i * 20}%`,
              top: `${20 + i * 15}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Main heading */}
            <motion.div variants={itemVariants}>
              <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                <span className="block gradient-text">Abdelrahman</span>
                <span className="block text-gray-300 text-2xl md:text-3xl lg:text-4xl font-light mt-2">
                  Hany
                </span>
              </motion.h1>
            </motion.div>

            {/* Typing animation subtitle */}
            <motion.div
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-400 h-8"
            >
              <span className="font-mono">
                {typedText}
                <span className="animate-pulse text-accent-500">|</span>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl"
            >
              Transitioning from embedded systems to full-stack development, 
              building scalable solutions with a focus on backend architecture 
              and distributed systems.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-4 gap-4 max-w-lg"
            >
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold gradient-text">100+</div>
                <div className="text-xs text-gray-500">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold gradient-text">3+</div>
                <div className="text-xs text-gray-500">Years</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold gradient-text">3.5</div>
                <div className="text-xs text-gray-500">GPA</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold gradient-text">Pro</div>
                <div className="text-xs text-gray-500">Fiverr</div>
              </div>
            </motion.div>

            {/* CTA Buttons - Fixed */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center gap-2 justify-center sm:justify-start"
              >
                Explore My Work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
              
              <motion.button
                onClick={handleResumeDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary inline-flex items-center gap-2 justify-center sm:justify-start"
              >
                <DocumentArrowDownIcon className="w-4 h-4" />
                Download Resume
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary justify-center sm:justify-start"
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Photo */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glowing background effect */}
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 1, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
                className="absolute inset-0 bg-gradient-to-br from-accent-500/30 to-primary-500/30 rounded-2xl blur-xl"
              />
              
              {/* Photo container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative w-72 h-96 md:w-80 md:h-[26rem] rounded-2xl overflow-hidden glass-effect border-2 border-accent-500/30"
              >
                <img
                  src="/images/profile.png"
                  alt="Abdelrahman Hany"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/20 via-transparent to-transparent" />
              </motion.div>

              {/* Floating tech badges around photo */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -left-6 px-3 py-1 bg-accent-600 text-white text-sm rounded-full font-medium"
              >
                Automation
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute top-20 -right-8 px-3 py-1 bg-primary-600 text-white text-sm rounded-full font-medium"
              >
                Software
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
                className="absolute -bottom-4 -left-8 px-3 py-1 bg-green-600 text-white text-sm rounded-full font-medium"
              >
                Embedded
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDownIcon className="w-6 h-6 text-accent-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;