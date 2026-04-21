'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { AnimatedSection, AnimatedCard } from '@/components/animated-section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { projects } from '@/data/projects';
import { Link } from 'lucide-react';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1.05 0-1.9-.15-.56-.1-.91-.45-.91-1.05V8.04a2.98 2.98 0 0 0-1.95-2.75 3.01 3.01 0 0 0-1.95 2.75V11H7a3 3 0 0 0 3 3v9H3v-4a4.8 4.8 0 0 1 1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1.05 0-1.9-.15"/>
  </svg>
);

export function Projects() {
  return (
    <Section id="projects">
      <AnimatedSection>
        <motion.h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-8">
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <AnimatedCard key={project.id} index={index}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                    >
                      <Link className="w-4 h-4" />
                      Live
                    </a>
                  )}
                </CardFooter>
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </AnimatedSection>
    </Section>
  );
}