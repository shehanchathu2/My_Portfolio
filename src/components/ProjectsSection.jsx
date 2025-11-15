const ProjectsSection = ({ projects }) => {
  return (
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
  );
};
