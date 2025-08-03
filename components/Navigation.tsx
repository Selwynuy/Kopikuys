'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Navigation({ scrollToSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 100], [0, -100]);
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      style={{ y, opacity }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <img 
              src="/Kopikuys-logo.png" 
              alt="Kopikuys Logo" 
              className="h-10 w-auto object-contain"
            />
            <span className={`text-2xl font-serif font-bold ${isScrolled ? 'text-primary' : 'text-coffee-brown drop-shadow-sm'}`}>Kopikuys</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('home')} 
              className={`transition-colors ${isScrolled ? 'text-primary hover:text-primary-dark' : 'text-coffee-brown hover:text-secondary drop-shadow-sm'}`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('menu')} 
              className={`transition-colors ${isScrolled ? 'text-primary hover:text-primary-dark' : 'text-coffee-brown hover:text-secondary drop-shadow-sm'}`}
            >
              Menu
            </button>
            <button 
              onClick={() => handleNavClick('packages')} 
              className={`transition-colors ${isScrolled ? 'text-primary hover:text-primary-dark' : 'text-coffee-brown hover:text-secondary drop-shadow-sm'}`}
            >
              Packages
            </button>
            <button 
              onClick={() => handleNavClick('franchise')} 
              className={`transition-colors ${isScrolled ? 'text-primary hover:text-primary-dark' : 'text-coffee-brown hover:text-secondary drop-shadow-sm'}`}
            >
              Franchise
            </button>
            <button 
              onClick={() => handleNavClick('contact')} 
              className={`transition-colors ${isScrolled ? 'text-primary hover:text-primary-dark' : 'text-coffee-brown hover:text-secondary drop-shadow-sm'}`}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden ${isScrolled ? 'text-primary' : 'text-coffee-brown drop-shadow-sm'}`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
        >
          <div className="px-4 py-4 space-y-4">
            <button onClick={() => handleNavClick('home')} className="block w-full text-left text-primary hover:text-primary-dark transition-colors">Home</button>
            <button onClick={() => handleNavClick('about')} className="block w-full text-left text-primary hover:text-primary-dark transition-colors">About</button>
            <button onClick={() => handleNavClick('menu')} className="block w-full text-left text-primary hover:text-primary-dark transition-colors">Menu</button>
            <button onClick={() => handleNavClick('packages')} className="block w-full text-left text-primary hover:text-primary-dark transition-colors">Packages</button>
            <button onClick={() => handleNavClick('franchise')} className="block w-full text-left text-primary hover:text-primary-dark transition-colors">Franchise</button>
            <button onClick={() => handleNavClick('contact')} className="block w-full text-left text-primary hover:text-primary-dark transition-colors">Contact</button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
} 