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
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import research from '../assets/research.jpeg'
import p4 from '../assets/p4.png'

const ProjectsSection = () => {

  const projects = [
    {
      background: research,
      title: " Multivariate Anomaly Detection For Wildfire Detection",
      description: "Ongoing research is using LSTM and Vision Transformers for early wildfire detection and stage classification.",
      tech: ["Machine Learning", "LSTM", "Vision Transformer", "Python"],
    },
    {
      background: p1,
      title: "Handmade Jewellery Try-On & Customization Platform (Wave Mirissa)",
      description: "Full-stack e-commerce platform featuring secure auth, PayHere integration, order management, and AI-powered virtual try-on with personalized recommendations.",
      tech: ["React", "Spring Boot", "PostgreSQL", "PayHere", " Tailwind CSS"],
      // link: "#",
      github: "https://github.com/shehanchathu2/WaveMirissa-frontend.git"
    },
    {
      background: p2,
      title: " Hotel Management System | Full-Stack Web Application (Bokify)",
      description: "MERN-based hotel management system featuring hotel browsing, availability checks, secure bookings, user dashboards, and an owner dashboard for managing rooms, bookings, and analytics.",
      tech: ["React", "Node.js", "Express", "MongoDB", " Tailwind CSS"],
      // link: "#",
      github: "https://github.com/shehanchathu2/Bokify.git"
    },
    {
      background: p3,
      title: " E-Commerce Platform | Full-Stack Web Application (Loomora)",
      description: "MERN e-commerce platform with JWT auth, Stripe payments, cart/order tools, tracking, and an admin dashboard for product CRUD and analytics.",
      tech: ["React", "Node.js", "Express", "MongoDB", " Tailwind CSS"],
      link: "https://loomora-f1.vercel.app/",
      github: "https://github.com/shehanchathu2/Loomora_E-commerce.git"
    },
    {
       background: p4,
      "title": "Movio - Movie Discovery Website",
      "description": "A Disney-like movie discovery platform where users can browse, search, and explore movies with details, ratings, and trailers. Features include responsive UI, movie filtering, and dynamic search functionality.",
      "tech": ["Next.js", "TypeScript", "TailwindCSS", "ShadCN", "TMDB API"],
      "link": "https://movio-nextjs.vercel.app/",
      "github": "https://github.com/shehanchathu2/Movio-nextjs.git"
    }

    // {
    //   title: "REST API for Blog Platform",
    //   description: "RESTful API with authentication, CRUD operations, pagination, search functionality, and comprehensive documentation using Swagger.",
    //   tech: ["Node.js", "Express", "PostgreSQL", "JWT"],
    //   link: "#",
    //   github: "#"
    // },
    // {
    //   title: "Weather Forecast App",
    //   description: "Responsive weather application with geolocation, 7-day forecasts, interactive maps, and favorite locations feature.",
    //   tech: ["React", "OpenWeather API", "Tailwind CSS"],
    //   link: "#",
    //   github: "#"
    // }
  ];

  return (
    <div>
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            Featured <span className="text-cyan-400">Projects</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all overflow-hidden flex flex-col"
              >
                {/* Fixed height image container */}
                <div className="h-52 w-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center overflow-hidden">
                  <img
                    src={project.background}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto flex gap-2">
                    {/* GitHub Button */}
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      className="flex-1 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
                    >
                      <FaGithub /> Code
                    </motion.a>

                    {/* Optional Live Demo Button */}
                    {project.link && (
                      <motion.a
                        href={project.link}
                        whileHover={{ scale: 1.05 }}
                        className="flex-1 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 px-4 py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default ProjectsSection
