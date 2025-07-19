import { Code, Database, Globe, Smartphone, Brain, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skillCategories = [
    {
      title: 'Languages & Tools',
      skills: ['C', 'Python', 'Java', 'JavaScript', 'HTML/CSS'],
      icon: Code
    },
    {
      title: 'Developer Tools', 
      skills: ['Git/GitHub', 'VS Code', 'Postman'],
      icon: Zap
    },
    {
      title: 'Frameworks & Backend',
      skills: ['Node.js', 'Express.js', 'REST API'],
      icon: Globe
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'MongoDB'],
      icon: Database
    },
    {
      title: 'Computer Science Concepts',
      skills: ['Data Structures (Basics)', 'OOPS Concepts', 'DBMS'],
      icon: Brain
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with 5+ years of experience building scalable web applications 
            and exploring the frontiers of artificial intelligence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Bio Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Crafting Digital Solutions
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a Software Engineer and Web Developer with a passion for creating efficient digital solutions. 
              My journey in technology is driven by continuous learning and problem-solving, currently 
              expanding my expertise in data science and modern web development.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I work with various programming languages and frameworks, focusing on building robust 
              applications while strengthening my foundation in computer science fundamentals and 
              exploring the exciting field of data science.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">30+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 bg-gradient-card rounded-full border-4 border-primary/20 flex items-center justify-center">
              <div className="text-6xl text-primary/50">👨‍💻</div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Skills & Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="scale-on-hover bg-gradient-card border-border/50 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                      <category.icon className="text-primary" size={24} />
                    </div>
                    <h4 className="font-semibold text-foreground">{category.title}</h4>
                  </div>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;