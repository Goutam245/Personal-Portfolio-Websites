
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="w-full py-12 px-6 md:px-10 border-t border-border/50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <Link to="/" className="text-xl font-semibold mb-4 inline-block">
            <span className="text-gradient">Portfolio</span>
          </Link>
          <p className="text-muted-foreground max-w-md mt-2">
            Crafting digital experiences with precision and care. 
            Always learning, always improving, always pushing the boundaries of what's possible.
          </p>
          <div className="flex space-x-4 mt-6">
            <a 
              href="https://github.com/Goutam245" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/goutam-roy-9bb82b2a1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
           
            <a 
              href="mailto:hello@example.com" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="font-medium mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
            <li><Link to="/projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</Link></li>
            <li><Link to="/skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-medium mb-4">Contact</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>goutam.roy.421917@gmail.com</li>
            <li>Bangladesh Gazipur, 1750</li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto mt-10 pt-6 border-t border-border/50 flex flex-col md:flex-row justify-between items-center">
        <p className="text-muted-foreground text-sm">
          © {year} Portfolio. All rights reserved.
        </p>
        <div className="mt-4 md:mt-0">
          <ul className="flex space-x-6 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
