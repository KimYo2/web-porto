'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { AnimatedSection } from '@/components/animated-section';
import { skills, type Skill } from '@/data/skills';
import { cn } from '@/lib/utils';

const categories = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'tools', label: 'Tools' },
] as const;

export function Skills() {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<Skill['category'], Skill[]>);

  return (
    <Section id="skills">
      <AnimatedSection>
        <motion.h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-8 pixel-font">
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {groupedSkills[category.key]?.map((skill) => (
                  <span
                    key={skill.name}
                    className={cn(
                      'px-3 py-1.5 text-sm rounded-full',
                      'bg-zinc-100 text-zinc-700',
                      'dark:bg-zinc-800 dark:text-zinc-300'
                    )}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </Section>
  );
}