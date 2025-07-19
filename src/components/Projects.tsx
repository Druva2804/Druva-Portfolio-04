import { ExternalLink, Github, Code, Database, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.',
      icon: Code,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      github: 'https://github.com/alexjohnson/ecommerce',
      demo: 'https://ecommerce-demo.com',
      featured: true,
    },
    {
      title: 'AI Chat Application',
      description: 'Real-time chat application with AI-powered responses using OpenAI API. Built with React and Socket.io for seamless communication.',
      icon: Database,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop',
      tech: ['React', 'OpenAI', 'Socket.io', 'Express', 'MongoDB'],
      github: 'https://github.com/alexjohnson/ai-chat',
      demo: 'https://ai-chat-demo.com',
      featured: true,
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with drag-and-drop functionality, real-time updates, and team collaboration features.',
      icon: Smartphone,
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      tech: ['Vue.js', 'Firebase', 'Vuetify', 'PWA'],
      github: 'https://github.com/alexjohnson/task-manager',
      demo: 'https://task-manager-demo.com',
      featured: false,
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather dashboard with interactive maps, forecasts, and location-based services. Responsive design for all devices.',
      icon: Code,
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      tech: ['React', 'Weather API', 'Mapbox', 'Tailwind'],
      github: 'https://github.com/alexjohnson/weather-app',
      demo: 'https://weather-dashboard-demo.com',
      featured: false,
    },
    {
      title: 'Cryptocurrency Tracker',
      description: 'Real-time cryptocurrency tracking application with portfolio management, price alerts, and market analysis tools.',
      icon: Database,
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=500&h=300&fit=crop',
      tech: ['React Native', 'CoinGecko API', 'Redux', 'Chart.js'],
      github: 'https://github.com/alexjohnson/crypto-tracker',
      demo: 'https://crypto-tracker-demo.com',
      featured: false,
    },
    {
      title: 'Social Media Analytics',
      description: 'Comprehensive social media analytics platform with data visualization, engagement tracking, and automated reporting.',
      icon: Smartphone,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      tech: ['Next.js', 'D3.js', 'Python', 'PostgreSQL', 'Docker'],
      github: 'https://github.com/alexjohnson/social-analytics',
      demo: 'https://social-analytics-demo.com',
      featured: false,
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
