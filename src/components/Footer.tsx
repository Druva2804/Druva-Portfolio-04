import { ArrowUp, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 bg-secondary/10 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {currentYear} Alex Johnson. Made with{' '}
              <Heart className="inline w-4 h-4 text-red-500 fill-current" />{' '}
              and lots of coffee.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center space-x-6">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Terms of Service
            </a>
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowUp size={16} className="mr-2" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Additional Footer Content */}
        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            Built with React, TypeScript, and Tailwind CSS. Deployed on Vercel.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;