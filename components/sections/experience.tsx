'use client';

/* Redesigned Experience section using Rule of Thirds: sticky 1/3 sidebar and 2/3 vertical timeline */
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { AnimatedSection, AnimatedCard } from '@/components/animated-section';
import { experiences } from '@/data/experience';
import { cn } from '@/lib/utils';
import { Briefcase } from 'lucide-react';

export function Experience() {
  return (
    <Section id="experience" className="py-24 md:py-32">
      <AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left column: 1/3 - Sticky Title Area */}
          <div className="md:col-span-1">
            <div className="sticky top-24 text-left">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-2">
                My Journey
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 pixel-font mb-6">
                Experience
              </h2>
              <div className="hidden md:block text-6xl font-bold text-zinc-100 dark:text-zinc-900 pixel-font -z-10 select-none">
                03
              </div>
            </div>
          </div>

          {/* Right column: 2/3 - Vertical Timeline */}
          <div className="md:col-span-2 space-y-8">
            {experiences.map((exp, index) => (
              <AnimatedCard key={exp.id} index={index}>
                <div
                  className={cn(
                    'relative flex flex-col md:flex-row gap-6 p-8 rounded-xl border border-zinc-200',
                    'dark:border-zinc-800',
                    'hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors',
                    index !== 0 && 'border-t-0 border-t border-zinc-200 dark:border-zinc-800 pt-8'
                  )}
                >
                  {/* Year/Date on the left (1/3 equivalent) */}
                  <div className="md:w-1/3 text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                    {exp.period}
                  </div>

                  {/* Content on the right (2/3 equivalent) */}
                  <div className="md:w-2/3 flex-grow">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className={cn(
                        "text-lg font-semibold text-zinc-900 dark:text-zinc-50",
                        index === 0 ? "font-bold text-xl" : ""
                      )}>
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 w-fit">
                          Current
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300 font-medium mb-3">
                      <Briefcase className="w-4 h-4 opacity-50" />
                      {exp.company}
                    </div>

                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
}
