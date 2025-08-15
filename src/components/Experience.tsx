import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

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
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A journey through innovative companies where I've contributed to building 
            scalable solutions and leading development teams.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 to-accent-400"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12 ml-16"
            >
              {/* Timeline dot */}
              <div className="absolute -left-20 top-6 w-4 h-4 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full border-4 border-slate-900"></div>

              <div className="glass-card rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-4 text-primary-400 mb-2">
                      <span className="font-semibold">{exp.company}</span>
                      <a 
  href="https://iare.ac.in" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="flex items-center gap-1 text-blue-500 hover:underline"
>
  <span>Live Demo</span>
  <ExternalLink className="w-4 h-4" />
</a>

                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm border border-primary-500/30 backdrop-blur-sm"
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
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Ready for New Challenges</h3>
            <p className="text-gray-300 leading-relaxed">
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
