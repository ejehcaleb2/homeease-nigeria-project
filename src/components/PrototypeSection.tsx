
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, FileText, GitBranch, Smartphone } from 'lucide-react';

const PrototypeSection = () => {
  const milestones = [
    {
      icon: Users,
      title: "User Research Survey",
      description: "Conducted comprehensive survey with 100+ Nigerian renters",
      status: "Completed",
      insights: "78% reported losing money to fake agents, 65% want direct landlord contact"
    },
    {
      icon: FileText,
      title: "Wireframe Development",
      description: "Created detailed wireframes for core user journeys",
      status: "Completed", 
      insights: "Focused on simplicity and trust-building elements"
    },
    {
      icon: GitBranch,
      title: "Platform Architecture",
      description: "Designed system flowchart for tenant-landlord interactions",
      status: "In Progress",
      insights: "Modular design allows for rapid feature iteration"
    },
    {
      icon: Smartphone,
      title: "MVP Development",
      description: "Building minimum viable product using Flutter",
      status: "Planned",
      insights: "Mobile-first approach for Nigerian market accessibility"
    }
  ];

  return (
    <section id="prototype" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Prototype & Product Vision
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From research insights to functional prototypes, here's how HomeEaseaim at evolving
            from concept to near-reality through user-centered design.
          </p>
        </div>

        {/* Development Milestones */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-center text-navy mb-12">
            Development Milestones
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gold/20 rounded-lg mr-4">
                      <milestone.icon className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-navy">{milestone.title}</h4>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        milestone.status === 'Completed' ? 'bg-green-100 text-green-700' :
                        milestone.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {milestone.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-3">{milestone.description}</p>
                  <div className="bg-lightGray p-3 rounded-lg">
                    <p className="text-sm text-gray-700 font-medium">Key Insight:</p>
                    <p className="text-sm text-gray-600">{milestone.insights}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Platform Flow Diagram */}
        <div className="mb-16 bg-lightGray rounded-xl p-8">
          <h3 className="text-3xl font-semibold text-center text-navy mb-8">
            HomeEase Platform Flow
          </h3>
          
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-4">
              {/* Tenant */}
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Users className="h-10 w-10 text-blue-600" />
                </div>
                <h4 className="font-semibold text-navy mb-2">Tenant</h4>
                <p className="text-sm text-gray-600">Searches verified listings</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:block text-gold">→</div>

              {/* Platform */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Smartphone className="h-10 w-10 text-gold" />
                </div>
                <h4 className="font-semibold text-navy mb-2">HomeEase Platform</h4>
                <p className="text-sm text-gray-600">Facilitates secure connection</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:block text-gold">→</div>

              {/* Landlord */}
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <FileText className="h-10 w-10 text-green-600" />
                </div>
                <h4 className="font-semibold text-navy mb-2">Verified Landlord</h4>
                <p className="text-sm text-gray-600">Lists authentic properties</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:block text-gold">→</div>

              {/* Payment */}
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <GitBranch className="h-10 w-10 text-purple-600" />
                </div>
                <h4 className="font-semibold text-navy mb-2">Secure Transaction</h4>
                <p className="text-sm text-gray-600">Escrow-protected payment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Mind Map Placeholder */}
        <div className="bg-navy text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">Platform Feature Architecture</h3>
          <div className="bg-white/10 rounded-lg p-6 mb-4">
            <p className="text-lg mb-4">Core Features Mind Map</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-white/20 p-3 rounded">User Authentication</div>
              <div className="bg-white/20 p-3 rounded">Property Verification</div>
              <div className="bg-white/20 p-3 rounded">In-App Messaging</div>
              <div className="bg-white/20 p-3 rounded">Payment Gateway</div>
              <div className="bg-white/20 p-3 rounded">Digital Contracts</div>
              <div className="bg-white/20 p-3 rounded">Rating System</div>
              <div className="bg-white/20 p-3 rounded">Search & Filters</div>
              <div className="bg-white/20 p-3 rounded">Analytics Dashboard</div>
            </div>
          </div>
          <p className="text-gray-300">
            Comprehensive feature mapping ensures scalable, user-focused development
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrototypeSection;
