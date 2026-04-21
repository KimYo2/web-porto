import { 
  Code2, 
  Database, 
  Smartphone, 
  Server, 
  Palette, 
  Terminal, 
  GitBranch, 
  PenTool,
  FileCode, 
  Globe,
  Box,
  Workflow,
  type LucideIcon
} from 'lucide-react';

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  icon: LucideIcon;
}

export const skills: Skill[] = [
  { name: 'Flutter', category: 'frontend', icon: Smartphone },
  { name: 'Next.js', category: 'frontend', icon: Globe },
  { name: 'React', category: 'frontend', icon: Code2 },
  { name: 'TypeScript', category: 'frontend', icon: FileCode },
  { name: 'HTML/CSS', category: 'frontend', icon: Palette },
  { name: 'JavaScript', category: 'frontend', icon: Code2 },
  { name: 'Laravel', category: 'backend', icon: Server },
  { name: 'PHP', category: 'backend', icon: Code2 },
  { name: 'Python', category: 'backend', icon: Terminal },
  { name: 'Java', category: 'backend', icon: Server },
  { name: 'MySQL', category: 'backend', icon: Database },
  { name: 'Git', category: 'tools', icon: GitBranch },
  { name: 'GitHub', category: 'tools', icon: Box },
  { name: 'VS Code', category: 'tools', icon: FileCode },
  { name: 'Figma', category: 'tools', icon: PenTool },
  { name: 'Docker', category: 'other', icon: Workflow },
];