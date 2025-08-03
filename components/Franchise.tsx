'use client';

import { motion } from 'framer-motion';
import { Users, Clock, MapPin, CheckCircle, Star, TrendingUp } from 'lucide-react';

export default function Franchise() {
  return (
    <section id="franchise" className="py-20 bg-gradient-to-br from-cream via-light-brown to-accent text-coffee-brown relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(139,69,19,0.1)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-coffee-brown/20">
            <Star className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-coffee-brown">Franchise Opportunity</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-coffee-brown">
            Join the Kopikuys Family
          </h2>
          <p className="text-xl text-coffee-brown/70 max-w-3xl mx-auto">
            Start your entrepreneurial journey with our comprehensive franchise package designed for success.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Card - Franchise Package */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-coffee-brown/20 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-bold text-coffee-brown">Franchise Package</h3>
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              
              <div className="text-center mb-8">
                <div className="text-6xl font-bold text-primary mb-2">₱88,888</div>
                <p className="text-coffee-brown/60 text-sm">One-time franchise fee</p>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-center space-x-4 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-lg text-coffee-brown">Marketing Support</span>
                </li>
                <li className="flex items-center space-x-4 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-lg text-coffee-brown">Low and Fixed Royalty Fee</span>
                </li>
                <li className="flex items-center space-x-4 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-lg text-coffee-brown">3 Days Operation Assistance</span>
                </li>
                <li className="flex items-center space-x-4 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-lg text-coffee-brown">Complete System Tools & Training</span>
                </li>
                <li className="flex items-center space-x-4 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-lg text-coffee-brown">Opening Inventory & Equipment</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Card - Why Choose */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-coffee-brown/20 shadow-2xl">
              <h4 className="text-2xl font-bold mb-6 text-coffee-brown">Why Choose Kopikuys?</h4>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-primary/5 transition-colors">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg mb-1 text-coffee-brown">Proven Business Model</h5>
                    <p className="text-coffee-brown/60 text-sm">Tested and successful franchise system</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-primary/5 transition-colors">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg mb-1 text-coffee-brown">24/7 Support System</h5>
                    <p className="text-coffee-brown/60 text-sm">Round-the-clock assistance for your business</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-primary/5 transition-colors">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg mb-1 text-coffee-brown">Strategic Location Guidance</h5>
                    <p className="text-coffee-brown/60 text-sm">Expert help in finding the perfect location</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-primary text-cream px-8 py-4 rounded-full text-lg font-bold hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center bg-white/60 rounded-xl p-6 border border-coffee-brown/20">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <p className="text-coffee-brown/70">Successful Franchises</p>
          </div>
          <div className="text-center bg-white/60 rounded-xl p-6 border border-coffee-brown/20">
            <div className="text-3xl font-bold text-primary mb-2">₱2M+</div>
            <p className="text-coffee-brown/70">Average Annual Revenue</p>
          </div>
          <div className="text-center bg-white/60 rounded-xl p-6 border border-coffee-brown/20">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <p className="text-coffee-brown/70">Success Rate</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 