'use client';

/* Redesigned Contact section using Rule of Thirds: asymmetric split between info and form */
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { AnimatedSection } from '@/components/animated-section';
import { ContactForm } from '@/components/forms/contact-form';

export function Contact() {
  return (
    <Section id="contact" className="py-24 md:py-32">
      <AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Left column: 1/3 - Contact Info Anchor */}
          <div className="md:col-span-1 flex flex-col">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-2">
              Let's Talk
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 pixel-font">
              Get in Touch
            </h2>
            <motion.p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
              Have a project in mind or want to collaborate? Feel free to reach out.
              I&apos;m always open to discussing new opportunities and ideas.
            </motion.p>
            
            <div className="space-y-4 relative">
              {/* Vertical Divider for desktop */}
              <div className="hidden md:block absolute -right-6 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800" />
              
              <div className="p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  I&apos;m currently available for freelance work and full-time
                  positions.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Response time: Within 24-48 hours
                </p>
              </div>
            </div>
          </div>

          {/* Right column: 2/3 - Contact Form */}
          <div className="md:col-span-2">
            <ContactForm />
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
}
