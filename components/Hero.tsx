'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Coffee } from 'lucide-react';
import Image from 'next/image';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-light-brown to-accent pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-primary/10"></div>
      
      {/* Scattered Coffee Beans */}
      <div className="absolute top-20 left-20 w-4 h-6 bg-primary rounded-full rotate-45 animate-float"></div>
      <div className="absolute top-32 left-32 w-3 h-5 bg-secondary rounded-full -rotate-12 animate-float" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-16 left-48 w-4 h-6 bg-accent rounded-full rotate-30 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-40 left-16 w-3 h-5 bg-primary-dark rounded-full -rotate-45 animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full lg:w-2/5 space-y-8 text-left"
          >
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold text-coffee-brown"
              >
                Elevate Your Day with
              </motion.h1>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-6xl md:text-7xl font-bold text-secondary"
              >
                Premium Coffee
              </motion.h2>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-coffee-brown/80 max-w-2xl"
            >
              Discover the finest coffee, sourced ethically and roasted to perfection. 
              From bold blends to single origins, elevate your coffee ritual.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('franchise')}
                className="bg-primary text-cream px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transition-all duration-300 border-2 border-primary flex items-center gap-3"
              >
                <Coffee className="w-5 h-5" />
                Start Your Franchise Journey
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Coffee Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 w-full lg:w-3/5 flex justify-center lg:justify-end relative"
          >
            <div className="relative">
              <div className="w-full flex items-center justify-center overflow-hidden relative">
                {/* Platform/Coaster */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-48 h-4 bg-coffee-brown/30 rounded-full blur-sm"></div>
                
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 1, -1, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Image
                    src="/Coffee/Java_Chip.png"
                    alt="Premium Coffee Latte"
                    width={1300}
                    height={1400}
                    className="w-full h-full object-cover object-center relative z-10 scale-125"
                    priority
                  />
                </motion.div>
              </div>
              
              {/* Floating coffee beans around the image */}
              <div className="absolute -top-4 -left-4 w-3 h-5 bg-accent rounded-full rotate-45 animate-float"></div>
              <div className="absolute -bottom-2 -right-6 w-4 h-6 bg-secondary rounded-full -rotate-12 animate-float" style={{ animationDelay: '0.7s' }}></div>
              <div className="absolute top-1/2 -right-8 w-3 h-5 bg-primary rounded-full rotate-30 animate-float" style={{ animationDelay: '1.2s' }}></div>
              <div className="absolute top-1/4 -left-6 w-4 h-6 bg-primary-dark rounded-full -rotate-45 animate-float" style={{ animationDelay: '0.9s' }}></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-coffee-brown"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
} 