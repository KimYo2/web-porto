'use client';

/* Redesigned Projects section using Rule of Thirds: featured full-width card and supporting 1/3 grid */
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
  const featuredProject = projects[0];
  const supportingProjects = projects.slice(1);

  return (
    <Section id="projects" className="py-24 md:py-32">
      <AnimatedSection>
        <div className="mb-12 text-left">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-2">
            Selected Work
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 pixel-font">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Featured Project: Full Width (3/3) */}
          <AnimatedCard index={0}>
            <Card className="h-full border-t-4 border-t-zinc-900 dark:border-t-zinc-50 border-l-4 border-l-zinc-900 dark:border-l-zinc-50 p-8">
              <CardHeader className="px-0">
                <CardTitle className="text-xl md:text-2xl font-bold">{featuredProject.title}</CardTitle>
                <CardDescription className="text-base">{featuredProject.description}</CardDescription>
              </CardHeader>
              <CardContent className="px-0 mt-4">
                <div className="flex flex-wrap gap-2">
                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-0 pt-6 gap-4">
                {featuredProject.githubUrl && (
                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    Code
                  </a>
                )}
                {featuredProject.liveUrl && (
                  <a
                    href={featuredProject.liveUrl}
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

          {/* Supporting Projects: 1/3 each */}
          {supportingProjects.map((project, index) => (
            <AnimatedCard key={project.id} index={index + 1}>
              <Card className="h-full p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-lg font-bold">{project.title}</CardTitle>
                  <CardDescription className="text-sm line-clamp-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-0 mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-[10px] rounded bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-0 flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                    >
                      <GithubIcon className="w-3 h-3" />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                    >
                      <Link className="w-3 h-3" />
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
