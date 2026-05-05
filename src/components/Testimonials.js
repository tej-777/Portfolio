import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'Teja delivered our landing page in just 2 days. The quality and attention to detail exceeded our expectations.',
      initials: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Founder, FoodHub',
      content: 'Professional work with fast turnaround. Our restaurant website looks amazing and has already increased customer inquiries.',
      initials: 'MC'
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 scroll-animate">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What Clients Say
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Don't just take my word for it - here's what my clients have to say about working with me.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="scroll-animate bg-dark border-l-4 border-accent rounded-lg p-6 hover:border-accent/70 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start space-x-4">
                {/* Avatar */}
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-accent font-semibold text-sm">
                    {testimonial.initials}
                  </span>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="mb-2">
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
