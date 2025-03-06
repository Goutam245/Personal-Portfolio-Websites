
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import SkillsSection from '@/components/sections/SkillsSection';

const Skills = () => {
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
              <span className="text-sm font-medium text-primary inline-block mb-2">MY EXPERTISE</span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Technical Skills
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I've spent years refining my skills in development and design. Here's a deep dive into my technical expertise.
              </p>
            </motion.div>
            
            <SkillsSection />
          </div>
        </section>
      </Layout>
    </motion.div>
  );
};

export default Skills;
