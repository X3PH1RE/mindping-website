
import React from 'react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "This tool saved me from rewatching 2-hour meetings.",
      author: "Alex Morgan",
      role: "UX Designer & Consultant"
    },
    {
      id: 2,
      quote: "I closed more deals just because my follow-ups were faster.",
      author: "Jamie Chen",
      role: "Freelance Marketing Strategist"
    },
    {
      id: 3,
      quote: "Being able to ask questions about what a client just said without interrupting them is a game-changer.",
      author: "Sam Wilson",
      role: "Independent Web Developer"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple/10 to-purple-light/30">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="mb-16 gradient-text">What Freelancers Say</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-xl p-6 shadow-lg relative before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-gradient-to-r before:from-purple before:to-purple-light before:rounded-t-xl"
            >
              <div className="text-5xl text-neutral-light mb-4">"</div>
              <p className="text-lg mb-6 text-neutral-dark">{testimonial.quote}</p>
              <div className="mt-auto">
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-neutral text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
