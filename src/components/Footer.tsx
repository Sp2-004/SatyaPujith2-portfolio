import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code2 className="w-6 h-6 text-primary-400" />
            <span className="text-xl font-bold gradient-text">Botuku Satya Pujith</span>
          </div>
          
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Passionate full-stack developer and data science enthusiast, crafting innovative 
            digital solutions with modern technologies. Let's build the future together!
          </p>
          
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Botuku Satya Pujith. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;