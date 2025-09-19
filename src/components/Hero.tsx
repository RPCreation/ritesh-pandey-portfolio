import { ArrowRight, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/ritesh-profile.webp';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden hero-gradient floating-shapes">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-lg font-medium text-primary mb-2">Hello, I'm</h2>
              <h1 className="text-5xl lg:text-6xl font-bold text-black mb-4">
                Ritesh Pandey
              </h1>
              <h3 className="text-2xl lg:text-3xl font-semibold text-gradient-primary mb-6">
                Web Developer | Graphics Designer | Content Writer
              </h3>
              <p className="text-lg text-gray-medium leading-relaxed max-w-lg">
                Building modern websites and creative digital solutions that combine functionality with beautiful design. 
                Passionate about creating engaging user experiences and compelling content.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection('portfolio')}
                className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3 text-lg font-medium"
              >
                View Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 text-lg font-medium"
              >
                Contact Me
                <Mail className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-light/50">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">3+</p>
                <p className="text-sm text-gray-medium">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-accent">50+</p>
                <p className="text-sm text-gray-medium">Projects Completed</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-creative">100%</p>
                <p className="text-sm text-gray-medium">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-large">
                <img 
                  src={profileImage} 
                  alt="Ritesh Pandey - Web Developer and Designer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-creative rounded-full animate-bounce-slow shadow-medium"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent/20 rounded-lg rotate-12 animate-float"></div>
              <div className="absolute top-1/2 -left-8 w-8 h-8 bg-emphasis rounded-full animate-ping opacity-75"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;