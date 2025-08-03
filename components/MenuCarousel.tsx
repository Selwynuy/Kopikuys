'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function MenuCarousel() {
  const [currentSeriesIndex, setCurrentSeriesIndex] = useState(0);
  const [currentDrinkIndex, setCurrentDrinkIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

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
        { name: "Milky Blue", price: "₱49", image: "/Coffee/Milky_Matcha.png" }
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

  // Touch gesture handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(0); // Reset touch end
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 30; // Reduced for better responsiveness
    
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        nextDrink(); // Swipe left = next
      } else {
        prevDrink(); // Swipe right = previous
      }
    }

    // Reset values
    setTouchStart(0);
    setTouchEnd(0);
  };

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
    <section id="menu" className="py-12 md:py-20 bg-gradient-to-br from-cream to-light-brown min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-coffee-brown mb-4">
            Our Signature Drinks
          </h2>
          <p className="text-lg md:text-xl text-coffee-brown/70 max-w-3xl mx-auto px-4">
            Discover our carefully crafted selection of coffee and specialty beverages.
          </p>
        </motion.div>

        {/* Mobile Series Selector */}
        <div className="md:hidden mb-8">
          <div className="flex gap-2 overflow-x-auto pb-4 px-4 -mx-4">
            {menuData.map((series, seriesIndex) => (
              <button
                key={seriesIndex}
                onClick={() => goToSeries(seriesIndex)}
                className={`flex-shrink-0 px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium ${
                  seriesIndex === currentSeriesIndex 
                    ? 'bg-accent text-coffee-brown shadow-md' 
                    : 'bg-white/60 text-coffee-brown/70 hover:bg-white/80'
                }`}
              >
                {series.series.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex flex-col lg:flex-row items-center gap-8 mb-16">
          {/* Desktop Series Navigation */}
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
            <div className="relative max-w-xl w-full">
              {/* Navigation Arrows */}
              <button
                onClick={prevDrink}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-coffee-brown/20 rounded-full flex items-center justify-center hover:bg-coffee-brown/30 transition-colors z-10"
                aria-label="Previous drink"
              >
                <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-coffee-brown" />
              </button>
              
              <button
                onClick={nextDrink}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-coffee-brown/20 rounded-full flex items-center justify-center hover:bg-coffee-brown/30 transition-colors z-10"
                aria-label="Next drink"
              >
                <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-coffee-brown" />
              </button>

              {/* Main Content */}
              <motion.div
                key={`${currentSeriesIndex}-${currentDrinkIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-transparent rounded-2xl p-6 md:p-10 relative"
              >
                <div className="w-full aspect-[4/3] flex items-center justify-center overflow-hidden relative">
                  {/* Platform/Coaster */}
                  <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 w-32 md:w-48 h-3 md:h-4 bg-coffee-brown/30 rounded-full blur-sm"></div>
                  
                  <img 
                    src={menuData[currentSeriesIndex].drinks[currentDrinkIndex].image} 
                    alt={menuData[currentSeriesIndex].drinks[currentDrinkIndex].name}
                    className="w-full h-full object-cover object-center relative z-10 scale-110 md:scale-125"
                  />
                </div>
              
                {/* Drink Information */}
                <motion.div
                  key={`${currentSeriesIndex}-${currentDrinkIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-center mt-6 md:mt-8"
                >
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-coffee-brown mb-2">
                    {menuData[currentSeriesIndex].drinks[currentDrinkIndex].name}
                  </h3>
                  <p className="text-xl md:text-2xl text-primary font-semibold mb-2">
                    {menuData[currentSeriesIndex].drinks[currentDrinkIndex].price}
                  </p>
                  <p className="text-xs md:text-sm text-coffee-brown/70 uppercase tracking-wider">
                    {menuData[currentSeriesIndex].series}
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Desktop Preview */}
          <div className="flex lg:flex-col gap-2 order-3">
            {(() => {
              const currentSeries = menuData[currentSeriesIndex];
              const totalDrinks = currentSeries.drinks.length;
              const previewCount = Math.min(totalDrinks - 1, 3);
              
              return Array.from({ length: previewCount }, (_, index) => {
                const nextIndex = (currentDrinkIndex + index + 1) % totalDrinks;
                return (
                  <div
                    key={index}
                    className="w-16 h-20 lg:w-20 lg:h-24 bg-transparent rounded-lg shadow-sm overflow-hidden"
                  >
                    <img 
                      src={currentSeries.drinks[nextIndex].image} 
                      alt={currentSeries.drinks[nextIndex].name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                );
              });
            })()}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Mobile Series Tabs */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2 justify-center">
              {menuData.map((series, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSeriesIndex(index);
                    setCurrentDrinkIndex(0); // Reset to first drink when changing series
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    currentSeriesIndex === index
                      ? 'bg-primary text-cream shadow-md'
                      : 'bg-coffee-brown/10 text-coffee-brown hover:bg-coffee-brown/20'
                  }`}
                >
                  {series.series}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Drink Display */}
          <div 
            ref={carouselRef}
            className="relative max-w-sm mx-auto mb-6"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Navigation Arrows */}
            <button
              onClick={prevDrink}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-coffee-brown/20 rounded-full flex items-center justify-center hover:bg-coffee-brown/30 active:bg-coffee-brown/40 transition-colors z-10 shadow-lg"
              aria-label="Previous drink"
            >
              <ChevronLeft className="w-6 h-6 text-coffee-brown" />
            </button>
            
            <button
              onClick={nextDrink}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-coffee-brown/20 rounded-full flex items-center justify-center hover:bg-coffee-brown/30 active:bg-coffee-brown/40 transition-colors z-10 shadow-lg"
              aria-label="Next drink"
            >
              <ChevronRight className="w-6 h-6 text-coffee-brown" />
            </button>

            {/* Main Content */}
            <motion.div
              key={`${currentSeriesIndex}-${currentDrinkIndex}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-transparent rounded-2xl p-4 relative"
            >
              <div className="w-full aspect-[4/3] flex items-center justify-center overflow-hidden relative">
                {/* Platform/Coaster */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-3 bg-coffee-brown/30 rounded-full blur-sm"></div>
                
                <img 
                  src={menuData[currentSeriesIndex].drinks[currentDrinkIndex].image} 
                  alt={menuData[currentSeriesIndex].drinks[currentDrinkIndex].name}
                  className="w-full h-full object-cover object-center relative z-10 scale-110"
                />
              </div>
            
              {/* Drink Information */}
              <motion.div
                key={`${currentSeriesIndex}-${currentDrinkIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-center mt-6"
              >
                <h3 className="text-2xl font-serif font-bold text-coffee-brown mb-2">
                  {menuData[currentSeriesIndex].drinks[currentDrinkIndex].name}
                </h3>
                <p className="text-xl text-primary font-semibold mb-2">
                  {menuData[currentSeriesIndex].drinks[currentDrinkIndex].price}
                </p>
                <p className="text-xs text-coffee-brown/70 uppercase tracking-wider">
                  {menuData[currentSeriesIndex].series}
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile Drink Indicators */}
          <div className="flex justify-center gap-2 mb-4">
            {menuData[currentSeriesIndex].drinks.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentDrinkIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentDrinkIndex ? 'bg-accent' : 'bg-coffee-brown/30'
                }`}
                aria-label={`Go to drink ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Series Info */}
          <div className="text-center">
            <p className="text-sm text-coffee-brown/70">
              {currentDrinkIndex + 1} of {menuData[currentSeriesIndex].drinks.length} in {menuData[currentSeriesIndex].series}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 