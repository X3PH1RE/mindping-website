
import React from 'react';
import { Check, DollarSign, Calendar, Clock } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Install the extension",
      description: "Add to Chrome with one click. No account required to get started.",
      icon: "📦",
      benefit: "Save 2 minutes",
    },
    {
      id: 2,
      title: "Join any Online Meet",
      description: "We overlay on your existing meetings. No new software to learn.",
      icon: "🎯",
      benefit: "No learning curve",
    },
    {
      id: 3,
      title: "Chat with your AI assistant live",
      description: "Ask questions about what was just discussed without interrupting.",
      icon: "🤖",
      benefit: "Close more deals",
    }
  ];

  const freelanceBenefits = [
    {
      icon: <Clock />,
      title: "Save 5+ hours/week",
      description: "Stop rewatching meetings or searching through notes"
    },
    {
      icon: <DollarSign />,
      title: "Increase revenue",
      description: "Never miss an opportunity because you forgot a detail"
    },
    {
      icon: <Calendar />,
      title: "Take on more clients",
      description: "Handle more meetings with confidence and clarity"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="mb-4 text-amber-800">How It Works</h2>
        <p className="text-xl mb-16 text-neutral-dark max-w-2xl mx-auto">
          Simple setup. Powerful results. No complicated onboarding process.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="bg-white rounded-xl p-8 shadow-lg border border-amber-100 hover:shadow-xl transition-all card-3d relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-amber-100 px-3 py-1 rounded-bl-lg text-sm text-amber-700 font-medium">
                {step.benefit}
              </div>
              <div className="text-4xl mb-6">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-neutral mb-6">{step.description}</p>
              
              <div className="mt-auto flex justify-center">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                  <Check className="text-amber-600" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 pt-10 border-t border-amber-100">
          <h3 className="text-2xl font-semibold mb-10 text-amber-800">
            MindPing pays for itself
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {freelanceBenefits.map((benefit, idx) => (
              <div key={idx} className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl shadow-md transform transition-all hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto bg-amber-500 text-white rounded-full flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h4 className="font-semibold text-lg mb-2">{benefit.title}</h4>
                <p className="text-neutral-dark">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16">
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all transform hover:-translate-y-1 hover:shadow-lg">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
