'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Code, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Briefcase,
  Award,
  Sparkles,
  Rocket,
  Terminal,
  Phone,
  MapPin,
  GraduationCap,
  Users,
  Clock,
  BookOpen
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const PortfolioPage = () => {
  const technicalSkills = {
    'Programming Languages': ['C#', 'PowerShell', 'PHP'],
    'JavaScript Frameworks': ['Next.js', 'React', 'Angular', 'AngularJS', 'jQuery', 'Node.js'],
    'Backend Frameworks': ['.NET Framework MVC', '.NET 6', 'Next.js', 'CodeIgniter 4'],
    'Testing Frameworks': ['Playwright', 'xUnit'],
    'Database': ['SQL', 'MySQL'],
    'CSS Frameworks': ['Bootstrap 3', 'Bootstrap 4', 'Tailwind'],
    'Content Management': ['WordPress', 'TinaCMS'],
    'Microsoft Azure': ['VMs', 'App Service', 'Key Vault', 'App Insights', 'Bicep', 'Blob Storage', 'Entra ID', 'Container Apps', 'Function Apps'],
    'DevOps': ['Azure Pipelines', 'GitHub Actions'],
    'Software Development': ['DevOps', 'GitHub Issues', 'Jira'],
    'AI Tools & Technologies': ['ChatGPT', 'Gemini', 'n8n', 'Cursor'],
    'Platforms & Services': ['Supabase', 'Vercel'],
    'CDNs': ['Azure Front Door', 'Cloudflare'],
  };

  const projects = [
    {
      title: 'Medical Sector Web Application',
      description: 'Developed a web application for medical practitioners to manage patient services, including service types, deliveries, stakeholder reporting, task assignments, and billing.',
      tech: ['.NET', 'Angular', 'SQL Server'],
      link: '#',
      github: '#',
    },
    {
      title: 'Healthcare Ticket Management System',
      description: 'Built a ticket management system for a medical service provider to streamline the resolution of client-generated issues.',
      tech: ['Angular', '.NET', 'SQL Server'],
      link: '#',
      github: '#',
    },
    {
      title: 'Tourism Onboarding Automation',
      description: 'Automated the onboarding process for a tourism client using Power Automate, enhancing workflow efficiency and reducing manual effort.',
      tech: ['Power Automate', 'Dataverse'],
      link: '#',
      github: '#',
    },
  ];

  const experiences = [
    {
      role: 'Software Engineer',
      company: 'SSW, Melbourne',
      period: 'May 2022 – Present',
      description: 'As an IT Consultant, I have experience across various industries including Medical Sector, Healthcare Services, and Tourism Industry. Responsibilities include migrating Angular 8 to Angular 18, developing features using AngularJS, .NET, Angular, and Node.js, designing and optimizing stored procedures and SQL queries, automated deployment using Azure Pipelines, implementing SMTP server configuration in Node.js, and integrating Graph API for Azure Entra ID authentication.',
      highlights: [
        'Migrating Angular 8 application to Angular 18',
        'Developing features using AngularJS, .NET, Angular, and Node.js',
        'Designing and optimizing stored procedures, functions, and SQL queries',
        'Automated deployment processes using Azure Pipelines',
        'Implemented SMTP server configuration in Node.js',
        'Integrated Graph API to authenticate and retrieve employee data from Azure Entra ID',
      ],
      internalProducts: [
        'Feature Development using Next.js, React, .NET 6, and TinaCMS',
        'Creating and managing Azure resources with Bicep, Azure CLI, and Azure Portal',
        'Implementing Power Automate flows with Dataverse',
        'Creating GitHub Actions and Docker images for automation',
        'Securing secrets with GitHub and Azure Key Vault',
        'Managed CDN migration and configured redirects via Cloudflare',
        'Implemented CI/CD pipelines integrated with GitHub and Cloudflare Workers',
        'Integrated Bicep-based Azure infrastructure deployments within CI/CD pipelines',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Contour Software, Karachi',
      period: 'Dec 2019 – Apr 2022',
      description: 'Developed responsive features and improved UI/UX using .NET Framework 4.8 MVC. Performed bug fixes and maintenance for ASP.NET WebForms portals, resolving UI issues using JavaScript and TypeScript.',
      highlights: [
        'Developed responsive features and improved UI/UX using .NET Framework 4.8 MVC',
        'Performed bug fixes and maintenance for ASP.NET WebForms portals',
        'Resolved UI issues using JavaScript and TypeScript',
      ],
    },
    {
      role: 'Web Developer',
      company: 'The Township, Australia',
      period: 'Dec 2018 – May 2019',
      description: 'Developed responsive email templates (EDMs) compatible with major email clients. Managed and developed WordPress applications using plugins and custom code.',
      highlights: [
        'Developed responsive email templates (EDMs) compatible with major email clients',
        'Managed and developed WordPress applications using plugins and custom code',
      ],
    },
    {
      role: 'Web Developer & Designer',
      company: 'Agilosoft, Karachi',
      period: 'Sept 2015 – Dec 2015',
      description: 'Developed features in AngularJS for applications in the transportation industry. Led testing and debugging of .NET and AngularJS applications, consistently delivering on tight deadlines.',
      highlights: [
        'Developed features in AngularJS for applications in the transportation industry',
        'Led testing and debugging of .NET and AngularJS applications',
        'Consistently delivered on tight deadlines',
      ],
    },
  ];

  const certifications = [
    {
      name: 'Microsoft Certified: Azure Developer Associate (AZ-204)',
      issuer: 'Microsoft',
      date: 'Feb 2024',
    },
  ];

  const education = [
    {
      degree: 'Master of Information Technology',
      institution: 'Swinburne University of Technology, Australia, Melbourne',
      period: 'Feb 2016 – Dec 2017',
      specialization: 'Cloud and mobile computing',
    },
    {
      degree: 'Bachelor of Computer Science',
      institution: 'FAST - National University of Computer and Emerging Sciences, Karachi',
      period: 'Aug 2011 – June 2015',
      specialization: null,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-background via-background to-muted/20">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="text-center space-y-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full" />
                <div className="relative bg-card border rounded-full p-6 shadow-lg">
                  <Terminal className="w-16 h-16 text-primary" />
                </div>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-linear-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent"
            >
              Aman Kumar
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl sm:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Software Engineer | Full-Stack Developer | Cloud & AI Enthusiast
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Melbourne, Australia</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button 
                size="lg" 
                className="group"
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Code className="mr-2 group-hover:rotate-12 transition-transform" />
                View Projects
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="group"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Mail className="mr-2 group-hover:scale-110 transition-transform" />
                Get In Touch
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex justify-center gap-6 pt-8"
            >
              <motion.a
                href="https://github.com/amankumarrr"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full border hover:bg-accent transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/aman-kumar-84842060/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full border hover:bg-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:amanmehran@ymail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full border hover:bg-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm text-muted-foreground">Scroll Down</span>
            <div className="w-6 h-10 border-2 rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-primary rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
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

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Technical Skills</h2>
            <p className="text-lg text-muted-foreground">
              Technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(technicalSkills).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                          className="px-3 py-1 text-sm bg-muted rounded-md border"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
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

      {/* Projects Section */}
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
              Some of my recent work and side projects
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full flex flex-col group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle>{project.title}</CardTitle>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <CardDescription>{project.description}</CardDescription>
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
                      <Button variant="outline" size="sm" className="flex-1">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" className="flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
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
                              <span className="text-primary mt-1.5">•</span>
                              <span>{highlight}</span>
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
                              <span className="text-primary mt-1.5">•</span>
                              <span>{item}</span>
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

      {/* Education Section */}
      <section id="education" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Education</h2>
            <p className="text-lg text-muted-foreground">
              Academic background and qualifications
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {education.map((edu, index) => (
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
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle>{edu.degree}</CardTitle>
                        <CardDescription className="mt-1">
                          {edu.institution}
                        </CardDescription>
                        {edu.specialization && (
                          <p className="text-sm text-muted-foreground mt-2">
                            Specialization: {edu.specialization}
                          </p>
                        )}
                        <p className="text-sm text-muted-foreground mt-1">{edu.period}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Attributes Section */}
      <section id="attributes" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Personal Attributes</h2>
            <p className="text-lg text-muted-foreground">
              What drives me as a professional
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="h-full text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle>Team Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Strong team collaborator with a focus on achieving shared goals and delivering high-quality results.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="h-full text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <Clock className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle>Time Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Skilled in time management, with the ability to remain productive and focused under pressure.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="h-full text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <BookOpen className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle>Mentoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Skilled in mentoring and sharing knowledge to help teams meet project goals.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
    </div>
  );
};

export default PortfolioPage;

