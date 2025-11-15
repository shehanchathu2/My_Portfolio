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



 const data = {
    description: [
      "I'm a full stack developer with a passion for creating elegant solutions to complex problems. With expertise in both frontend and backend technologies, I build complete web applications from the ground up.",
      "My journey in software development started with curiosity about how websites work, and has evolved into a career building scalable, user-friendly applications. I'm constantly learning new technologies and best practices to stay at the forefront of web development.",
      "When I'm not coding, I enjoy contributing to open-source projects, writing technical articles, and mentoring aspiring developers."
    ],
    stats: [
      { value: "3+", label: "Years Experience" },
      { value: "50+", label: "Projects Completed" },
      { value: "30+", label: "Happy Clients" },
      { value: "5+", label: "Certifications" }
    ]
}


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
            {data.description.map((para, i) => (
              <p key={i} className="text-gray-300 mb-4 leading-relaxed">
                {para}
              </p>
            ))}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {data.stats.map((stat, i) => (
                <div key={i} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection