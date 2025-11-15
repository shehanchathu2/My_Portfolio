const SkillsSection = ({ skills }) => {
  return (
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
  );
};