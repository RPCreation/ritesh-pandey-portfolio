import { GraduationCap, Briefcase, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
              About <span className="text-gradient-primary">Me</span>
            </h2>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              Passionate about creating digital experiences that make a difference
            </p>
          </div>

          {/* Bio Section */}
          <div className="mb-16">
            <Card className="p-8 border-none shadow-medium">
              <CardContent className="p-0">
                <p className="text-lg text-gray-dark leading-relaxed mb-6">
                  I'm <span className="font-semibold text-primary">Ritesh Pandey</span>, a dedicated web developer, 
                  graphics designer, content writer, and data entry specialist with a passion for creating 
                  innovative digital solutions. My journey in technology began with a curiosity about how 
                  websites work and has evolved into a comprehensive skill set that spans multiple disciplines.
                </p>
                <p className="text-lg text-gray-dark leading-relaxed">
                  I believe in the power of combining technical expertise with creative vision to deliver 
                  exceptional results that not only meet client requirements but exceed expectations. 
                  Every project is an opportunity to push boundaries and create something meaningful.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Education & Experience Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                <GraduationCap className="mr-3 text-primary" size={28} />
                Education
              </h3>
              <div className="space-y-4">
                <Card className="p-6 border-l-4 border-l-primary hover:shadow-medium transition-shadow">
                  <CardContent className="p-0">
                    <h4 className="font-semibold text-lg text-black">Master's Degree</h4>
                    <p className="text-primary font-medium">2023</p>
                    <p className="text-gray-medium">Advanced studies in technology and design</p>
                  </CardContent>
                </Card>
                
                <Card className="p-6 border-l-4 border-l-accent hover:shadow-medium transition-shadow">
                  <CardContent className="p-0">
                    <h4 className="font-semibold text-lg text-black">Bachelor's Degree</h4>
                    <p className="text-accent font-medium">2021</p>
                    <p className="text-gray-medium">Foundation in computer science and applications</p>
                  </CardContent>
                </Card>
                
                <Card className="p-6 border-l-4 border-l-creative hover:shadow-medium transition-shadow">
                  <CardContent className="p-0">
                    <h4 className="font-semibold text-lg text-black">Advanced Diploma in Computer Application</h4>
                    <p className="text-creative font-medium">2019</p>
                    <p className="text-gray-medium">Specialized training in software applications</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                <Briefcase className="mr-3 text-accent" size={28} />
                Experience
              </h3>
              <div className="space-y-4">
                <Card className="p-6 border-l-4 border-l-accent hover:shadow-creative transition-all skill-card">
                  <CardContent className="p-0">
                    <h4 className="font-semibold text-lg text-black">Web Developer</h4>
                    <p className="text-accent font-medium mb-2">Virajai Project, WordPress • 2021 - Present</p>
                    <p className="text-gray-medium mb-3">
                      Developing and maintaining tools-based website solutions, focusing on user experience 
                      and performance optimization.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">WordPress</span>
                      <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Web Development</span>
                      <span className="px-3 py-1 bg-creative/10 text-creative-foreground text-sm rounded-full">UI/UX</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Skills Highlight */}
                <Card className="p-6 bg-gradient-subtle">
                  <CardContent className="p-0">
                    <h4 className="font-semibold text-lg text-black mb-3 flex items-center">
                      <Award className="mr-2 text-emphasis" size={20} />
                      Core Expertise
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <span className="text-gray-dark">• Web Development</span>
                      <span className="text-gray-dark">• Graphics Design</span>
                      <span className="text-gray-dark">• Content Writing</span>
                      <span className="text-gray-dark">• Data Entry</span>
                      <span className="text-gray-dark">• WordPress</span>
                      <span className="text-gray-dark">• Social Media</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;