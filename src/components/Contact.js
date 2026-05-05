import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form is not functional - just UI
    console.log('Form submitted:', formData);
    alert('Thank you for your message! This is a demo form - in production, this would send an email.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactLinks = [
    {
      name: 'Fiverr',
      url: 'https://www.fiverr.com/sellers/tej__palepu/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      )
    },
    {
      name: 'Email',
      url: 'mailto:tejpalepu777@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 scroll-animate">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's talk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Form */}
          <div className="scroll-animate">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-secondary border border-dark-tertiary rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors duration-200"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-secondary border border-dark-tertiary rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors duration-200"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-dark-secondary border border-dark-tertiary rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-dark font-semibold py-3 rounded-lg hover:bg-accent/90 transition-colors duration-200 transform hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Direct Links */}
          <div className="scroll-animate" style={{ animationDelay: '0.2s' }}>
            <div className="bg-dark-secondary border border-dark-tertiary rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-6">
                Connect Directly
              </h3>
              
              <div className="space-y-4">
                {contactLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 bg-dark border border-dark-tertiary rounded-lg hover:border-accent/50 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors duration-200">
                      {link.icon}
                    </div>
                    <div>
                      <p className="text-white font-medium">{link.name}</p>
                      <p className="text-gray-400 text-sm">
                        {link.name === 'Email' ? 'tejpalepu777@gmail.com' : 'Get in touch'}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 p-4 bg-accent/5 border border-accent/20 rounded-lg">
                <p className="text-sm text-gray-300">
                  <span className="font-semibold text-accent">Fast Response:</span> I typically respond within 24 hours for all inquiries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
