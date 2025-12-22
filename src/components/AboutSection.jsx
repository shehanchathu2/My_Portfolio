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
          About <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
            Me
          </span>
        </motion.h2>
        <div className="items-cente">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center items-center'
          >
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">

                Passionate Full Stack Developer
              </span>
            </h3>
            <div className='m-auto w-2/3'>
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
