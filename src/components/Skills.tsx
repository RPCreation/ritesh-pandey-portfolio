import { 
  Code, 
  Palette, 
  PenTool, 
  FileText, 
  Database,
  Smartphone,
  Globe,
  Server,
  Image,
  Users,
  Monitor,
  Edit3
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      icon: <Code size={32} />,
      color: "primary",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 92 },
        { name: "JavaScript", level: 88 },
        { name: "Node.js", level: 82 },
        { name: "Python", level: 78 },
        { name: "PHP", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Express.js", level: 82 }
      ]
    },
    {
      title: "CMS & Hosting",
      icon: <Server size={32} />,
      color: "accent",
      skills: [
        { name: "WordPress", level: 95 },
        { name: "cPanel", level: 88 },
        { name: "Domain Management", level: 85 },
        { name: "Web Hosting", level: 87 }
      ]
    },
    {
      title: "Design & Creative",
      icon: <Palette size={32} />,
      color: "creative",
      skills: [
        { name: "Photoshop", level: 90 },
        { name: "InDesign", level: 85 },
        { name: "UI/UX Design", level: 82 },
        { name: "Brand Identity", level: 78 }
      ]
    },
    {
      title: "Content & Office",
      icon: <FileText size={32} />,
      color: "emphasis",
      skills: [
        { name: "Content Writing", level: 95 },
        { name: "MS Word", level: 92 },
        { name: "MS Excel", level: 88 },
        { name: "MS PowerPoint", level: 90 },
        { name: "Social Media Management", level: 85 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: {
        bg: "bg-primary/10",
        text: "text-primary",
        border: "border-primary",
        progress: "bg-primary"
      },
      accent: {
        bg: "bg-accent/10",
        text: "text-accent",
        border: "border-accent",
        progress: "bg-accent"
      },
      creative: {
        bg: "bg-creative/10",
        text: "text-creative-foreground",
        border: "border-creative",
        progress: "bg-creative"
      },
      emphasis: {
        bg: "bg-emphasis/10",
        text: "text-emphasis",
        border: "border-emphasis",
        progress: "bg-emphasis"
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
              My <span className="text-gradient-primary">Skills</span>
            </h2>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              A comprehensive toolkit for creating exceptional digital experiences
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const colors = getColorClasses(category.color);
              return (
                <Card 
                  key={index} 
                  className={`skill-card border-2 ${colors.border} hover:shadow-creative`}
                >
                  <CardContent className="p-8">
                    {/* Category Header */}
                    <div className="flex items-center mb-6">
                      <div className={`p-3 rounded-lg ${colors.bg} ${colors.text} mr-4`}>
                        {category.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-black">{category.title}</h3>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-dark">{skill.name}</span>
                            <span className={`font-semibold ${colors.text}`}>{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-light rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${colors.progress} transition-all duration-1000 ease-out`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Skills Icons */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-black mb-8">Technologies & Tools</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: <Globe size={24} />, name: "Web Technologies" },
                { icon: <Smartphone size={24} />, name: "Responsive Design" },
                { icon: <Database size={24} />, name: "Database Management" },
                { icon: <Monitor size={24} />, name: "Cross-Platform" },
                { icon: <Image size={24} />, name: "Image Optimization" },
                { icon: <Users size={24} />, name: "Team Collaboration" },
                { icon: <PenTool size={24} />, name: "Creative Tools" },
                { icon: <Edit3 size={24} />, name: "Content Creation" }
              ].map((tool, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center p-4 bg-white rounded-lg shadow-soft hover:shadow-medium transition-shadow skill-card"
                >
                  <div className="text-primary mb-2">{tool.icon}</div>
                  <span className="text-sm text-gray-medium text-center">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;