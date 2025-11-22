export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  category?: 'client' | 'internal';
  isTeamContribution?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights?: string[];
  internalProducts?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  specialization: string | null;
}

export interface TechnicalSkills {
  [category: string]: string[];
}

