import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'React', image: '/assets/React-image.jpg' },
    { name: 'Tailwind CSS', image: '/assets/tailwind-image.jpg' },
    { name: 'JavaScript', image: '/assets/javascript-image.jpg' },
    { name: 'HTML5', image: '/assets/html-image.jpg' },
    { name: 'CSS3', image: '/assets/css-image.jpg' },
    { name: 'Node.js', image: '/assets/rest.jpg' }
  ];

  const aiTools = [
    { name: 'Bolt.new', image: '/assets/bolt.jpg' },
    { name: 'Lovable', image: '/assets/lovable.jpg' },
    { name: 'Cursor', image: '/assets/cursor.jpg' },
    { name: 'Windsurf', image: '/assets/windsurf.webp' }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 scroll-animate">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My Skills
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Technical expertise and AI-powered development tools I use to deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Technical Skills */}
          <div className="scroll-animate">
            <div className="bg-dark border border-dark-tertiary rounded-xl p-6 hover:border-accent/50 transition-all duration-300 h-full">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <svg className="w-6 h-6 text-accent mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-dark border border-dark-secondary rounded-xl p-6 text-center hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-accent/10"
                  >
                    <div className="w-full h-24 flex items-center justify-center overflow-hidden rounded-lg">
                      <img 
                        src={skill.image} 
                        alt={skill.name}
                        className="w-full h-full object-cover transition-all duration-300 ease-in-out hover:scale-110"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI Tools */}
          <div className="scroll-animate" style={{ animationDelay: '0.2s' }}>
            <div className="bg-dark border border-dark-tertiary rounded-xl p-6 hover:border-accent/50 transition-all duration-300 h-full">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <svg className="w-6 h-6 text-accent mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                AI Development Tools
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {aiTools.map((tool, index) => (
                  <div
                    key={index}
                    className="bg-dark border border-dark-secondary rounded-xl p-6 text-center hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-accent/10"
                  >
                    <div className="w-full h-24 flex items-center justify-center overflow-hidden rounded-lg">
                      <img 
                        src={tool.image} 
                        alt={tool.name}
                        className="w-full h-full object-cover transition-all duration-300 ease-in-out hover:scale-110"
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-accent/5 border border-accent/20 rounded-lg">
                <p className="text-sm text-gray-300">
                  <span className="font-semibold text-accent">AI-Powered Development:</span> Using cutting-edge tools to deliver projects 5x faster than traditional development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center scroll-animate" style={{ animationDelay: '0.4s' }}>
          <div className="bg-dark border border-dark-tertiary rounded-xl p-6 max-w-2xl mx-auto">
            <h4 className="text-lg font-semibold text-white mb-3">Why Choose Me?</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Lightning Fast Delivery</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Modern Tech Stack</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>Client-Focused</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
