import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'Trefix',
      description: 'Hospital multi-page website with services, doctors and appointment booking.',
      tags: ['Chatgpt', 'PostgreSQL', 'Windsurf'],
      image: 'restaurant'
    },
    {
      name: 'Pixel Perfect Studio',
      description: 'Photography portfolio landing page with gallery and booking CTA.',
      tags: ['React', 'Tailwind', 'Vercel'],
      image: 'photography'
    },
    {
      name: 'CoachPro',
      description: 'Online coaching landing page with pricing, testimonials and signup form.',
      tags: ['Cursor', 'React', 'Vercel'],
      image: 'coaching'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 scroll-animate">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What I've Built
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects showcasing modern web development with AI-powered tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="scroll-animate bg-dark border border-dark-tertiary rounded-xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Thumbnail */}
              <div className="h-48 bg-gradient-to-br from-accent/20 to-dark-tertiary flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm">Project Preview</p>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-accent/10 text-accent px-2 py-1 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                {project.name === 'RestoBite' ? (
                  <a 
                    href="https://trefix.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-accent text-dark font-medium py-2 rounded-lg hover:bg-accent/90 transition-colors duration-200 text-center"
                  >
                    Live Preview
                  </a>
                ) : project.name === 'Pixel Perfect Studio' ? (
                  <a 
                    href="https://dilshad-fotography.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-accent text-dark font-medium py-2 rounded-lg hover:bg-accent/90 transition-colors duration-200 text-center"
                  >
                    Live Preview
                  </a>
                ) : (
                  <button className="w-full bg-accent text-dark font-medium py-2 rounded-lg hover:bg-accent/90 transition-colors duration-200">
                    Live Preview
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
