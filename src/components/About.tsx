import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users, Award, Target } from 'lucide-react';

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
    <section id="about" className="section-padding bg-gradient-to-b from-transparent to-dark-900/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="heading-secondary">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mb-8"></div>
          <p className="text-body max-w-4xl mx-auto">
            I'm a passionate full-stack developer and data science enthusiast currently pursuing 
            B.Tech in CSE-Data Science, creating innovative digital solutions with modern technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white/5 rounded-3xl p-10 border border-white/10 backdrop-blur-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-3xl font-bold text-white font-space-grotesk">My Journey</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                Currently pursuing B.Tech in Computer Science with Data Science specialization at 
                Institute of Aeronautical Engineering, Hyderabad. I've gained hands-on experience 
                through internships and projects, building dynamic web applications and AI solutions.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
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
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-yellow-400/10 to-yellow-500/5 rounded-3xl p-10 border border-yellow-400/20 backdrop-blur-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-3xl font-bold gradient-text font-space-grotesk">Quick Facts</h3>
              </div>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-gray-300 text-lg">Projects Completed</span>
                  <span className="text-yellow-400 font-bold text-xl">15+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-gray-300 text-lg">CGPA</span>
                  <span className="text-yellow-400 font-bold text-xl">8.3</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-300 text-lg">Years of Learning</span>
                  <span className="text-yellow-400 font-bold text-xl">3+</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 rounded-3xl p-8 text-center group hover:bg-yellow-400/5 transition-all duration-300 border border-white/10 hover:border-yellow-400/30"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <feature.icon className="w-10 h-10 text-black" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-white font-space-grotesk">{feature.title}</h4>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;