
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNode, FaDatabase, 
  FaCode, FaExternalLinkAlt, FaGraduationCap, FaAward, FaDownload,
  FaPhone, FaMapMarkerAlt, FaBars, FaTimes, FaArrowUp
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiMongodb, SiPostgresql, SiTypescript, 
  SiDocker, SiJavascript, SiPython, SiGit 
} from 'react-icons/si';
const HomeSection = () => {
    const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-cyan-400 text-xl mb-4"
            >
              Hi, I'm
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                John Developer
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-300">
              Full Stack Developer
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto md:mx-0">
              I build exceptional digital experiences with modern web technologies. 
              Specialized in creating scalable applications from concept to deployment.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <motion.button
                onClick={() => scrollToSection('projects')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Projects
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-cyan-500 hover:bg-cyan-500/10 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Me
              </motion.button>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-600 hover:border-cyan-500 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                <FaDownload /> Resume
              </motion.a>
            </div>
            <div className="flex gap-6 justify-center md:justify-start">
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2, color: '#22d3ee' }} 
                className="text-3xl hover:text-cyan-400 transition-colors"
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2, color: '#22d3ee' }} 
                className="text-3xl hover:text-cyan-400 transition-colors"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2, color: '#22d3ee' }} 
                className="text-3xl hover:text-cyan-400 transition-colors"
              >
                <FaEnvelope />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
  )
}

export default HomeSection
