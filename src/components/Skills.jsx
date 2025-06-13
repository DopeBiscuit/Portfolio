import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = {
    all: 'All Skills',
    languages: 'Languages',
    frameworks: 'Frameworks',
    tools: 'Tools & Platforms',
    databases: 'Databases',
  };

  const skills = [
    { name: 'C++', category: 'languages', level: 90, icon: '⚡' },
    { name: 'Python', category: 'languages', level: 85, icon: '🐍' },
    { name: 'JavaScript', category: 'languages', level: 80, icon: '🟨' },
    { name: 'Java', category: 'languages', level: 75, icon: '☕' },
    { name: 'Verilog', category: 'languages', level: 70, icon: '🔧' },
    { name: 'SQL', category: 'languages', level: 75, icon: '🗃️' },
    
    { name: 'React', category: 'frameworks', level: 80, icon: '⚛️' },
    { name: 'Flask', category: 'frameworks', level: 75, icon: '🌶️' },
    { name: 'FastAPI', category: 'frameworks', level: 70, icon: '⚡' },
    { name: 'OpenCV', category: 'frameworks', level: 75, icon: '👁️' },
    { name: 'ROS', category: 'frameworks', level: 65, icon: '🤖' },
    
    { name: 'Git', category: 'tools', level: 85, icon: '📝' },
    { name: 'VS Code', category: 'tools', level: 90, icon: '💻' },
    { name: 'Linux', category: 'tools', level: 80, icon: '🐧' },
    { name: 'Jupyter', category: 'tools', level: 85, icon: '📊' },
    { name: 'Packet Tracer', category: 'tools', level: 85, icon: '🌐' },
    
    { name: 'PostgreSQL', category: 'databases', level: 75, icon: '🐘' },
    { name: 'SQLite', category: 'databases', level: 80, icon: '💾' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
    <section id="skills" className="py-20 relative">
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
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A comprehensive toolkit built through academic projects, freelance work, 
              and continuous learning
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(skillCategories).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === key
                    ? 'bg-gradient-to-r from-accent-600 to-primary-600 text-white'
                    : 'glass-effect border border-dark-700 text-gray-300 hover:border-accent-500/50'
                }`}
              >
                {label}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-xl p-6 hover:border-accent-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <h3 className="font-semibold text-white group-hover:text-accent-400 transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-dark-800 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-2 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Skills Note */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <p className="text-gray-500 italic">
              Always learning and expanding my toolkit. Currently exploring Go, Kubernetes, 
              and cloud architecture patterns.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;