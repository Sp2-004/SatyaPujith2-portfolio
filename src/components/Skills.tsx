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
        { name: "MongoDB", level: 82, color: "from-green-500 to-green-700" },
        { name: "PostgreSQL", level: 80, color: "from-indigo-400 to-indigo-600" }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git & GitHub", level: 90, color: "from-orange-400 to-orange-600" },
        { name: "VS Code", level: 95, color: "from-blue-400 to-blue-600" },
        { name: "Postman", level: 85, color: "from-orange-500 to-red-500" },
        { name: "REST APIs", level: 88, color: "from-green-400 to-green-600" },
        { name: "Figma", level: 88, color: "from-purple-400 to-purple-600" },
        { name: "XAMPP", level: 85, color: "from-yellow-400 to-orange-400" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-transparent to-slate-900/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that I use to build 
            exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="glass-card rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-8 text-center">
                <span className="gradient-text">{category.title}</span>
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    
                    <div className="skill-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3 }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative shadow-sm`}
                      >
                        <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
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
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Always Learning</h3>
            <p className="text-gray-300 leading-relaxed">
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