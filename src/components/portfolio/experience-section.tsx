'use client';

import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Experience } from './types';

interface ExperienceSectionProps {
  experiences: Experience[];
}

export const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground">
            My professional journey
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-primary/20"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-background" />
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <CardTitle>{exp.role}</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-1">
                        <Briefcase className="w-4 h-4" />
                        {exp.company}
                      </CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{exp.description}</p>
                  {exp.highlights && exp.highlights.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold mb-2">Key Responsibilities:</h4>
                      <ul className="space-y-1">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary shrink-0 mt-0.5">•</span>
                            <span className="flex-1">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {exp.internalProducts && exp.internalProducts.length > 0 && (
                    <div className="pt-2 border-t">
                      <h4 className="text-sm font-semibold mb-2">Internal Products:</h4>
                      <ul className="space-y-1">
                        {exp.internalProducts.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary shrink-0 mt-0.5">•</span>
                            <span className="flex-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

