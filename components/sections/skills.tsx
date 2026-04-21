'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { AnimatedSection } from '@/components/animated-section';
import { BrandIcon } from '@/components/ui/brand-icon';
import { skills, type Skill } from '@/data/skills';

const categories = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'tools', label: 'Tools' },
] as const;

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export function Skills() {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<Skill['category'], Skill[]>);

  return (
    <Section id="skills">
      <AnimatedSection>
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-8 pixel-font">
          Skills
        </h2>

        <div className="flex flex-col gap-8">
          {categories.map((category) => (
            <div key={category.key} className="w-full">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4 pixel-font">
                {category.label}
              </h3>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-4"
              >
                {groupedSkills[category.key]?.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={item}
                    transition={{ duration: 0.3 }}
                    className="relative flex flex-col items-center group"
                  >
                    <div className="w-16 h-16 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 cursor-default p-2">
                      <BrandIcon
                        name={skill.name}
                        source={skill.source}
                        icon={skill.icon}
                        slug={skill.slug}
                        color={skill.color}
                        size={40}
                        className="dark:invert"
                      />
                    </div>

                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </Section>
  );
}