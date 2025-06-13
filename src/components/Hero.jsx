import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    'Computer & Systems Engineer',
    'Full-Stack Developer',
    'Automation Specialist',
    'Problem Solver'
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const handleTyping = () => {
      const currentText = texts[currentIndex];
      
      if (isDeleting) {
        setTypedText(currentText.substring(0, typedText.length - 1));
      } else {
        setTypedText(currentText.substring(0, typedText.length + 1));
      }

      if (!isDeleting && typedText === currentText) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleTyping, typeSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentIndex, texts]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-0">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating elements - optimized for mobile */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-accent-500/20 rounded-full sm:w-4 sm:h-4"
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
              left: `${10 + i * 30}%`,
              top: `${20 + i * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="container-responsive w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 text-center lg:text-left lg:space-y-8"
          >
            {/* Main heading */}
            <motion.div variants={itemVariants}>
              <motion.h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block gradient-text">Abdelrahman</span>
                <span className="block text-gray-300 text-xl font-light mt-2 sm:text-2xl md:text-3xl lg:text-4xl">
                  Hany
                </span>
              </motion.h1>
            </motion.div>

            {/* Typing animation subtitle */}
            <motion.div
              variants={itemVariants}
              className="text-base md:text-lg lg:text-xl text-gray-400 h-6 md:h-8"
            >
              <span className="font-mono">
                {typedText}
                <span className="animate-pulse text-accent-500">|</span>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Transitioning from embedded systems to full-stack development,
              building scalable solutions with a focus on backend architecture
              and distributed systems.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-4 gap-3 max-w-sm mx-auto lg:mx-0 lg:max-w-lg lg:gap-4"
            >
              <div className="text-center">
                <div className="text-lg font-bold gradient-text sm:text-xl md:text-2xl">100+</div>
                <div className="text-xs text-gray-500">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold gradient-text sm:text-xl md:text-2xl">3+</div>
                <div className="text-xs text-gray-500">Years</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold gradient-text sm:text-xl md:text-2xl">3.5</div>
                <div className="text-xs text-gray-500">GPA</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold gradient-text sm:text-xl md:text-2xl">Pro</div>
                <div className="text-xs text-gray-500">Fiverr</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-4 relative z-[60] sm:flex-row sm:justify-center lg:justify-start"
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Explore My Work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
              
              <motion.a
                href="/abdelrahman_resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Photo */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center lg:justify-end order-first lg:order-last"
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
                className="relative w-64 h-80 rounded-2xl overflow-hidden glass-effect border-2 border-accent-500/30 sm:w-72 sm:h-96 md:w-80 md:h-[26rem]"
              >
                <img
                  src="/images/profile.png"
                  alt="Abdelrahman Hany"
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 hover:text-accent-400 transition-colors p-2"
          >
            <ChevronDownIcon className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;