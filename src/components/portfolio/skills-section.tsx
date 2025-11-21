'use client';

import { motion } from 'motion/react';
import { Code } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { skillIcons } from './constants';
import type { TechnicalSkills } from './types';

interface SkillsSectionProps {
  technicalSkills: TechnicalSkills;
}

export const SkillsSection = ({ technicalSkills }: SkillsSectionProps) => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold mb-4 bg-linear-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Technical Skills
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Technologies and tools I work with to bring ideas to life
          </motion.p>
        </motion.div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(technicalSkills).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                delay: categoryIndex * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="perspective-1000"
            >
              <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-2xl group">
                <CardHeader className="pb-3">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + 0.2 }}
                    className="flex items-center gap-2"
                  >
                    <div className="p-2 rounded-lg bg-linear-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                      <Code className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {category}
                    </CardTitle>
                  </motion.div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => {
                      const skillData = skillIcons[skill] || { icon: Code, color: '#6B7280' };
                      const IconComponent = skillData.icon;
                      const iconColor = skillData.color;
                      
                      return (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0, rotate: -180 }}
                          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: categoryIndex * 0.1 + index * 0.05,
                            type: "spring",
                            stiffness: 200,
                            damping: 15
                          }}
                          whileHover={{ 
                            scale: 1.15, 
                            rotate: [0, -10, 10, -10, 0],
                            y: -5,
                            transition: { duration: 0.5 }
                          }}
                          className="relative group/skill"
                        >
                          <motion.div
                            className="flex items-center gap-2 px-4 py-2.5 rounded-lg border-2 bg-linear-to-br from-background to-muted/30 hover:from-muted/50 hover:to-muted/30 transition-all duration-300 cursor-pointer overflow-hidden relative"
                            style={{ borderColor: `${iconColor}40` }}
                            whileHover={{ 
                              borderColor: iconColor,
                              boxShadow: `0 0 20px ${iconColor}40`
                            }}
                          >
                            {/* Animated background glow */}
                            <motion.div
                              className="absolute inset-0 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"
                              style={{
                                background: `linear-gradient(135deg, ${iconColor}15, transparent)`
                              }}
                            />
                            
                            {/* Icon with rotation animation */}
                            <motion.div
                              className="relative z-10"
                              animate={{
                                rotate: [0, 5, -5, 0],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatDelay: 2,
                                ease: "easeInOut"
                              }}
                              style={{ color: iconColor }}
                            >
                              <IconComponent 
                                className="w-5 h-5"
                              />
                            </motion.div>
                            
                            {/* Skill name */}
                            <span className="relative z-10 text-sm font-medium group-hover/skill:text-foreground transition-colors">
                              {skill}
                            </span>
                            
                            {/* Floating particles effect on hover */}
                            <motion.div
                              className="absolute inset-0 pointer-events-none"
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                            >
                              {[...Array(3)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="absolute w-1 h-1 rounded-full"
                                  style={{
                                    backgroundColor: iconColor,
                                    left: '50%',
                                    top: '50%',
                                  }}
                                  animate={{
                                    x: [0, (Math.random() - 0.5) * 100],
                                    y: [0, (Math.random() - 0.5) * 100],
                                    opacity: [0, 1, 0],
                                    scale: [0, 1, 0],
                                  }}
                                  transition={{
                                    duration: 1,
                                    delay: i * 0.2,
                                    repeat: Infinity,
                                    repeatDelay: 2,
                                  }}
                                />
                              ))}
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

