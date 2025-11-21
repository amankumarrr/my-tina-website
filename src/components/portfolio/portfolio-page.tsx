'use client';

import { LenisProvider } from './lenis-provider';
import { HeroSection } from './hero-section';
import { AboutSection } from './about-section';
import { SkillsSection } from './skills-section';
import { CertificationsSection } from './certifications-section';
import { ProjectsSection } from './projects-section';
import { ExperienceSection } from './experience-section';
import { EducationSection } from './education-section';
import { PersonalAttributesSection } from './personal-attributes-section';
import { ContactSection } from './contact-section';
import { 
  technicalSkills,
  clientProjects,
  internalProducts,
  experiences,
  certifications,
  education,
} from './data';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen">
      <LenisProvider />
      <HeroSection />
      <AboutSection />
      <SkillsSection technicalSkills={technicalSkills} />
      <CertificationsSection certifications={certifications} />
      <ProjectsSection clientProjects={clientProjects} internalProducts={internalProducts} />
      <ExperienceSection experiences={experiences} />
      <EducationSection education={education} />
      <PersonalAttributesSection />
      <ContactSection />
    </div>
  );
};

export default PortfolioPage;
