import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-32 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse delay-500"></div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 px-6 max-w-6xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="mb-12"
        >
          <div className="relative inline-block">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 flex items-center justify-center border border-yellow-400/30"
            >
              <img
                src="./forge image.jpg"
                alt="Botuku Satya Pujith"
                className="w-32 h-32 rounded-full object-cover"
              />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-2 -right-2"
            >
              <Sparkles className="w-6 h-6 text-yellow-400" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <h1 className="heading-primary">
            <span className="gradient-text">Botuku Satya Pujith</span>
          </h1>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mb-12"
        >
          <div className="text-2xl md:text-4xl text-gray-300 mb-6 font-space-grotesk">
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              Full-Stack Developer
            </motion.span>
            <span className="mx-6 text-yellow-400">•</span>
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="inline-block"
            >
              Data Science Enthusiast
            </motion.span>
          </div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-body max-w-4xl mx-auto mb-16"
        >
          Passionate and detail-oriented software developer with hands-on experience in building 
          dynamic web applications using JavaScript, PHP, Laravel, and modern frameworks. 
          Enthusiastic about AI, data science, and delivering high-quality code solutions.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16"
        >
          <motion.a
            href="/satyapujith_resume latex updated.pdf"
            download
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="gradient-button flex items-center gap-3 text-lg"
          >
            <Download size={24} />
            Download Resume
          </motion.a>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="outline-button flex items-center gap-3 text-lg"
          >
            <Mail size={24} />
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-8"
        >
          {[
            { icon: Github, href: "https://github.com/SatyaPujith", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/botukusatyapujith", label: "LinkedIn" },
            {
              icon: Mail,
              href: "mailto:satyapoojith2@gmail.com?subject=Let's%20Connect&body=Hi%20Satya,%20I%20wanted%20to%20reach%20out%20about...",
              label: "Email"
            }
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-white/5 rounded-2xl hover:bg-yellow-400/10 hover:border-yellow-400/30 transition-all duration-300 group border border-white/10"
            >
              <social.icon className="w-7 h-7 text-gray-300 group-hover:text-yellow-400 transition-colors duration-300" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="w-8 h-8 text-yellow-400" />
      </motion.div>
    </section>
  );
};

export default Hero;