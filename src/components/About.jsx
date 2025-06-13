import React from 'react';
import { motion } from 'framer-motion';
import { CodeBracketIcon, CpuChipIcon, RocketLaunchIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const About = () => {
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

  const journeySteps = [
    {
      icon: <CpuChipIcon className="w-6 h-6" />,
      title: "Embedded Beginnings",
      description: "Started with microcontrollers and hardware programming",
      year: "2020"
    },
    {
      icon: <CodeBracketIcon className="w-6 h-6" />,
      title: "Software Transition",
      description: "Discovered the power of full-stack development",
      year: "2022"
    },
    {
      icon: <RocketLaunchIcon className="w-6 h-6" />,
      title: "Scaling Solutions",
      description: "Building distributed systems and scalable architectures",
      year: "2024"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-950 to-dark-900" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From hardware circuits to scalable software solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Story */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Story */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white mb-4">
                  The <span className="text-accent-500">Plot Twist</span> 🎯
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  What started as a passion for <strong className="text-accent-400">embedded systems</strong> took 
                  an unexpected turn when I discovered the limitless potential of software development.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Today, I bridge both worlds — bringing the <em className="text-primary-400">precision of hardware thinking</em> 
                  to scalable software solutions.
                </p>
              </div>

              {/* What Drives Me */}
              <motion.div 
                variants={itemVariants}
                className="glass-effect p-6 rounded-xl border border-accent-500/20"
              >
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  ⚡ What Drives Me
                </h4>
                <p className="text-gray-300">
                  <span className="text-accent-400 font-medium">Problem-solving</span> at scale. 
                  Whether it's optimizing backend architecture or automating complex workflows, 
                  I thrive on turning <span className="text-primary-400 font-medium">complex challenges</span> into 
                  elegant solutions.
                </p>
              </motion.div>

              {/* Academic Achievement */}
              <motion.div 
                variants={itemVariants}
                className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20"
              >
                <AcademicCapIcon className="w-8 h-8 text-primary-400" />
                <div>
                  <p className="text-white font-medium">Computer & Systems Engineering</p>
                  <p className="text-gray-400 text-sm">Maintaining strong academic performance while building real-world projects</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Journey Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Timeline */}
            <div className="space-y-8">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={ {{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative flex items-center gap-6"
                >
                  {/* Timeline line */}
                  {index < journeySteps.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-accent-500 to-transparent" />
                  )}
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full flex items-center justify-center text-white"
                  >
                    {step.icon}
                  </motion.div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                      <span className="text-sm text-accent-400 font-mono">{step.year}</span>
                    </div>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Future Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-12 p-6 rounded-xl bg-gradient-to-br from-accent-500/10 via-primary-500/10 to-transparent border border-accent-500/30"
            >
              <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                🚀 What's Next?
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Building the next generation of <span className="text-accent-400 font-medium">distributed systems</span> 
                and exploring cutting-edge technologies like <span className="text-primary-400 font-medium">AI integration</span> 
                and <span className="text-green-400 font-medium">cloud architecture</span>.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Interested in collaborating or learning more about my journey?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-2"
          >
            Let's Connect
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;