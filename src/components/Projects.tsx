import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Sparkles } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Carsor AI - Vehicle Diagnostics Platform",
      description: "An AI-powered platform for Tata vehicle diagnostics and assistance, featuring voice, text, and image-based issue reporting with RAG-based Gemini AI, repair history tracking, analytics, and real-time sharing with service providers.",
      image: "https://www.shutterstock.com/image-photo/smart-car-service-diagnostics-software-600nw-2337506921.jpg",
      technologies: ["Next.js", "Gemini AI (RAG)", "MongoDB", "Voice/Text/Image Processing", "Analytics"],
      github: "https://github.com/SatyaPujith/c-carsor",
      live: "https://carsor-c.vercel.app",
      featured: true
    },
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
      featured: false
    },
    {
      title: "E-commerce Sales Chatbot eBay",
      description: "This project is a full-stack e-commerce sales chatbot developed as part of an internship assignment.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "SQLite", "eBay Sandbox Finding API"],
      github: "https://github.com/SatyaPujith/E-commerce-Sales-Chatbot-eBay-",
      featured: false
    },
    {
      title: "Fashion Fusion - Outfit Matching & Community Platform",
      description: "A fashion web app built with React and Node.js that allows users to upload multiple tops and bottoms, discover the top 3 best outfit matches, interact in an Instagram-style community, and receive real-time fashion suggestions based on location and regional trends.",
      image: "https://brandyuva.shop/wp-content/uploads/2024/04/IMG_20240421_111125-1.png",
      technologies: ["React", "Node.js", "Maps API", "Image Upload"],
      github: "https://github.com/SatyaPujith/fashion-fusion",
      featured: false
    },
    {
      title: "Promotional Banner App",
      description: "Customized a Shopify app built with Node.js and React by integrating a dynamic promotional banner feature using Polaris components and App Bridge. Enhanced the frontend with responsive UI and ensured smooth API communication with the Shopify Admin API.",
      image: "https://www.searchenginejournal.com/wp-content/uploads/2022/07/shopify-store-examples-62d01563935c4-sej.png", 
      technologies: ["Node.js", "React", "Express", "Vite", "Shopify API", "Polaris", "App Bridge"],
      github: "https://github.com/SatyaPujith/promotional-banner-app",
      featured: false
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-dark-900/30 to-transparent">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="heading-secondary">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mb-8"></div>
          <p className="text-body max-w-4xl mx-auto">
            A showcase of my recent work, demonstrating expertise in full-stack development, 
            modern frameworks, and innovative problem-solving.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="project-card group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-6">
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-4 bg-yellow-400 rounded-2xl text-black hover:bg-yellow-500 transition-colors duration-200 shadow-lg"
                    >
                      <Eye className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-4 bg-white/20 rounded-2xl text-white hover:bg-white/30 transition-colors duration-200 shadow-lg backdrop-blur-sm"
                    >
                      <Github className="w-6 h-6" />
                    </motion.a>
                  </div>
                </div>
                <div className="absolute top-6 right-6">
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                </div>
              </div>
              
              <div className="p-10">
                <h3 className="text-3xl font-bold text-white mb-4 font-space-grotesk">{project.title}</h3>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">{project.description}</p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-yellow-400/10 text-yellow-400 rounded-full text-sm border border-yellow-400/30 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6">
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="gradient-button flex items-center gap-3"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="outline-button flex items-center gap-3"
                  >
                    <Github className="w-5 h-5" />
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
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h3 className="text-4xl font-bold text-center mb-16 font-space-grotesk">
            <span className="gradient-text">Other Notable Projects</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/5 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 backdrop-blur-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-2xl mb-6"
              />
              
              <h4 className="text-2xl font-bold text-white mb-4 font-space-grotesk">{project.title}</h4>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full text-xs border border-yellow-400/20 font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-3 py-1 bg-white/10 text-gray-400 rounded-full text-xs border border-white/20">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>

              <div className="flex gap-4">
                <motion.a
                  href={project.github}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 text-sm transition-colors"
                >
                  <Github className="w-4 h-4" />
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