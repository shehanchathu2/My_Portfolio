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

const ProjectsSection = () => {

  const projects = [
      {
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Implemented user authentication, shopping cart, and order tracking.",
        tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
        link: "#",
        github: "#"
      },
      {
        title: "Real-Time Chat Application",
        description: "WebSocket-based chat app with user authentication, group chats, message encryption, and real-time notifications. Supports file sharing and emoji reactions.",
        tech: ["React", "Socket.io", "Express", "PostgreSQL"],
        link: "#",
        github: "#"
      },
      {
        title: "Task Management System",
        description: "Collaborative project management tool with drag-and-drop, real-time updates, team collaboration, and sprint planning features.",
        tech: ["TypeScript", "React", "Node.js", "Docker", "Redis"],
        link: "#",
        github: "#"
      },
      {
        title: "Social Media Dashboard",
        description: "Analytics dashboard for social media management with data visualization, scheduling posts, and engagement tracking across multiple platforms.",
        tech: ["React", "Chart.js", "Node.js", "MongoDB"],
        link: "#",
        github: "#"
      },
      {
        title: "REST API for Blog Platform",
        description: "RESTful API with authentication, CRUD operations, pagination, search functionality, and comprehensive documentation using Swagger.",
        tech: ["Node.js", "Express", "PostgreSQL", "JWT"],
        link: "#",
        github: "#"
      },
      {
        title: "Weather Forecast App",
        description: "Responsive weather application with geolocation, 7-day forecasts, interactive maps, and favorite locations feature.",
        tech: ["React", "OpenWeather API", "Tailwind CSS"],
        link: "#",
        github: "#"
      }
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
                  <FaCode className="text-6xl text-cyan-400/50 group-hover:scale-110 transition-transform" />
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
                  <div className="flex gap-3">
                    <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.05 }}
                      className="flex-1 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 px-4 py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </motion.a>
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
