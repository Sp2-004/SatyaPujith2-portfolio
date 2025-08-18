import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "JavaScript", level: 90, color: "from-yellow-400 to-yellow-600" },
        { name: "React", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "Vue.js", level: 88, color: "from-green-400 to-green-600" },
        { name: "Tailwind CSS", level: 92, color: "from-cyan-400 to-cyan-600" },
        { name: "Bootstrap", level: 85, color: "from-purple-400 to-purple-600" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "PHP Laravel", level: 90, color: "from-red-400 to-red-600" },
        { name: "Node.js", level: 85, color: "from-green-400 to-green-600" },
        { name: "Python", level: 80, color: "from-yellow-400 to-yellow-600" },
        { name: "Java", level: 75, color: "from-orange-400 to-orange-600" },
        { name: "MySQL", level: 88, color: "from-blue-600 to-blue-800" },
        { name: "MongoDB", level: 82, color: "from-green-500 to-green-700" }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git & GitHub", level: 90, color: "from-orange-400 to-orange-600" },
        { name: "Postman", level: 85, color: "from-orange-500 to-red-500" },
        { name: "REST APIs", level: 88, color: "from-green-400 to-green-600" },
        { name: "Figma", level: 88, color: "from-purple-400 to-purple-600" },
        { name: "XAMPP", level: 85, color: "from-yellow-400 to-orange-400" }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-dark-900/30 to-transparent">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="heading-secondary">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mb-8"></div>
          <p className="text-body max-w-4xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that I use to build 
            exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-white/5 rounded-3xl p-10 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-3xl font-bold mb-10 text-center font-space-grotesk">
                <span className="gradient-text">{category.title}</span>
              </h3>
              
              <div className="space-y-8">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-white font-medium text-lg">{skill.name}</span>
                      <span className="text-yellow-400 text-sm font-bold">{skill.level}%</span>
                    </div>
                    
                    <div className="skill-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3 }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative shadow-sm`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-yellow-400/10 to-yellow-500/5 rounded-3xl p-12 max-w-5xl mx-auto border border-yellow-400/20 backdrop-blur-xl">
            <h3 className="text-3xl font-bold mb-6 gradient-text font-space-grotesk">Always Learning</h3>
            <p className="text-body">
              The tech world evolves rapidly, and I'm committed to staying ahead of the curve. 
              Currently exploring AI/ML integration in web applications, Web3 technologies, 
              and advanced performance optimization techniques. I believe that continuous learning 
              is the key to delivering cutting-edge solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;