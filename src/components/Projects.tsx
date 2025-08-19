import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Star, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Carsor AI - Vehicle Diagnostics Platform",
      description: "An AI-powered platform for Tata vehicle diagnostics and assistance, featuring voice, text, and image-based issue reporting with RAG-based Gemini AI, repair history tracking, analytics, and real-time sharing with service providers.",
      image: "https://www.shutterstock.com/image-photo/smart-car-service-diagnostics-software-600nw-2337506921.jpg",
      technologies: ["Next.js", "Gemini AI (RAG)", "MongoDB", "Voice/Text/Image Processing", "Analytics"],
      github: "https://github.com/SatyaPujith/c-carsor",
      live: "https://carsor-c.vercel.app",
      featured: true,
      category: "AI/ML",
      year: "2024"
    },
    {
      title: "Charging Stations Management",
      description: "A full-stack web application for managing electric vehicle charging stations with real-time mapping, authentication, and secure cross-origin requests using CORS configuration.",
      image: "https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Node.js", "MongoDB", "PostgreSQL", "Google Maps API"],
      github: "https://github.com/SatyaPujith/Charging-Station-App",
      live: "https://charging-station-app-six.vercel.app",
      featured: true,
      category: "Full-Stack",
      year: "2024"
    },
    {
      title: "StarNova - Audition Platform",
      description: "A dual-role web platform for users and organizers to discover nearby auditions, apply for opportunities, and manage competitions with real-time evaluation features.",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Location APIs", "Real-time Features"],
      github: "https://github.com/SatyaPujith/StarNova",
      live: "https://star-nova-three.vercel.app",
      featured: true,
      category: "Web App",
      year: "2024"
    },
    {
      title: "Eco Route System",
      description: "A full-stack application to calculate and display eco-scores for travel routes, featuring location-based services and real-time mapping with Google Maps API integration.",
      image: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["PHP Laravel", "Laravel Blade", "MySQL", "Google Maps API"],
      github: "https://github.com/SatyaPujith/eco-route-system",
      featured: false,
      category: "Backend",
      year: "2023"
    },
    {
      title: "E-commerce Sales Chatbot eBay",
      description: "This project is a full-stack e-commerce sales chatbot developed as part of an internship assignment.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "SQLite", "eBay Sandbox Finding API"],
      github: "https://github.com/SatyaPujith/E-commerce-Sales-Chatbot-eBay-",
      featured: false,
      category: "Chatbot",
      year: "2023"
    },
    {
      title: "Fashion Fusion - Outfit Matching & Community Platform",
      description: "A fashion web app built with React and Node.js that allows users to upload multiple tops and bottoms, discover the top 3 best outfit matches, interact in an Instagram-style community, and receive real-time fashion suggestions based on location and regional trends.",
      image: "https://brandyuva.shop/wp-content/uploads/2024/04/IMG_20240421_111125-1.png",
      technologies: ["React", "Node.js", "Maps API", "Image Upload"],
      github: "https://github.com/SatyaPujith/fashion-fusion",
      featured: false,
      category: "Social",
      year: "2023"
    },
    {
      title: "Promotional Banner App",
      description: "Customized a Shopify app built with Node.js and React by integrating a dynamic promotional banner feature using Polaris components and App Bridge. Enhanced the frontend with responsive UI and ensured smooth API communication with the Shopify Admin API.",
      image: "https://www.searchenginejournal.com/wp-content/uploads/2022/07/shopify-store-examples-62d01563935c4-sej.png", 
      technologies: ["Node.js", "React", "Express", "Vite", "Shopify API", "Polaris", "App Bridge"],
      github: "https://github.com/SatyaPujith/promotional-banner-app",
      featured: false,
      category: "E-commerce",
      year: "2023"
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary">Featured Projects</h2>
          <p className="text-body max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise in full-stack development, 
            AI integration, and innovative problem-solving across various domains.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
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
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-blue-600 rounded-xl text-white hover:bg-blue-700 transition-colors duration-200 shadow-lg"
                    >
                      <Eye className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 rounded-xl text-white hover:bg-white/30 transition-colors duration-200 shadow-lg backdrop-blur-sm"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="bg-white/90 text-gray-900 px-2 py-1 rounded-full text-xs font-medium">
                    Featured
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 font-manrope">{project.title}</h3>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="skill-tag text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="juspay-button flex items-center gap-2 text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="juspay-button-outline flex items-center gap-2 text-sm"
                  >
                    <Github className="w-4 h-4" />
                    View Code
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
          <h3 className="text-3xl font-bold text-center mb-12 font-manrope text-gray-900">
            Other Notable Projects
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
              whileHover={{ scale: 1.02, y: -5 }}
              className="juspay-card p-6 hover:shadow-xl transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              
              <div className="flex items-center justify-between mb-3">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                  {project.category}
                </span>
                <div className="flex items-center gap-1 text-gray-500 text-xs">
                  <Calendar className="w-3 h-3" />
                  <span>{project.year}</span>
                </div>
              </div>
              
              <h4 className="text-lg font-bold text-gray-900 mb-3 font-manrope">{project.title}</h4>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">{project.description}</p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>

              <div className="flex gap-3">
                <motion.a
                  href={project.github}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-1 text-gray-600 hover:text-blue-600 text-sm transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Code
                </motion.a>
                {project.live && (
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-1 text-gray-600 hover:text-blue-600 text-sm transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;