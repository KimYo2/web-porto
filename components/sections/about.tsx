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
              Saya seorang pengembang Full Stack dengan pengalaman dalam membangun
              aplikasi web dan mobile. Fokus pada teknologi modern seperti Flutter
              untuk mobile dan Laravel untuk backend.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              Selama magang di BPS (Badan Pusat Statistik), saya membangun program
              untuk pengolahan data statistik. Pengalaman ini memberikan saya
              pemahaman tentang pentingnya data yang akurat dan efisien.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Saya percaya bahwa teknologi harus membantu menyelesaikan masalah
              nyata. Saya terus belajar teknologi baru dan berkontribusi pada
              proyek open source.
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Projects', value: '10+' },
              { label: 'Technologies', value: '8+' },
              { label: 'Internship', value: 'BPS' },
              { label: 'University', value: 'Active' },
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