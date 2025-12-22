import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FaReact, FaNode, FaDatabase, FaCode } from 'react-icons/fa';
import {
  SiTailwindcss, SiMongodb, SiPostgresql, SiTypescript,
  SiDocker, SiJavascript, SiPython, SiGit,
  SiSpringboot
} from 'react-icons/si';
import { FaJava } from "react-icons/fa";
import { SiC } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";


const SkillsSection = () => {

  const skills = {
    programming_langeages: [
      { name: "Java", icon: <FaJava className="text-4xl text-red-500" />, level: 75 },
      { name: "JavaScript", icon: <SiJavascript className="text-4xl text-yellow-400" />, level: 80 },
      { name: "Python", icon: <SiPython className="text-4xl text-blue-400" />, level: 65 },
      { name: "C", icon: <SiC className="text-4xl text-sky-400" />, level: 60 }
    ],
    frontend: [
      { name: "React", icon: <FaReact className="text-4xl text-cyan-400" />, level: 90 },
      { name: "TypeScript", icon: <SiTypescript className="text-4xl text-blue-500" />, level: 85 },
      { name: "JavaScript", icon: <SiJavascript className="text-4xl text-yellow-400" />, level: 70 },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-4xl text-cyan-400" />, level: 90 },
      { name: "Next.js", icon: <SiNextdotjs className="text-4xl text-gray-200" />, level: 80},
    ],
    backend: [
      { name: "Node.js", icon: <FaNode className="text-4xl text-green-500" />, level: 90 },
      { name: "Python", icon: <SiPython className="text-4xl text-blue-400" />, level: 60 },
      { name: "Spring Boot", icon: <SiSpringboot className="text-4xl text-blue-400" />, level: 60 },
      { name: "Express", icon: <FaCode className="text-4xl text-gray-400" />, level: 80 }
    ],
    database: [
      { name: "MongoDB", icon: <SiMongodb className="text-4xl text-green-600" />, level: 80 },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-4xl text-blue-400" />, level: 70 },
      { name: "MySQL", icon: <FaDatabase className="text-4xl text-blue-600" />, level: 80 }
    ],
    tools: [
      { name: "Git", icon: <SiGit className="text-4xl text-orange-600" />, level: 90 },
      { name: "Docker", icon: <SiDocker className="text-4xl text-blue-500" />, level: 80 }
    ]
  };

  const allSkills = Object.values(skills).flat();

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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {allSkills.map((skill, i) => (
            <motion.div
              key={skill.name + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-[#111b2f]/60 border border-[#1f2937] 
                 rounded-xl p-6 flex flex-col items-center 
                 justify-center gap-3 hover:border-teal-400/40
                 hover:shadow-lg hover:shadow-teal-500/10
                 transition-all"
            >
              {/* Icon */}
              <div className="text-4xl text-teal-400">
                {skill.icon}
              </div>

              {/* Skill Name */}
              <span className="text-sm font-medium text-gray-300">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
