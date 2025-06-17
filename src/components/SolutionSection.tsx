
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Shield, CreditCard, MessageSquare, FileText, Zap } from 'lucide-react';

const SolutionSection = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Verified Landlord Listings",
      description: "Every landlord undergoes identity verification and property authentication before listing."
    },
    {
      icon: Zap,
      title: "Flat 1% Digital Service Fee",
      description: "Transparent pricing with no hidden charges - just 1% of annual rent as service fee."
    },
    {
      icon: Shield,
      title: "Escrow-secured Payments",
      description: "Secure payment system protects both tenants and landlords throughout the transaction."
    },
    {
      icon: FileText,
      title: "In-App Agreements",
      description: "Digital lease agreements and documentation streamline the rental process."
    },
    {
      icon: MessageSquare,
      title: "Direct Communication",
      description: "Built-in chat system enables direct tenant-landlord communication."
    },
    {
      icon: CreditCard,
      title: "No Agent Fees",
      description: "Eliminate costly middleman charges that burden Nigerian renters."
    }
  ];

  const implementationPlan = [
    {
      phase: "Phase 1",
      title: "Lagos Pilot Launch",
      timeline: "Q1 2025",
      description: "Launch MVP with 50 verified landlords in Lagos"
    },
    {
      phase: "Phase 2", 
      title: "Feature Enhancement",
      timeline: "Q3 2025",
      description: "Add in-app lease signing and payment integration"
    },
    {
      phase: "Phase 3",
      title: "National Expansion",
      timeline: "Q1 2026",
      description: "Expand to 5 major Nigerian states with 500+ listings"
    }
  ];

  return (
    <section id="solution" className="py-20 bg-lightGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            How HomeEase Solves the Problem
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            HomeEase is a digital platform that connects verified landlords directly with tenants, 
            eliminating agent exploitation through transparency, security, and fair pricing. 
            We're building trust back into Nigeria's rental market, one verified listing at a time.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-center text-navy mb-12">
            Platform Features
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-gold/20 rounded-lg mr-3">
                      <feature.icon className="h-6 w-6 text-gold" />
                    </div>
                    <h4 className="text-lg font-semibold text-navy">{feature.title}</h4>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Before vs After Comparison */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-center text-navy mb-12">
            Before vs After HomeEase
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Before */}
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-red-700 mb-6 text-center">Before HomeEase</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">✗</span>
                    <span className="text-gray-700">Agent fees ranging from ₦200K - ₦500K</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">✗</span>
                    <span className="text-gray-700">Fake listings and fraudulent agents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">✗</span>
                    <span className="text-gray-700">No direct landlord communication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">✗</span>
                    <span className="text-gray-700">Lengthy, paper-based processes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">✗</span>
                    <span className="text-gray-700">Hidden charges and unclear pricing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* After */}
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-green-700 mb-6 text-center">After HomeEase</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Only 1% service fee (₦10K on ₦1M rent)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">100% verified landlords and properties</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Direct tenant-landlord communication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Digital agreements and instant processing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Transparent pricing with no hidden fees</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="bg-white rounded-xl p-8">
          <h3 className="text-3xl font-semibold text-center text-navy mb-12">
            Implementation Plan
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gold"></div>
            
            <div className="space-y-12">
              {implementationPlan.map((phase, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="shadow-lg">
                      <CardContent className="p-6">
                        <div className="text-sm font-medium text-gold mb-1">{phase.phase}</div>
                        <h4 className="text-xl font-semibold text-navy mb-2">{phase.title}</h4>
                        <div className="text-sm text-gray-500 mb-3">{phase.timeline}</div>
                        <p className="text-gray-700">{phase.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
