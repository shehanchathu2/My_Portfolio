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

// Data
const portfolioData = {
  personal: {
    name: "John Developer",
    title: "Full Stack Developer",
    bio: "I build exceptional digital experiences with modern web technologies. Specialized in creating scalable applications from concept to deployment.",
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    location: "Your City, Country",
    social: {
      github: "#",
      linkedin: "#",
      email: "#"
    }
  },
  about: {
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
  },
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University Name",
      year: "2018 - 2022",
      description: "Focused on software engineering, algorithms, and web development."
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      institution: "Online Academy",
      year: "2022",
      description: "Intensive program covering MERN stack and modern development practices."
    }
  ],
  certifications: [
    { name: "AWS Certified Developer", year: "2023" },
    { name: "MongoDB Certified Developer", year: "2023" },
    { name: "React Advanced Certification", year: "2022" }
  ],
  skills: {
    frontend: [
      { name: "React", icon: <FaReact className="text-4xl text-cyan-400" />, level: 90 },
      { name: "TypeScript", icon: <SiTypescript className="text-4xl text-blue-500" />, level: 85 },
      { name: "JavaScript", icon: <SiJavascript className="text-4xl text-yellow-400" />, level: 95 },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-4xl text-cyan-400" />, level: 90 }
    ],
    backend: [
      { name: "Node.js", icon: <FaNode className="text-4xl text-green-500" />, level: 90 },
      { name: "Python", icon: <SiPython className="text-4xl text-blue-400" />, level: 75 },
      { name: "Express", icon: <FaCode className="text-4xl text-gray-400" />, level: 85 }
    ],
    database: [
      { name: "MongoDB", icon: <SiMongodb className="text-4xl text-green-600" />, level: 85 },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-4xl text-blue-400" />, level: 80 },
      { name: "MySQL", icon: <FaDatabase className="text-4xl text-blue-600" />, level: 75 }
    ],
    tools: [
      { name: "Git", icon: <SiGit className="text-4xl text-orange-600" />, level: 90 },
      { name: "Docker", icon: <SiDocker className="text-4xl text-blue-500" />, level: 80 }
    ]
  },
  projects: [
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
  ]
};