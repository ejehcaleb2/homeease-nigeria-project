
import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Project Info */}
          <div>
            <h3 className="text-2xl font-bold text-gold mb-4">HomeEase</h3>
            <p className="text-gray-300 mb-4">
              Making rent fair in Nigeria through technology, transparency, and trust.
            </p>
            <p className="text-sm text-gray-400">
              Academic Entrepreneurship Project | 2024
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              <a href="mailto:caleb.ejeh@example.com" className="flex items-center text-gray-300 hover:text-gold transition-colors">
                <Mail className="h-5 w-5 mr-2" />
                caleb.ejeh@example.com
              </a>
              <a href="#" className="flex items-center text-gray-300 hover:text-gold transition-colors">
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn Profile
              </a>
              <a href="#" className="flex items-center text-gray-300 hover:text-gold transition-colors">
                <Github className="h-5 w-5 mr-2" />
                GitHub Profile
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Project Sections</h4>
            <div className="space-y-2">
              <a href="#journey" className="block text-gray-300 hover:text-gold transition-colors">Journey</a>
              <a href="#solution" className="block text-gray-300 hover:text-gold transition-colors">Solution</a>
              <a href="#prototype" className="block text-gray-300 hover:text-gold transition-colors">Prototype</a>
              <a href="#reflection" className="block text-gray-300 hover:text-gold transition-colors">Reflection</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Caleb Ejeh. This project was created for academic purposes as part of an entrepreneurship program.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
