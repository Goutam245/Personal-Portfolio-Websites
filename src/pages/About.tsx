
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, FileText, Heart, Code, Lightbulb, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const experience = [
    {
      period: "2020 - Present",
      role: "Senior Frontend Developer",
      company: "TechCorp",
      description:
        "Lead frontend development for multiple projects, implementing modern UI designs and ensuring optimal performance across devices.",
    },
    {
      period: "2018 - 2020",
      role: "UI Developer",
      company: "DesignWave",
      description:
        "Collaborated with designers to transform concepts into responsive, interactive interfaces with a focus on user experience.",
    },
    {
      period: "2015 - 2018",
      role: "Junior Web Developer",
      company: "StartupHub",
      description:
        "Built and maintained websites for various clients, focusing on clean code and responsive design principles.",
    },
  ];

  const education = [
    {
      period: "2011 - 2015",
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      description:
        "Specialized in software development with a minor in interactive design.",
    },
    {
      period: "2018",
      degree: "UI/UX Design Certificate",
      institution: "Design Academy",
      description:
        "Intensive program focused on user experience principles and interface design.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Layout>
        <section className="pt-20 pb-10 px-6 md:px-10">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-16">
                <span className="text-sm font-medium text-primary inline-block mb-2">ABOUT ME</span>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                  Creating digital experiences with purpose
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  I'm a frontend developer and UI designer with a passion for creating beautiful, 
                  functional, and user-centered digital experiences.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                <div>
                  <div className="aspect-video rounded-lg overflow-hidden border border-border mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1122&q=80" 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild variant="outline">
                      <a href="#" download>
                        <Download className="mr-2 h-4 w-4" />
                        Download Resume
                      </a>
                    </Button>
                    <Button asChild>
                      <Link to="/contact">
                        <FileText className="mr-2 h-4 w-4" />
                        Contact Me
                      </Link>
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-4">My Story</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      With over 5 years of experience in web development, I've cultivated a strong foundation in 
                      creating responsive, accessible, and performant websites and applications.
                    </p>
                    <p>
                      My journey began with a curiosity about how websites work, which led me to explore HTML, CSS, 
                      and JavaScript. As I honed these skills, I became increasingly interested in the intersection 
                      of development and design, particularly how thoughtful UI/UX can elevate digital products.
                    </p>
                    <p>
                      Today, I specialize in creating intuitive digital experiences that prioritize user needs while 
                      meeting business objectives. I'm passionate about clean code, thoughtful design, and continuous learning.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-6 text-center">What I Value</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                {[
                  { icon: <Heart className="h-6 w-6" />, title: "Passion", description: "I genuinely love what I do and put my heart into every project." },
                  { icon: <Code className="h-6 w-6" />, title: "Craftsmanship", description: "I believe in writing clean, maintainable code that stands the test of time." },
                  { icon: <Lightbulb className="h-6 w-6" />, title: "Innovation", description: "I continuously explore new technologies and approaches to solve problems." },
                  { icon: <Users className="h-6 w-6" />, title: "Collaboration", description: "I thrive in team environments and value diverse perspectives." },
                ].map((value, i) => (
                  <div key={i} className="bg-card p-6 rounded-lg border border-border">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-lg font-medium mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Experience</h2>
                  <div className="space-y-8">
                    {experience.map((item, i) => (
                      <div key={i} className="relative pl-8 border-l border-border">
                        <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-primary"></div>
                        <span className="text-sm text-primary font-medium">{item.period}</span>
                        <h3 className="text-lg font-medium mt-1">{item.role}</h3>
                        <p className="text-muted-foreground text-sm">{item.company}</p>
                        <p className="mt-2 text-muted-foreground">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Education</h2>
                  <div className="space-y-8">
                    {education.map((item, i) => (
                      <div key={i} className="relative pl-8 border-l border-border">
                        <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-primary"></div>
                        <span className="text-sm text-primary font-medium">{item.period}</span>
                        <h3 className="text-lg font-medium mt-1">{item.degree}</h3>
                        <p className="text-muted-foreground text-sm">{item.institution}</p>
                        <p className="mt-2 text-muted-foreground">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </motion.div>
  );
};

export default About;
