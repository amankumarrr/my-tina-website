'use client';

import { motion } from 'motion/react';
import { Rocket, Award, Sparkles } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">Career Objective</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A results-driven IT professional with hands-on experience in full-stack development and cloud platforms, 
            seeking opportunities that combine software engineering with applied AI. Passionate about building scalable 
            systems and leveraging AI tools to streamline development workflows, foster innovation, and drive business impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-4 py-2 bg-card border rounded-lg"
            >
              <Rocket className="w-5 h-5 text-primary" />
              <span>5+ Years Experience</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-4 py-2 bg-card border rounded-lg"
            >
              <Award className="w-5 h-5 text-primary" />
              <span>Azure Certified</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-4 py-2 bg-card border rounded-lg"
            >
              <Sparkles className="w-5 h-5 text-primary" />
              <span>AI & Cloud Enthusiast</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

