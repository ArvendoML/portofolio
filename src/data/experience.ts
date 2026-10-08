import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'PT. Wide Technology Indonesia',
    position: 'Software Engineer',
    startDate: '12/2023',
    endDate: 'Present',
    location: 'South Jakarta',
    description: 'Developed internal web applications and client banking projects.',
    projects: [
      {
        name: 'Internal Product Team – PrimecashX',
        description: 'Build and develop internal web applications using React.js & TypeScript. Create new modules, improve performance, and collaborate on product prototyping.',
        technologies: ['React.js', 'TypeScript']
      },
      {
        name: 'Bank Mandiri – KOPRA',
        description: 'Build and develop UI web application using Angular, TypeScript, and Tailwind. Create new components, optimize UI performance and improve code structure for maintainability.',
        technologies: ['Angular', 'TypeScript', 'Tailwind CSS']
      },
      {
        name: 'CCU Bank – Corporate Internet Banking (CIB)',
        description: 'Build and develop banking modules and features using AngularJS. Create new modules and features, optimize UI performance, integrate APIs and improve code structure for better maintainability.',
        technologies: ['AngularJS']
      },
      {
        name: 'CCU Bank – Premier Mobile Banking (PMB)',
        description: 'Build and develop mobile banking modules and features using Flutter. Create new modules and features, optimize UI performance, integrate APIs and improve code structure for maintainability.',
        technologies: ['Flutter']
      }
    ]
  }
];
