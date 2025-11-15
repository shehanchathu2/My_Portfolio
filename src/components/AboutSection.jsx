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

const AboutSection = () => {
  return (
   <section id="about" className="py-20 px-6 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            About <span className="text-cyan-400">Me</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-full h-96 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-cyan-500/30">
                <FaCode className="text-9xl text-cyan-400/30" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Passionate Full Stack Developer</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                I'm a full stack developer with a passion for creating elegant solutions to complex problems. 
                With expertise in both frontend and backend technologies, I build complete web applications 
                from the ground up.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                My journey in software development started with curiosity about how websites work, and has 
                evolved into a career building scalable, user-friendly applications. I'm constantly learning 
                new technologies and best practices to stay at the forefront of web development.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                When I'm not coding, I enjoy contributing to open-source projects, writing technical articles, 
                and mentoring aspiring developers.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">3+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">50+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">30+</div>
                  <div className="text-gray-400">Happy Clients</div>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">5+</div>
                  <div className="text-gray-400">Certifications</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  )
}

export default AboutSection
