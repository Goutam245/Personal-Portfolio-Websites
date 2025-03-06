
import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'design' | 'tools';
  icon: string;
}

const skills: Skill[] = [
  // Frontend
  { name: 'HTML', level: 95, category: 'frontend', icon: '🌐' },
  { name: 'CSS', level: 90, category: 'frontend', icon: '🎨' },
  { name: 'JavaScript', level: 90, category: 'frontend', icon: '📜' },
  { name: 'React', level: 85, category: 'frontend', icon: '⚛️' },
  { name: 'TypeScript', level: 75, category: 'frontend', icon: '📘' },
  { name: 'Next.js', level: 80, category: 'frontend', icon: '🔼' },
  
  // Design
  { name: 'UI Design', level: 85, category: 'design', icon: '🖌️' },
  { name: 'Responsive Design', level: 90, category: 'design', icon: '📱' },
  { name: 'Figma', level: 80, category: 'design', icon: '🖼️' },
  { name: 'Adobe XD', level: 75, category: 'design', icon: '🎭' },
  
  // Tools
  { name: 'Git', level: 85, category: 'tools', icon: '📊' },
  { name: 'Webpack', level: 70, category: 'tools', icon: '📦' },
  { name: 'npm/yarn', level: 90, category: 'tools', icon: '📁' },
  { name: 'VS Code', level: 95, category: 'tools', icon: '💻' },
];

const SkillsSection = () => {
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const designSkills = skills.filter(skill => skill.category === 'design');
  const toolsSkills = skills.filter(skill => skill.category === 'tools');
  
  return (
    <section className="py-20 px-6 md:px-10">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary inline-block mb-2">MY EXPERTISE</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've spent years refining my skills in development and design. Here's a snapshot of my technical expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCategory title="Frontend Development" skills={frontendSkills} delay={0} />
          <SkillCategory title="Design & UI/UX" skills={designSkills} delay={0.2} />
          <SkillCategory title="Tools & Technologies" skills={toolsSkills} delay={0.4} />
        </div>
      </div>
    </section>
  );
};

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  delay: number;
}

const SkillCategory = ({ title, skills, delay }: SkillCategoryProps) => {
  return (
    <motion.div
      className="bg-card p-6 rounded-lg border border-border"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-semibold mb-6">{title}</h3>
      
      <div className="space-y-5">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <span className="mr-2 text-lg">{skill.icon}</span>
                <span className="font-medium">{skill.name}</span>
              </div>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsSection;
