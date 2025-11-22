import type { TechnicalSkills, Project, Experience, Certification, Education } from './types';

export const technicalSkills: TechnicalSkills = {
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

export const clientProjects: Project[] = [
  {
    title: 'Medical Sector Web Application',
    description: 'Worked on a web application that enables medical practitioners to manage patient services, including service types, deliveries, stakeholder reporting, task assignments, and billing. Implemented SMTP server configuration in Node.js to send email notifications to stakeholders, and introduced telemetry features to enhance privacy and monitoring.',
    tech: ['.NET', 'Angular', 'SQL Server'],
    link: '#',
    github: '#',
    category: 'client',
    isTeamContribution: true,
  },
  {
    title: 'Healthcare Ticket Management System',
    description: 'Contributed to a claim management system designed for a medical service provider to streamline the handling of client-generated claims. Integrated multiple claim types into the existing platform, resolved issues related to claim assignments, and improved the overall claim search and processing workflow.',
    tech: ['Angular', '.NET', 'SQL Server'],
    link: '#',
    github: '#',
    category: 'client',
    isTeamContribution: true,
  },
  {
    title: 'Tourism Onboarding Automation',
    description: 'Automated the onboarding process for a tourism client using Power Automate to improve workflow efficiency and minimize manual effort. Enabled seamless sign-in and enhanced the overall onboarding experience through integrated and streamlined steps.',
    tech: ['Power Automate', 'Dataverse', 'Azure Function Apps', 'Dynamic F&O'],
    link: '#',
    github: '#',
    category: 'client',
    isTeamContribution: false,
  },
];


export const internalProducts: Project[] = [
  {
    title: 'SSW.Website',
    description: 'Worked on a modern website using Next.js, React, TinaCMS, Tailwind CSS, TypeScript, Power Automate, and JotForm for content management. It provides a seamless content editing experience for the SSW team and fast loading time.',
    tech: ['Next.js', 'TinaCMS', 'Tailwind CSS', 'TypeScript', 'Power Automate', 'JotForm', 'GitHub Actions', 'Azure Pipelines', 'Azure App Service', 'IaC', 'Cloudflare', 'Docker', 'Node.js',
      'Azure key vault', 'Playwright'
    ],
    link: 'https://www.ssw.com.au',
    github: 'https://github.com/SSWConsulting/SSW.Website',
    category: 'internal',
    isTeamContribution: true,
  },
  {
    title: 'TinaDocs',
    description: 'Worked on a documentation website using Next.js, GitHub Actions, TinaCMS, Tailwind CSS, and TypeScript. It provides a seamless content editing experience and best for template to use for your technical documentation.',
    tech: [ 'Next.js', 'GitHub Actions', 'TinaCMS', 'Tailwind CSS', 'TypeScript'],
    link: 'https://tina.io/tinadocs/docs',
    github: 'https://github.com/tinacms/tinadocs',
    category: 'internal',
    isTeamContribution: true,
  },
];

export const experiences: Experience[] = [
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

export const certifications: Certification[] = [
  {
    name: 'Microsoft Certified: Azure Developer Associate (AZ-204)',
    issuer: 'Microsoft',
    date: 'Feb 2024',
  },
];

export const education: Education[] = [
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

