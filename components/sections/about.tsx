'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { AnimatedSection } from '@/components/animated-section';

export function About() {
  return (
    <Section id="about">
      <AnimatedSection>
        <motion.h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              I&apos;m a passionate full-stack developer with experience building
              scalable web applications. I specialize in React, Next.js, and
              TypeScript, with a strong foundation in backend technologies.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              My approach to development focuses on writing clean, maintainable
              code and creating intuitive user experiences. I believe in continuous
              learning and staying up-to-date with the latest web technologies.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              When I&apos;m not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with the
              developer community.
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Years Experience', value: '5+' },
              { label: 'Projects Completed', value: '30+' },
              { label: 'Happy Clients', value: '20+' },
              { label: 'Technologies', value: '15+' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900"
              >
                <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                  {stat.value}
                </div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>
    </Section>
  );
}