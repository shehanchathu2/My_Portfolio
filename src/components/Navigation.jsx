import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {  FaBars, FaTimes} from 'react-icons/fa';




export default Navigation = ({ activeSection, scrollToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = ['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-40 mt-1">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            {'<DevPortfolio />'}
          </motion.div>
          
          <div className="hidden md:flex gap-8">
            {navItems.map((item, i) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`hover:text-cyan-400 transition-colors ${
                  activeSection === item.toLowerCase() ? 'text-cyan-400' : ''
                }`}
              >
                {item}
              </motion.button>
            ))}
          </div>

          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden mt-4 pb-4"
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 hover:text-cyan-400 transition-colors ${
                  activeSection === item.toLowerCase() ? 'text-cyan-400' : ''
                }`}
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};