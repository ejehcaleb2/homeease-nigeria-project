
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import JourneySection from '@/components/JourneySection';
import SolutionSection from '@/components/SolutionSection';
import PrototypeSection from '@/components/PrototypeSection';
import ReflectionSection from '@/components/ReflectionSection';
import ConclusionSection from '@/components/ConclusionSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <JourneySection />
      <SolutionSection />
      <PrototypeSection />
      <ReflectionSection />
      <ConclusionSection />
      <Footer />
    </div>
  );
};

export default Index;
