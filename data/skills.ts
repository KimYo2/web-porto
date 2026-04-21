export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools';
  source: 'iconify' | 'simple';
  icon?: string;
  slug?: string;
  color?: string;
}

export const skills: Skill[] = [
  // Frontend
  { name: 'Flutter', category: 'frontend', source: 'iconify', icon: 'logos:flutter' },
  { name: 'Next.js', category: 'frontend', source: 'iconify', icon: 'devicon:nextjs' },
  { name: 'React', category: 'frontend', source: 'iconify', icon: 'logos:react' },
  { name: 'TypeScript', category: 'frontend', source: 'iconify', icon: 'logos:typescript-icon' },
  { name: 'JavaScript', category: 'frontend', source: 'iconify', icon: 'logos:javascript' },
  { name: 'HTML5', category: 'frontend', source: 'iconify', icon: 'devicon:html5' },
  { name: 'CSS3', category: 'frontend', source: 'iconify', icon: 'devicon:css3' },
  { name: 'Tailwind CSS', category: 'frontend', source: 'simple', slug: 'tailwindcss', color: '06B6D4' },
  // Backend
  { name: 'Laravel', category: 'backend', source: 'iconify', icon: 'logos:laravel' },
  { name: 'PHP', category: 'backend', source: 'iconify', icon: 'logos:php' },
  { name: 'Python', category: 'backend', source: 'iconify', icon: 'logos:python' },
  { name: 'Java', category: 'backend', source: 'iconify', icon: 'logos:java' },
  { name: 'Node.js', category: 'backend', source: 'iconify', icon: 'devicon:nodejs' },
  { name: 'MySQL', category: 'backend', source: 'iconify', icon: 'logos:mysql' },
  { name: 'MongoDB', category: 'backend', source: 'simple', slug: 'mongodb', color: '47A248' },
  // Tools
  { name: 'Git', category: 'tools', source: 'simple', slug: 'git', color: 'F05032' },
  { name: 'GitHub', category: 'tools', source: 'simple', slug: 'github', color: '181717' },
  { name: 'VS Code', category: 'tools', source: 'iconify', icon: 'devicon:vscode' },
  { name: 'Figma', category: 'tools', source: 'iconify', icon: 'logos:figma' },
  { name: 'Docker', category: 'tools', source: 'simple', slug: 'docker', color: '2496ED' },
  { name: 'Postman', category: 'tools', source: 'simple', slug: 'postman', color: 'FF6C37' },
];