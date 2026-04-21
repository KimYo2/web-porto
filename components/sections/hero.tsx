'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-4"
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-50 mb-6"
        >
          KimYo2
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-xl mx-auto"
        >
          Full Stack Developer | Flutter & Laravel Enthusiast | Fresh Graduate
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="#projects">
            <Button size="lg">View Projects</Button>
          </Link>
          <Link href="#contact">
            <Button variant="outline" size="lg">
              Contact Me
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <Link href="#about" aria-label="Scroll down">
            <ArrowDown className="w-6 h-6 text-zinc-400 dark:text-zinc-600 animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}