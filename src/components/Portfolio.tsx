import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  const projects = [
    {
      title: "Virajai.com",
      description: "A comprehensive tools-based website providing various utilities and services for users. Built with modern web technologies focusing on user experience and functionality.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      status: "Live",
      year: "2021-Present",
      technologies: ["WordPress", "PHP", "JavaScript", "CSS"],
      features: [
        "User-friendly interface",
        "Multiple utility tools",
        "Responsive design",
        "Performance optimized"
      ],
      links: {
        live: "https://virajai.com",
        github: null
      },
      category: "Web Development"
    },
    {
      title: "Image Tool App Project",
      description: "An innovative image processing application currently in development. Features advanced image manipulation tools, filters, and optimization capabilities for web and mobile platforms.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
      status: "In Progress",
      year: "2024",
      technologies: ["React", "Node.js", "Canvas API", "Express.js"],
      features: [
        "Image filtering and effects",
        "Batch processing",
        "Format conversion",
        "Cloud storage integration"
      ],
      links: {
        live: null,
        github: null
      },
      category: "Web Application"
    },
    {
      title: "Brand Identity Design",
      description: "Complete brand identity package including logo design, color schemes, typography, and brand guidelines for various clients across different industries.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      status: "Completed",
      year: "2022-2023",
      technologies: ["Photoshop", "InDesign", "Illustrator", "Brand Strategy"],
      features: [
        "Logo design",
        "Brand guidelines",
        "Marketing materials",
        "Digital assets"
      ],
      links: {
        live: null,
        github: null
      },
      category: "Graphics Design"
    },
    {
      title: "Content Strategy Projects",
      description: "Comprehensive content writing and strategy services for various businesses, including website copy, blog posts, social media content, and technical documentation.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
      status: "Ongoing",
      year: "2021-Present",
      technologies: ["SEO", "Content Marketing", "Research", "Analytics"],
      features: [
        "SEO-optimized content",
        "Brand voice development",
        "Content calendar",
        "Performance tracking"
      ],
      links: {
        live: null,
        github: null
      },
      category: "Content Writing"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-500";
      case "In Progress":
        return "bg-yellow-500";
      case "Completed":
        return "bg-blue-500";
      case "Ongoing":
        return "bg-purple-500";
      default:
        return "bg-gray-500";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Web Development":
        return "bg-primary/10 text-primary";
      case "Web Application":
        return "bg-accent/10 text-accent";
      case "Graphics Design":
        return "bg-creative/10 text-creative-foreground";
      case "Content Writing":
        return "bg-emphasis/10 text-emphasis";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
              My <span className="text-gradient-primary">Portfolio</span>
            </h2>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              A showcase of my recent work and ongoing projects across web development, design, and content creation
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="project-card overflow-hidden border-none shadow-medium hover:shadow-large transition-all duration-500">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image w-full h-64 object-cover transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className={`${getStatusColor(project.status)} text-white border-0`}>
                      {project.status}
                    </Badge>
                    <Badge className={getCategoryColor(project.category)}>
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-8">
                  {/* Project Header */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-medium mb-2">
                      <Calendar size={16} />
                      {project.year}
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-3">{project.title}</h3>
                    <p className="text-gray-medium leading-relaxed">{project.description}</p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Tag size={16} className="text-primary" />
                      <span className="text-sm font-medium text-gray-dark">Technologies:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-dark mb-2">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-1 text-sm text-gray-medium">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.links.live && (
                      <Button 
                        onClick={() => window.open(project.links.live, '_blank')}
                        className="bg-primary hover:bg-primary-dark text-primary-foreground flex-1"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        View Live
                      </Button>
                    )}
                    {project.links.github && (
                      <Button 
                        onClick={() => window.open(project.links.github, '_blank')}
                        variant="outline"
                        className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground flex-1"
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                    )}
                    {!project.links.live && !project.links.github && (
                      <Button 
                        disabled
                        variant="outline"
                        className="flex-1"
                      >
                        {project.status === "In Progress" ? "Coming Soon" : "Private Project"}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-black mb-4">Interested in Working Together?</h3>
            <p className="text-lg text-gray-medium mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and create amazing digital experiences. 
              Let's discuss your project and bring your ideas to life.
            </p>
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-accent hover:bg-accent-dark text-accent-foreground px-8 py-3 text-lg"
            >
              Let's Talk About Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;