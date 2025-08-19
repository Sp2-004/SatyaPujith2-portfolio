import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Github, Linkedin, MapPin } from 'lucide-react';

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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3 text-blue-600 font-medium">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>Hello, I'm</span>
              </div>
              <h1 className="heading-primary">
                Botuku Satya <br />
                <span className="gradient-text">Pujith</span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 font-manrope">
                Full-Stack Developer & Data Science Enthusiast
              </h2>
              <div className="flex items-center gap-2 text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>Hyderabad, India</span>
              </div>
            </motion.div>

            <motion.p variants={itemVariants} className="text-body max-w-2xl">
              Passionate software developer with expertise in building dynamic web applications 
              using modern technologies. I specialize in JavaScript, PHP Laravel, React, and 
              data science solutions that drive business growth.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="juspay-button flex items-center gap-3 justify-center"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href="/satyapujith_resume latex updated.pdf"
                download
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="juspay-button-outline flex items-center gap-3 justify-center"
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-6 pt-4">
              {[
                { icon: Github, href: "https://github.com/SatyaPujith", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/botukusatyapujith", label: "LinkedIn" },
                { icon: Mail, href: "mailto:satyapoojith2@gmail.com", label: "Email" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-md transition-all duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="./forge image.jpg"
                  alt="Botuku Satya Pujith"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-bold text-lg">3+</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg border border-gray-100"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-500">Projects</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;