'use client';

import { motion } from 'framer-motion';
import { MapPin, Coffee, Phone, Clock } from 'lucide-react';

interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  region: string;
}

export default function Branches() {
  const branches: Branch[] = [
    // Luzon Branches
    {
      id: '1',
      name: 'Kopikuys - Manila',
      address: '123 Rizal Avenue, Manila',
      phone: '+63 2 1234 5678',
      hours: '7:00 AM - 10:00 PM',
      region: 'Luzon'
    },
    {
      id: '2',
      name: 'Kopikuys - Quezon City',
      address: '456 EDSA, Quezon City',
      phone: '+63 2 2345 6789',
      hours: '7:00 AM - 10:00 PM',
      region: 'Luzon'
    },
    {
      id: '3',
      name: 'Kopikuys - Makati',
      address: '789 Ayala Avenue, Makati',
      phone: '+63 2 3456 7890',
      hours: '7:00 AM - 10:00 PM',
      region: 'Luzon'
    },
    {
      id: '4',
      name: 'Kopikuys - Baguio',
      address: '321 Session Road, Baguio City',
      phone: '+63 74 4567 8901',
      hours: '7:00 AM - 9:00 PM',
      region: 'Luzon'
    },
    {
      id: '5',
      name: 'Kopikuys - Batangas',
      address: '654 P. Burgos Street, Batangas City',
      phone: '+63 43 5678 9012',
      hours: '7:00 AM - 10:00 PM',
      region: 'Luzon'
    },
    {
      id: '6',
      name: 'Kopikuys - Tarlac',
      address: '987 McArthur Highway, Tarlac City',
      phone: '+63 45 6789 0123',
      hours: '7:00 AM - 10:00 PM',
      region: 'Luzon'
    },
    {
      id: '7',
      name: 'Kopikuys - Olongapo',
      address: '147 Rizal Avenue, Olongapo City',
      phone: '+63 47 7890 1234',
      hours: '7:00 AM - 10:00 PM',
      region: 'Luzon'
    },
    {
      id: '8',
      name: 'Kopikuys - Calamba',
      address: '258 National Highway, Calamba City',
      phone: '+63 49 8901 2345',
      hours: '7:00 AM - 10:00 PM',
      region: 'Luzon'
    },
    {
      id: '9',
      name: 'Kopikuys - Legazpi',
      address: '369 Rizal Street, Legazpi City',
      phone: '+63 52 9012 3456',
      hours: '7:00 AM - 10:00 PM',
      region: 'Luzon'
    },
    {
      id: '10',
      name: 'Kopikuys - Sorsogon',
      address: '741 Rizal Street, Sorsogon City',
      phone: '+63 56 0123 4567',
      hours: '7:00 AM - 10:00 PM',
      region: 'Luzon'
    },
    // Visayas Branches
    {
      id: '11',
      name: 'Kopikuys - Cebu',
      address: '321 Mango Avenue, Cebu City',
      phone: '+63 32 4567 8901',
      hours: '7:00 AM - 10:00 PM',
      region: 'Visayas'
    },
    {
      id: '12',
      name: 'Kopikuys - Roxas',
      address: '852 Roxas Avenue, Roxas City',
      phone: '+63 36 1234 5678',
      hours: '7:00 AM - 10:00 PM',
      region: 'Visayas'
    },
    {
      id: '13',
      name: 'Kopikuys - Catbalogan',
      address: '963 Rizal Street, Catbalogan City',
      phone: '+63 55 2345 6789',
      hours: '7:00 AM - 10:00 PM',
      region: 'Visayas'
    },
    {
      id: '14',
      name: 'Kopikuys - Tacloban',
      address: '147 Real Street, Tacloban City',
      phone: '+63 53 3456 7890',
      hours: '7:00 AM - 10:00 PM',
      region: 'Visayas'
    },
    {
      id: '15',
      name: 'Kopikuys - Bogo',
      address: '258 Osmeña Street, Bogo City',
      phone: '+63 32 4567 8901',
      hours: '7:00 AM - 10:00 PM',
      region: 'Visayas'
    },
    {
      id: '16',
      name: 'Kopikuys - Bacolod',
      address: '369 Lacson Street, Bacolod City',
      phone: '+63 34 5678 9012',
      hours: '7:00 AM - 10:00 PM',
      region: 'Visayas'
    },
    {
      id: '17',
      name: 'Kopikuys - Ormoc',
      address: '741 Real Street, Ormoc City',
      phone: '+63 53 6789 0123',
      hours: '7:00 AM - 10:00 PM',
      region: 'Visayas'
    },
    {
      id: '18',
      name: 'Kopikuys - Kabankalan',
      address: '852 Rizal Street, Kabankalan City',
      phone: '+63 34 7890 1234',
      hours: '7:00 AM - 10:00 PM',
      region: 'Visayas'
    },
    {
      id: '19',
      name: 'Kopikuys - Tagbilaran',
      address: '963 Carlos P. Garcia Avenue, Tagbilaran City',
      phone: '+63 38 8901 2345',
      hours: '7:00 AM - 10:00 PM',
      region: 'Visayas'
    },
    {
      id: '20',
      name: 'Kopikuys - Dumaguete',
      address: '147 Perdices Street, Dumaguete City',
      phone: '+63 35 9012 3456',
      hours: '7:00 AM - 10:00 PM',
      region: 'Visayas'
    }
  ];

  return (
    <section id="branches" className="py-20 bg-gradient-to-br from-cream to-light-brown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-brown mb-4">
            Our Branches
          </h2>
          <p className="text-xl text-coffee-brown/70 max-w-3xl mx-auto">
            Find your nearest Kopikuys branch across the Philippines. We&apos;re expanding to serve you better!
          </p>
        </motion.div>

        {/* Branches Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {branches.map((branch, index) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-coffee-brown/10 hover:border-coffee-brown/30 hover:-translate-y-1"
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Coffee className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-coffee-brown mb-1 group-hover:text-primary transition-colors">
                    {branch.name}
                  </h3>
                  <span className="text-xs bg-accent/20 text-coffee-brown px-2 py-1 rounded-full font-medium">
                    {branch.region}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-coffee-brown/60 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-coffee-brown/80 leading-relaxed">{branch.address}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-coffee-brown/60 flex-shrink-0" />
                  <p className="text-sm text-coffee-brown/80 font-medium">{branch.phone}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-coffee-brown/60 flex-shrink-0" />
                  <p className="text-sm text-coffee-brown/80">{branch.hours}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Branch Count */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/60 rounded-2xl p-8 shadow-lg border border-coffee-brown/10">
            <p className="text-xl text-coffee-brown/80 mb-2">
              Currently serving
            </p>
            <p className="text-4xl font-bold text-primary mb-2">
              {branches.length} locations
            </p>
            <p className="text-lg text-coffee-brown/70">
              across the Philippines
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 