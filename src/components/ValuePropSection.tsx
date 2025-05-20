
import { Check } from 'lucide-react';
import React from 'react';

const ValuePropSection: React.FC = () => {
  const painPoints = [
    {
      id: 1,
      text: "Forgetting what was said during long client meetings",
    },
    {
      id: 2,
      text: "Struggling to take notes while staying engaged in conversation",
    },
    {
      id: 3,
      text: "Missing important action items buried in hour-long discussions",
    },
    {
      id: 4,
      text: "Spending hours rewatching meeting recordings to find key details",
    },
    {
      id: 5,
      text: "Being forced to ask clients to repeat themselves",
    }
  ];

  return (
    <section className="py-20 px-4 bg-neutral-lightest relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center gradient-text mb-16">
          Built for freelancers who don't have time to repeat themselves.
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-purple-dark">What we solve for you</h3>
            
            <ul className="space-y-4">
              {painPoints.map((point) => (
                <li key={point.id} className="flex items-start">
                  <div className="mr-4 bg-purple/10 p-1 rounded-full mt-1">
                    <Check size={16} className="text-purple" />
                  </div>
                  <span className="text-neutral-dark">{point.text}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <div className="bg-gradient-to-br from-purple/80 to-purple-dark p-1 rounded-2xl shadow-xl">
              <div className="bg-white rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-6 text-purple-dark">What you get</h3>
                
                <div className="space-y-6">
                  <div className="bg-neutral-lightest p-4 rounded-lg">
                    <h4 className="font-medium text-lg mb-2">Real-time transcription</h4>
                    <p className="text-neutral">Follow along with accurate voice-to-text as your meeting progresses</p>
                  </div>
                  
                  <div className="bg-neutral-lightest p-4 rounded-lg">
                    <h4 className="font-medium text-lg mb-2">Live AI assistant</h4>
                    <p className="text-neutral">Ask questions about what was just discussed without disrupting the flow</p>
                  </div>
                  
                  <div className="bg-neutral-lightest p-4 rounded-lg">
                    <h4 className="font-medium text-lg mb-2">Smart follow-ups</h4>
                    <p className="text-neutral">Automatically track action items and send recap emails</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropSection;
