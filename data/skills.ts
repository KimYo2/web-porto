export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools';
  icon: string; // Iconify icon name (collection:icon-name)
}

export const skills: Skill[] = [
  // Frontend
  { name: 'Flutter', category: 'frontend', icon: 'logos:flutter' },
  { name: 'Next.js', category: 'frontend', icon: 'logos:nextjs-icon' },
  { name: 'React', category: 'frontend', icon: 'logos:react' },
  { name: 'TypeScript', category: 'frontend', icon: 'logos:typescript-icon' },
  { name: 'JavaScript', category: 'frontend', icon: 'logos:javascript' },
  { name: 'HTML5', category: 'frontend', icon: 'logos:html5' },
  { name: 'CSS3', category: 'frontend', icon: 'logos:css3' },
  { name: 'Tailwind CSS', category: 'frontend', icon: 'logos:tailwindcss-icon' },
  // Backend
  { name: 'Laravel', category: 'backend', icon: 'logos:laravel' },
  { name: 'PHP', category: 'backend', icon: 'logos:php' },
  { name: 'Python', category: 'backend', icon: 'logos:python' },
  { name: 'Java', category: 'backend', icon: 'logos:java' },
  { name: 'MySQL', category: 'backend', icon: 'logos:mysql' },
  { name: 'MongoDB', category: 'backend', icon: 'logos:mongodb' },
  // Tools
  { name: 'Git', category: 'tools', icon: 'logos:git-icon' },
  { name: 'GitHub', category: 'tools', icon: 'logos:github-icon' },
  { name: 'VS Code', category: 'tools', icon: 'logos:visual-studio-code' },
  { name: 'Figma', category: 'tools', icon: 'logos:figma' },
  { name: 'Docker', category: 'tools', icon: 'logos:docker-icon' },
  { name: 'Postman', category: 'tools', icon: 'logos:postman' },
];