import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNode, FaDatabase,
} from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import image3 from '../assets/shehan3.png'
import TypingText from './TypingText';
import shehan from '../assets/Shehan.png'
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const HomeSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (

    <div className="relative h-screen min-h-screen">


      <div
        className="fixed inset-0 -z-10 bg-cover bg-center opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 48%, #ffffff 49%, #ffffff 51%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, #ffffff 49%, #ffffff 51%, transparent 52%)
          `,
          backgroundSize: '80px 80px',
          backgroundPosition: 'center center',
        }}
      ></div>
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(30deg, transparent 49%, #ffffff 50%, #ffffff 51%, transparent 52%),
            linear-gradient(-30deg, transparent 49%, #ffffff 50%, #ffffff 51%, transparent 52%)
          `,
          backgroundSize: '120px 120px',
          backgroundPosition: '0 0, 60px 60px',
        }}
      ></div>


      
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden 
             "
      >




        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-24 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-[140px]"
        />


        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -left-24 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[160px]"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_85%)] pointer-events-none" />
        9
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[120px] pointer-events-none"
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -50, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"
        />

        {/* 2. Geometric Mesh Grid (Fixed scrolling effect) */}


        {/* 3. Vignette Overlay (Darkens edges to focus on content) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0b1220_90%)] pointer-events-none"></div>


        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 text-gray-400 text-sm uppercase tracking-widest mb-6 font-semibold"
            >
              <span className="text-gray-400 text-sm uppercase tracking-widest mb-6"></span>
              Welcome to my world
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              <span className="text-white">Hi, I'm </span>
              <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              Shehan.
            </span>
            </h1>

            <TypingText
              texts={[
                "Software Engineer",
                "Full Stack Developer",
                "Back-End Developer",
              ]}
              className="text-3xl font-bold text-gray-300"
            />

            <p className="text-lg text-gray-400 mb-12 mt-6 max-w-xl leading-relaxed">
              Aspiring Full-Stack Engineer skilled in building dynamic web applications and APIs. Experienced with frontend and backend development, version control, and team collaboration. Seeking a software engineering internship to apply skills and contribute to innovative projects......
            </p>

            <div className="flex flex-col gap-4">
              <h3 className="text-gray-500 text-xs uppercase tracking-wider font-bold">Find me in</h3>
              <div className="flex gap-4">
                {[FaGithub, FaLinkedin, FaEnvelope].map((Icon, idx) => (
                  <motion.a
                    key={idx}
                    href="#"
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-12 h-12 bg-white/5 border border-white/10 backdrop-blur-md hover:border-pink-500/50 rounded-xl flex items-center justify-center text-xl text-gray-400 hover:text-pink-500 transition-all shadow-xl"
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center items-center w-full relative"
          >

            <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl"></div>

            <div className="relative group">
              <div className="relative rounded-2xl p-2 bg-gradient-to-b from-white/20 to-transparent backdrop-blur-xl shadow-2xl border border-white/20 overflow-hidden">
                <img
                  src={shehan}
                  alt="Professional"
                  className="w-full rounded-xl z-10 h-full object-cover transition-transform duration-500 group-hover:scale-105"
                /> 
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomeSection;

