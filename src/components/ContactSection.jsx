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
const ContactSection = () => {
  return (
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
                    <div className="font-semibold">shehanwanigarath@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-cyan-500/20 p-3 rounded-lg">
                    <FaPhone className="text-2xl text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Phone</div>
                    <div className="font-semibold">+94 768395790</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-cyan-500/20 p-3 rounded-lg">
                    <FaMapMarkerAlt className="text-2xl text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Location</div>
                    <div className="font-semibold">Hambanthota, Country</div>
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
  )
}

export default ContactSection
