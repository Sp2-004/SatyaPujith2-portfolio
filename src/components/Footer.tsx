import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code2, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-white/10 bg-dark-900/50 backdrop-blur-xl">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center">
              <Code2 className="w-6 h-6 text-black" />
            </div>
            <span className="text-3xl font-bold gradient-text font-space-grotesk">Botuku Satya Pujith</span>
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </div>
          
          <p className="text-gray-400 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
            Passionate full-stack developer and data science enthusiast, crafting innovative 
            digital solutions with modern technologies. Let's build the future together!
          </p>
          
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-gray-500 text-lg">
              © {new Date().getFullYear()} Botuku Satya Pujith. All rights reserved.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-gray-500">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-yellow-400 fill-current" />
              <span>and lots of coffee</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;