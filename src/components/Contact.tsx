import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Facebook, Youtube, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/riteshpandeyin",
      icon: <Linkedin size={24} />,
      color: "text-blue-600 hover:text-blue-700"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/riteshpandeyin",
      icon: <Instagram size={24} />,
      color: "text-pink-600 hover:text-pink-700"
    },
    {
      name: "Facebook",
      url: "https://facebook.com/riteshpandeyin",
      icon: <Facebook size={24} />,
      color: "text-blue-500 hover:text-blue-600"
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/riteshpandeyin",
      icon: <Twitter size={24} />,
      color: "text-gray-800 hover:text-black"
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@riteshpandeyin",
      icon: <Youtube size={24} />,
      color: "text-red-600 hover:text-red-700"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
              Get In <span className="text-gradient-primary">Touch</span>
            </h2>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              Ready to start your next project? Let's work together to create something amazing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-none shadow-medium">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-6">Send me a message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-dark mb-2">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full border-gray-light focus:border-primary focus:ring-primary"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-dark mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          className="w-full border-gray-light focus:border-primary focus:ring-primary"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-dark mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        className="w-full border-gray-light focus:border-primary focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-dark mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        rows={6}
                        className="w-full border-gray-light focus:border-primary focus:ring-primary resize-none"
                        required
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-dark text-primary-foreground py-3 text-lg font-medium"
                    >
                      <Send size={20} className="mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="border-none shadow-medium">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Mail className="text-primary" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-dark">Email</h4>
                        <a 
                          href="mailto:rpandey.pro@gmail.com"
                          className="text-primary hover:text-primary-dark transition-colors"
                        >
                          rpandey.pro@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                        <MapPin className="text-accent" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-dark">Location</h4>
                        <p className="text-gray-medium">Available for remote work worldwide</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-creative/10 rounded-lg flex items-center justify-center">
                        <Phone className="text-creative" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-dark">Response Time</h4>
                        <p className="text-gray-medium">Usually within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-none shadow-medium">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-6">Follow Me</h3>
                  
                  <div className="space-y-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className={`${social.color} transition-colors`}>
                          {social.icon}
                        </div>
                        <span className="font-medium text-gray-dark group-hover:text-black transition-colors">
                          {social.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card className="border-none shadow-medium bg-gradient-subtle">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold text-black mb-4">Let's Create Something Amazing</h3>
                  <p className="text-gray-medium mb-6">
                    I'm always excited to work on new projects and help bring creative ideas to life. 
                    Whether it's a website, design project, or content creation, let's make it happen together.
                  </p>
                  <div className="flex justify-center space-x-4 text-sm text-gray-medium">
                    <span>📧 Quick Response</span>
                    <span>🎯 Quality Focus</span>
                    <span>⚡ Fast Delivery</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;