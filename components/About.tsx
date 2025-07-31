'use client';

import { motion } from 'framer-motion';
import { Coffee, Users, Star } from 'lucide-react';

export default function About() {
  const features = [
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
  ];

  return (
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
          {features.map((feature, index) => (
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
  );
} 