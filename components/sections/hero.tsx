"use client";

/* Redesigned Hero section using Rule of Thirds: asymmetric layout, upper-third anchor, and kicker label */
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export function Hero() {
	return (
		<section className="relative min-h-screen px-6 pt-[30vh] bg-white dark:bg-zinc-950">
			<div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-12">
				<div className="md:col-span-2">
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-2"
					>
						Portfolio — 2025
					</motion.p>

					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-6xl md:text-8xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 pixel-font text-left"
					>
						Lunae
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-sm text-left"
					>
						Full Stack Developer | Flutter & Laravel Enthusiast | Fresh Graduate
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="flex flex-row items-center justify-start gap-4"
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
				</div>
				
				{/* Right 1/3 is intentionally empty negative space */}
				<div className="hidden md:block" />
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.8 }}
				className="absolute bottom-8 left-6 md:left-[calc(50%-300px)]"
			>
				<Link href="#about" aria-label="Scroll down">
					<ArrowDown className="w-6 h-6 text-zinc-400 dark:text-zinc-600 animate-bounce" />
				</Link>
			</motion.div>
		</section>
	);
}
