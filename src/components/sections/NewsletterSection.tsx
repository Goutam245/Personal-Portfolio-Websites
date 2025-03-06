
import React from 'react';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

const NewsletterSection = () => {
  return (
    <section className="py-20 px-6 md:px-10">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-card p-8 md:p-10 rounded-lg border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                Subscribe to my newsletter
              </h2>
              <p className="text-muted-foreground mb-6">
                Stay updated with my latest projects, articles, and resources. I'll send occasional updates about web development and design.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <Button>
                  <Send className="mr-2 h-4 w-4" />
                  Subscribe
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground mt-3">
                By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
              </p>
            </div>
            
            <div className="hidden md:block">
              <div className="aspect-square max-w-xs mx-auto relative">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/5 rounded-full flex items-center justify-center">
                  <Send className="h-10 w-10 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
