
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Calendar, Users, TrendingUp } from 'lucide-react';

const ConclusionSection = () => {
  const currentStatus = [
    {
      icon: Target,
      title: "Early Prototype Complete",
      description: "Core user flows designed and validated through user research"
    },
    {
      icon: Users,
      title: "Market Validation",
      description: "100+ potential users surveyed with 85% expressing interest in the platform"
    },
    {
      icon: TrendingUp,
      title: "Business Model Validated",
      description: "1% service fee model tested and approved by target users"
    }
  ];

  const nextSteps = [
    {
      icon: Calendar,
      title: "Develop MVP using Flutter",
      timeline: "Q2 2025",
      description: "Build functional mobile application with core features"
    },
    {
      icon: Users,
      title: "Partner with 50 verified landlords",
      timeline: "Q3 2025",
      description: "Onboard initial landlord base in Lagos metropolitan area"
    },
    {
      icon: Target,
      title: "Launch pilot in Lagos",
      timeline: "Q1 2026",
      description: "Go-to-market with limited beta testing group"
    }
  ];

  return (
    <section id="conclusion" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            What's Next?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            HomeEase has evolved from concept to validated prototype. Here's where we stand 
            and the exciting journey ahead as we prepare to transform Nigeria's rental market.
          </p>
        </div>

        {/* Current Status */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-center text-navy mb-12">
            Current Project Status
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {currentStatus.map((status, index) => (
              <Card key={index} className="border-none shadow-lg bg-green-50">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-green-100 rounded-full">
                      <status.icon className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-navy mb-3">{status.title}</h4>
                  <p className="text-gray-600">{status.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Next Steps Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-center text-navy mb-12">
            Roadmap to Market Launch
          </h3>
          <div className="space-y-8">
            {nextSteps.map((step, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="p-3 bg-gold/20 rounded-lg mr-4">
                        <step.icon className="h-6 w-6 text-gold" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-navy">{step.title}</h4>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-navy text-white px-3 py-1 rounded-full text-sm font-medium">
                        {step.timeline}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Reaffirmation */}
        <div className="bg-gradient-to-r from-navy to-navy/90 text-white rounded-xl p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Our Mission Continues
          </h3>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            "We're not just building tech—we're building trust, fairness, and access to housing for everyday Nigerians."
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gold mb-2">Trust</div>
              <p className="text-gray-200">Through verified landlords and transparent processes</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">Fairness</div>
              <p className="text-gray-200">Eliminating exploitative agent fees and hidden charges</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">Access</div>
              <p className="text-gray-200">Making quality housing affordable for low-income families</p>
            </div>
          </div>
        </div>

        {/* Academic Project Footer */}
        <div className="mt-16 text-center border-t pt-8">
          <p className="text-gray-600 mb-4">
            This project was developed as part of an academic entrepreneurship program
          </p>
          <div className="text-navy font-semibold">
            <p>Caleb Ejeh</p>
            <p className="text-sm text-gray-500">Entrepreneurship Project | 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSection;
