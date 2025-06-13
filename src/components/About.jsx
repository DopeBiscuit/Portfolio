import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '3.5', label: 'GPA' },
    { number: '4+', label: 'Years Coding' },
    { number: 'Pro', label: 'Fiverr Status' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Photo and stats */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Photo placeholder */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-80 h-80 mx-auto glass-effect rounded-2xl p-4 glow-border"
              >
                <div className="w-full h-full bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">AH</span>
                    </div>
                    <p className="text-gray-400 text-sm">Photo Coming Soon</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="glass-effect rounded-xl p-4 text-center hover:border-accent-500/50 transition-all duration-300"
                >
                  <div className="text-2xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <motion.h2
                variants={itemVariants}
                className="text-4xl font-bold mb-4"
              >
                About <span className="gradient-text">Me</span>
              </motion.h2>
              
              <motion.div variants={itemVariants} className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a Computer & Systems Engineering student at Ain Shams University with a 
                  passion for building robust, scalable solutions. My journey began in embedded 
                  systems and hardware design, but I've discovered my true calling in software 
                  engineering.
                </p>
                
                <p>
                  Currently, I'm focused on backend development, distributed systems, and 
                  full-stack applications. I love tackling complex problems and turning ideas 
                  into reality through clean, efficient code.
                </p>
                
                <p>
                  With over 100 freelance projects completed and Fiverr Pro status, I've 
                  honed my skills in automation, scripting, and delivering reliable solutions 
                  that exceed client expectations.
                </p>
              </motion.div>
            </div>

            {/* Quick facts */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h3 className="text-xl font-semibold text-white mb-4">Quick Facts</h3>
              <div className="space-y-2">
                {[
                  '🎓 Computer & Systems Engineering @ Ain Shams University',
                  '🚀 Transitioning from Embedded Systems to Software Engineering',
                  '💼 Fiverr Pro with 100+ completed projects',
                  '🏆 Active competitive programmer (ECPC participant)',
                  '🤖 Computer Vision Engineer @ ASU ROAR (ERC Team)',
                ].map((fact, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center text-gray-300"
                  >
                    <span className="mr-2">{fact}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;