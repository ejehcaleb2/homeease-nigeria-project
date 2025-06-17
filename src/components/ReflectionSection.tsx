
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, Lightbulb, TrendingUp } from 'lucide-react';

const ReflectionSection = () => {
  const challenges = [
    {
      icon: AlertTriangle,
      title: "Getting Feedback from Skeptical Landlords",
      description: "Many landlords were initially hesitant to trust a digital platform, preferring traditional agent relationships.",
      solution: "Organized in-person meetings and created a landlord-first onboarding process focusing on their concerns."
    },
    {
      icon: Lightbulb,
      title: "Refining the Scope of the MVP",
      description: "Initially tried to build too many features at once, leading to complexity and development delays.",
      solution: "Adopted lean startup principles and focused on core tenant-landlord connection features first."
    },
    {
      icon: TrendingUp,
      title: "Balancing Affordability and Sustainability",
      description: "Struggled to find the right pricing model that's affordable for tenants yet sustainable for business growth.",
      solution: "Researched competitor pricing and surveyed users to land on the 1% service fee model."
    }
  ];

  const quotes = [
    {
      text: "Listening to users changed everything.",
      context: "After the first round of user interviews, I completely redesigned the onboarding flow to address real pain points rather than assumed ones."
    },
    {
      text: "Sometimes, removing features is progress.", 
      context: "Simplified the platform by removing complex rent financing options to focus on the core problem: direct landlord-tenant connections."
    },
    {
      text: "Trust is built through transparency, not technology.",
      context: "Learned that users cared more about clear processes and honest communication than flashy features."
    }
  ];

  const skillsGained = [
    "User-centered design thinking",
    "Lean startup methodology", 
    "Market research and validation",
    "Stakeholder interview techniques",
    "MVP prioritization strategies",
    "Nigerian market dynamics understanding"
  ];

  return (
    <section id="reflection" className="py-20 bg-lightGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            What I've Learned
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Building HomeEase taught me invaluable lessons about entrepreneurship, 
            user research, and the complexity of solving real-world problems through technology.
          </p>
        </div>

        {/* Major Challenges */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-center text-navy mb-12">
            Major Challenges Overcome
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-red-100 rounded-lg mr-3">
                      <challenge.icon className="h-6 w-6 text-red-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-navy">{challenge.title}</h4>
                  </div>
                  <p className="text-gray-600 mb-4">{challenge.description}</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-green-700 mb-1">Solution:</p>
                    <p className="text-sm text-green-600">{challenge.solution}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Insights Quotes */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-center text-navy mb-12">
            Key Insights & Mindset Shifts
          </h3>
          <div className="space-y-8">
            {quotes.map((quote, index) => (
              <Card key={index} className="border-l-4 border-gold shadow-lg">
                <CardContent className="p-6">
                  <blockquote className="text-xl md:text-2xl font-medium text-navy mb-4 italic">
                    "{quote.text}"
                  </blockquote>
                  <p className="text-gray-600">{quote.context}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Development */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-semibold text-navy mb-6">
              New Skills & Competencies Developed
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {skillsGained.map((skill, index) => (
                <div key={index} className="flex items-center bg-white p-3 rounded-lg shadow">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                  <span className="text-gray-700 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-navy text-white rounded-xl p-8">
            <h4 className="text-2xl font-semibold mb-6">Personal Growth</h4>
            <div className="space-y-4 text-gray-200">
              <p>
                This journey transformed my understanding of entrepreneurship from 
                "building cool technology" to "solving real human problems."
              </p>
              <p>
                I learned that successful products require deep empathy, continuous learning, 
                and the courage to pivot when user feedback demands it.
              </p>
              <p className="text-gold font-medium">
                Most importantly, I discovered that meaningful innovation happens when you 
                combine personal experience with rigorous user research.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReflectionSection;
