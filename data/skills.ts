export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  icon?: string;
}

export const skills: Skill[] = [
  { name: 'Flutter', category: 'frontend' },
  { name: 'Dart', category: 'frontend' },
  { name: 'Blade', category: 'frontend' },
  { name: 'HTML/CSS', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Python', category: 'backend' },
  { name: 'PHP', category: 'backend' },
  { name: 'Java', category: 'backend' },
  { name: 'MySQL', category: 'backend' },
  { name: 'Laravel', category: 'tools' },
  { name: 'Git', category: 'tools' },
  { name: 'GitHub', category: 'tools' },
  { name: 'VS Code', category: 'tools' },
  { name: 'Figma', category: 'tools' },
];