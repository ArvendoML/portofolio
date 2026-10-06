import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'payment-dashboard',
    name: 'Payment Dashboard',
    shortDescription: 'Enterprise financial dashboard for managing high-volume transactions.',
    role: 'Lead Frontend Engineer',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit'],
    type: 'Financial Technology',
    keyContribution: 'Redesigned the main transaction view, improving rendering performance for large datasets by 40%.',
    overview: 'A comprehensive dashboard used by enterprise clients to track, analyze, and manage payments across different regions.',
    challenges: [
      'Complex form state management with strict validation rules.',
      'Large datasets causing performance bottlenecks on the client side.',
      'Requirement for real-time updates and synchronization.'
    ],
    solution: 'Implemented virtualized lists to handle large datasets efficiently. Abstracted complex form logic into reusable hooks using React Hook Form and Zod for reliable validation. Adopted WebSockets for real-time updates without heavy polling.',
    architecture: 'Pages \n  ↓\nFeature Components\n  ↓\nShared Components\n  ↓\nHooks / State\n  ↓\nAPI Layer (Mocked)',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    images: ['/projects/payment-dashboard.jpg']
  },
  {
    id: 'customer-portal',
    name: 'Customer Success Portal',
    shortDescription: 'A self-service portal for enterprise customers.',
    role: 'Senior Frontend Engineer',
    technologies: ['Angular', 'TypeScript', 'RxJS', 'SCSS'],
    type: 'Enterprise',
    keyContribution: 'Migrated legacy jQuery components to modern Angular components.',
    overview: 'A centralized portal allowing customers to manage subscriptions, open support tickets, and view usage analytics.',
    challenges: [
      'Legacy code migration with minimal downtime.',
      'Permission-based UI rendering.',
      'Responsive design for complex data tables.'
    ],
    solution: 'Progressively migrated the application using a hybrid approach. Created a centralized permissions directive to manage UI visibility based on user roles. Designed responsive CSS Grid layouts for tables to remain usable on smaller screens.',
    architecture: 'Modules \n  ↓\nSmart Components\n  ↓\nDumb Components\n  ↓\nServices / State',
    githubUrl: 'https://github.com'
  },
  {
    id: 'mobile-banking-ui',
    name: 'Mobile Banking App',
    shortDescription: 'Cross-platform mobile banking application.',
    role: 'Mobile Engineer',
    technologies: ['Flutter', 'Dart', 'Provider'],
    type: 'Mobile Application',
    keyContribution: 'Developed the biometric authentication flow and core account overview screens.',
    overview: 'A consumer-facing mobile banking app offering seamless money transfers, bill payments, and account management.',
    challenges: [
      'Maintaining 60fps animations on low-end devices.',
      'Securely handling sensitive financial data.',
      'Offline support for basic functionalities.'
    ],
    solution: 'Optimized widget trees to reduce rebuilds. Integrated secure storage for local caching and handled biometric auth safely. Used local databases for offline access to recent transactions.',
    liveUrl: 'https://example.com'
  }
];
