import { Code, Database, Globe, Smartphone, Brain, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    { icon: Code, name: 'Frontend Development', level: 95, description: 'React, TypeScript, Next.js' },
    { icon: Database, name: 'Backend Development', level: 88, description: 'Node.js, Python, PostgreSQL' },
    { icon: Globe, name: 'Web Technologies', level: 92, description: 'REST APIs, GraphQL, WebSockets' },
    { icon: Smartphone, name: 'Mobile Development', level: 78, description: 'React Native, Flutter' },
    { icon: Brain, name: 'AI & Machine Learning', level: 85, description: 'TensorFlow, PyTorch, OpenAI' },
    { icon: Zap, name: 'DevOps & Cloud', level: 80, description: 'AWS, Docker, Kubernetes' },
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
              I'm a Full Stack Developer with a passion for creating exceptional digital experiences. 
              My journey in tech started with curiosity about how things work, and it has evolved into 
              a career focused on building scalable, user-centric applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently, I specialize in modern web technologies like React, Node.js, and TypeScript, 
              while also exploring the exciting world of AI and machine learning. I believe in 
              continuous learning and staying ahead of technology trends.
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
            {skills.map((skill, index) => (
              <Card 
                key={index} 
                className="scale-on-hover bg-gradient-card border-border/50 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                      <skill.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{skill.name}</h4>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="h-2 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-sm text-muted-foreground mt-1">
                    {skill.level}%
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