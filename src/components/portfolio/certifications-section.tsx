'use client';

import { motion } from 'motion/react';
import { Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Certification } from './types';

interface CertificationsSectionProps {
  certifications: Certification[];
}

export const CertificationsSection = ({ certifications }: CertificationsSectionProps) => {
  return (
    <section id="certifications" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Certifications</h2>
          <p className="text-lg text-muted-foreground">
            Professional certifications and achievements
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle>{cert.name}</CardTitle>
                      <CardDescription className="mt-1">
                        {cert.issuer} • Since {cert.date}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

