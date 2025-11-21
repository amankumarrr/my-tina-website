'use client';

import { motion } from 'motion/react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center space-y-8"
        >
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Let's Connect</h2>
            <p className="text-lg text-muted-foreground">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href="mailto:amanmehran@ymail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </Button>
            </motion.a>
            <motion.a
              href="tel:+61415213115"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" />
                Call Me
              </Button>
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="w-full sm:w-auto">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

