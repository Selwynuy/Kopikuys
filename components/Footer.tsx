'use client';

import { Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  return (
    <footer className="bg-coffee-brown text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/Kopikuys-logo.png" 
                alt="Kopikuys Logo" 
                className="h-8 w-auto object-contain"
              />
              <span className="text-xl font-serif font-bold">Kopikuys</span>
            </div>
            <p className="text-white/70">
              Your everyday latte, every day.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button onClick={() => scrollToSection('about')} className="block text-white/70 hover:text-white transition-colors">About</button>
              <button onClick={() => scrollToSection('menu')} className="block text-white/70 hover:text-white transition-colors">Menu</button>
              <button onClick={() => scrollToSection('franchise')} className="block text-white/70 hover:text-white transition-colors">Franchise</button>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-white/70 hover:text-white transition-colors cursor-pointer" />
              <Instagram className="w-6 h-6 text-white/70 hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
          <p>&copy; 2025 Kopikuys. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 