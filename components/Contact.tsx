'use client';

import { motion } from 'framer-motion';
import { Phone, Facebook, Instagram } from 'lucide-react';

export default function Contact() {
  return (
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
  );
} 