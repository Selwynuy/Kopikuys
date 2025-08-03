'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Coffee } from 'lucide-react';

interface Branch {
  id: string;
  name: string;
  address: string;
  coordinates: [number, number]; // [latitude, longitude]
  phone?: string;
  hours?: string;
}

export default function LocationMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
  const [map, setMap] = useState<any>(null);

  // Sample Kopikuys branches - replace with actual data
  const branches: Branch[] = [
    {
      id: '1',
      name: 'Kopikuys - Manila',
      address: '123 Rizal Avenue, Manila',
      coordinates: [14.5995, 120.9842],
      phone: '+63 2 1234 5678',
      hours: '7:00 AM - 10:00 PM'
    },
    {
      id: '2',
      name: 'Kopikuys - Quezon City',
      address: '456 EDSA, Quezon City',
      coordinates: [14.6760, 121.0437],
      phone: '+63 2 2345 6789',
      hours: '7:00 AM - 10:00 PM'
    },
    {
      id: '3',
      name: 'Kopikuys - Makati',
      address: '789 Ayala Avenue, Makati',
      coordinates: [14.5547, 121.0244],
      phone: '+63 2 3456 7890',
      hours: '7:00 AM - 10:00 PM'
    },
    {
      id: '4',
      name: 'Kopikuys - Cebu',
      address: '321 Mango Avenue, Cebu City',
      coordinates: [10.3157, 123.8854],
      phone: '+63 32 4567 8901',
      hours: '7:00 AM - 10:00 PM'
    },
    {
      id: '5',
      name: 'Kopikuys - Davao',
      address: '654 Pichon Street, Davao City',
      coordinates: [7.1907, 125.4553],
      phone: '+63 82 5678 9012',
      hours: '7:00 AM - 10:00 PM'
    }
  ];

  useEffect(() => {
    // Load Leaflet CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);

    // Load Leaflet JS
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.onload = initializeMap;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(script);
    };
  }, []);

  const initializeMap = () => {
    if (!mapRef.current || typeof window.L === 'undefined') return;

    // Initialize map centered on Philippines
    const mapInstance = window.L.map(mapRef.current).setView([12.8797, 121.7740], 6);

    // Add OpenStreetMap tiles
    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(mapInstance);

    // Add branch markers
    branches.forEach(branch => {
      const marker = window.L.marker(branch.coordinates)
        .addTo(mapInstance)
        .bindPopup(`
          <div class="branch-popup">
            <h3 class="font-bold text-lg text-coffee-brown">${branch.name}</h3>
            <p class="text-sm text-gray-600">${branch.address}</p>
            ${branch.phone ? `<p class="text-sm text-gray-600">📞 ${branch.phone}</p>` : ''}
            ${branch.hours ? `<p class="text-sm text-gray-600">📅 ${branch.hours}</p>` : ''}
          </div>
        `);

      // Add click event
      marker.on('click', () => {
        setSelectedBranch(branch);
      });
    });

    setMap(mapInstance);
  };

  return (
    <section id="locations" className="py-20 bg-gradient-to-br from-cream to-light-brown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-brown mb-4">
            Find Your Nearest Kopikuys
          </h2>
          <p className="text-xl text-coffee-brown/70 max-w-3xl mx-auto">
            Discover our branches across the Philippines. Click on any marker to see branch details.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Container */}
          <div className="lg:col-span-2">
            <div 
              ref={mapRef} 
              className="w-full h-[500px] rounded-2xl shadow-lg border-2 border-coffee-brown/20"
            />
          </div>

          {/* Branch List */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-coffee-brown mb-4 flex items-center gap-2">
              <Coffee className="w-6 h-6" />
              Our Branches
            </h3>
            
            <div className="space-y-3 max-h-[400px] overflow-y-auto">
              {branches.map((branch) => (
                <motion.div
                  key={branch.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                    selectedBranch?.id === branch.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white/80 hover:bg-white shadow-md'
                  }`}
                  onClick={() => setSelectedBranch(branch)}
                >
                  <div className="flex items-start gap-3">
                    <MapPin className={`w-5 h-5 mt-1 ${
                      selectedBranch?.id === branch.id ? 'text-white' : 'text-primary'
                    }`} />
                    <div className="flex-1">
                      <h4 className={`font-semibold ${
                        selectedBranch?.id === branch.id ? 'text-white' : 'text-coffee-brown'
                      }`}>
                        {branch.name}
                      </h4>
                      <p className={`text-sm mt-1 ${
                        selectedBranch?.id === branch.id ? 'text-white/80' : 'text-coffee-brown/70'
                      }`}>
                        {branch.address}
                      </p>
                      {branch.phone && (
                        <p className={`text-sm mt-1 ${
                          selectedBranch?.id === branch.id ? 'text-white/80' : 'text-coffee-brown/70'
                        }`}>
                          📞 {branch.phone}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 