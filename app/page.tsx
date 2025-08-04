'use client';

import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import MenuCarousel from '../components/MenuCarousel';
import Packages from '../components/Packages';
import Franchise from '../components/Franchise';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Branches from '../components/Branches';

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-light-brown overflow-x-hidden">
      <Navigation scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <MenuCarousel />
      <Packages />
      <Branches />
      <Franchise />
      <Contact />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}
