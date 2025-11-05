"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { handleNavClick } from "@/utils/smoothScroll";

export default function Projects() {
	const { ref, isVisible } = useScrollAnimation();

	const projects = [
		{
			title: "Smart Home Automation PCB",
			description:
				"Designed and assembled a custom PCB for IoT-based home automation system with wireless communication capabilities.",
			image: "🏠",
			tech: ["KiCad", "ESP32", "RF Design", "PCB Assembly"],
			features: [
				"Multi-layer PCB design",
				"Wireless sensor integration",
				"Power management optimization",
				"Real-time data transmission",
			],
			status: "Completed",
			year: "2024",
		},
		{
			title: "Digital Signal Processing Board",
			description:
				"Custom DSP board for audio signal processing with advanced filtering and real-time processing capabilities.",
			image: "🎛️",
			tech: ["Altium Designer", "DSP", "Audio Processing", "C++"],
			features: [
				"High-speed signal processing",
				"Multiple input/output channels",
				"Real-time filtering algorithms",
				"User-friendly interface",
			],
			status: "In Progress",
			year: "2024",
		},
		{
			title: "RF Communication Module",
			description:
				"Designed a compact RF communication module for long-range data transmission in industrial applications.",
			image: "📡",
			tech: ["Eagle PCB", "RF Design", "Antenna Design", "LoRa"],
			features: [
				"Long-range communication",
				"Low power consumption",
				"Compact form factor",
				"Industrial-grade reliability",
			],
			status: "Completed",
			year: "2023",
		},
		{
			title: "Embedded System Controller",
			description:
				"Multi-purpose embedded controller for industrial automation with advanced sensor interfacing.",
			image: "⚙️",
			tech: ["Proteus", "Arduino", "Sensors", "Industrial Design"],
			features: [
				"Multiple sensor interfaces",
				"Real-time control systems",
				"Industrial communication protocols",
				"Robust environmental design",
			],
			status: "Testing",
			year: "2024",
		},
		{
			title: "Power Management System",
			description:
				"Efficient power management PCB design for battery-powered electronic devices with smart charging.",
			image: "🔋",
			tech: [
				"LTSpice",
				"Power Electronics",
				"Battery Management",
				"Efficiency",
			],
			features: [
				"Smart battery charging",
				"Power efficiency optimization",
				"Multiple voltage outputs",
				"Safety protection circuits",
			],
			status: "Completed",
			year: "2023",
		},
		{
			title: "Measurement & Testing Rig",
			description:
				"Custom electronic testing platform for component validation and circuit performance analysis.",
			image: "📊",
			tech: ["LabVIEW", "Data Acquisition", "Testing", "Analysis"],
			features: [
				"Automated testing procedures",
				"Data logging and analysis",
				"Component characterization",
				"Performance benchmarking",
			],
			status: "Ongoing",
			year: "2024",
		},
	];

	const getStatusColor = (status: string) => {
		switch (status) {
			case "Completed":
				return "bg-green-900 text-green-300";
			case "In Progress":
				return "bg-blue-900 text-blue-300";
			case "Testing":
				return "bg-yellow-900 text-yellow-300";
			case "Ongoing":
				return "bg-purple-900 text-purple-300";
			default:
				return "bg-slate-800 text-slate-300";
		}
	};

	return (
		<section ref={ref} id="projects" className="py-20 section-bg">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div
					className={`text-center mb-16 fade-in-up ${
						isVisible ? "animate" : ""
					}`}
				>
					<h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
						Featured <span className="gradient-text font-medium">Projects</span>
					</h2>
					<p className="text-lg text-slate-300 max-w-2xl mx-auto font-light">
						Showcase of electronic design projects and innovative engineering
						solutions
					</p>
				</div>

				<div
					className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-container ${
						isVisible ? "animate" : ""
					}`}
				>
					{projects.map((project, index) => (
						<div
							key={index}
							className="professional-card rounded-2xl p-6 stagger-child"
						>
							<div className="mb-6">
								<div className="w-16 h-16 accent-gradient rounded-xl flex items-center justify-center text-3xl mb-4 pulse-glow float">
									{project.image}
								</div>
								<div className="flex justify-between items-start mb-3">
									<h3 className="text-xl font-medium text-white">
										{project.title}
									</h3>
									<span className="text-sm text-slate-400 font-light">
										{project.year}
									</span>
								</div>
								<div
									className={`inline-block px-3 py-1 rounded-full text-sm font-light mb-4 ${getStatusColor(
										project.status,
									)} pulse-glow`}
								>
									{project.status}
								</div>
							</div>

							<p className="text-slate-300 mb-6 leading-relaxed font-light">
								{project.description}
							</p>

							<div className="mb-6">
								<h4 className="font-medium text-white mb-3">Key Features:</h4>
								<ul className="space-y-2">
									{project.features.map((feature, idx) => (
										<li key={idx} className="flex items-center space-x-2 group">
											<div className="w-1.5 h-1.5 bg-sky-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
											<span className="text-sm text-slate-300 font-light group-hover:text-sky-400 transition-colors duration-300">
												{feature}
											</span>
										</li>
									))}
								</ul>
							</div>

							<div className="border-t border-slate-700 pt-4">
								<h4 className="font-medium text-white mb-3">Technologies:</h4>
								<div className="flex flex-wrap gap-2">
									{project.tech.map((tech, idx) => (
										<span
											key={idx}
											className="tech-badge px-3 py-1 rounded-lg text-sm font-light text-sky-300 hover:scale-105 transition-transform duration-300"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>

				<div
					className={`text-center mt-12 fade-in-up ${
						isVisible ? "animate" : ""
					}`}
				>
					<p className="text-slate-300 mb-6 font-light">
						Interested in seeing more detailed project documentation?
					</p>
					<button
						onClick={() => handleNavClick("#contact")}
						className="inline-flex items-center px-6 py-3 accent-gradient text-white rounded-lg hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-200 font-light transform hover:scale-105"
					>
						Get In Touch
						<svg
							className="w-4 h-4 ml-2"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
}
