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

const ProjectsSection = () => {

  const projects = [
    {
        background:p1,
        title: "Handmade Jewellery Try-On & Customization Platform (Wave Mirissa)",
        description: "Built a full-stack e-commerce platform for Wave Mirissa with Spring Boot, React, Tailwind CSS, and PostgreSQL, including secure auth, product/order management, delivery tracking, and a role-based admin dashboard with PayHere. Integrated AI virtual try-on and personalized recommendations.",
        tech: ["React", "Spring Boot", "PostgreSQL", "PayHere"," Tailwind CSS"],
        // link: "#",
        github: "https://github.com/shehanchathu2/WaveMirissa-frontend.git"
      },
    {
        background:p2,
        title: " Hotel Management System | Full-Stack Web Application (Bokify)",
        description: "Building a full-stack hotel management system using the MERN stack (MongoDB, Express.js, React, Node.js) with hotel browsing, availability checks, secure bookings, user dashboards, and an owner dashboard for room management, booking monitoring, and analytics.",
        tech: ["React", "Node.js", "Express", "MongoDB"," Tailwind CSS"],
        // link: "#",
        github: "https://github.com/shehanchathu2/Bokify.git"
      },
    {
        background:p3,
        title: " E-Commerce Platform | Full-Stack Web Application (Loomora)",
        description: " Built a MERN e-commerce platform with JWT authentication, Stripe payments, cart/order management,real-time tracking, and an admin dashboard for product CRUD and revenue analytics.",
        tech: ["React", "Node.js", "Express", "MongoDB"," Tailwind CSS"],
        // link: "#",
        github: "https://github.com/shehanchathu2/Loomora_E-commerce.git"
      },
      // {
      //   title: "Social Media Dashboard",
      //   description: "Analytics dashboard for social media management with data visualization, scheduling posts, and engagement tracking across multiple platforms.",
      //   tech: ["React", "Chart.js", "Node.js", "MongoDB"],
      //   link: "#",
      //   github: "#"
      // },
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
                className="bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all overflow-hidden group"
              >
                <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  
                  <img src={project.background} alt="" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => (
                      <span key={tech} className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="w-48">
                    {/* <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.05 }}
                      className="flex-1 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 px-4 py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </motion.a> */}
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      className="flex-1 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
                    >
                      <FaGithub /> Code
                    </motion.a>
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
