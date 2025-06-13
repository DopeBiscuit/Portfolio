import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Resume', href: '/abdelrahman_resume.pdf', special: true, download: 'Abdelrahman_Resume.pdf' },
    { name: 'Contact', href: '#contact', special: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-bold text-xl gradient-text cursor-pointer"
          >
            Abdelrahman
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                download={item.download || undefined}
                whileHover={{ scale: item.special ? 1.05 : 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={
                  item.special
                    ? "relative px-6 py-2 bg-gradient-to-r from-accent-500/20 to-primary-500/20 hover:from-accent-500/30 hover:to-primary-500/30 text-accent-200 hover:text-white font-semibold rounded-full border border-accent-500/30 hover:border-accent-400/50 transition-all duration-300 shadow-lg hover:shadow-accent-500/25"
                    : "text-gray-300 hover:text-white transition-colors duration-300 relative group"
                }
              >
                {item.name}
                {!item.special && (
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-500 to-primary-500 group-hover:w-full transition-all duration-300"></span>
                )}
                {item.special && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-500/10 to-primary-500/10 blur-lg opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                )}
              </motion.a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                download={item.download || undefined}
                onClick={() => setIsOpen(false)}
                className={
                  item.special
                    ? "block py-3 px-4 mx-2 text-center bg-gradient-to-r from-accent-500/20 to-primary-500/20 text-accent-200 font-semibold rounded-full border border-accent-500/30 transition-all duration-300"
                    : "block py-2 text-gray-300 hover:text-white transition-colors duration-300"
                }
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;