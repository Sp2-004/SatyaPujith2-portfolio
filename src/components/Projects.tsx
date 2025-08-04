import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Charging Stations Management",
      description: "A full-stack web application for managing electric vehicle charging stations with real-time mapping, authentication, and secure cross-origin requests using CORS configuration.",
      image: "https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Node.js", "MongoDB", "PostgreSQL", "Google Maps API"],
      github: "https://github.com/SatyaPujith/Charging-Station-App",
      live: "https://charging-station-app-six.vercel.app",
      featured: true
    },
    {
      title: "StarNova - Audition Platform",
      description: "A dual-role web platform for users and organizers to discover nearby auditions, apply for opportunities, and manage competitions with real-time evaluation features.",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Location APIs", "Real-time Features"],
      github: "https://github.com/SatyaPujith/StarNova",
      live: "https://star-nova-three.vercel.app",
      featured: true
    },
    {
      title: "Eco Route System",
      description: "A full-stack application to calculate and display eco-scores for travel routes, featuring location-based services and real-time mapping with Google Maps API integration.",
      image: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["PHP Laravel", "Laravel Blade", "MySQL", "Google Maps API"],
      github: "https://github.com/SatyaPujith/eco-route-system",
      live: "#",
      featured: false
    },
    {
      title: "E-commerce Sales Chatbot eBay",
      description: "This project is a full-stack e-commerce sales chatbot developed as part of an internship assignment.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "SQLite", "eBay Sandbox Finding API"],
      github: "https://github.com/SatyaPujith/E-commerce-Sales-Chatbot-eBay-",
      live: "#",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website showcasing projects and skills with advanced animations, glassmorphism effects, and particle background.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/SatyaPujith",
      live: "#",
      featured: false
    },

  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-slate-900/20 to-transparent">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise in full-stack development, 
            modern frameworks, and innovative problem-solving.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="project-card group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-primary-600 rounded-xl text-white hover:bg-primary-700 transition-colors duration-200 shadow-lg"
                    >
                      <Eye className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-accent-700 rounded-xl text-white hover:bg-accent-600 transition-colors duration-200 shadow-lg"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-primary-500/20 to-accent-500/20 text-primary-300 rounded-full text-sm border border-primary-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="gradient-button flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="outline-button flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Other Notable Projects</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              
              <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-primary-500/20 text-primary-300 rounded-md text-xs border border-primary-500/20"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-accent-500/20 text-accent-400 rounded-md text-xs border border-accent-500/20">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>

              <div className="flex gap-3">
                <motion.a
                  href={project.live}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-1 text-primary-400 hover:text-primary-300 text-sm"
                >
                  <ExternalLink className="w-3 h-3" />
                  Live
                </motion.a>
                <motion.a
                  href={project.github}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-1 text-gray-400 hover:text-gray-300 text-sm"
                >
                  <Github className="w-3 h-3" />
                  Code
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;