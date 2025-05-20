
import React from 'react';
import { Check } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Install the extension",
      description: "Add to Chrome with one click. No account required to get started.",
      icon: "📦",
    },
    {
      id: 2,
      title: "Join any Google Meet",
      description: "We overlay on your existing meetings. No new software to learn.",
      icon: "🎯",
    },
    {
      id: 3,
      title: "Chat with your AI assistant live",
      description: "Ask questions about what was just discussed without interrupting.",
      icon: "🤖",
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="mb-4 gradient-text">How It Works</h2>
        <p className="text-xl mb-16 text-neutral-dark max-w-2xl mx-auto">
          Simple setup. Powerful results. No complicated onboarding process.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="bg-white rounded-xl p-6 shadow-lg border border-neutral-lightest hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-neutral">{step.description}</p>
              
              <div className="mt-6 flex justify-center">
                <div className="w-10 h-10 rounded-full bg-purple/10 flex items-center justify-center">
                  <Check className="text-purple" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <button className="bg-purple hover:bg-purple-dark text-white px-8 py-4 rounded-full text-lg font-medium transition-all transform hover:-translate-y-1 hover:shadow-lg">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
