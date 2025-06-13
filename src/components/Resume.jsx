import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { DocumentArrowDownIcon, EyeIcon } from '@heroicons/react/24/outline';

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
          className="text-center"
        >
          <div className="glass-effect rounded-2xl p-12 glow-border">
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <DocumentArrowDownIcon className="w-12 h-12 text-white" />
              </div>
              
              <h2 className="text-3xl font-bold mb-4">
                Download My <span className="gradient-text">Resume</span>
              </h2>
              
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Get a comprehensive overview of my education, experience, projects, 
                and technical skills in a professionally formatted document.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center gap-2"
                onClick={() => {
                  // TODO: Add actual PDF download functionality
                  alert('Resume download will be implemented soon!');
                }}
              >
                <DocumentArrowDownIcon className="w-5 h-5" />
                Download PDF
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary inline-flex items-center gap-2"
                onClick={() => {
                  // TODO: Add resume preview modal
                  alert('Resume preview will be implemented soon!');
                }}
              >
                <EyeIcon className="w-5 h-5" />
                Preview Online
              </motion.button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8 text-sm text-gray-500"
            >
              <p>Last updated: January 2025 • PDF Format • 2 pages</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;