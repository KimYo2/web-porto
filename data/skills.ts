export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  slug: string;
  color?: string;
  custom?: boolean;
}

export const skills: Skill[] = [
  // Frontend
  { name: 'Flutter', category: 'frontend', slug: 'flutter', color: '02569B' },
  { name: 'Next.js', category: 'frontend', slug: 'nextdotjs', color: '000000' },
  { name: 'React', category: 'frontend', slug: 'react', color: '61DAFB' },
  { name: 'TypeScript', category: 'frontend', slug: 'typescript', color: '3178C6' },
  { name: 'JavaScript', category: 'frontend', slug: 'javascript', color: 'F7DF1E' },
  { name: 'HTML5', category: 'frontend', slug: 'html5', color: 'E34F26' },
  { name: 'CSS3', category: 'frontend', slug: 'css', color: '264DE4' },
  { name: 'Tailwind CSS', category: 'frontend', slug: 'tailwindcss', color: '06B6D4' },
  // Backend
  { name: 'Laravel', category: 'backend', slug: 'laravel', color: 'FF2D20' },
  { name: 'PHP', category: 'backend', slug: 'php', color: '777BB4' },
  { name: 'Python', category: 'backend', slug: 'python', color: '3776AB' },
  { name: 'Java', category: 'backend', slug: 'openjdk', color: '5382A1' },
  { name: 'MySQL', category: 'backend', slug: 'mysql', color: '4479A1' },
  { name: 'MongoDB', category: 'backend', slug: 'mongodb', color: '47A248' },
  // Tools
  { name: 'Git', category: 'tools', slug: 'git', color: 'F05032' },
  { name: 'GitHub', category: 'tools', slug: 'github', color: '181717' },
  { name: 'VSCode', category: 'tools', slug: 'visualstudiocode', color: '007ACC', custom: true },
  { name: 'Figma', category: 'tools', slug: 'figma', color: 'F24E1E' },
  { name: 'Docker', category: 'tools', slug: 'docker', color: '2496ED' },
  { name: 'Postman', category: 'tools', slug: 'postman', color: 'FF6C37' },
];