'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { AnimatedSection, AnimatedCard } from '@/components/animated-section';
import { experiences } from '@/data/experience';
import { cn } from '@/lib/utils';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  return (
    <Section id="experience">
      <AnimatedSection>
        <motion.h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-8 pixel-font">
          Experience
        </motion.h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <AnimatedCard key={exp.id} index={index}>
              <div
                className={cn(
                  'flex gap-4 p-6 rounded-xl border border-zinc-200',
                  'dark:border-zinc-800',
                  'hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors'
                )}
              >
                <div className="flex-shrink-0">
                  <div
                    className={cn(
                      'w-12 h-12 rounded-lg flex items-center justify-center',
                      'bg-zinc-100 dark:bg-zinc-800'
                    )}
                  >
                    <Briefcase className="w-6 h-6 text-zinc-700 dark:text-zinc-300" />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                      {exp.role}
                    </h3>
                    {exp.current && (
                      <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 w-fit">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>

                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                    {exp.company}
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1">
                    {exp.description}
                  </p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </AnimatedSection>
    </Section>
  );
}