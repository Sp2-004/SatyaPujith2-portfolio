import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Briefcase, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Summer Research Intern",
      company: "Institute of Aeronautical Engineering",
      location: "Hyderabad, Telangana",
      period: "May 2025 – Jun 2025",
      type: "Research Internship",
      description: [
        "Primary author of Smart HealthGuard, an AI-powered drug interaction checker",
        "Developed a Flask-based web tool with Tailwind CSS and SQLite backend",
        "Trained a Random Forest model achieving 84% accuracy using 56,368 DDI records",
        "Implemented SMOTE, custom encoders, and RxNorm API integration for predictions"
      ],
      technologies: ["Flask", "SQLite", "Tailwind CSS", "Python", "Random Forest", "SMOTE", "RxNorm API"],
      achievements: [
        "84% Model Accuracy",
        "56K+ Data Records",
        "Real-time Predictions"
      ]
    },
  ];

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary">Professional Experience</h2>
          <p className="text-body max-w-3xl mx-auto">
            My journey through innovative projects and research, where I've contributed to building 
            scalable solutions and advancing technology in healthcare and web development.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative mb-12"
            >
              <div className="juspay-card p-8 lg:p-12">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 font-manrope">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-blue-600 font-semibold">
                          <span>{exp.company}</span>
                          <a 
                            href="https://iare.ac.in" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-1 hover:text-blue-700 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col lg:items-end gap-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Description */}
                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Responsibilities</h4>
                    <ul className="space-y-3 mb-6">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-600 flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="skill-tag"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements</h4>
                    <div className="space-y-4">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="text-center">
                          <div className="text-2xl font-bold text-blue-600 mb-1">
                            {achievement.split(' ')[0]}
                          </div>
                          <div className="text-sm text-gray-600">
                            {achievement.split(' ').slice(1).join(' ')}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="juspay-card p-12 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-100">
            <h3 className="text-3xl font-bold gradient-text mb-6 font-manrope">Ready for New Opportunities</h3>
            <p className="text-body max-w-3xl mx-auto mb-8">
              I'm always excited about new challenges and opportunities to work on innovative projects 
              that make a real impact. Let's collaborate and build something extraordinary together!
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="juspay-button inline-flex items-center gap-3"
            >
              Let's Work Together
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;