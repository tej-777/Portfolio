import React, { useState } from 'react';

const Navbar = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark/90 backdrop-blur-md border-b border-dark-secondary' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-white">TEJA PALEPU</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Contact
            </button>
            <a
              href="https://www.fiverr.com/sellers/tej__palepu/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-accent text-accent px-4 py-2 rounded-lg hover:bg-accent hover:text-dark transition-all duration-200"
            >
              Hire me on Fiverr
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-dark/95 backdrop-blur-md border-t border-dark-secondary">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-dark-secondary rounded-md transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-dark-secondary rounded-md transition-colors duration-200"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-dark-secondary rounded-md transition-colors duration-200"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-dark-secondary rounded-md transition-colors duration-200"
              >
                Contact
              </button>
              <a
                href="https://www.fiverr.com/sellers/tej__palepu/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center border border-accent text-accent px-4 py-2 rounded-lg hover:bg-accent hover:text-dark transition-all duration-200 mt-4"
              >
                Hire me on Fiverr
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
