import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye, FaRocket, FaLightbulb, FaTools, FaTrophy, FaAws, FaSlack, FaShoppingCart, FaMapMarkerAlt, FaClock, FaJava, FaChartBar, FaShieldAlt, FaBrain, FaGlobe, FaMicrochip, FaEnvelope } from 'react-icons/fa';
import { SiReact, SiPython, SiJavascript, SiNodedotjs, SiTailwindcss, SiCplusplus, SiInstagram, SiAwslambda, SiMongodb, SiExpress, SiFirebase, SiAndroid, SiPostgresql, SiJupyter, SiC, SiNasa, SiOpenai, SiFiverr } from 'react-icons/si';
import { FaUpwork } from "react-icons/fa6";
import { IoHardwareChip } from "react-icons/io5";


const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth <= 768;
      setIsMobile(isTouchDevice || isSmallScreen);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Track mouse for floating effects - only on desktop
  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  const projects = [
    {
      id: 1,
      title: "Gmail Customer Data Bot",
      subtitle: "Upwork • OpenAI • Database Automation",
      description: "An intelligent bot that automatically fetches and processes emails containing customer information for car rentals. Uses OpenAI API for email categorization and extracts data to update client database, eliminating manual work and saving precious time.",
      category: "professional",
      type: "Automation",
      status: "Production",
      mastery: "Professional Work",
      featured: true,
      technologies: [
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "OpenAI API", icon: SiOpenai, color: "#00A67E" },
        { name: "Gmail API", icon: FaEnvelope, color: "#EA4335" },
        { name: "Database", icon: FaTools, color: "#336791" }
      ],
      features: [
        "Automated email fetching",
        "OpenAI categorization",
        "Data extraction & processing",
        "Database integration",
        "Zero manual intervention"
      ],
      image: "https://via.placeholder.com/400x250/00A67E/white?text=Gmail+Bot",
      github: null,
      demo: "https://www.upwork.com/freelancers/~01e92e0c8b7675915f?p=1922432943075143680",
      upwork: true,
      color: "from-green-500 to-blue-500",
      bgGradient: "from-green-500/20 to-blue-500/20",
      learnings: [
        "Gmail API integration",
        "OpenAI API implementation",
        "Email processing automation",
        "Database management",
        "Client workflow optimization"
      ]
    },
    {
      id: 2,
      title: "Airbnb Data Scraper & Slack Bot",
      subtitle: "AWS Lambda • Python • Fiverr Client Work",
      description: "A professional Python scraping bot that gathers data from Airbnb properties, processes the information, and sends structured reports to Slack channels. Deployed on AWS Lambda for scalable, serverless automation.",
      category: "professional",
      type: "Automation",
      status: "Production",
      mastery: "Professional Work",
      featured: true,
      technologies: [
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "AWS Lambda", icon: SiAwslambda, color: "#FF9900" },
        { name: "Slack API", icon: FaSlack, color: "#4A154B" },
        { name: "Web Scraping", icon: FaCode, color: "#28A745" }
      ],
      features: [
        "Real-time data extraction",
        "Slack integration & notifications", 
        "AWS Lambda deployment",
        "Error handling & monitoring",
        "Scheduled automation"
      ],
      image: "https://via.placeholder.com/400x250/FF9900/white?text=Airbnb+Scraper",
      github: null,
      demo: "https://www.fiverr.com/boody_hany",
      fiverr: true,
      color: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/20 to-red-500/20",
      learnings: [
        "Professional web scraping techniques",
        "AWS Lambda serverless deployment", 
        "Slack API integration",
        "Production error handling",
        "Client communication & delivery"
      ]
    },
    {
      id: 3,
      title: "CartNest - E-commerce Platform",
      subtitle: "Full Stack • JavaScript, Python, PostgreSQL",
      description: "A comprehensive e-commerce platform with shopping cart functionality, user authentication, payment processing, and admin dashboard. Built with modern web technologies and PostgreSQL database for robust data management.",
      category: "fullstack",
      type: "Web App",
      status: "Completed",
      mastery: "Team Project",
      featured: true,
      technologies: [
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
        { name: "HTML/CSS", icon: FaCode, color: "#E34F26" }
      ],
      features: [
        "Shopping cart & checkout",
        "User authentication",
        "Admin dashboard",
        "Payment integration",
        "Product catalog management"
      ],
      image: "https://via.placeholder.com/400x250/F7DF1E/black?text=CartNest",
      github: "https://github.com/moazragab12/Cartnest",
      demo: null,
      color: "from-yellow-500 to-green-500",
      bgGradient: "from-yellow-500/20 to-green-500/20",
      learnings: [
        "Full-stack development workflow",
        "Database design and relationships",
        "Authentication and authorization",
        "Payment gateway integration",
        "Team collaboration & version control"
      ]
    },
    {
      id: 4,
      title: "CHRONOS - CPU Scheduling Visualizer",
      subtitle: "Python Desktop App • Algorithm Visualization",
      description: "A sophisticated desktop application that visualizes CPU scheduling algorithms with interactive Gantt charts. Supports FCFS, SJF, Priority Scheduling, and Round Robin with real-time statistics and performance comparisons.",
      category: "academic",
      type: "Desktop App",
      status: "Completed",
      mastery: "Senior Project",
      featured: false,
      technologies: [
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "GUI Framework", icon: FaTools, color: "#8B5CF6" },
        { name: "Data Visualization", icon: FaChartBar, color: "#10B981" },
        { name: "Algorithms", icon: FaBrain, color: "#F59E0B" }
      ],
      features: [
        "Interactive Gantt charts",
        "Multiple scheduling algorithms",
        "Real-time statistics",
        "Dynamic process management",
        "Performance comparisons"
      ],
      image: "https://via.placeholder.com/400x250/3776AB/white?text=CHRONOS",
      github: "https://github.com/dizzydroid/ASU_SeniorProject_OS",
      demo: null,
      color: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-500/20 to-purple-500/20",
      learnings: [
        "Operating systems concepts",
        "Algorithm implementation",
        "Desktop GUI development",
        "Data visualization techniques",
        "Performance analysis"
      ]
    },
    {
      id: 5,
      title: "Climate Change App - NASA Space Apps 2024",
      subtitle: "Python • Machine Learning • NASA Challenge",
      description: "A Python-based application developed for NASA Space Apps 2024 Challenge focusing on climate change analysis. Utilizes Arrow, STAC, RASTER data processing, and LLM integration for comprehensive environmental insights.",
      category: "competition",
      type: "Data Science",
      status: "Competition Entry",
      mastery: "Challenge Project",
      featured: false,
      technologies: [
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Jupyter", icon: SiJupyter, color: "#F37626" },
        { name: "Machine Learning", icon: FaBrain, color: "#10B981" },
        { name: "NASA APIs", icon: SiNasa, color: "#0B3D91" }
      ],
      features: [
        "Climate data analysis",
        "STAC/RASTER processing",
        "LLM integration",
        "Environmental insights",
        "NASA API integration"
      ],
      image: "https://via.placeholder.com/400x250/0B3D91/white?text=NASA+Climate",
      github: "https://github.com/PerfectionistAF/Climate_Change_App",
      demo: null,
      color: "from-blue-600 to-green-500",
      bgGradient: "from-blue-600/20 to-green-500/20",
      learnings: [
        "Climate data processing",
        "NASA API integration",
        "Machine learning applications",
        "Environmental data analysis",
        "Competition project delivery"
      ]
    },
    {
      id: 6,
      title: "Fraud Detection System",
      subtitle: "Python • Machine Learning • High Performance",
      description: "A Python implementation of Chung & Lee's 2023 fraud detection ensemble approach. Optimized for high recall (≥0.93) on the PaySim dataset with advanced machine learning techniques and performance benchmarking.",
      category: "ml",
      type: "Machine Learning",
      status: "Completed",
      mastery: "Research Implementation",
      featured: false,
      technologies: [
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Jupyter", icon: SiJupyter, color: "#F37626" },
        { name: "Machine Learning", icon: FaBrain, color: "#10B981" },
        { name: "Data Science", icon: FaShieldAlt, color: "#DC2626" }
      ],
      features: [
        "High recall optimization (≥0.93)",
        "Ensemble learning approach",
        "PaySim dataset analysis",
        "Performance benchmarking",
        "Research paper implementation"
      ],
      image: "https://via.placeholder.com/400x250/DC2626/white?text=Fraud+Detection",
      github: "https://github.com/dizzydroid/fraud-detection",
      demo: null,
      color: "from-red-500 to-orange-500",
      bgGradient: "from-red-500/20 to-orange-500/20",
      learnings: [
        "Advanced ML ensemble methods",
        "Model performance optimization",
        "Financial data analysis",
        "Research paper implementation",
        "High-performance computing"
      ]
    },
    // NON-FEATURED PROJECTS (shown only when "View All" is clicked)
    {
      id: 7,
      title: "GPS System - TivaC Embedded",
      subtitle: "C • Assembly • Embedded Systems",
      description: "An embedded GPS tracking system implemented on TivaC microcontroller using C and Assembly. Features real-time location tracking, data processing, and hardware interface management for precise positioning applications.",
      category: "embedded",
      type: "Hardware",
      status: "Completed",
      mastery: "University Project",
      featured: false,
      technologies: [
        { name: "C", icon: SiC, color: "#A8B9CC" },
        { name: "Assembly", icon: FaCode, color: "#654FF0" },
        { name: "TivaC", icon: FaTools, color: "#DC2626" },
        { name: "Embedded Systems", icon: FaMapMarkerAlt, color: "#059669" }
      ],
      features: [
        "Real-time GPS tracking",
        "Microcontroller programming",
        "Hardware interfacing",
        "Low-level optimization",
        "Embedded system design"
      ],
      image: "https://via.placeholder.com/400x250/A8B9CC/black?text=GPS+TivaC",
      github: "https://github.com/MashaWaleed/GPS-System-TIVAC-CSE211",
      demo: null,
      color: "from-gray-500 to-blue-500",
      bgGradient: "from-gray-500/20 to-blue-500/20",
      learnings: [
        "Embedded systems programming",
        "Hardware-software integration",
        "Real-time system constraints",
        "Low-level C programming",
        "Microcontroller architecture"
      ]
    },
    {
      id: 8,
      title: "ByteWise - Educational Platform",
      subtitle: "Java • Educational Technology • Student-Instructor Portal",
      description: "A comprehensive Java-based educational platform for the CSE231s course, connecting students and instructors with interactive learning tools, assignment management, and progress tracking features.",
      category: "academic",
      type: "Educational Platform",
      status: "Completed",
      mastery: "Junior Project",
      featured: false,
      technologies: [
        { name: "Java", icon: FaJava, color: "#ED8B00" },
        { name: "CSS", icon: FaCode, color: "#1572B6" },
        { name: "Web Development", icon: FaGlobe, color: "#28A745" },
        { name: "Educational Tech", icon: FaLightbulb, color: "#F59E0B" }
      ],
      features: [
        "Student-instructor portal",
        "Assignment management",
        "Progress tracking",
        "Interactive learning tools",
        "Course material organization"
      ],
      image: "https://via.placeholder.com/400x250/ED8B00/white?text=ByteWise",
      github: "https://github.com/dizzydroid/ASU_JuniorProject",
      demo: null,
      color: "from-orange-500 to-yellow-500",
      bgGradient: "from-orange-500/20 to-yellow-500/20",
      learnings: [
        "Java enterprise development",
        "Educational platform design",
        "User experience for learning",
        "Multi-user system architecture",
        "Academic project management"
      ]
    },
    {
      id: 9,
      title: "NodeScope - XML Editor & Graph Visualizer",
      subtitle: "Python • Data Visualization • File Management",
      description: "A Python-based XML editor and graph visualizer designed for efficient file management and analysis. Features intuitive editing capabilities, visual graph representations, and advanced data processing tools.",
      category: "tools",
      type: "Desktop Tool",
      status: "Completed",
      mastery: "Senior Project",
      featured: false,
      technologies: [
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Data Visualization", icon: FaChartBar, color: "#10B981" },
        { name: "XML Processing", icon: FaCode, color: "#FF6B6B" },
        { name: "Graph Theory", icon: FaBrain, color: "#8B5CF6" }
      ],
      features: [
        "XML editing capabilities",
        "Interactive graph visualization",
        "File management system",
        "Data analysis tools",
        "Export/import functionality"
      ],
      image: "https://via.placeholder.com/400x250/3776AB/white?text=NodeScope",
      github: "https://github.com/dizzydroid/ASU_SeniorProject_DSA",
      demo: null,
      color: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-500/20 to-indigo-500/20",
      learnings: [
        "XML processing and manipulation",
        "Graph visualization algorithms",
        "Desktop application architecture",
        "Data structure optimization",
        "User interface design"
      ]
    },
    {
      id: 10,
      title: "RISC-V Processor with Verilog",
      subtitle: "Verilog • Digital Design • CPU Architecture",
      description: "A comprehensive RISC-V processor implementation in Verilog supporting 5 of 6 instruction formats. Features 30+ instructions covering 75% of the reference design, including I-type, R-type, S-type, B-type, and U-type instructions.",
      category: "hardware",
      type: "Hardware Design",
      status: "Completed",
      mastery: "IEEE Final Project",
      featured: false,
      technologies: [
        { name: "Verilog", icon: IoHardwareChip, color: "#1E88E5" },
        { name: "Digital Design", icon: FaMicrochip, color: "#FF6B35" },
        { name: "CPU Architecture", icon: FaTools, color: "#8E44AD" },
        { name: "RISC-V ISA", icon: FaCode, color: "#27AE60" }
      ],
      features: [
        "5 instruction format support",
        "30+ RISC-V instructions",
        "Pipeline architecture",
        "Instruction decoding & execution",
        "Register file management"
      ],
      image: "https://via.placeholder.com/400x250/1E88E5/white?text=RISC-V+CPU",
      github: "https://github.com/DopeBiscuit/RISC-V-Processor-Verilog",
      demo: null,
      color: "from-blue-600 to-purple-600",
      bgGradient: "from-blue-600/20 to-purple-600/20",
      learnings: [
        "RISC-V instruction set architecture",
        "Digital logic design principles",
        "CPU pipeline implementation",
        "Verilog hardware description language",
        "Computer architecture fundamentals"
      ]
    }
  ];

  const categories = [
    { 
      key: 'all', 
      label: 'All Projects', 
      icon: FaTrophy, 
      color: 'from-gray-600 to-gray-700',
      count: projects.length 
    },
    { 
      key: 'professional', 
      label: 'Professional', 
      icon: FaUpwork, 
      color: 'from-green-500 to-blue-500',
      count: projects.filter(p => p.category === 'professional').length 
    },
    { 
      key: 'fullstack', 
      label: 'Full Stack', 
      icon: FaRocket, 
      color: 'from-yellow-500 to-green-500',
      count: projects.filter(p => p.category === 'fullstack').length 
    },
    { 
      key: 'academic', 
      label: 'Academic', 
      icon: FaLightbulb, 
      color: 'from-blue-500 to-purple-500',
      count: projects.filter(p => p.category === 'academic').length 
    },
    { 
      key: 'competition', 
      label: 'Competition', 
      icon: SiNasa, 
      color: 'from-blue-600 to-green-500',
      count: projects.filter(p => p.category === 'competition').length 
    },
    { 
      key: 'ml', 
      label: 'Machine Learning', 
      icon: FaBrain, 
      color: 'from-red-500 to-orange-500',
      count: projects.filter(p => p.category === 'ml').length 
    },
    
    { 
      key: 'embedded', 
      label: 'Embedded', 
      icon: FaMapMarkerAlt, 
      color: 'from-gray-500 to-blue-500',
      count: projects.filter(p => p.category === 'embedded').length 
    },
    { 
      key: 'hardware', 
      label: 'Hardware Design', 
      icon: FaMicrochip, 
      color: 'from-blue-600 to-purple-600',
      count: projects.filter(p => p.category === 'hardware').length 
    },
    { 
      key: 'tools', 
      label: 'Tools', 
      icon: FaTools, 
      color: 'from-blue-500 to-indigo-600',
      count: projects.filter(p => p.category === 'tools').length 
    }
  ];

  const getFilteredProjects = () => {
    let filtered = activeFilter === 'all' ? projects : projects.filter(project => project.category === activeFilter);
    
    // Show only featured projects unless "View All" is toggled
    if (!showAllProjects) {
      filtered = filtered.filter(project => project.featured);
    }
    
    return filtered;
  };

  const featuredCount = projects.filter(p => p.featured).length;
  const totalCount = projects.length;

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const techStackVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 200
      }
    }),
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950" />
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-accent-500/10 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: i * 0.8 }}
          />
        ))}
      </div>

      {/* Mouse Follower - Only on Desktop */}
      {!isMobile && (
        <motion.div
          className="fixed w-6 h-6 bg-accent-500/20 rounded-full pointer-events-none z-50 mix-blend-screen"
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
          }}
          animate={{ scale: hoveredProject ? 1.5 : 1 }}
          transition={{ duration: 0.2 }}
        />
      )}

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
            <span className="text-6xl">🚀</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-accent-400 via-primary-400 to-green-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            From <span className="text-green-400 font-medium">professional automation bots</span> to <span className="text-blue-400 font-medium">NASA Space Apps challenges,</span> 
            <span className="text-accent-400 font-medium"> diverse solutions across multiple domains</span>
          </p>
        </motion.div>

        {/* Achievement Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full">
            <FaUpwork className="text-green-400" />
            <span className="text-green-300 text-sm font-medium">Active Upwork Freelancer</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-green-600/20 border border-green-600/30 rounded-full">
            <SiFiverr className="text-green-400" />
            <span className="text-green-300 text-sm font-medium">Fiverr Professional</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full">
            <SiNasa className="text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">NASA Space Apps 2024</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full">
            <FaBrain className="text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">ML & Embedded Systems</span>
          </div>
        </motion.div>

        {/* View Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <motion.button
            onClick={() => {
                      setShowAllProjects(!showAllProjects);
                      // Reset filter to 'all' when collapsing to show featured projects
                      if (showAllProjects) {
                        setActiveFilter('all');
                      }
                    }}
            className="group relative px-8 py-4 rounded-2xl font-bold text-lg bg-gradient-to-r from-accent-500/20 to-primary-500/20 border-2 border-accent-500/30 text-white hover:border-accent-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent-500/10 to-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center gap-3">
              <motion.div
                animate={{ rotate: showAllProjects ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {showAllProjects ? '📂' : '✨'}
              </motion.div>
              {showAllProjects 
                ? `Showing All ${totalCount} Projects`
                : `Featured Projects (${featuredCount}/${totalCount})`
              }
              <motion.span
                animate={{ rotate: showAllProjects ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ↓
              </motion.span>
            </div>
          </motion.button>
        </motion.div>

        {/* Filter Buttons - Only show when viewing all projects */}
        <AnimatePresence>
          {showAllProjects && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mb-16"
            >
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category, index) => {
                  const IconComponent = category.icon;
                  return (
                    <motion.button
                      key={category.key}
                      onClick={() => setActiveFilter(category.key)}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group relative px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 overflow-hidden ${
                        activeFilter === category.key
                          ? 'text-white shadow-2xl shadow-accent-500/25'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${
                        activeFilter === category.key ? category.color : 'from-gray-800 to-gray-700'
                      } transition-all duration-300 ${
                        activeFilter !== category.key ? 'opacity-50 group-hover:opacity-100' : ''
                      }`} />
                      
                      <div className="relative flex items-center gap-3">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <IconComponent className="text-lg" />
                        </motion.div>
                        {category.label}
                        <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </div>

                      {activeFilter === category.key && (
                        <motion.div
                          layoutId="activeProjectFilter"
                          className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeFilter}-${showAllProjects}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {getFilteredProjects().map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group relative"
              >
                <div className={`relative p-8 rounded-3xl glass-effect border-2 border-gray-700/50 hover:border-accent-500/50 transition-all duration-500 overflow-hidden h-full`}>
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-20">
                      <motion.div
                        className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-accent-500 to-primary-500 text-white"
                        whileHover={{ scale: 1.1 }}
                        animate={{ 
                          boxShadow: [
                            "0 0 10px rgba(139, 92, 246, 0.3)",
                            "0 0 20px rgba(139, 92, 246, 0.5)",
                            "0 0 10px rgba(139, 92, 246, 0.3)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        ⭐ Featured
                      </motion.div>
                    </div>
                  )}

                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Project Image/Logo */}
                    <motion.div 
                      className="relative mb-6 rounded-2xl overflow-hidden bg-gray-800/50"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 right-4">
                        <motion.span 
                          className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${project.color} text-white`}
                          whileHover={{ scale: 1.1 }}
                        >
                          {project.status}
                        </motion.span>
                      </div>

                      {/* Mastery Level */}
                      <div className="absolute bottom-4 left-4">
                        <motion.span 
                          className="px-3 py-1 rounded-full text-xs font-medium bg-gray-900/80 text-gray-200 backdrop-blur-sm"
                          whileHover={{ scale: 1.1 }}
                        >
                          {project.mastery}
                        </motion.span>
                      </div>

                      {/* Hover Overlay */}
                      <motion.div 
                        className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {project.demo && (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-accent-500 rounded-full text-white hover:bg-accent-600 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FaEye />
                          </motion.a>
                        )}
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FaGithub />
                          </motion.a>
                        )}
                        {project.upwork && (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-green-600 rounded-full text-white hover:bg-green-700 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FaUpwork />
                          </motion.a>
                        )}
                        {project.fiverr && (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-green-500 rounded-full text-white hover:bg-green-600 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <SiFiverr />
                          </motion.a>
                        )}
                      </motion.div>
                    </motion.div>

                    {/* Project Info */}
                    <div className="flex-1 flex flex-col">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-white group-hover:text-accent-100 transition-colors">
                            {project.title}
                          </h3>
                          <span className="text-xs px-2 py-1 rounded-full bg-gray-700/50 text-gray-300">
                            {project.type}
                          </span>
                        </div>
                        <p className="text-accent-400 font-medium text-sm">{project.subtitle}</p>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold text-sm mb-3">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => {
                            const TechIcon = tech.icon;
                            return (
                              <motion.div
                                key={tech.name}
                                variants={techStackVariants}
                                initial="hidden"
                                whileInView="visible"
                                whileHover="hover"
                                custom={techIndex}
                                className="flex items-center gap-2 px-3 py-1 rounded-lg bg-gray-800/60 border border-gray-600/50"
                              >
                                <TechIcon 
                                  className="text-sm" 
                                  style={{ color: tech.color }} 
                                />
                                <span className="text-white text-xs font-medium">{tech.name}</span>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold text-sm mb-3">Key Features</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {project.features.map((feature, featureIndex) => (
                            <motion.div
                              key={feature}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: featureIndex * 0.1 }}
                              className="flex items-center gap-2 text-gray-300 text-xs"
                            >
                              <div className="w-1.5 h-1.5 bg-accent-400 rounded-full" />
                              {feature}
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-4 border-t border-gray-700/50">
                        {project.upwork && (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-xl text-white font-medium text-sm transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <FaUpwork className="text-xs" />
                            Upwork
                          </motion.a>
                        )}
                        {project.fiverr && (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 rounded-xl text-white font-medium text-sm transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <SiFiverr className="text-xs" />
                            Fiverr
                          </motion.a>
                        )}
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-xl text-white font-medium text-sm transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <FaCode className="text-xs" />
                            Code
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>


      </div>
    </section>
  );
};

export default Projects;