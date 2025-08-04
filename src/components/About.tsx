import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices."
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Crafting beautiful, intuitive user interfaces that enhance user experience."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and seamless performance."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in teams and communicating complex ideas clearly."
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer and data science enthusiast currently pursuing 
            B.Tech in CSE-Data Science, creating innovative digital solutions with modern technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary-400">My Journey</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Currently pursuing B.Tech in Computer Science with Data Science specialization at 
                Institute of Aeronautical Engineering, Hyderabad. I've gained hands-on experience 
                through internships and projects, building dynamic web applications and AI solutions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My expertise spans across full-stack development with JavaScript, PHP Laravel, 
                Vue.js, React, and Node.js. I'm passionate about building meaningful technology and 
                constantly learning to improve my craft as a developer.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-accent-400">Quick Facts</h3>
                <div className="space-y-4">
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Projects Completed</span>
                    <span className="text-primary-400 font-semibold">  15+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">CGPA</span>
                    <span className="text-primary-400 font-semibold">8.3</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="tech-card text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-white">{feature.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;