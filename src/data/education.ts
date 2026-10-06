export interface Education {
  id: string;
  school: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  achievements: string[];
}

export const education: Education[] = [
  {
    id: 'edu-1',
    school: 'University of Technology',
    degree: 'Bachelor of Science',
    fieldOfStudy: 'Computer Science',
    startDate: '2018',
    endDate: '2022',
    location: 'New York, NY',
    description: 'Graduated with honors, focusing on Software Engineering, Data Structures, and Algorithms.',
    achievements: [
      'Dean\'s List for 4 consecutive semesters',
      'Developed a campus-wide event management application for the senior project',
      'President of the Computer Science Society'
    ]
  }
];
