
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 px-6 md:px-10 bg-secondary/50">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium text-primary inline-block mb-2">ABOUT ME</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Creating beautiful digital products with purpose
            </h2>
            <p className="text-muted-foreground mb-4">
              I'm a Frontend Developer and UI Designer with a passion for creating elegant, 
              efficient, and user-friendly solutions. With over 5 years of experience in the field, 
              I've worked with companies ranging from startups to large corporations.
            </p>
            <p className="text-muted-foreground mb-6">
              My approach combines technical expertise with an eye for design, ensuring that 
              the products I build not only function flawlessly but also look stunning and provide 
              an exceptional user experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link to="/about">
                  <FileText className="mr-2 h-4 w-4" />
                  More About Me
                </Link>
              </Button>
              
              <Button variant="outline" asChild>
                <a href="#" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square rounded-lg overflow-hidden border border-border">
              <img 
                src="https://i.ibb.co.com/nqZ5T7xv/IMG-20240420-190313.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 p-6 rounded-lg glass-effect animate-float">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-semibold">5+</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Years of Experience</p>
                  <p className="text-xs text-muted-foreground">in Development & Design</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
