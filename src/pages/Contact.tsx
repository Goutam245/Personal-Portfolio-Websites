
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import ContactSection from '@/components/sections/ContactSection';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <span className="text-sm font-medium text-primary inline-block mb-2">GET IN TOUCH</span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Let's Work Together
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
              </p>
            </motion.div>
            
            <ContactSection />
          </div>
        </section>
      </Layout>
    </motion.div>
  );
};

export default Contact;
