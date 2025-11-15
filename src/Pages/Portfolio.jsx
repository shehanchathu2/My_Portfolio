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

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const navItems = ['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'];

  const education = [
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
  ];

  const certifications = [
    { name: "AWS Certified Developer", year: "2023" },
    { name: "MongoDB Certified Developer", year: "2023" },
    { name: "React Advanced Certification", year: "2022" }
  ];

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

  const skills = {
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
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
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
            
            {/* Desktop Menu */}
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

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="md:hidden mt-4 pb-4"
            >
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
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

      {/* Home Section */}
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

      {/* About Section */}
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

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            Education & <span className="text-cyan-400">Certifications</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-500/20 p-3 rounded-lg">
                    <FaGraduationCap className="text-3xl text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                    <div className="text-cyan-400 mb-2">{edu.institution}</div>
                    <div className="text-gray-400 text-sm mb-3">{edu.year}</div>
                    <p className="text-gray-300">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 p-8 rounded-xl border border-gray-700"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <FaAward className="text-cyan-400" />
              Certifications
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-900 p-4 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all"
                >
                  <div className="font-semibold mb-2">{cert.name}</div>
                  <div className="text-cyan-400 text-sm">{cert.year}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            Skills & <span className="text-cyan-400">Technologies</span>
          </motion.h2>
          
          <div className="space-y-12">
            {Object.entries(skills).map(([category, skillList], catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-6 capitalize text-cyan-400">
                  {category} Development
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {skillList.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        {skill.icon}
                        <div className="flex-1">
                          <div className="flex justify-between mb-2">
                            <span className="font-semibold">{skill.name}</span>
                            <span className="text-cyan-400">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: i * 0.1 }}
                              className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-800/30">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            Get In <span className="text-cyan-400">Touch</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">Let's work together!</h3>
                <p className="text-gray-400 mb-6">
                  I'm always interested in hearing about new projects and opportunities. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-cyan-500/20 p-3 rounded-lg">
                    <FaEnvelope className="text-2xl text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="font-semibold">your.email@example.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-cyan-500/20 p-3 rounded-lg">
                    <FaPhone className="text-2xl text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Phone</div>
                    <div className="font-semibold">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-cyan-500/20 p-3 rounded-lg">
                    <FaMapMarkerAlt className="text-2xl text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Location</div>
                    <div className="font-semibold">Your City, Country</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.1 }} 
                  className="bg-gray-800 p-3 rounded-lg hover:bg-cyan-500/20 transition-colors"
                >
                  <FaGithub className="text-2xl" />
                </motion.a>
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.1 }} 
                  className="bg-gray-800 p-3 rounded-lg hover:bg-cyan-500/20 transition-colors"
                >
                  <FaLinkedin className="text-2xl" />
                </motion.a>
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.1 }} 
                  className="bg-gray-800 p-3 rounded-lg hover:bg-cyan-500/20 transition-colors"
                >
                  <FaEnvelope className="text-2xl" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="5"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-center md:text-left">
              <p>&copy; 2024 John Developer. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-500 to-purple-500 p-4 rounded-full shadow-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-shadow z-40"
        >
          <FaArrowUp className="text-xl" />
        </motion.button>
      )}
    </div>
  );
}