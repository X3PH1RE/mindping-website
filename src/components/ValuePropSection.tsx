
import { Check, Clock, DollarSign, Calendar, MessageSquare, Briefcase } from 'lucide-react';
import React from 'react';

const ValuePropSection: React.FC = () => {
  const painPoints = [
    {
      id: 1,
      text: "Forgetting what was said during long client meetings",
      icon: <Clock size={20} />
    },
    {
      id: 2,
      text: "Struggling to take notes while staying engaged in conversation",
      icon: <MessageSquare size={20} />
    },
    {
      id: 3,
      text: "Missing important action items buried in hour-long discussions",
      icon: <Calendar size={20} />
    },
    {
      id: 4,
      text: "Spending hours rewatching meeting recordings to find key details",
      icon: <Briefcase size={20} />
    },
    {
      id: 5,
      text: "Losing potential revenue when details fall through the cracks",
      icon: <DollarSign size={20} />
    }
  ];

  const benefits = [
    {
      title: "Real-time transcription",
      description: "Follow along with accurate voice-to-text as your meeting progresses",
      emoji: "📝"
    },
    {
      title: "Live AI assistant",
      description: "Ask questions about what was just discussed without disrupting the flow",
      emoji: "🤖"
    },
    {
      title: "Smart follow-ups",
      description: "Automatically track action items and send recap emails",
      emoji: "✅"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50 relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-amber-800 mb-4">
          Built for freelancers who don't have time to repeat themselves
        </h2>
        <p className="text-center text-lg mb-16 max-w-2xl mx-auto text-neutral-dark">
          Focus on growing your business, not on remembering every detail
        </p>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="rounded-2xl bg-white p-8 shadow-lg transform transition-transform hover:-translate-y-2 hover:shadow-xl card-3d border border-amber-100">
            <h3 className="text-xl font-semibold mb-6 text-amber-700 flex items-center">
              <Briefcase className="mr-2" /> What we solve for freelancers!
            </h3>
            
            <ul className="space-y-4">
              {painPoints.map((point) => (
                <li key={point.id} className="flex items-start group">
                  <div className="mr-4 bg-amber-100 p-1.5 rounded-full mt-1 group-hover:bg-amber-200 transition-colors">
                    {point.icon}
                  </div>
                  <span className="text-neutral-dark">{point.text}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <div className="bg-gradient-to-br from-amber-400/70 to-orange-500/70 p-1 rounded-2xl shadow-xl">
              <div className="bg-white rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-6 text-amber-700">Your freelance toolkit</h3>
                
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="bg-amber-50 p-4 rounded-lg transform transition-all hover:-translate-y-1 hover:shadow-md">
                      <h4 className="font-medium text-lg mb-2 flex items-center">
                        <span className="text-2xl mr-2">{benefit.emoji}</span> 
                        {benefit.title}
                      </h4>
                      <p className="text-neutral">{benefit.description}</p>
                    </div>
                  ))}
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
