
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-4 bg-gradient-to-br from-neutral-dark to-neutral-dark/95 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-gradient-primary">MindPing</h3>
            <p className="text-neutral-light mb-4 max-w-md">
              Your AI assistant for client meetings. Never forget what was discussed again.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-lightest hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="#" className="text-neutral-lightest hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-neutral-lightest hover:text-primary transition-colors">
                Instagram
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#value-props" className="text-neutral-lightest hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="text-neutral-lightest hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="text-neutral-lightest hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-neutral-lightest hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-lightest hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="text-neutral-lightest hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-neutral-lightest hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="text-neutral-lightest hover:text-primary transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral/30 mt-10 pt-6 text-center text-neutral-light text-sm">
          <p>&copy; {currentYear} MindPing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
