import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  EyeIcon, 
  CodeBracketIcon
} from '@heroicons/react/24/outline';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'RISC-V Processor with Verilog',
      description: 'A complete RISC-V processor implementation supporting 30+ instructions across 5 instruction formats, achieving 75% coverage of the reference design.',
      longDescription: 'Engineered a fully functional RISC-V processor in Verilog HDL as part of IEEE Digital Design Final Project. The processor implements a 5-stage pipeline with comprehensive instruction support including arithmetic, logical, memory, and control flow operations. Features include hazard detection, forwarding units, and optimized datapath design.',
      tech: ['Verilog', 'Digital Design', 'Computer Architecture', 'RISC-V ISA'],
      category: 'hardware',
      image: '🔧',
      github: 'https://github.com/DopeBiscuit/RISC-V-Processor-Verilog',
      demo: null,
      highlights: [
        '30+ instructions implemented',
        '5-stage pipeline architecture', 
        '75% reference design coverage',
        'Comprehensive testbench suite'
      ]
    },
    {
      id: 2,
      title: 'Cartnest E-commerce Platform',
      description: 'Full-stack e-commerce solution with advanced database optimization, featuring data fragmentation and sharding for improved performance.',
      longDescription: 'A comprehensive e-commerce platform built as a team project, focusing on scalable database architecture and performance optimization. Implemented advanced database techniques including horizontal and vertical fragmentation to handle large-scale data efficiently.',
      tech: ['Python', 'Flask', 'PostgreSQL', 'Database Design', 'Full-Stack'],
      category: 'fullstack',
      image: '🛒',
      github: 'https://github.com/moazragab12/Cartnest',
      demo: null,
      highlights: [
        'Database schema co-design',
        'ORM implementation',
        'Data fragmentation & sharding',
        'Performance optimization'
      ]
    },
    {
      id: 3,
      title: 'CHRONOS CPU Scheduler',
      description: 'Interactive desktop application for visualizing CPU scheduling algorithms with real-time Gantt charts and process control.',
      longDescription: 'A comprehensive CPU scheduling simulator built with Python, featuring multiple scheduling algorithms including FCFS, SJF, Round Robin, and Priority scheduling. The application provides interactive visualization with real-time Gantt charts and detailed process statistics.',
      tech: ['Python', 'Threading', 'GUI Development', 'Operating Systems'],
      category: 'systems',
      image: '⏰',
      github: 'https://github.com/dizzydroid/ASU_SeniorProject_OS',
      demo: null,
      highlights: [
        '4 scheduling algorithms',
        'Real-time Gantt charts',
        'Threading implementation',
        'Interactive process control'
      ]
    },
    {
      id: 4,
      title: 'GPS Tracking System',
      description: 'Real-time GPS tracking system using Tiva C microcontroller with custom EEPROM driver supporting 500+ coordinate storage.',
      longDescription: 'A complete GPS tracking solution integrating hardware and software components. Features a Tiva C microcontroller-based system with custom drivers, server communication API, and a desktop GUI for real-time tracking visualization.',
      tech: ['C', 'Embedded Systems', 'Tiva C', 'GPS', 'Real-time Systems'],
      category: 'embedded',
      image: '🛰️',
      github: 'https://github.com/MashaWaleed/GPS-System-TIVAC-CSE211',
      demo: null,
      highlights: [
        'MCU-Server communication API',
        'Custom EEPROM driver',
        '500+ coordinate storage',
        'Real-time GPS tracking'
      ]
    },
    {
      id: 5,
      title: 'Fraud Detection Ensemble',
      description: 'Machine learning ensemble achieving 93%+ fraud detection recall on PaySim dataset with automated CI/CD pipeline.',
      longDescription: 'Advanced fraud detection system using ensemble machine learning techniques. Implemented multiple algorithms including Random Forest, XGBoost, and Neural Networks to achieve high accuracy in financial fraud detection.',
      tech: ['Python', 'Machine Learning', 'Scikit-learn', 'GitHub Actions', 'CI/CD'],
      category: 'ml',
      image: '🔍',
      github: 'https://github.com/dizzydroid/fraud-detection',
      demo: null,
      highlights: [
        '93%+ fraud detection recall',
        'Ensemble learning approach',
        'Automated CI/CD pipeline',
        '30% reduction in QA time'
      ]
    },
    {
      id: 6,
      title: 'Climate Data Dashboard',
      description: 'NASA Space Apps Challenge project featuring interactive climate visualization and AI-powered chatbot for environmental data analysis.',
      longDescription: 'An interactive web application developed for NASA Space Apps Challenge that visualizes 20-year environmental change patterns. Features include real-time data visualization, trend analysis, and an AI-powered chatbot for natural language queries about climate data.',
      tech: ['React', 'Python', 'Data Visualization', 'AI/ML', 'NASA APIs'],
      category: 'dataviz',
      image: '🌍',
      github: 'https://github.com/PerfectionistAF/Climate_Change_App',
      demo: null,
      highlights: [
        '20-year climate data analysis',
        'Interactive visualizations',
        'AI-powered chatbot',
        'NASA Space Apps Challenge'
      ]
    }
  ];

  const categories = {
    all: 'All Projects',
    fullstack: 'Full-Stack',
    hardware: 'Hardware',
    systems: 'Systems',
    embedded: 'Embedded',
    ml: 'Machine Learning',
    dataviz: 'Data Visualization'
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
    <section id="projects" className="py-20 relative">
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
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A showcase of technical projects spanning embedded systems, full-stack development, 
              and machine learning
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(categories).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  filter === key
                    ? 'bg-gradient-to-r from-accent-600 to-primary-600 text-white'
                    : 'glass-effect border border-dark-700 text-gray-300 hover:border-accent-500/50'
                }`}
              >
                {label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="project-card cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Icon */}
                <div className="text-6xl mb-4 text-center">{project.image}</div>
                
                {/* Project Info */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="tech-badge">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 px-4 py-2 glass-effect border border-dark-700 text-gray-300 rounded-lg hover:border-accent-500/50 hover:text-white transition-all duration-300"
                    >
                      <CodeBracketIcon className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  
                  <button className="flex items-center gap-2 px-4 py-2 bg-accent-600 text-white rounded-lg hover:bg-accent-500 transition-all duration-300">
                    <EyeIcon className="w-4 h-4" />
                    Details
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-effect rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Modal Content */}
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                {/* Highlights */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Highlights</h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <span className="text-accent-500 mr-2">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center gap-2"
                    >
                      <CodeBracketIcon className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                  
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center gap-2"
                    >
                      <EyeIcon className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;