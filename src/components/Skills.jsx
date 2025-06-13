import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse for floating elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skillCategories = {
    'daily-drivers': {
      title: 'Daily Drivers',
      subtitle: 'My go-to arsenal',
      description: 'Technologies I breathe, sleep, and code with',
      color: 'from-amber-400 via-orange-500 to-red-500',
      bgGradient: 'from-amber-500/20 via-orange-500/20 to-red-500/20',
      borderGradient: 'from-amber-500/50 to-red-500/50',
      emoji: '🔥',
      skills: [
        {
          name: 'Python',
          context: 'Primary language for automation, backend development & web scraping',
          cluster: 'backend',
          icon: '🐍',
          mastery: 'Expert',
          sparkles: true
        },
        {
          name: 'JavaScript',
          context: 'Core language for web development & automation interfaces',
          cluster: 'frontend',
          icon: '⚡',
          mastery: 'Advanced',
          sparkles: true
        },
        {
          name: 'Google Apps Script',
          context: 'Automation & integration with Google Workspace',
          cluster: 'backend',
          icon: '📊',
          mastery: 'Advanced',
          sparkles: true
        },
        {
          name: 'Git',
          context: 'Version control for all projects',
          cluster: 'tools',
          icon: '🌿',
          mastery: 'Advanced'
        },
        {
          name: 'VS Code',
          context: 'Primary development environment',
          cluster: 'tools',
          icon: '💻',
          mastery: 'Expert'
        }
      ]
    },
    'foundations': {
      title: 'Foundations',
      subtitle: 'Rock-solid base',
      description: 'Core knowledge that powers everything I build',
      color: 'from-blue-400 via-purple-500 to-indigo-600',
      bgGradient: 'from-blue-500/20 via-purple-500/20 to-indigo-500/20',
      borderGradient: 'from-blue-500/50 to-indigo-500/50',
      emoji: '🏗️',
      skills: [
        {
          name: 'React',
          context: 'Building modern web interfaces when needed',
          cluster: 'frontend',
          icon: '⚛️',
          mastery: 'Solid'
        },
        {
          name: 'C/C++',
          context: 'Embedded systems & hardware programming',
          cluster: 'embedded',
          icon: '⚙️',
          mastery: 'Solid'
        },
        {
          name: 'HTML/CSS',
          context: 'Web fundamentals & responsive design',
          cluster: 'frontend',
          icon: '🎨',
          mastery: 'Strong'
        },
        {
          name: 'FastAPI',
          context: 'Python web framework for scalable APIs',
          cluster: 'backend',
          icon: '🚀',
          mastery: 'Growing'
        },
        {
          name: 'SQL',
          context: 'Database design & query optimization',
          cluster: 'backend',
          icon: '🗄️',
          mastery: 'Solid'
        },
        {
          name: 'Linux',
          context: 'System administration & development',
          cluster: 'tools',
          icon: '🐧',
          mastery: 'Strong'
        },
        {
          name: 'Arduino & MCUs',
          context: 'Microcontroller programming & embedded prototyping',
          cluster: 'embedded',
          icon: '🔌',
          mastery: 'Experienced'
        }
      ]
    },
    'active-learning': {
      title: 'Active Learning',
      subtitle: 'Current exploration',
      description: 'Technologies I\'m actively mastering and experimenting with',
      color: 'from-green-400 via-emerald-500 to-teal-600',
      bgGradient: 'from-green-500/20 via-emerald-500/20 to-teal-500/20',
      borderGradient: 'from-green-500/50 to-teal-500/50',
      emoji: '🌱',
      skills: [
        {
          name: 'Node.js',
          context: 'Server-side JavaScript development',
          cluster: 'backend',
          icon: '🟢',
          mastery: 'Learning',
          pulse: true
        },
        {
          name: 'TypeScript',
          context: 'Adding type safety to JavaScript projects',
          cluster: 'frontend',
          icon: '📘',
          mastery: 'Learning',
          pulse: true
        },
        {
          name: 'Docker',
          context: 'Containerization & development environments',
          cluster: 'tools',
          icon: '🐳',
          mastery: 'Exploring',
          pulse: true
        },
        {
          name: 'AWS',
          context: 'Cloud infrastructure & deployment',
          cluster: 'tools',
          icon: '☁️',
          mastery: 'Exploring',
          pulse: true
        },
        {
          name: 'Redis',
          context: 'Caching & session management',
          cluster: 'backend',
          icon: '🔴',
          mastery: 'Learning'
        },
        {
          name: 'Tailwind CSS',
          context: 'Modern utility-first CSS framework',
          cluster: 'frontend',
          icon: '🎨',
          mastery: 'Learning',
          pulse: true
        }
      ]
    },
    'familiar': {
      title: 'Familiar With',
      subtitle: 'Ready to deploy',
      description: 'Technologies I can pick up and use effectively when needed',
      color: 'from-violet-400 via-purple-500 to-fuchsia-600',
      bgGradient: 'from-violet-500/20 via-purple-500/20 to-fuchsia-500/20',
      borderGradient: 'from-violet-500/50 to-fuchsia-500/50',
      emoji: '👋',
      skills: [
        {
          name: 'Java',
          context: 'Object-oriented programming & algorithms',
          cluster: 'backend',
          icon: '☕',
          mastery: 'Familiar'
        },
        {
          name: 'MongoDB',
          context: 'NoSQL database for flexible data storage',
          cluster: 'backend',
          icon: '🍃',
          mastery: 'Familiar'
        },
        {
          name: 'Bootstrap 5',
          context: 'Responsive CSS framework & component library',
          cluster: 'frontend',
          icon: '🎨',
          mastery: 'Comfortable'
        },
        {
          name: 'GitHub Actions',
          context: 'CI/CD automation & workflows',
          cluster: 'tools',
          icon: '🚀',
          mastery: 'Familiar'
        },
        {
          name: 'Figma',
          context: 'UI/UX design & prototyping',
          cluster: 'tools',
          icon: '🎨',
          mastery: 'Comfortable'
        }
      ]
    }
  };

  const clusters = {
    frontend: { 
      name: 'Frontend', 
      color: 'bg-blue-500/30 border-blue-400/50',
      gradient: 'from-blue-400 to-cyan-400',
      icon: '🎨'
    },
    backend: { 
      name: 'Backend', 
      color: 'bg-green-500/30 border-green-400/50',
      gradient: 'from-green-400 to-emerald-400',
      icon: '🔧'
    },
    embedded: { 
      name: 'Embedded', 
      color: 'bg-orange-500/30 border-orange-400/50',
      gradient: 'from-orange-400 to-red-400',
      icon: '⚡'
    },
    tools: { 
      name: 'Tools', 
      color: 'bg-purple-500/30 border-purple-400/50',
      gradient: 'from-purple-400 to-pink-400',
      icon: '⚙️'
    }
  };

  const filters = [
    { key: 'all', label: 'All Skills', icon: '🎯', color: 'from-gray-600 to-gray-700' },
    { key: 'daily-drivers', label: 'Daily Drivers', icon: '🔥', color: 'from-orange-500 to-red-500' },
    { key: 'foundations', label: 'Foundations', icon: '🏗️', color: 'from-blue-500 to-indigo-500' },
    { key: 'active-learning', label: 'Learning', icon: '🌱', color: 'from-green-500 to-teal-500' },
    { key: 'familiar', label: 'Familiar', icon: '👋', color: 'from-purple-500 to-fuchsia-500' }
  ];

  const getFilteredCategories = () => {
    if (activeFilter === 'all') {
      return Object.entries(skillCategories);
    }
    return Object.entries(skillCategories).filter(([key]) => key === activeFilter);
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const sparkleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      boxShadow: [
        "0 0 0 0 rgba(34, 197, 94, 0.4)",
        "0 0 0 10px rgba(34, 197, 94, 0)",
        "0 0 0 0 rgba(34, 197, 94, 0)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950" />
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent-500/20 rounded-full"
            style={{
              left: `${20 + i * 20}%`,
              top: `${10 + i * 15}%`,
            }}
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: i * 0.5 }}
          />
        ))}
      </div>

      {/* Mouse Follower */}
      <motion.div
        className="fixed w-4 h-4 bg-accent-500/30 rounded-full pointer-events-none z-50 mix-blend-screen"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
        animate={{ scale: hoveredSkill ? 2 : 1 }}
        transition={{ duration: 0.2 }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Epic Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-4"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-6xl">⚡</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Technical <span className="bg-gradient-to-r from-accent-400 via-primary-400 to-green-400 bg-clip-text text-transparent">Arsenal</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            An honest, no-BS breakdown of my technical capabilities — 
            <span className="text-accent-400 font-medium"> from daily weapons to emerging skills</span>
          </p>
        </motion.div>

        {/* Ultra-Slick Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all duration-300 overflow-hidden ${
                activeFilter === filter.key
                  ? 'text-white shadow-2xl shadow-accent-500/25'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {/* Dynamic Background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${
                activeFilter === filter.key ? filter.color : 'from-gray-800 to-gray-700'
              } transition-all duration-300 ${
                activeFilter !== filter.key ? 'opacity-50 group-hover:opacity-100' : ''
              }`} />
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative flex items-center gap-3">
                <motion.span 
                  className="text-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  {filter.icon}
                </motion.span>
                {filter.label}
              </div>

              {/* Active Indicator */}
              {activeFilter === filter.key && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Epic Skills Categories */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-20"
          >
            {getFilteredCategories().map(([categoryKey, category], categoryIndex) => (
              <motion.div
                key={categoryKey}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2 }}
                className="relative"
              >
                {/* Category Header - Ultra Stylish */}
                <motion.div 
                  className="text-center mb-12 relative"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.bgGradient} blur-3xl opacity-30 rounded-full`} />
                  
                  <div className="relative z-10">
                    <motion.div
                      className="inline-flex items-center gap-4 mb-4"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.span 
                        className="text-5xl"
                        variants={sparkleVariants}
                        animate="animate"
                      >
                        {category.emoji}
                      </motion.span>
                      <div className="text-left">
                        <h3 className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                          {category.title}
                        </h3>
                        <p className="text-gray-400 text-lg font-medium">{category.subtitle}</p>
                      </div>
                    </motion.div>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">{category.description}</p>
                  </div>
                </motion.div>

                {/* Skills Grid - Maximum Slick */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: index * 0.1, 
                        type: "spring", 
                        stiffness: 200,
                        damping: 20
                      }}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -10, 
                        rotateX: 5,
                        transition: { duration: 0.2 }
                      }}
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      className="group relative"
                      variants={skill.pulse ? pulseVariants : {}}
                      animate={skill.pulse ? "animate" : ""}
                    >
                      {/* Card */}
                      <div className={`relative p-8 rounded-3xl glass-effect border-2 transition-all duration-500 overflow-hidden ${clusters[skill.cluster].color}`}>
                        {/* Dynamic Background Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                        
                        {/* Sparkle Effect for Expert Skills */}
                        {skill.sparkles && (
                          <motion.div
                            className="absolute top-4 right-4 text-yellow-400"
                            variants={sparkleVariants}
                            animate="animate"
                          >
                            ✨
                          </motion.div>
                        )}

                        {/* Content */}
                        <div className="relative z-10">
                          {/* Header */}
                          <div className="flex items-start gap-4 mb-6">
                            <motion.div 
                              className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                              whileHover={{ rotate: [0, -10, 10, 0] }}
                              transition={{ duration: 0.3 }}
                            >
                              {skill.icon}
                            </motion.div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="text-xl font-bold text-white group-hover:text-accent-100 transition-colors">
                                  {skill.name}
                                </h4>
                                <motion.span 
                                  className={`text-xs px-3 py-1 rounded-full font-medium ${clusters[skill.cluster].color} backdrop-blur-sm`}
                                  whileHover={{ scale: 1.1 }}
                                >
                                  {clusters[skill.cluster].icon} {clusters[skill.cluster].name}
                                </motion.span>
                              </div>
                              <motion.div
                                className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${category.color} text-white font-bold inline-block`}
                                whileHover={{ scale: 1.05 }}
                              >
                                {skill.mastery}
                              </motion.div>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-gray-300 group-hover:text-gray-100 text-sm leading-relaxed transition-colors">
                            {skill.context}
                          </p>

                          {/* Hover Effect Line */}
                          <motion.div
                            className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${category.color} origin-left`}
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Epic Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.div
            className="relative inline-block p-8 rounded-3xl bg-gradient-to-br from-accent-500/20 via-primary-500/20 to-green-500/20 border-2 border-accent-500/30 backdrop-blur-sm"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Animated Border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-500/50 via-primary-500/50 to-green-500/50 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <motion.div
                className="text-4xl mb-4"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🚀
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Ready to <span className="bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">collaborate</span>?
              </h3>
              <p className="text-gray-300 text-lg mb-6 max-w-2xl">
                <span className="text-accent-400 font-medium">Continuous learner</span> — 
                Always exploring new technologies and pushing boundaries
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent-500 to-primary-500 rounded-2xl text-white font-bold text-lg hover:shadow-2xl hover:shadow-accent-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Build Something Amazing
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;