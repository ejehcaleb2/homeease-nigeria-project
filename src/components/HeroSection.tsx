
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToJourney = () => {
    const element = document.getElementById('journey');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 gradient-hero">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              HomeEase: Making Rent 
              <span className="text-gradient block mt-2">Fair in Nigeria</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              A digital solution designed to break the barrier between tenants and landlords, one verified listing at a time.
            </p>
            
            <div className="mb-12">
              <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                As someone who grew up in Nigeria and saw firsthand how housing injustice affects millions families, 
                I built HomeEase to disrupt the rent exploitation culture with transparency, access, and fairness.
              </p>
              
              <p className="text-sm sm:text-base text-gold font-medium">
                By Caleb Ejeh
              </p>
            </div>
            
            <Button 
              onClick={scrollToJourney}
              size="lg"
              className="bg-gold hover:bg-gold/90 text-navy font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Explore My Journey
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
