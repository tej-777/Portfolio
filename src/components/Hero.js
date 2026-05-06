import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-dark-secondary"></div>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-accent/5 animate-float"
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 6 + 's',
                animationDuration: Math.random() * 3 + 6 + 's',
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 animate-fade-in">
          I build conversion-focused<br />websites that grow businesses
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          AI-powered development · 5x faster delivery · Proven results for businesses
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-accent text-dark font-semibold rounded-lg hover:bg-accent/90 transition-all duration-200 transform hover:scale-105"
          >
            Hire Me
          </button>
          <a
            href="https://www.fiverr.com/sellers/tej__palepu/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-dark transition-all duration-200 transform hover:scale-105"
          >
            Hire Me on Fiverr
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
