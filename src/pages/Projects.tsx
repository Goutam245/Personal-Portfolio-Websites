
import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: string;
  imageUrl: string;
  demoUrl: string;
  repoUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with a seamless checkout experience and responsive design.",
    longDescription: "This comprehensive e-commerce solution features user authentication, product catalog, shopping cart, payment processing, and order management. Built with modern web technologies to ensure a smooth and intuitive shopping experience across all devices.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Web App",
    imageUrl: "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A clean and minimal portfolio website showcasing creative work and projects.",
    longDescription: "This portfolio website features a minimalist design that emphasizes content and showcases work in an elegant manner. It includes smooth animations, responsive layouts, and optimized performance to ensure a premium user experience.",
    tags: ["HTML", "CSS", "JavaScript", "GSAP"],
    category: "Website",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather application that displays current and forecasted weather data for any location.",
    longDescription: "This weather dashboard provides real-time weather information and forecasts for locations around the world. Users can search for cities, save favorites, and view detailed weather data including temperature, humidity, wind speed, and more.",
    tags: ["JavaScript", "API", "CSS", "Responsive"],
    category: "Web App",
    imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    id: 4,
    title: "Task Management App",
    description: "A productivity application for managing tasks, projects, and deadlines.",
    longDescription: "This task management application helps users organize their work with features like task creation, project grouping, due dates, priorities, and progress tracking. The intuitive interface makes it easy to manage workloads and stay productive.",
    tags: ["React", "Firebase", "Tailwind CSS", "Context API"],
    category: "Web App",
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    id: 5,
    title: "Recipe Finder",
    description: "A web application that helps users discover recipes based on available ingredients.",
    longDescription: "This recipe finder allows users to input their available ingredients and discover recipes they can make. Features include filtering by dietary restrictions, cuisine types, and meal categories, plus the ability to save favorite recipes.",
    tags: ["JavaScript", "API", "Responsive", "LocalStorage"],
    category: "Web App",
    imageUrl: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    id: 6,
    title: "Travel Blog",
    description: "A visually stunning travel blog with interactive maps and travel guides.",
    longDescription: "This travel blog showcases destinations with rich media content, interactive maps, and detailed travel guides. The immersive user interface brings travel stories to life with beautiful typography and smooth transitions.",
    tags: ["WordPress", "Custom Theme", "JavaScript", "Google Maps API"],
    category: "Website",
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    demoUrl: "#",
    repoUrl: "#"
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);
  
  const categories = ["All", ...new Set(projects.map(project => project.category))];
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Layout>
        <section className="pt-20 pb-20 px-6 md:px-10">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span className="text-sm font-medium text-primary inline-block mb-2">MY WORK</span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Featured Projects
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A collection of my recent work that demonstrates my skills and expertise
                in creating beautiful and functional digital experiences.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="project-card group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span 
                          key={tag} 
                          className="text-xs font-medium bg-primary/10 text-primary px-2.5 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-xs font-medium bg-primary/10 text-primary px-2.5 py-0.5 rounded-full">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-6">{project.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <Link
                        to={`/projects/${project.id}`}
                        className="text-sm font-medium inline-flex items-center hover:text-primary transition-colors"
                      >
                        View Details <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                      </Link>
                      
                      <div className="flex items-center space-x-3">
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="Live demo"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                        <a 
                          href={project.repoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="GitHub repository"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </Layout>
    </motion.div>
  );
};

export default Projects;
