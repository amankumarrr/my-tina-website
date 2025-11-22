'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, Briefcase, Code2, ChevronLeft, ChevronRight, Lock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Project } from './types';

interface ProjectsSectionProps {
  clientProjects: Project[];
  internalProducts: Project[];
}

// Carousel Component
interface ProjectWithCategory extends Project {
  category: 'client' | 'internal';
}

interface CarouselProps {
  projects: ProjectWithCategory[];
}

const ProjectsCarousel = ({ projects }: CarouselProps) => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
      
      // Handle resize
      const handleResize = () => handleScroll();
      window.addEventListener('resize', handleResize);
      
      return () => {
        scrollElement.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [projects]);

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused || projects.length === 0) return;

    const autoScroll = () => {
      if (!scrollRef.current) return;

      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const cardWidth = cardRefs.current[0]?.offsetWidth || 384;
      const gap = 24;
      const scrollAmount = cardWidth + gap;
      const maxScroll = scrollWidth - clientWidth;

      // If we've reached the end, scroll back to the beginning
      if (scrollLeft >= maxScroll - 10) {
        scrollRef.current.scrollTo({
          left: 0,
          behavior: 'smooth',
        });
      } else {
        scrollRef.current.scrollBy({
          left: scrollAmount,
          behavior: 'smooth',
        });
      }
    };

    autoScrollIntervalRef.current = setInterval(autoScroll, 3000); // Auto-scroll every 3 seconds

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [isPaused, projects.length]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const cardWidth = cardRefs.current[0]?.offsetWidth || 384;
      const gap = 24;
      scrollRef.current.scrollBy({
        left: -(cardWidth + gap),
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const cardWidth = cardRefs.current[0]?.offsetWidth || 384;
      const gap = 24;
      scrollRef.current.scrollBy({
        left: cardWidth + gap,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Navigation Buttons */}
      <button
        onClick={scrollLeft}
        disabled={!canScrollLeft}
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border shadow-lg transition-all ${
          canScrollLeft
            ? 'opacity-100 hover:bg-background cursor-pointer'
            : 'opacity-0 cursor-not-allowed'
        } group-hover:opacity-100`}
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={scrollRight}
        disabled={!canScrollRight}
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border shadow-lg transition-all ${
          canScrollRight
            ? 'opacity-100 hover:bg-background cursor-pointer'
            : 'opacity-0 cursor-not-allowed'
        } group-hover:opacity-100`}
        aria-label="Scroll right"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        onScroll={handleScroll}
      >
        {projects.map((project, index) => (
          <div
            key={project.title}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className="shrink-0 w-full sm:w-80 lg:w-96 snap-start"
          >
            <ProjectCard project={project} index={index} category={project.category} />
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index, category }: { project: Project; index: number; category: 'client' | 'internal' }) => (
  <motion.div
    key={project.title}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -8 }}
    className="relative h-full"
  >
    <Card className="h-full flex flex-col group hover:shadow-lg transition-shadow overflow-hidden">
      <CardHeader className="pt-6">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            {/* Category Badge */}
            <div className="mb-2 flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-muted text-muted-foreground border border-border">
                {category === 'client' ? (
                  <>
                    <Briefcase className="w-3 h-3" />
                    Client Project
                  </>
                ) : (
                  <>
                    <Code2 className="w-3 h-3" />
                    Internal Product
                  </>
                )}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                <Users className="w-3 h-3" />
                Team Contribution
              </span>
            </div>
            <CardTitle className="mt-2">{project.title}</CardTitle>
          </div>
          {category !== 'client' && (
            <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
          )}
        </div>
        <CardDescription className="mt-2">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-muted rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          {category === 'client' ? (
            <Button variant="outline" size="sm" className="flex-1" disabled>
              <Lock className="w-4 h-4 mr-2" />
              Private Repository
            </Button>
          ) : (
            <>
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1"
                asChild
              >
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (project.github === '#') {
                      e.preventDefault();
                    }
                  }}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
              <Button 
                size="sm" 
                className="flex-1"
                asChild
              >
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (project.link === '#') {
                      e.preventDefault();
                    }
                  }}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live
                </a>
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export const ProjectsSection = ({ clientProjects, internalProducts }: ProjectsSectionProps) => {
  // Combine both project types into a single array with category information
  const allProjects: ProjectWithCategory[] = [
    ...clientProjects.map(project => ({ ...project, category: 'client' as const })),
    ...internalProducts.map(project => ({ ...project, category: 'internal' as const })),
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">
            Projects I've contributed to as part of collaborative teams
          </p>
        </motion.div>
        
        <div className="max-w-7xl mx-auto">
          <ProjectsCarousel projects={allProjects} />
        </div>
      </div>
    </section>
  );
};

