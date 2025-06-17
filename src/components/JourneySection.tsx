
import React from 'react';
import { MapPin, Users, TrendingDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const JourneySection = () => {
  const problemStats = [
    {
      icon: MapPin,
      stat: "Lagos, Nigeria",
      description: "Where rent exploitation is most severe"
    },
    {
      icon: Users,
      stat: "80%+",
      description: "Of renters lose money to fake listings or double-charged agents"
    },
    {
      icon: TrendingDown,
      stat: "₦200K - ₦500K",
      description: "Average agent fees per rental transaction"
    }
  ];

  return (
    <section id="journey" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Why I Started This Journey
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story Content */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl md:text-3xl font-semibold text-navy mb-6">
              A Personal Connection to Housing Injustice
            </h3>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Growing up in Nigeria, I witnessed countless families struggle with the housing market. 
                My own family faced the frustration of dealing with dishonest agents who demanded 
                exorbitant fees for substandard properties.
              </p>
              <p>
                The breaking point came when I saw a single mother pay ₦400,000 in agent fees for 
                a one-bedroom apartment, only to discover the landlord never authorized the listing. 
                She lost her savings and still had no home.
              </p>
              <p className="font-medium text-navy">
                That's when I realized technology could bridge the gap between genuine landlords 
                and desperate tenants, eliminating the middleman exploitation that plagues our housing market.
              </p>
            </div>
          </div>

          {/* Visual Element */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Nigerian housing challenge"
                className="rounded-lg shadow-xl w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-navy/20 rounded-lg"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-medium bg-black/50 p-3 rounded">
                  "Every family deserves fair access to housing without exploitation"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Problem Scale Visualization */}
        <div className="bg-lightGray rounded-xl p-8 mb-12">
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-navy mb-8">
            The Scale of the Problem
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {problemStats.map((item, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gold/20 rounded-full">
                      <item.icon className="h-8 w-8 text-gold" />
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-navy mb-2">{item.stat}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call-out Quote */}
        <div className="text-center bg-navy text-white p-8 rounded-xl">
          <blockquote className="text-xl md:text-2xl font-medium italic mb-4">
            "Over 80% of renters in Lagos lose money to fake listings or double-charged agents."
          </blockquote>
          <cite className="text-gold">— Nigeria Housing Market Research, 2024</cite>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
