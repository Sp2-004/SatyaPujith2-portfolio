import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 px-6"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 mx-auto mb-8 rounded-full glass-effect flex items-center justify-center"
          >
            <img
              src="./forge image.jpg"
              alt="Botuku Satya Pujith"
              className="w-28 h-28 rounded-full object-cover"
            />
          </motion.div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="gradient-text">Botuku Satya Pujith</span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          <motion.span
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            Full-Stack Developer
          </motion.span>
          <span className="mx-4">•</span>
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="inline-block"
          >
            Data Science Enthusiast
          </motion.span>
          <span className="mx-4">•</span>
          <motion.span
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="inline-block"
          >
            AI Developer
          </motion.span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Passionate and detail-oriented software developer with hands-on experience in building 
          dynamic web applications using JavaScript, PHP, Laravel, and modern frameworks. 
          Enthusiastic about AI, data science, and delivering high-quality code solutions.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(14, 165, 233, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
          >
            <a
  href="/satyapujith_resume latex updated.pdf"
  download
  className="flex items-center gap-2 bg-gradient-to-r from-primary-500 to-accent-500 px-4 py-2 rounded-lg text-white font-medium hover:shadow-lg transition-all duration-200"
>
  <Download size={20} />
  Download Resume
</a>

          </motion.button>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass-effect rounded-full font-semibold text-white hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
          >
            <Mail size={20} />
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6"
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
              className="p-3 glass-effect rounded-full hover:bg-white/20 transition-all duration-300 group"
            >
              <social.icon className="w-6 h-6 text-gray-300 group-hover:text-primary-400 transition-colors duration-300" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="w-6 h-6 text-primary-400" />
      </motion.div>
    </section>
  );
};

export default Hero;