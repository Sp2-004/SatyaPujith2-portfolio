import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "React", level: 85 },
        { name: "Vue.js", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Bootstrap", level: 85 }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "PHP Laravel", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "Java", level: 75 },
        { name: "MySQL", level: 88 },
        { name: "MongoDB", level: 82 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Postman", level: 85 },
        { name: "REST APIs", level: 88 },
        { name: "Figma", level: 88 },
        { name: "XAMPP", level: 85 }
      ]
    }
  ];

  const technologies = [
    "JavaScript", "React", "Vue.js", "Node.js", "PHP Laravel", "Python", 
    "MySQL", "MongoDB", "Tailwind CSS", "Bootstrap", "Git", "Postman", 
    "REST APIs", "Figma", "XAMPP", "Java"
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary">Skills & Expertise</h2>
          <p className="text-body max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that I use to build 
            exceptional digital experiences and scalable solutions.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="juspay-card p-8"
            >
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 font-manrope">{category.title}</h3>
              </div>
              
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
                      <span className="text-gray-900 font-medium">{skill.name}</span>
                      <span className="text-blue-600 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3 }}
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Tags */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="juspay-card p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 font-manrope">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="skill-tag"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="juspay-card p-12 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-100">
            <h3 className="text-3xl font-bold gradient-text mb-6 font-manrope">Continuous Learning</h3>
            <p className="text-body max-w-4xl mx-auto">
              The tech landscape evolves rapidly, and I'm committed to staying at the forefront. 
              Currently exploring AI/ML integration, Web3 technologies, and advanced cloud architectures. 
              I believe that continuous learning and adaptation are key to delivering cutting-edge solutions 
              that drive business success.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;