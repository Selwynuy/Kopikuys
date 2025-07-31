'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Coffee, 
  Phone, 
  Facebook, 
  Instagram, 
  Menu, 
  X,
  Star,
  Users,
  Clock,
  MapPin,
  ChevronDown
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 100], [0, -50]);
  const opacity = useTransform(scrollY, [0, 100], [1, 0.8]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-light-brown">
      {/* Navigation */}
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
              <span className="text-2xl font-serif font-bold text-primary">Kopikuys</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-primary hover:text-primary-dark transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-primary hover:text-primary-dark transition-colors">About</button>
              <button onClick={() => scrollToSection('menu')} className="text-primary hover:text-primary-dark transition-colors">Menu</button>
              <button onClick={() => scrollToSection('packages')} className="text-primary hover:text-primary-dark transition-colors">Packages</button>
              <button onClick={() => scrollToSection('franchise')} className="text-primary hover:text-primary-dark transition-colors">Franchise</button>
              <button onClick={() => scrollToSection('contact')} className="text-primary hover:text-primary-dark transition-colors">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-primary"
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
              <button onClick={() => scrollToSection('home')} className="block w-full text-left text-primary hover:text-primary-dark transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-primary hover:text-primary-dark transition-colors">About</button>
              <button onClick={() => scrollToSection('menu')} className="block w-full text-left text-primary hover:text-primary-dark transition-colors">Menu</button>
              <button onClick={() => scrollToSection('packages')} className="block w-full text-left text-primary hover:text-primary-dark transition-colors">Packages</button>
              <button onClick={() => scrollToSection('franchise')} className="block w-full text-left text-primary hover:text-primary-dark transition-colors">Franchise</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-primary hover:text-primary-dark transition-colors">Contact</button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl md:text-7xl font-serif font-bold text-coffee-brown"
              >
                YOUR EVERYDAY
              </motion.h1>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-6xl md:text-8xl font-serif font-bold text-primary"
              >
                LATTE
              </motion.h2>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-coffee-brown/80 max-w-3xl mx-auto"
            >
              Premium coffee franchise with authentic Filipino flavors. 
              Join our growing family of coffee entrepreneurs.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('franchise')}
                className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transition-all duration-300 animate-pulse-glow"
              >
                Start Your Franchise Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('menu')}
                className="border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300"
              >
                Explore Our Menu
              </motion.button>
            </motion.div>
          </motion.div>
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
            className="text-primary"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-brown mb-4">
              Our Story
            </h2>
            <p className="text-xl text-coffee-brown/70 max-w-3xl mx-auto">
              Born from a passion for authentic Filipino coffee culture, Kopikuys brings the warmth and richness of traditional flavors to modern coffee lovers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Coffee className="w-12 h-12" />,
                title: "Premium Quality",
                description: "We source only the finest coffee beans and ingredients to ensure every cup delivers exceptional taste."
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Community Focused",
                description: "Building connections through coffee, one cup at a time. We're more than just a brand - we're family."
              },
              {
                icon: <Star className="w-12 h-12" />,
                title: "Authentic Flavors",
                description: "Traditional Filipino coffee recipes with a modern twist, creating unique and memorable experiences."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl bg-cream/50 hover:bg-cream transition-all duration-300"
              >
                <div className="text-primary mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-coffee-brown mb-4">
                  {feature.title}
                </h3>
                <p className="text-coffee-brown/70">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section id="menu" className="py-20 bg-gradient-to-br from-cream to-light-brown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-brown mb-4">
              Our Signature Drinks
            </h2>
            <p className="text-xl text-coffee-brown/70 max-w-3xl mx-auto">
              Discover our carefully crafted selection of coffee and specialty beverages.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Iced Coffee Latte", price: "₱39", category: "Coffee Series" },
              { name: "Spanish Latte", price: "₱49", category: "Coffee Series" },
              { name: "Milky Matcha", price: "₱49", category: "Milky Series" },
              { name: "Dark Choco-ey", price: "₱49", category: "Choco-ey Series" },
              { name: "Cookies & Cream", price: "₱49", category: "Rookie Series" },
              { name: "Matcha Rose", price: "₱49", category: "Fusion Sensation" },
              { name: "Hot Black Coffee", price: "₱49", category: "Hot Gold Series" },
              { name: "Iced Pure Black", price: "₱49", category: "Back to Black" }
            ].map((drink, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-full h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl mb-4 flex items-center justify-center">
                  <Coffee className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-coffee-brown mb-2">{drink.name}</h3>
                <p className="text-sm text-primary/70 mb-2">{drink.category}</p>
                <p className="text-xl font-bold text-primary">{drink.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Section */}
      <section id="packages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-brown mb-4">
              Event Packages
            </h2>
            <p className="text-xl text-coffee-brown/70 max-w-3xl mx-auto">
              Perfect coffee service packages for your special events. From intimate gatherings to large celebrations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Private Event",
                price: "₱4,899",
                cups: "70 Cups (16oz)",
                flavors: "3 Flavors",
                hours: "3 Hours",
                staff: "2 Staff",
                booth: "Yes",
                flavorOptions: "Coffee Series",
                featured: false
              },
              {
                name: "Expo",
                price: "₱6,399",
                cups: "100 Cups (16oz)",
                flavors: "3 Flavors",
                hours: "3 Hours",
                staff: "2+ Staff",
                booth: "Yes",
                flavorOptions: "Milky Series",
                featured: false
              },
              {
                name: "Celebration",
                price: "₱8,799",
                cups: "150 Cups (16oz)",
                flavors: "3 Flavors",
                hours: "3 Hours",
                staff: "2 Staff",
                booth: "Yes",
                flavorOptions: "Choco-Ey Series",
                featured: true
              },
              {
                name: "School Gathering",
                price: "₱11,199",
                cups: "200 Cups (16oz)",
                flavors: "3 Flavors",
                hours: "3 Hours",
                staff: "2 Staff",
                booth: "Yes",
                flavorOptions: "Rookie Series",
                featured: false
              }
            ].map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`package-card rounded-2xl p-6 shadow-lg ${pkg.featured ? 'featured' : ''}`}
              >
                {pkg.featured && (
                  <div className="absolute -top-2 -left-2 bg-accent text-coffee-brown text-sm font-semibold px-3 py-1 rounded-full z-10">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-xl font-serif font-bold text-coffee-brown mb-2 text-center">{pkg.name}</h3>
                <div className="text-3xl font-bold text-primary mb-6 text-center">{pkg.price}</div>
                
                <div className="space-y-3 text-sm mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-coffee-brown/70">Cups:</span>
                    <span className="font-semibold text-coffee-brown">{pkg.cups}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-coffee-brown/70">Flavors:</span>
                    <span className="font-semibold text-coffee-brown">{pkg.flavors}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-coffee-brown/70">Duration:</span>
                    <span className="font-semibold text-coffee-brown">{pkg.hours}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-coffee-brown/70">Staff:</span>
                    <span className="font-semibold text-coffee-brown">{pkg.staff}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-coffee-brown/70">Booth Setup:</span>
                    <span className="font-semibold text-coffee-brown">{pkg.booth}</span>
                  </div>
                </div>
                
                <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                  Book Package
                </button>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-cream/50 rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <img 
                  src="/Kopikuys-logo.png" 
                  alt="Kopikuys Logo" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              <h3 className="text-2xl font-serif font-bold text-coffee-brown mb-4">
                Available Flavor Series
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <p className="font-semibold text-primary">• Coffee Series</p>
                  <p className="font-semibold text-primary">• Milky Series</p>
                  <p className="font-semibold text-primary">• Choco-Ey Series</p>
                  <p className="font-semibold text-primary">• Rookie Series</p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-primary">• Hot Gold Series</p>
                  <p className="font-semibold text-primary">• Back to Black Series</p>
                  <p className="font-semibold text-primary">• Fusion Sensation Series</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Franchise Section */}
      <section id="franchise" className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Join the Kopikuys Family
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Start your entrepreneurial journey with our comprehensive franchise package designed for success.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-3xl font-serif font-bold mb-6">Franchise Package</h3>
                <div className="text-6xl font-bold text-accent mb-6">₱88,888</div>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Marketing Support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Low and Fixed Royalty Fee</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>3 Days Operation Assistance</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Complete System Tools & Training</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Opening Inventory & Equipment</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-semibold mb-4">Why Choose Kopikuys?</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-accent" />
                    <span>Proven Business Model</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-accent" />
                    <span>24/7 Support System</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-accent" />
                    <span>Strategic Location Guidance</span>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-accent text-coffee-brown px-8 py-4 rounded-full text-lg font-semibold hover:bg-white transition-all duration-300"
              >
                Get Started Today
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-brown mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-coffee-brown/70 max-w-3xl mx-auto">
              Ready to start your coffee journey? Contact us today to learn more about our franchise opportunities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-serif font-bold text-coffee-brown">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-semibold text-coffee-brown">Phone Numbers</p>
                      <p className="text-coffee-brown/70">0961-352-4794</p>
                      <p className="text-coffee-brown/70">0967-642-9427</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Facebook className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-semibold text-coffee-brown">Facebook</p>
                      <p className="text-coffee-brown/70">Kopikuys on Facebook</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Instagram className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-semibold text-coffee-brown">Instagram</p>
                      <p className="text-coffee-brown/70">@kopikuys</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-cream/50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-serif font-bold text-coffee-brown mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
            <p>&copy; 2024 Kopikuys. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
