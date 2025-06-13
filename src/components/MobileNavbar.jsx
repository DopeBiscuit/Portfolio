import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bars3Icon, 
  XMarkIcon,
  DocumentArrowDownIcon,
  HomeIcon,
  UserIcon,
  CodeBracketIcon,
  WrenchScrewdriverIcon,
  TrophyIcon,
  BriefcaseIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', icon: HomeIcon },
    { id: 'about', label: 'About', icon: UserIcon },
    { id: 'projects', label: 'Projects', icon: CodeBracketIcon },
    { id: 'skills', label: 'Skills', icon: WrenchScrewdriverIcon },
    { id: 'achievements', label: 'Achievements', icon: TrophyIcon },
    { id: 'freelance', label: 'Freelance', icon: BriefcaseIcon },
    { id: 'contact', label: 'Contact', icon: EnvelopeIcon },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: { duration: 0.3 }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 }
    })
  };

  return (
    <>
      {/* Mobile Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-effect border-b border-dark-700/50' : 'bg-transparent'
        } md:hidden`}
      >
        <div className="container-responsive">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <span className="text-xl font-bold gradient-text">AH</span>
            </motion.div>

            {/* Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-dark-950/90 backdrop-blur-sm md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 w-80 h-full bg-dark-900/95 backdrop-blur-xl border-l border-dark-700/50 z-50 md:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-dark-700/50">
                <span className="text-xl font-bold gradient-text">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="flex-1 px-6 py-8">
                <ul className="space-y-4">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.li
                        key={item.id}
                        variants={itemVariants}
                        initial="closed"
                        animate="open"
                        custom={index}
                      >
                        <button
                          onClick={() => scrollToSection(item.id)}
                          className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 ${
                            activeSection === item.id
                              ? 'bg-accent-500/20 text-accent-400 border border-accent-500/30'
                              : 'text-gray-300 hover:bg-dark-800/50 hover:text-white'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                          <span className="font-medium">{item.label}</span>
                        </button>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Resume Download */}
              <div className="p-6 border-t border-dark-700/50">
                <motion.a
                  href="/abdelrahman_resume.pdf"
                  download
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 w-full btn-primary"
                >
                  <DocumentArrowDownIcon className="w-4 h-4" />
                  Download Resume
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavbar;