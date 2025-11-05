"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import EAC from "@/components/EAC";
import Gallery from "@/components/Gallery/Gallery";
// import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
	return (
		<main className="min-h-screen bg-black">
			<div className="relative">
				<div className="fixed inset-0 overflow-hidden pointer-events-none">
					<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500 rounded-full mix-blend-screen filter blur-3xl opacity-8 animate-pulse"></div>
					<div className="absolute top-3/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-8 animate-pulse animation-delay-2000"></div>
					<div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-8 animate-pulse animation-delay-4000"></div>
				</div>

				<div className="fixed inset-0 pointer-events-none opacity-5">
					<div
						className="absolute inset-0"
						style={{
							backgroundImage: `radial-gradient(circle at 2px 2px, rgba(14, 165, 233, 0.4) 1px, transparent 0)`,
							backgroundSize: "40px 40px",
						}}
					></div>
				</div>

				<div className="relative z-10">
					<Navbar />
					<Hero />
					<About />
					<Skills />
					{/* <Experience /> */}
					<EAC />
					<Gallery />
					{/* <Projects /> */}
					<Contact />
					<Footer />
				</div>
			</div>

			<style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
		</main>
	);
}
