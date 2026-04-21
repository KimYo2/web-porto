export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with cart, checkout, and admin dashboard.',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates and team features.',
    tags: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
    githubUrl: 'https://github.com',
  },
  {
    id: '3',
    title: 'Portfolio Website',
    description: 'A premium portfolio with animations, dark mode, and contact form integration.',
    tags: ['Next.js', 'Framer Motion', 'Tailwind'],
    githubUrl: 'https://github.com',
  },
  {
    id: '4',
    title: 'Weather Dashboard',
    description: 'Weather forecasting with location search and interactive maps.',
    tags: ['React', 'OpenWeather API', 'Leaflet'],
    githubUrl: 'https://github.com',
  },
];