import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { StarIcon, CheckBadgeIcon, ClockIcon } from '@heroicons/react/24/solid';
import { SiFiverr } from 'react-icons/si';
import { FaUpwork } from 'react-icons/fa6';

const Freelance = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: '100+', label: 'Projects Completed', icon: <CheckBadgeIcon className="w-6 h-6" /> },
    { number: '5.0', label: 'Average Rating', icon: <StarIcon className="w-6 h-6" /> },
    { number: '3+', label: 'Years Experience', icon: <ClockIcon className="w-6 h-6" /> },
    { number: 'Pro', label: 'Fiverr Status', icon: '🏆' },
  ];

  const services = [
    {
      title: 'Google Apps Script Automation',
      description: 'Custom automation solutions for G Suite workflow integration',
      icon: '⚙️'
    },
    {
      title: 'Data Processing & Analysis',
      description: 'Python scripts for data manipulation, cleaning, and analysis',
      icon: '📊'
    },
    {
      title: 'Web Scraping Solutions',
      description: 'Reliable web scraping tools with error handling and scheduling',
      icon: '🕷️'
    },
    {
      title: 'API Integration',
      description: 'Seamless integration between different platforms and services',
      icon: '🔌'
    }
  ];

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

  return (
    <section id="freelance" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Freelance <span className="gradient-text">Excellence</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Delivering high-reliability automation and integration solutions 
              to clients worldwide
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-xl p-6 text-center hover:border-accent-500/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-3">
                  {typeof stat.icon === 'string' ? (
                    <span className="text-2xl">{stat.icon}</span>
                  ) : (
                    <div className="text-accent-500">{stat.icon}</div>
                  )}
                </div>
                <div className="text-2xl font-bold gradient-text mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Description */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">
                  Proven Track Record
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Over 100 freelance projects completed with a focus on automation, 
                  scripting, and reliability-focused deliverables. Currently holding 
                  Fiverr Pro status, specializing in Google Apps Script automation 
                  and workflow integration.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  My approach combines technical expertise with clear communication, 
                  ensuring every project exceeds client expectations while maintaining 
                  long-term reliability and scalability.
                </p>
              </div>

              {/* Key Strengths */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-white">Why Clients Choose Me</h4>
                <div className="space-y-2">
                  {[
                    'Reliable, well-documented code',
                    'Clear communication throughout projects',
                    'Quick turnaround without compromising quality',
                    'Post-delivery support and maintenance',
                    'Custom solutions tailored to specific needs'
                  ].map((point, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <CheckBadgeIcon className="w-4 h-4 text-accent-500 mr-2" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="https://www.fiverr.com/users/boody_hany"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary inline-flex items-center justify-center gap-2 flex-1"
                >
                  <SiFiverr className="w-4 h-4" />
                  View Fiverr Profile
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
                
                <motion.a
                  href="https://www.upwork.com/freelancers/~01e92e0c8b7675915f"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary inline-flex items-center justify-center gap-2 flex-1"
                >
                  <FaUpwork className="w-4 h-4" />
                  View Upwork Profile
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>

            {/* Right - Services */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-white text-center lg:text-left">
                Core Services
              </h3>
              
              <div className="grid gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="glass-effect rounded-lg p-4 hover:border-accent-500/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-2xl">{service.icon}</span>
                      <div>
                        <h4 className="font-semibold text-white mb-1">
                          {service.title}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Freelance;