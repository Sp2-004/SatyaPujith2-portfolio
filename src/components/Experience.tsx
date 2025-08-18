import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Summer Research Intern",
      company: "Institute of Aeronautical Engineering",
      location: "Hyderabad, Telangana",
      period: "May 2025 – Jun 2025",
      description: [
        "Primary author of Smart HealthGuard, an AI-powered drug interaction checker",
        "Developed a Flask-based web tool with Tailwind CSS and SQLite backend",
        "Trained a Random Forest model (84% accuracy) using a dataset of 56,368 DDI records",
        "Implemented SMOTE, custom encoders, and RxNorm API integration for predictions"
      ],
      technologies: ["Flask", "SQLite", "Tailwind CSS", "Python", "Random Forest", "SMOTE", "RxNorm API"]
    },
  ];

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-transparent to-dark-900/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="heading-secondary">
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mb-8"></div>
          <p className="text-body max-w-4xl mx-auto">
            A journey through innovative companies where I've contributed to building 
            scalable solutions and leading development teams.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 to-yellow-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative mb-16 ml-24"
            >
              {/* Timeline dot */}
              <div className="absolute -left-28 top-8 w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full border-4 border-dark-950 flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-black" />
              </div>

              <div className="bg-white/5 rounded-3xl p-10 hover:bg-white/10 transition-all duration-300 border border-white/10 backdrop-blur-xl">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-3 font-space-grotesk">{exp.title}</h3>
                    <div className="flex items-center gap-4 text-yellow-400 mb-2">
                      <span className="font-semibold text-xl">{exp.company}</span>
                      <a 
                        href="https://iare.ac.in" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-1 text-yellow-400 hover:text-yellow-300 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col lg:items-end gap-3">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-5 h-5" />
                      <span className="text-lg">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin className="w-5 h-5" />
                      <span className="text-lg">{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-3 text-lg">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-yellow-400/10 text-yellow-400 rounded-full text-sm border border-yellow-400/30 backdrop-blur-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-br from-yellow-400/10 to-yellow-500/5 rounded-3xl p-12 max-w-5xl mx-auto border border-yellow-400/20 backdrop-blur-xl">
            <h3 className="text-3xl font-bold mb-6 gradient-text font-space-grotesk">Ready for New Challenges</h3>
            <p className="text-body">
              I'm always excited about new opportunities to work on innovative projects 
              and collaborate with talented teams. Let's build something amazing together!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;