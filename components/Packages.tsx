'use client';

import { motion } from 'framer-motion';

export default function Packages() {
  const packages = [
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
  ];

  return (
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
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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
      </div>
    </section>
  );
} 