const EducationSection = ({ education, certifications }) => {
  return (
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
  );
};