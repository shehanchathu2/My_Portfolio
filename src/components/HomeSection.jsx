import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNode, FaDatabase,
} from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import image3 from '../assets/shehan3.png'
import TypingText from './TypingText';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const HomeSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 bg-[#0b1220]">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm uppercase tracking-widest mb-6"
          >
            Welcome to my world
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="text-white">Hi, I'm </span>
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              Shehan.
            </span>
          </h1>

          <TypingText
            texts={[
              "Software Engineer",
              "Full Stack Developer",
              "Back-End Developer",
            ]}
            className="text-3xl font-bold text-sky-500"
          />

          <p className="text-lg text-gray-400 mb-12 mt-6  max-w-xl leading-relaxed">
            Aspiring Full-Stack Engineer skilled in building dynamic web applications and APIs. Experienced with frontend and backend development, version control, and team collaboration. Seeking a software engineering internship to apply skills and contribute to innovative projects......         </p>

          {/* Social Links and Skills */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* Find Me In */}
            <div>
              <h3 className="text-gray-500 text-xs uppercase tracking-wider mb-4">Find me in</h3>
              <div className="flex gap-3">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-14 h-14 bg-gray-800/50 border border-gray-700 hover:border-cyan-500 rounded-lg flex items-center justify-center text-xl text-gray-400 hover:text-cyan-400 transition-all"
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-14 h-14 bg-gray-800/50 border border-gray-700 hover:border-cyan-500 rounded-lg flex items-center justify-center text-xl text-gray-400 hover:text-cyan-400 transition-all"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-14 h-14 bg-gray-800/50 border border-gray-700 hover:border-cyan-500 rounded-lg flex items-center justify-center text-xl text-gray-400 hover:text-cyan-400 transition-all"
                >
                  <FaEnvelope />
                </motion.a>
              </div>
            </div>

            {/* Best Skill On */}
            {/* <div>
              <h3 className="text-gray-500 text-xs uppercase tracking-wider mb-4">Best skill on</h3>
              <div className="flex gap-3">
                <motion.div
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-14 h-14 bg-gray-800/50 border border-gray-700 hover:border-cyan-500 rounded-lg flex items-center justify-center text-xl text-gray-400 hover:text-cyan-400 transition-all"
                >
                  <FaReact />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-14 h-14 bg-gray-800/50 border border-gray-700 hover:border-cyan-500 rounded-lg flex items-center justify-center text-xl text-gray-400 hover:text-cyan-400 transition-all"
                >
                  <FaNode />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-14 h-14 bg-gray-800/50 border border-gray-700 hover:border-cyan-500 rounded-lg flex items-center justify-center text-xl text-gray-400 hover:text-cyan-400 transition-all"
                >
                  <SiJavascript />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-14 h-14 bg-gray-800/50 border border-gray-700 hover:border-cyan-500 rounded-lg flex items-center justify-center text-xl text-gray-400 hover:text-cyan-400 transition-all"
                >
                  <FaDatabase />
                </motion.div>
              </div>
            </div> */}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center items-center w-full"
        >
          <div className="relative w-full max-w-sm">
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>

            {/* Image container */}
            <div className="relative rounded-3xl overflow-hidden">

              {/* Main Image */}
              <img
                src={image3}
                alt="Professional"
                className="w-full  z-90 h-full object-cover"
              />
              {/* Black Gradient Card */}
              <div className="absolute bottom-0 left-0 w-full p-5 h-2/3
                  bg-gradient-to-t from-black/80 via-black/40 to-transparent z-1">
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HomeSection;