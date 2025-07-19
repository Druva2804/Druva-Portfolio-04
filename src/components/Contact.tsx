import { Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Druva.bhagavatula04@gmail.com',
      href: 'mailto:Druva.bhagavatula04@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Druva2804',
      color: 'hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/bhagavatuladruva/',
      color: 'hover:text-blue-400'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://x.com/druvabhagavatu2',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and 
            create something amazing together.
          </p>
        </div>

        {/* Only Contact Info and Social Links */}
        <div className="max-w-xl mx-auto space-y-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Let's connect
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I'm always open to discussing new opportunities, creative projects, 
              or partnerships. Feel free to reach out through any of the channels below.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-card border border-border/50 hover:border-primary/50 transition-colors duration-200 group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <info.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{info.label}</div>
                    <div className="text-muted-foreground">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">
              Follow me
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-gradient-card border border-border/50 rounded-lg flex items-center justify-center transition-all duration-200 hover:border-primary/50 hover:scale-110 ${social.color}`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
