
import React from 'react';
import { User, Briefcase } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  business?: string;
  impact?: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "This tool saved me from rewatching 2-hour meetings. I capture every detail from client briefs now.",
      author: "Alex Morgan",
      role: "UX Designer & Consultant",
      business: "Design Studio",
      impact: "+30% more projects taken"
    },
    {
      id: 2,
      quote: "I closed more deals just because my follow-ups were faster. Clients are impressed by how detailed I am.",
      author: "Jamie Chen",
      role: "Freelance Marketing Strategist",
      business: "Digital Marketing",
      impact: "+25% conversion rate"
    },
    {
      id: 3,
      quote: "Being able to ask questions about what a client just said without interrupting them is a game-changer.",
      author: "Sam Wilson",
      role: "Independent Web Developer",
      business: "Webdev Solutions",
      impact: "4 new retainer clients"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="mb-6 text-amber-800">What Freelancers Say</h2>
        <p className="text-lg mb-16 max-w-2xl mx-auto text-neutral-dark">
          See how MindPing is helping freelancers grow their business
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-xl p-6 shadow-lg relative card-3d before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-gradient-to-r before:from-amber-400 before:to-orange-400 before:rounded-t-xl"
            >
              <div className="text-5xl text-amber-200 mb-4">"</div>
              <p className="text-lg mb-6 text-neutral-dark">{testimonial.quote}</p>
              
              {testimonial.impact && (
                <div className="mb-6 px-4 py-2 bg-amber-50 rounded-lg text-amber-700 font-medium">
                  Result: {testimonial.impact}
                </div>
              )}
              
              <div className="mt-auto">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <User className="text-amber-700" size={24} />
                  </div>
                </div>
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-neutral text-sm">{testimonial.role}</p>
                {testimonial.business && (
                  <div className="mt-2 flex items-center justify-center text-xs text-amber-700">
                    <Briefcase size={14} className="mr-1" /> {testimonial.business}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
