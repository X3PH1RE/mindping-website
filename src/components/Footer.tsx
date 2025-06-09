
import React from 'react';
import { Briefcase } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-4 bg-gradient-to-br from-amber-800 to-amber-900 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-amber-300">MindPing</span>
            </h3>
            <p className="text-amber-100/80 mb-4 max-w-md">
              Your AI assistant for client meetings. Never forget what was discussed again.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-100 hover:text-amber-300 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-amber-100 hover:text-amber-300 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-amber-100 hover:text-amber-300 transition-colors">
                Instagram
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-amber-300">Product</h4>
            <ul className="space-y-2">
              <li><a href="#value-props" className="text-amber-100 hover:text-amber-300 transition-colors">Features</a></li>
              <li><a href="#" className="text-amber-100 hover:text-amber-300 transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="text-amber-100 hover:text-amber-300 transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-amber-100 hover:text-amber-300 transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-amber-300">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-amber-100 hover:text-amber-300 transition-colors">About</a></li>
              <li><a href="#" className="text-amber-100 hover:text-amber-300 transition-colors">Blog</a></li>
              <li><a href="#" className="text-amber-100 hover:text-amber-300 transition-colors">Privacy</a></li>
              <li><a href="#" className="text-amber-100 hover:text-amber-300 transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-amber-700/30 mt-10 pt-6 text-center text-amber-300/70 text-sm">
          <p>&copy; {currentYear} MindPing. All rights reserved.</p>
          <p>Made with 🧠 at <span className="font-bold">SaaSkool</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
