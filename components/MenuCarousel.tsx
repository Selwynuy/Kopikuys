'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee, ChevronLeft, ChevronRight } from 'lucide-react';

export default function MenuCarousel() {
  const [currentSeriesIndex, setCurrentSeriesIndex] = useState(0);
  const [currentDrinkIndex, setCurrentDrinkIndex] = useState(0);

  // Menu data structure with image mappings
  const menuData = [
    {
      series: "Coffee Series",
      drinks: [
        { name: "Iced Coffee Latte", price: "₱39", image: "/Coffee/Coffee_Latte.png" },
        { name: "Spanish Latte", price: "₱49", image: "/Coffee/Spansish_Latte.png" },
        { name: "Matcha Coffee Latte", price: "₱49", image: "/Coffee/Matcha_Latte.png" }
      ]
    },
    {
      series: "Milky Series", 
      drinks: [
        { name: "Milky Matcha", price: "₱49", image: "/Coffee/Milky_Matcha.png" },
        { name: "Milky Strawberry", price: "₱49", image: "/Coffee/Milky_Strawberry.png" },
        { name: "Milky Taro", price: "₱49", image: "/Coffee/Milky_Ube.png" },
        { name: "Milky Blue", price: "₱49", image: "/Coffee/Milky_Matcha.png" } // Using Milky Matcha as placeholder
      ]
    },
    {
      series: "Choco-ey Series",
      drinks: [
        { name: "Dark Choco-ey", price: "₱49", image: "/Coffee/Dark_Choco-Ey.png" },
        { name: "White Choco-ey", price: "₱49", image: "/Coffee/White_Choco-Ey.png" }
      ]
    },
    {
      series: "Rookie Series",
      drinks: [
        { name: "Cookies & Cream", price: "₱49", image: "/Coffee/Cookies & Cream.png" },
        { name: "Rocky Road", price: "₱49", image: "/Coffee/Rocky_Road.png" },
        { name: "Java Chip", price: "₱49", image: "/Coffee/Java_Chip.png" }
      ]
    },
    {
      series: "Fusion Sensation Series",
      drinks: [
        { name: "Matcha Rose", price: "₱49", image: "/Coffee/Matcha_Rose.png" },
        { name: "Midnight Matcha", price: "₱49", image: "/Coffee/Midnight_Matcha.png" },
        { name: "Dark Berry", price: "₱49", image: "/Coffee/Dark_Berry.png" }
      ]
    },
    {
      series: "Hot Gold Series",
      drinks: [
        { name: "Hot Black Coffee", price: "₱49", image: "/Coffee/Hot_Black_Coffee.png" },
        { name: "Hot Dark Choco", price: "₱49", image: "/Coffee/Hot_Dark_Choco.png" },
        { name: "Hot Coffee Latte", price: "₱49", image: "/Coffee/Hot_Coffee_Latte.png" }
      ]
    },
    {
      series: "Back to Black Series",
      drinks: [
        { name: "Iced Pure Black", price: "₱49", image: "/Coffee/Iced_Pure_Black.png" },
        { name: "Iced Sweet Black", price: "₱49", image: "/Coffee/Iced_Sweet_Black.png" }
      ]
    }
  ];

  const nextDrink = () => {
    const currentSeries = menuData[currentSeriesIndex];
    setCurrentDrinkIndex((prev) => (prev + 1) % currentSeries.drinks.length);
  };

  const prevDrink = () => {
    const currentSeries = menuData[currentSeriesIndex];
    setCurrentDrinkIndex((prev) => (prev - 1 + currentSeries.drinks.length) % currentSeries.drinks.length);
  };

  const goToSeries = (seriesIndex: number) => {
    setCurrentSeriesIndex(seriesIndex);
    setCurrentDrinkIndex(0);
  };

  return (
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

        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Series Navigation */}
          <div className="flex lg:flex-col gap-3 order-2 lg:order-1">
            {menuData.map((series, seriesIndex) => (
              <button
                key={seriesIndex}
                onClick={() => goToSeries(seriesIndex)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 text-left ${
                  seriesIndex === currentSeriesIndex 
                    ? 'bg-accent text-coffee-brown font-semibold' 
                    : 'bg-primary/20 text-coffee-brown hover:bg-primary/30'
                }`}
              >
                <div className="text-sm font-medium">{series.series}</div>
                <div className="text-xs opacity-70">{series.drinks.length} drinks</div>
              </button>
            ))}
          </div>

                     {/* Center Display */}
           <div className="flex-1 flex items-center justify-center order-1 lg:order-2">
             <div className="relative max-w-lg w-full">
              {/* Navigation Arrows */}
              <button
                onClick={prevDrink}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10"
                aria-label="Previous drink"
              >
                <ChevronLeft className="w-6 h-6 text-primary" />
              </button>
              
              <button
                onClick={nextDrink}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10"
                aria-label="Next drink"
              >
                <ChevronRight className="w-6 h-6 text-primary" />
              </button>

                             {/* Main Content */}
               <motion.div
                 key={`${currentSeriesIndex}-${currentDrinkIndex}`}
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.3 }}
                                   className="bg-transparent rounded-2xl p-10 shadow-lg relative"
               >
                                   <div className="w-full h-80 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                    <img 
                      src={menuData[currentSeriesIndex].drinks[currentDrinkIndex].image} 
                      alt={menuData[currentSeriesIndex].drinks[currentDrinkIndex].name}
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                
                {/* Text Overlay */}
                <div className="absolute top-8 right-8 text-right">
                  <div className="text-4xl font-bold text-coffee-brown">
                    {menuData[currentSeriesIndex].drinks[currentDrinkIndex].price.replace('₱', '')}
                  </div>
                  <div className="text-sm font-semibold text-coffee-brown uppercase tracking-wide">
                    {menuData[currentSeriesIndex].drinks[currentDrinkIndex].name.split(' ')[0]}
                  </div>
                  <div className="text-sm font-semibold text-coffee-brown uppercase tracking-wide">
                    {menuData[currentSeriesIndex].drinks[currentDrinkIndex].name.split(' ').slice(1).join(' ')}
                  </div>
                  <div className="text-xs text-coffee-brown/70 uppercase tracking-wider mt-1">
                    {menuData[currentSeriesIndex].series}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

                     {/* Right Preview */}
           <div className="flex lg:flex-col gap-2 order-3">
             {[1, 2].map((offset) => {
               const currentSeries = menuData[currentSeriesIndex];
               const nextIndex = (currentDrinkIndex + offset) % currentSeries.drinks.length;
               return (
                 <div
                   key={offset}
                                       className="w-16 h-20 lg:w-20 lg:h-24 bg-transparent rounded-lg shadow-sm overflow-hidden"
                 >
                                       <img 
                      src={currentSeries.drinks[nextIndex].image} 
                      alt={currentSeries.drinks[nextIndex].name}
                      className="w-full h-full object-contain"
                    />
                 </div>
               );
             })}
           </div>
        </div>

        {/* Current Drink Info */}
        <motion.div
          key={`${currentSeriesIndex}-${currentDrinkIndex}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mt-8"
        >
          <h3 className="text-2xl font-serif font-bold text-coffee-brown mb-2">
            {menuData[currentSeriesIndex].drinks[currentDrinkIndex].name}
          </h3>
          <p className="text-lg text-primary font-semibold mb-2">
            {menuData[currentSeriesIndex].drinks[currentDrinkIndex].price}
          </p>
          <p className="text-sm text-coffee-brown/70">
            {menuData[currentSeriesIndex].series}
          </p>
        </motion.div>
      </div>
    </section>
  );
} 