import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 scroll-animate">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="scroll-animate">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a Computer Engineering student based in Hyderabad who builds stunning, high-converting websites using the latest AI-assisted development tools. I deliver in 2–3 days, not weeks.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              My approach combines cutting-edge AI tools like Bolt.new, Lovable, Cursor, and Windsurf with modern web development practices to create fast, beautiful, and effective landing pages that drive results for businesses.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Whether you need a landing page for your startup, a business website, or a complete web application, I bring the perfect blend of technical expertise and creative design to deliver exceptional results quickly and efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
