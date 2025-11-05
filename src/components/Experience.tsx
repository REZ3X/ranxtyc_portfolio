"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { handleNavClick } from "@/utils/smoothScroll";
import { Briefcase, GraduationCap, Wrench, Trophy } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
	const sectionRef = useRef<HTMLElement>(null);
	const titleRef = useRef<HTMLDivElement>(null);
	const timelineRef = useRef<HTMLDivElement>(null);

	const [hasAnimated, setHasAnimated] = useState(false);

	useEffect(() => {
		if (hasAnimated) return;

		const ctx = gsap.context(() => {
			gsap.set([titleRef.current, timelineRef.current], {
				opacity: 0,
			});

			gsap.set(titleRef.current, {
				y: 50,
			});

			if (timelineRef.current?.children) {
				gsap.set(Array.from(timelineRef.current.children), {
					opacity: 0,
					x: -50,
				});
			}

			ScrollTrigger.create({
				trigger: sectionRef.current,
				start: "top 80%",
				onEnter: () => {
					if (hasAnimated) return;

					const tl = gsap.timeline();

					tl.to(titleRef.current, {
						opacity: 1,
						y: 0,
						duration: 0.8,
						ease: "power2.out",
					});

					if (timelineRef.current?.children) {
						tl.to(
							Array.from(timelineRef.current.children),
							{
								opacity: 1,
								x: 0,
								duration: 0.8,
								ease: "power2.out",
								stagger: 0.15,
							},
							"-=0.4",
						);
					}

					tl.call(() => {
						setHasAnimated(true);
					});
				},
			});
		}, sectionRef);

		return () => ctx.revert();
	}, [hasAnimated]);

	const getIconComponent = (iconType: string) => {
		const iconClass = "w-3 h-3";
		switch (iconType) {
			case "briefcase":
				return <Briefcase className={iconClass} />;
			case "graduation":
				return <GraduationCap className={iconClass} />;
			case "wrench":
				return <Wrench className={iconClass} />;
			case "trophy":
				return <Trophy className={iconClass} />;
			default:
				return <Briefcase className={iconClass} />;
		}
	};

	const experiences = [
		{
			period: "2024 - Present",
			role: "Electronics Engineering Intern",
			company: "TechVolt Solutions",
			type: "Internship",
			description: "PCB design and testing for industrial automation",
			key: "5+ PCB prototypes designed",
			technologies: ["Altium Designer", "KiCad"],
			icon: "briefcase",
		},
		{
			period: "2023 - 2024",
			role: "Lab Assistant",
			company: "SMK Negeri 2 Depok Sleman",
			type: "Part-time",
			description: "Student mentoring and equipment maintenance",
			key: "50+ students mentored",
			technologies: ["Teaching", "Equipment"],
			icon: "graduation",
		},
	];

	const getTypeColor = (type: string) => {
		switch (type) {
			case "Internship":
				return "bg-blue-900/50 text-blue-300";
			case "Part-time":
				return "bg-green-900/50 text-green-300";
			case "Freelance":
				return "bg-purple-900/50 text-purple-300";
			case "Volunteer":
				return "bg-orange-900/50 text-orange-300";
			default:
				return "bg-slate-800 text-slate-300";
		}
	};

	return (
		<section
			ref={sectionRef}
			id="experience"
			className="py-16 sm:py-20 section-bg"
		>
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<div ref={titleRef} className="text-center mb-10 sm:mb-12">
					<h2 className="text-3xl sm:text-4xl font-light text-white mb-3 sm:mb-4">
						<span className="gradient-text font-medium">Experience</span>
					</h2>
					<p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto font-light">
						Hands-on experience in electronics engineering and leadership
					</p>
				</div>

				<div ref={timelineRef} className="relative">
					<div className="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 to-purple-500"></div>

					<div className="space-y-6 sm:space-y-8">
						{experiences.map((exp, index) => (
							<div
								key={index}
								className={`relative flex items-start ${
									index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
								}`}
							>
								<div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10">
									<div className="w-5 h-5 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full flex items-center justify-center text-white pulse-glow">
										{getIconComponent(exp.icon)}
									</div>
								</div>

								<div
									className={`w-full md:w-5/12 ml-8 md:ml-0 ${
										index % 2 === 0
											? "md:mr-auto md:pr-4"
											: "md:ml-auto md:pl-4"
									}`}
								>
									<div className="professional-card rounded-lg p-3 hover:scale-105 transition-all duration-300 group cursor-pointer">
										<div className="flex items-center justify-between mb-2">
											<span className="text-xs text-sky-400 font-light">
												{exp.period}
											</span>
											<span
												className={`text-xs px-2 py-0.5 rounded-full ${getTypeColor(
													exp.type,
												)}`}
											>
												{exp.type}
											</span>
										</div>

										<h3 className="text-base font-medium text-white mb-1 group-hover:text-sky-400 transition-colors">
											{exp.role}
										</h3>

										<p className="text-sm text-slate-300 mb-1 font-light">
											{exp.company}
										</p>

										<p className="text-xs text-slate-400 mb-2 font-light">
											{exp.description}
										</p>

										<div className="flex items-center space-x-1 mb-2">
											<div className="w-1 h-1 bg-sky-500 rounded-full"></div>
											<span className="text-xs text-sky-300 font-light">
												{exp.key}
											</span>
										</div>

										<div className="flex flex-wrap gap-1">
											{exp.technologies.map((tech, idx) => (
												<span
													key={idx}
													className="tech-badge px-1.5 py-0.5 rounded text-xs text-sky-300"
												>
													{tech}
												</span>
											))}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="text-center mt-10">
					<div className="flex gap-3 justify-center">
						<button
							onClick={() => handleNavClick("#contact")}
							className="inline-flex items-center px-4 py-2 accent-gradient text-white rounded-lg hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-200 font-light transform hover:scale-105 text-sm"
						>
							<svg
								className="w-3 h-3 mr-2"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
							Contact Me
						</button>
						<button
							onClick={() => handleNavClick("#projects")}
							className="inline-flex items-center px-4 py-2 border border-sky-500 text-sky-400 rounded-lg hover:bg-sky-500 hover:text-white transition-all duration-200 font-light transform hover:scale-105 text-sm"
						>
							View Projects
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
