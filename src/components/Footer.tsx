import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Web Development',
    'Graphics Design',
    'Content Writing',
    'Data Entry',
    'WordPress Development'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white relative">
      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary hover:bg-primary-dark text-primary-foreground rounded-full w-12 h-12 p-0 shadow-large"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </Button>

      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gradient-primary mb-4">Ritesh Pandey</h3>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Web Developer, Graphics Designer, and Content Writer passionate about creating 
              digital experiences that make a difference. Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">
                Available for Projects
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm">
                Remote Work
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-primary transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <p className="text-gray-300 text-sm">
                © {currentYear} Ritesh Pandey. Made with
              </p>
              <Heart size={16} className="text-red-500 fill-current" />
              <p className="text-gray-300 text-sm">
                All rights reserved.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex items-center space-x-6 text-sm text-gray-300">
              <a 
                href="mailto:rpandey.pro@gmail.com"
                className="hover:text-primary transition-colors"
              >
                rpandey.pro@gmail.com
              </a>
              <span>•</span>
              <span>Available Worldwide</span>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400">
            Building digital solutions since 2021 • Trusted by clients worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;