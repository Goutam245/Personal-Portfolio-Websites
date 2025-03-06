
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jane Cooper",
    role: "CEO",
    company: "Acme Inc",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    content: "Working with this developer was an absolute pleasure. They delivered a stunning website that exceeded our expectations and perfectly captured our brand's essence. Their attention to detail and problem-solving skills are exceptional."
  },
  {
    id: 2,
    name: "Michael Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    content: "The website they built for us not only looks beautiful but is also incredibly functional. Their coding expertise combined with an eye for design created a seamless user experience that has significantly increased our conversions."
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "Product Owner",
    company: "StartupHub",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    content: "An exceptional developer who combines technical excellence with outstanding design sensibilities. They took our vague ideas and transformed them into a polished, professional website that perfectly represents our brand."
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="py-20 px-6 md:px-10 bg-secondary/50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary inline-block mb-2">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it - here's what clients have to say about working with me.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -top-8 -left-8">
            <Quote className="w-16 h-16 text-primary/10" />
          </div>
          
          <div className="relative z-10 bg-card p-8 md:p-10 rounded-lg border border-border">
            <motion.div
              key={testimonials[activeIndex].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-lg md:text-xl mb-8">
                {testimonials[activeIndex].content}
              </p>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                  <img 
                    src={testimonials[activeIndex].avatar} 
                    alt={testimonials[activeIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-lg">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                </p>
              </div>
            </motion.div>
            
            <div className="flex justify-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full mx-1 transition-colors ${
                  index === activeIndex ? 'bg-primary' : 'bg-primary/20'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
