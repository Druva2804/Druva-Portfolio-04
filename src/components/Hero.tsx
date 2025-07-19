import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const resumeLink = 'https://drive.google.com/file/d/1AK6eGqNNynZ5l24Ze02nxf53GdMXBOQl/preview';

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow">
            Hello, I'm{' '}
            <span className="gradient-text">Druva Bhagavatula</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
            Software Engineer · Web Developer · Upskilling in Data Science
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about data science and building future-forward projects that seamlessly integrate hardware and software. Dedicated to crafting exceptional digital experiences through innovative code and creative problem-solving.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              className="btn-primary px-8 py-6 text-lg font-semibold rounded-full"
            >
              Hire Me
            </Button>
            
            <a 
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-6 text-lg font-semibold rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground flex items-center"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToAbout}
            className="text-primary hover:text-accent transition-colors duration-200"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/20 rounded-full"></div>
      <div className="absolute bottom-32 right-10 w-16 h-16 border border-accent/20 rounded-full"></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 border border-primary/30 rounded-full"></div>
    </section>
  );
};

export default Hero;
