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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

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
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2 md:space-x-3"
          >
            <img 
              src="/Kopikuys-logo.png" 
              alt="Kopikuys Logo" 
              className="h-8 w-auto md:h-10 object-contain"
            />
            <span className={`text-xl md:text-2xl font-serif font-bold ${isScrolled ? 'text-primary' : 'text-coffee-brown drop-shadow-sm'}`}>
              Kopikuys
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button 
              onClick={() => handleNavClick('home')} 
              className={`transition-colors text-sm lg:text-base font-medium ${
                isScrolled ? 'text-primary hover:text-primary-dark' : 'text-coffee-brown hover:text-secondary drop-shadow-sm'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('menu')} 
              className={`transition-colors text-sm lg:text-base font-medium ${
                isScrolled ? 'text-primary hover:text-primary-dark' : 'text-coffee-brown hover:text-secondary drop-shadow-sm'
              }`}
            >
              Menu
            </button>
            <button 
              onClick={() => handleNavClick('packages')} 
              className={`transition-colors text-sm lg:text-base font-medium ${
                isScrolled ? 'text-primary hover:text-primary-dark' : 'text-coffee-brown hover:text-secondary drop-shadow-sm'
              }`}
            >
              Packages
            </button>
            <button 
              onClick={() => handleNavClick('franchise')} 
              className={`transition-colors text-sm lg:text-base font-medium ${
                isScrolled ? 'text-primary hover:text-primary-dark' : 'text-coffee-brown hover:text-secondary drop-shadow-sm'
              }`}
            >
              Franchise
            </button>
            <button 
              onClick={() => handleNavClick('contact')} 
              className={`transition-colors text-sm lg:text-base font-medium ${
                isScrolled ? 'text-primary hover:text-primary-dark' : 'text-coffee-brown hover:text-secondary drop-shadow-sm'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden menu-button p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-primary hover:bg-primary/10' : 'text-coffee-brown hover:bg-coffee-brown/10 drop-shadow-sm'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : '100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`md:hidden mobile-menu fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <span className="text-xl font-bold text-coffee-brown">Menu</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-coffee-brown" />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex-1 p-6 space-y-4">
            <button 
              onClick={() => handleNavClick('home')} 
              className="block w-full text-left py-3 px-4 text-lg font-medium text-coffee-brown hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('menu')} 
              className="block w-full text-left py-3 px-4 text-lg font-medium text-coffee-brown hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
            >
              Menu
            </button>
            <button 
              onClick={() => handleNavClick('packages')} 
              className="block w-full text-left py-3 px-4 text-lg font-medium text-coffee-brown hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
            >
              Packages
            </button>
            <button 
              onClick={() => handleNavClick('franchise')} 
              className="block w-full text-left py-3 px-4 text-lg font-medium text-coffee-brown hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
            >
              Franchise
            </button>
            <button 
              onClick={() => handleNavClick('contact')} 
              className="block w-full text-left py-3 px-4 text-lg font-medium text-coffee-brown hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-gray-200">
            <div className="text-center">
              <p className="text-sm text-coffee-brown/70 mb-2">Visit us today!</p>
              <button 
                onClick={() => handleNavClick('contact')}
                className="w-full bg-primary text-cream py-3 px-6 rounded-full font-semibold hover:bg-primary-dark transition-colors"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
} 