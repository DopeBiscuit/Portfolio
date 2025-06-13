import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Import real tech icons - CORRECTED NAMES
import { 
  SiPython, SiJavascript, SiReact, SiNodedotjs, SiTypescript,
  SiDocker, SiAmazonwebservices, SiRedis, SiMongodb,
  SiBootstrap, SiTailwindcss, SiGithubactions, SiFigma,
  SiCplusplus, SiHtml5, SiMysql, SiLinux,
  SiArduino, SiFastapi, SiGit, SiGoogleappsscript
} from 'react-icons/si';
import { FaCode, FaJava, FaTools, FaMicrochip, FaPalette} from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc'; 
import { BsFillGrid3X3GapFill } from "react-icons/bs";


const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('categories');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Helper function to render cluster icon - FIX FOR BUILD ERROR
  const renderClusterIcon = (cluster, className = "text-xs") => {
    const IconComponent = clusters[cluster].icon;
    return <IconComponent className={className} />;
  };

  // Track mouse for floating elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Reset view mode when filter changes
  useEffect(() => {
    if (activeFilter === 'all') {
      setViewMode('categories');
    } else {
      setViewMode('detailed');
    }
  }, [activeFilter]);

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
          icon: SiPython,
          iconColor: '#3776AB',
          mastery: 'Expert',
          sparkles: true
        },
        {
          name: 'JavaScript',
          context: 'Core language for web development & automation interfaces',
          cluster: 'frontend',
          icon: SiJavascript,
          iconColor: '#F7DF1E',
          mastery: 'Advanced',
          sparkles: true
        },
        {
            name: 'Google Apps Script',
            context: 'Automation & integration with Google Workspace',
            cluster: 'backend',
            icon: SiGoogleappsscript,
            iconColor: '#4285F4',
            mastery: 'Advanced',
            sparkles: true
        },
        {
          name: 'Git',
          context: 'Version control for all projects',
          cluster: 'tools',
          icon: SiGit,
          iconColor: '#F05032',
          mastery: 'Advanced'
        },
        {
          name: 'VS Code',
          context: 'Primary development environment',
          cluster: 'tools',
          icon: VscCode,
          iconColor: '#007ACC',
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
          icon: SiReact,
          iconColor: '#61DAFB',
          mastery: 'Solid'
        },
        {
          name: 'C/C++',
          context: 'Embedded systems & hardware programming',
          cluster: 'embedded',
          icon: SiCplusplus,
          iconColor: '#00599C',
          mastery: 'Solid'
        },
        {
          name: 'HTML/CSS',
          context: 'Web fundamentals & responsive design',
          cluster: 'frontend',
          icon: SiHtml5,
          iconColor: '#E34F26',
          mastery: 'Strong'
        },
        {
          name: 'FastAPI',
          context: 'Python web framework for scalable APIs',
          cluster: 'backend',
          icon: SiFastapi,
          iconColor: '#009688',
          mastery: 'Growing'
        },
        {
          name: 'SQL',
          context: 'Database design & query optimization',
          cluster: 'backend',
          icon: SiMysql,
          iconColor: '#4479A1',
          mastery: 'Solid'
        },
        {
          name: 'Linux',
          context: 'System administration & development',
          cluster: 'tools',
          icon: SiLinux,
          iconColor: '#FCC624',
          mastery: 'Strong'
        },
        {
          name: 'Arduino & MCUs',
          context: 'Microcontroller programming & embedded prototyping',
          cluster: 'embedded',
          icon: SiArduino,
          iconColor: '#00979D',
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
          icon: SiNodedotjs,
          iconColor: '#339933',
          mastery: 'Learning',
          pulse: true
        },
        {
          name: 'TypeScript',
          context: 'Adding type safety to JavaScript projects',
          cluster: 'frontend',
          icon: SiTypescript,
          iconColor: '#3178C6',
          mastery: 'Learning',
          pulse: true
        },
        {
          name: 'Docker',
          context: 'Containerization & development environments',
          cluster: 'tools',
          icon: SiDocker,
          iconColor: '#2496ED',
          mastery: 'Exploring',
          pulse: true
        },
        {
          name: 'AWS',
          context: 'Cloud infrastructure & deployment',
          cluster: 'tools',
          icon: SiAmazonwebservices,
          iconColor: '#FF9900',
          mastery: 'Exploring',
          pulse: true
        },
        {
          name: 'Redis',
          context: 'Caching & session management',
          cluster: 'backend',
          icon: SiRedis,
          iconColor: '#DC382D',
          mastery: 'Learning'
        },
        {
          name: 'Tailwind CSS',
          context: 'Modern utility-first CSS framework',
          cluster: 'frontend',
          icon: SiTailwindcss,
          iconColor: '#06B6D4',
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
          icon: FaJava,
          iconColor: '#ED8B00',
          mastery: 'Familiar'
        },
        {
          name: 'MongoDB',
          context: 'NoSQL database for flexible data storage',
          cluster: 'backend',
          icon: SiMongodb,
          iconColor: '#47A248',
          mastery: 'Familiar'
        },
        {
          name: 'Bootstrap 5',
          context: 'Responsive CSS framework & component library',
          cluster: 'frontend',
          icon: SiBootstrap,
          iconColor: '#7952B3',
          mastery: 'Comfortable'
        },
        {
          name: 'GitHub Actions',
          context: 'CI/CD automation & workflows',
          cluster: 'tools',
          icon: SiGithubactions,
          iconColor: '#2088FF',
          mastery: 'Familiar'
        },
        {
          name: 'Figma',
          context: 'UI/UX design & prototyping',
          cluster: 'tools',
          icon: SiFigma,
          iconColor: '#F24E1E',
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
      icon: FaPalette
    },
    backend: { 
      name: 'Backend', 
      color: 'bg-green-500/30 border-green-400/50',
      gradient: 'from-green-400 to-emerald-400',
      icon: FaCode
    },
    embedded: { 
      name: 'Embedded', 
      color: 'bg-orange-500/30 border-orange-400/50',
      gradient: 'from-orange-400 to-red-400',
      icon: FaMicrochip
    },
    tools: { 
      name: 'Tools', 
      color: 'bg-purple-500/30 border-purple-400/50',
      gradient: 'from-purple-400 to-pink-400',
      icon: FaTools
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

  const getAllSkills = () => {
    return Object.entries(skillCategories).flatMap(([categoryKey, category]) =>
      category.skills.map(skill => ({ ...skill, categoryKey, category }))
    );
  };

  const getTotalSkillCount = () => {
    return Object.values(skillCategories).reduce((total, cat) => total + cat.skills.length, 0);
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

  const renderCategoryPreview = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      {/* View Toggle */}
      <div className="flex justify-center gap-4 mb-8">
        <motion.button
          onClick={() => setViewMode('compact')}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-500 to-primary-500 rounded-xl text-white font-medium hover:shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <BsFillGrid3X3GapFill />
          View All {getTotalSkillCount()} Skills
        </motion.button>
      </div>

      {/* Category Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(skillCategories).map(([categoryKey, category], index) => (
          <motion.div
            key={categoryKey}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="group relative p-8 rounded-3xl glass-effect border-2 border-gray-700/50 cursor-pointer hover:border-accent-500/50 transition-all duration-500 overflow-hidden"
            onClick={() => setActiveFilter(categoryKey)}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            {/* Content */}
            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="text-5xl"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {category.emoji}
                </motion.div>
                <div>
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>
                  <p className="text-gray-400 font-medium">{category.subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {category.description}
              </p>

              {/* Skills Preview */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  {category.skills.slice(0, 6).map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800/50 border border-gray-600/50"
                      whileHover={{ scale: 1.05 }}
                      transition={{ delay: skillIndex * 0.05 }}
                    >
                      <div className="text-lg" style={{ color: skill.iconColor }}>
                        <skill.icon />
                      </div>
                      <span className="text-white text-sm font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                  {category.skills.length > 6 && (
                    <div className="flex items-center px-3 py-2 rounded-lg bg-gray-700/50 border border-gray-600/50">
                      <span className="text-gray-400 text-sm">+{category.skills.length - 6} more</span>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                  <span className="text-gray-400 text-sm">
                    {category.skills.length} technologies
                  </span>
                  <div className="flex items-center gap-2 text-accent-400 font-medium group-hover:text-accent-300 transition-colors">
                    <span>Explore</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const renderCompactView = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      {/* Back Button */}
      <div className="flex justify-center">
        <motion.button
          onClick={() => setViewMode('categories')}
          className="flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl text-white font-medium transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Back to Categories
        </motion.button>
      </div>

      {/* Compact Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {getAllSkills().map((skill, index) => {
          const SkillMotionDiv = skill.pulse ? motion.div : motion.div;
          return (
            <SkillMotionDiv
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="group relative p-4 rounded-xl glass-effect border transition-all duration-300 hover:scale-105 hover:border-accent-500/50 cursor-pointer"
              onClick={() => setActiveFilter(skill.categoryKey)}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              {...(skill.pulse ? { 
                variants: pulseVariants,
                animate: "animate"
              } : {})}
            >
              {/* Sparkle Effect */}
              {skill.sparkles && (
                <motion.div
                  className="absolute top-1 right-1 text-yellow-400 text-xs"
                  variants={sparkleVariants}
                  animate="animate"
                >
                  ✨
                </motion.div>
              )}

              <div className="text-center">
                <motion.div 
                  className="text-2xl mb-2 mx-auto w-fit" 
                  style={{ color: skill.iconColor }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <skill.icon />
                </motion.div>
                <h4 className="text-xs font-medium text-white mb-1 leading-tight">{skill.name}</h4>
                <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${skill.category.color} text-white inline-block`}>
                  {skill.mastery}
                </span>
              </div>

              {/* Tooltip */}
              {hoveredSkill === skill.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg shadow-xl border border-gray-700 whitespace-nowrap z-50"
                >
                  {skill.context}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
                </motion.div>
              )}
            </SkillMotionDiv>
          );
        })}
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center p-6 rounded-xl bg-gradient-to-r from-accent-500/10 to-primary-500/10 border border-accent-500/20"
      >
        <p className="text-gray-300 text-lg">
          <span className="text-accent-400 font-bold">{getTotalSkillCount()}</span> technologies across{' '}
          <span className="text-primary-400 font-bold">{Object.keys(skillCategories).length}</span> categories
        </p>
      </motion.div>
    </motion.div>
  );

  const renderDetailedView = () => (
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
            {/* Category Header */}
            <motion.div 
              className="text-center mb-12 relative"
              whileHover={{ scale: 1.02 }}
            >
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

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.skills.map((skill, index) => {
                const SkillMotionDiv = skill.pulse ? motion.div : motion.div;
                return (
                  <SkillMotionDiv
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
                    {...(skill.pulse ? { 
                      variants: pulseVariants,
                      animate: "animate"
                    } : {})}
                  >
                    <div className={`relative p-8 rounded-3xl glass-effect border-2 transition-all duration-500 overflow-hidden ${clusters[skill.cluster].color}`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      
                      {skill.sparkles && (
                        <motion.div
                          className="absolute top-4 right-4 text-yellow-400"
                          variants={sparkleVariants}
                          animate="animate"
                        >
                          ✨
                        </motion.div>
                      )}

                      <div className="relative z-10">
                        <div className="flex items-start gap-4 mb-6">
                          <motion.div 
                            className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                            whileHover={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.3 }}
                            style={{ color: skill.iconColor }}
                          >
                            <skill.icon />
                          </motion.div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h4 className="text-xl font-bold text-white group-hover:text-accent-100 transition-colors">
                                {skill.name}
                              </h4>
                              <motion.span 
                                className={`text-xs px-3 py-1 rounded-full font-medium ${clusters[skill.cluster].color} backdrop-blur-sm flex items-center gap-1`}
                                whileHover={{ scale: 1.1 }}
                              >
                                {renderClusterIcon(skill.cluster)}
                                {clusters[skill.cluster].name}
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

                        <p className="text-gray-300 group-hover:text-gray-100 text-sm leading-relaxed transition-colors">
                          {skill.context}
                        </p>

                        <motion.div
                          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${category.color} origin-left`}
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>
                  </SkillMotionDiv>
                );
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );

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
          A comprehensive breakdown of my technical capabilities,  
            <span className="text-accent-400 font-medium"> from daily weapons to emerging skills</span>
          </p>
        </motion.div>

        {/* Filter Buttons - Only show when not in category preview mode */}
        {(activeFilter !== 'all' || viewMode !== 'categories') && (
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
                <div className={`absolute inset-0 bg-gradient-to-r ${
                  activeFilter === filter.key ? filter.color : 'from-gray-800 to-gray-700'
                } transition-all duration-300 ${
                  activeFilter !== filter.key ? 'opacity-50 group-hover:opacity-100' : ''
                }`} />
                
                <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
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
        )}

        {/* Dynamic Content */}
        <AnimatePresence mode="wait">
          {activeFilter === 'all' && viewMode === 'categories' && renderCategoryPreview()}
          {activeFilter === 'all' && viewMode === 'compact' && renderCompactView()}
          {activeFilter !== 'all' && renderDetailedView()}
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
                <span className="text-accent-400 font-medium">Continuous learner</span>, 
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
