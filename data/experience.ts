export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Tech Company',
    role: 'Senior Full Stack Developer',
    period: '2023 - Present',
    description: 'Building scalable web applications with Next.js and Node.js.',
    current: true,
  },
  {
    id: '2',
    company: 'Startup Inc',
    role: 'Full Stack Developer',
    period: '2021 - 2023',
    description: 'Developed consumer-facing applications serving 100k+ users.',
  },
  {
    id: '3',
    company: 'Web Agency',
    role: 'Frontend Developer',
    period: '2019 - 2021',
    description: 'Built responsive websites and interactive web experiences.',
  },
];