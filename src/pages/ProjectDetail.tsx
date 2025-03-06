
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Github, Calendar, User, Tag } from 'lucide-react';

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
  completion?: string;
  client?: string;
}

// This would typically come from an API or database
const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with a seamless checkout experience and responsive design.",
    longDescription: "This comprehensive e-commerce solution features user authentication, product catalog, shopping cart, payment processing, and order management. Built with modern web technologies to ensure a smooth and intuitive shopping experience across all devices. The platform includes features such as product filtering, search functionality, user reviews, and a fully responsive design that adapts to any screen size. The admin dashboard provides tools for inventory management, order processing, and customer relationship management.",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express", "JWT", "Responsive Design"],
    category: "Web App",
    imageUrl: "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    demoUrl: "#",
    repoUrl: "#",
    completion: "December 2021",
    client: "RetailTech Inc."
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A clean and minimal portfolio website showcasing creative work and projects.",
    longDescription: "This portfolio website features a minimalist design that emphasizes content and showcases work in an elegant manner. It includes smooth animations, responsive layouts, and optimized performance to ensure a premium user experience. The site is built with a focus on accessibility and search engine optimization, ensuring that it reaches the widest possible audience. Page transitions and micro-interactions add a level of polish that elevates the overall user experience.",
    tags: ["HTML", "CSS", "JavaScript", "GSAP", "Responsive Design", "Animation", "Accessibility"],
    category: "Website",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    demoUrl: "#",
    repoUrl: "#",
    completion: "March 2022",
    client: "Creative Studio"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather application that displays current and forecasted weather data for any location.",
    longDescription: "This weather dashboard provides real-time weather information and forecasts for locations around the world. Users can search for cities, save favorites, and view detailed weather data including temperature, humidity, wind speed, and more. The application leverages a third-party weather API to fetch accurate and up-to-date information. The interface is designed to present complex weather data in an easily digestible format with intuitive visualizations and clear typography.",
    tags: ["JavaScript", "API", "CSS", "Responsive", "LocalStorage", "Chart.js", "Geolocation API"],
    category: "Web App",
    imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    demoUrl: "#",
    repoUrl: "#",
    completion: "August 2022",
    client: "Weather Info Services"
  },
  {
    id: 4,
    title: "Task Management App",
    description: "A productivity application for managing tasks, projects, and deadlines.",
    longDescription: "This task management application helps users organize their work with features like task creation, project grouping, due dates, priorities, and progress tracking. The intuitive interface makes it easy to manage workloads and stay productive. The app includes features like drag-and-drop task organization, calendar integration, notification reminders, and data visualization for productivity insights. The responsive design ensures a seamless experience across desktop and mobile devices.",
    tags: ["React", "Firebase", "Tailwind CSS", "Context API", "Drag and Drop", "PWA", "Notifications API"],
    category: "Web App",
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    demoUrl: "#",
    repoUrl: "#",
    completion: "January 2023",
    client: "Productivity Solutions"
  },
  {
    id: 5,
    title: "Recipe Finder",
    description: "A web application that helps users discover recipes based on available ingredients.",
    longDescription: "This recipe finder allows users to input their available ingredients and discover recipes they can make. Features include filtering by dietary restrictions, cuisine types, and meal categories, plus the ability to save favorite recipes. The application uses a comprehensive recipe database and intelligent search algorithms to provide relevant recipe suggestions. Users can create accounts to save preferences, favorite recipes, and create shopping lists based on recipe ingredients.",
    tags: ["JavaScript", "API", "Responsive", "LocalStorage", "Authentication", "Filter Algorithms", "Nutritional Data"],
    category: "Web App",
    imageUrl: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    demoUrl: "#",
    repoUrl: "#",
    completion: "May 2023",
    client: "FoodTech Startups"
  },
  {
    id: 6,
    title: "Travel Blog",
    description: "A visually stunning travel blog with interactive maps and travel guides.",
    longDescription: "This travel blog showcases destinations with rich media content, interactive maps, and detailed travel guides. The immersive user interface brings travel stories to life with beautiful typography and smooth transitions. The blog features high-resolution image galleries, video content, and interactive maps that allow users to explore destinations virtually. The content management system makes it easy for travel writers to create and publish engaging stories with multimedia elements.",
    tags: ["WordPress", "Custom Theme", "JavaScript", "Google Maps API", "Content Management", "Multimedia", "SEO"],
    category: "Website",
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    demoUrl: "#",
    repoUrl: "#",
    completion: "July 2023",
    client: "Travel Adventures Co."
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const projectId = parseInt(id || "0");
    const foundProject = projects.find(p => p.id === projectId);
    
    if (foundProject) {
      setProject(foundProject);
    } else {
      navigate("/projects", { replace: true });
    }
  }, [id, navigate]);
  
  if (!project) {
    return null;
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Layout>
        <section className="pt-20 pb-20 px-6 md:px-10">
          <div className="container mx-auto max-w-4xl">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="mb-8"
            >
              <Link to="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs font-medium bg-primary/10 text-primary px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  {project.title}
                </h1>
                
                <p className="text-muted-foreground mb-8">
                  {project.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  
                  <Button variant="outline" asChild>
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden border border-border mb-12">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-center mb-4">
                    <Calendar className="mr-2 h-5 w-5 text-primary" />
                    <h3 className="text-sm font-medium">Completion Date</h3>
                  </div>
                  <p className="text-muted-foreground">
                    {project.completion || "Not specified"}
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-center mb-4">
                    <User className="mr-2 h-5 w-5 text-primary" />
                    <h3 className="text-sm font-medium">Client</h3>
                  </div>
                  <p className="text-muted-foreground">
                    {project.client || "Not specified"}
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-center mb-4">
                    <Tag className="mr-2 h-5 w-5 text-primary" />
                    <h3 className="text-sm font-medium">Category</h3>
                  </div>
                  <p className="text-muted-foreground">
                    {project.category}
                  </p>
                </div>
              </div>
              
              <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">Project Overview</h2>
                <div className="prose prose-stone dark:prose-invert max-w-none">
                  <p className="text-muted-foreground">
                    {project.longDescription}
                  </p>
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-8 border-t border-border">
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className={parseInt(id || "0") <= 1 ? "invisible" : ""}
                >
                  <Link to={`/projects/${parseInt(id || "0") - 1}`}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous Project
                  </Link>
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className={parseInt(id || "0") >= projects.length ? "invisible" : ""}
                >
                  <Link to={`/projects/${parseInt(id || "0") + 1}`}>
                    Next Project
                    <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </motion.div>
  );
};

export default ProjectDetail;
