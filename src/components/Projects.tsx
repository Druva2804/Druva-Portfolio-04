import { ExternalLink, Github, Code, Database, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'Stay Booking Website',
      description: 'Full-stack Stay Booking with Bootstrap, Node.js & Express.js. Features include user authentication, Real Time Booking , and real-time Updates.',
      icon: Code,
      image: 'https://uizard.io/static/4be96ac754565f8720e19cec6896056a/a8e47/02c979416071b16b4df94ea262685e88ff12724b-1440x835.png',
      tech: ['BootStrap', 'Node.js','Express.js', 'MongoDB'],
      github: 'https://github.com/Druva2804/Travel-Booking-Web-App.git',
      demo: 'https://ecommerce-demo.com',
      featured: true,
    },
    {
      title: 'Vehicle Classification and Pollution using Autonomous UAV',
      description: 'Implemented autonomous UAVs for real-time vehicle classification and pollution control monitoring.',
      icon: Database,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmq_RL4ND7prWOI-9uNm3NA07vl5T3WbcqRA&s",
      tech: ["Python","Machine Learning"],
      featured: true,
    },
    
   
  
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/5">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise in modern web technologies 
            and innovative problem-solving approaches.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="scale-on-hover bg-gradient-card border-border/50 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <project.icon className="text-primary" size={24} />
                    <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    Featured
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-4 pt-4">
                  <Button asChild variant="outline" size="sm">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
