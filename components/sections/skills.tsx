'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { AnimatedSection } from '@/components/animated-section';
import { skills, type Skill } from '@/data/skills';

const categories = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'tools', label: 'Tools' },
  { key: 'other', label: 'Other' },
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-4 pixel-font">
                {category.label}
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {groupedSkills[category.key]?.map((skill) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center gap-1 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center transition-colors group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700">
                      <skill.icon className="w-6 h-6 text-zinc-700 dark:text-zinc-300" />
                    </div>
                    <span className="text-[10px] text-zinc-500 dark:text-zinc-400 text-center hidden group-hover:block">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </Section>
  );
}