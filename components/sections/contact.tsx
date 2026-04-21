'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { AnimatedSection } from '@/components/animated-section';
import { ContactForm } from '@/components/forms/contact-form';

export function Contact() {
  return (
    <Section id="contact">
      <AnimatedSection>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <motion.h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 pixel-font">
              Get in Touch
            </motion.h2>
            <motion.p className="text-zinc-600 dark:text-zinc-400 mb-6">
              Have a project in mind or want to collaborate? Feel free to reach out.
              I&apos;m always open to discussing new opportunities and ideas.
            </motion.p>
            <motion.div className="space-y-2">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                I&apos;m currently available for freelance work and full-time
                positions.
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Response time: Within 24-48 hours
              </p>
            </motion.div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
}