import { 
  Globe, 
  Palette, 
  PenTool, 
  Database,
  Smartphone,
  Search,
  Users,
  Zap
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: <Globe size={40} />,
      title: "Web Design & Development",
      description: "We create beautiful, user-friendly, and responsive web designs that work perfectly across all devices and browsers.",
      features: [
        "Custom Website Design",
        "Responsive Development",
        "WordPress Solutions",
        "E-commerce Integration"
      ],
      color: "primary"
    },
    {
      icon: <Palette size={40} />,
      title: "Graphics Design",
      description: "Professional visual content that captures your brand essence and communicates your message effectively to your audience.",
      features: [
        "Brand Identity Design",
        "Print & Digital Graphics",
        "Social Media Assets",
        "Marketing Materials"
      ],
      color: "accent"
    },
    {
      icon: <PenTool size={40} />,
      title: "Content Writing",
      description: "Engaging, SEO-optimized content that tells your story and drives meaningful connections with your target audience.",
      features: [
        "Website Copy",
        "Blog Writing",
        "Social Media Content",
        "Technical Documentation"
      ],
      color: "creative"
    },
    {
      icon: <Database size={40} />,
      title: "Data Entry & Management",
      description: "Accurate and efficient data processing services to help organize and maintain your business information systems.",
      features: [
        "Data Entry Services",
        "Database Management",
        "Document Processing",
        "Quality Assurance"
      ],
      color: "emphasis"
    }
  ];

  const additionalServices = [
    {
      icon: <Smartphone size={24} />,
      title: "Mobile Optimization",
      description: "Ensuring your website looks perfect on all devices"
    },
    {
      icon: <Search size={24} />,
      title: "SEO Optimization",
      description: "Improving your website's search engine visibility"
    },
    {
      icon: <Users size={24} />,
      title: "Social Media Management",
      description: "Building and maintaining your online presence"
    },
    {
      icon: <Zap size={24} />,
      title: "Performance Optimization",
      description: "Making your website faster and more efficient"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: {
        bg: "bg-primary/10",
        text: "text-primary",
        border: "border-primary/20",
        icon: "text-primary"
      },
      accent: {
        bg: "bg-accent/10",
        text: "text-accent",
        border: "border-accent/20",
        icon: "text-accent"
      },
      creative: {
        bg: "bg-creative/10",
        text: "text-creative-foreground",
        border: "border-creative/20",
        icon: "text-creative"
      },
      emphasis: {
        bg: "bg-emphasis/10",
        text: "text-emphasis",
        border: "border-emphasis/20",
        icon: "text-emphasis"
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
              My <span className="text-gradient-primary">Services</span>
            </h2>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to bring your vision to life
            </p>
          </div>

          {/* Main Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color);
              return (
                <Card 
                  key={index}
                  className={`service-card hover:shadow-creative transition-all duration-300 border-2 ${colors.border} group`}
                >
                  <CardContent className="p-8">
                    {/* Service Icon */}
                    <div className={`inline-flex p-4 rounded-lg ${colors.bg} ${colors.icon} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>

                    {/* Service Content */}
                    <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
                    <p className="text-gray-medium mb-6 leading-relaxed">{service.description}</p>

                    {/* Features List */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-dark">
                          <div className={`w-2 h-2 rounded-full ${colors.bg} ${colors.text} mr-3 flex-shrink-0`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button 
                      onClick={scrollToContact}
                      variant="outline"
                      className={`w-full border-2 ${colors.text} hover:bg-current hover:text-white transition-colors`}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Services */}
          <div>
            <h3 className="text-2xl font-bold text-center text-black mb-8">Additional Expertise</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-medium transition-shadow skill-card">
                  <CardContent className="p-0">
                    <div className="text-primary mb-4 flex justify-center">{service.icon}</div>
                    <h4 className="font-semibold text-black mb-2">{service.title}</h4>
                    <p className="text-sm text-gray-medium">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-subtle rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-black mb-4">Ready to Start Your Project?</h3>
            <p className="text-lg text-gray-medium mb-6 max-w-2xl mx-auto">
              Let's work together to create something amazing. I'm here to help bring your ideas to life 
              with professional quality and attention to detail.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3"
              >
                Start a Project
              </Button>
              <Button 
                onClick={() => window.open('mailto:rpandey.pro@gmail.com')}
                variant="outline"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3"
              >
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;