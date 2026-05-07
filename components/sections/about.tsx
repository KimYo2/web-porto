'use client';

/* Redesigned About section using Rule of Thirds: asymmetric split, vertical kicker, and stat cards in 1/3 column */
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { AnimatedSection } from '@/components/animated-section';

export function About() {
  return (
    <Section id="about" className="py-24 md:py-32">
      <AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Left column: 1/3 - Kicker and Stats */}
          <div className="md:col-span-1 flex flex-col gap-8">
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-2 rotate-[-90deg] origin-left translate-x-[-10px] md:translate-x-0 opacity-50 md:opacity-100">
                Who I Am
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
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
                  className="p-6 md:p-8 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800"
                >
                  <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                    {stat.value}
                  </div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right column: 2/3 - Main Content */}
          <div className="md:col-span-2 relative">
            {/* Vertical Divider for desktop */}
            <div className="hidden md:block absolute -left-6 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800" />
            
            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-2">
                Who I Am
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-8 pixel-font">
                About Me
              </h2>

              <div className="space-y-4">
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  Saya seorang pengembang Full Stack dengan pengalaman dalam membangun
                  aplikasi web dan mobile. Fokus pada teknologi modern seperti Flutter
                  untuk mobile dan Laravel untuk backend.
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  Selama magang di BPS (Badan Pusat Statistik), saya membangun sistem SIAP Inventaris
                  untuk pengelolaan data inventaris barang parish. Pengalaman ini memberikan saya
                  pemahaman tentang pentingnya data yang akurat dan efisien dalam sebuah sistem.
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Saya percaya bahwa teknologi harus membantu menyelesaikan masalah
                  nyata. Saya terus belajar teknologi baru dan berkontribusi pada
                  proyek open source.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
}
