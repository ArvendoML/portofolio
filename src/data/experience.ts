import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'PT Example Consulting',
    position: 'IT Consultant',
    startDate: '2024',
    endDate: 'Present',
    location: 'Jakarta, Indonesia',
    description: 'Architecting and delivering tailored modern web solutions and infrastructure for multiple enterprise clients.',
    projects: [
      {
        name: 'Enterprise E-Commerce Replatforming',
        description: 'Led the migration of a legacy monolithic e-commerce platform to a modern micro-frontend architecture, resulting in a 40% performance increase.',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GraphQL']
      },
      {
        name: 'Financial Dashboard System',
        description: 'Developed a real-time analytics dashboard for a major regional bank to monitor high-frequency transactions securely.',
        technologies: ['React', 'Redux Toolkit', 'D3.js', 'WebSockets']
      }
    ]
  },
  {
    id: 'exp-2',
    company: 'Global FinTech Corp',
    position: 'Frontend Developer',
    startDate: '2021',
    endDate: '2024',
    location: 'Singapore (Remote)',
    description: 'Built scalable user interfaces for financial data analysis.',
    responsibilities: [
      'Designed and implemented complex data visualization dashboards.',
      'Optimized React application performance reducing load times by 30%.',
      'Mentored junior developers and established code review guidelines.'
    ],
    technologies: ['React', 'Redux', 'D3.js', 'Styled Components']
  },
  {
    id: 'exp-3',
    company: 'Startup Solutions Inc',
    position: 'Junior Web Developer',
    startDate: '2019',
    endDate: '2021',
    location: 'Jakarta, Indonesia',
    description: 'Contributed to the development of various client web projects.',
    responsibilities: [
      'Built responsive web pages from Figma designs.',
      'Integrated RESTful APIs to display dynamic content.',
      'Maintained legacy Angular applications.'
    ],
    technologies: ['JavaScript', 'HTML/CSS', 'Angular', 'RxJS']
  }
];
