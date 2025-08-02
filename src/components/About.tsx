"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    const ctx = gsap.context(() => {
      gsap.set(
        [titleRef.current, textRef.current, statsRef.current, cardsRef.current],
        {
          opacity: 0,
        }
      );

      gsap.set(titleRef.current, {
        y: 50,
      });

      gsap.set(textRef.current, {
        x: -50,
      });

      gsap.set(statsRef.current?.children, {
        y: 30,
        scale: 0.8,
      });

      gsap.set(cardsRef.current?.children, {
        x: 50,
        rotationY: 45,
      });

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

          tl.to(
            textRef.current,
            {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: "power2.out",
            },
            "-=0.6"
          );

          tl.to(
            statsRef.current?.children,
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              ease: "back.out(1.7)",
              stagger: 0.2,
            },
            "-=0.4"
          );

          tl.to(
            cardsRef.current?.children,
            {
              opacity: 1,
              x: 0,
              rotationY: 0,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.1,
            },
            "-=0.6"
          );

          tl.call(() => {
            setHasAnimated(true);
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} id="about" className="py-16 section-bg-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
            About <span className="gradient-text font-medium">Me</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto font-light">
            Electronics Communication Engineering student with a passion for
            innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={textRef} className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed font-light">
              As a dedicated Electronics Communication Engineering student, I
              bridge the gap between theoretical knowledge and practical
              applications. My journey focuses on PCB design, component
              assembly, and electronic system integration.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed font-light">
              With a keen eye for detail and methodical problem-solving
              approach, I create innovative solutions that push the boundaries
              of electronic communication systems.
            </p>

            <div
              ref={statsRef}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-700/50"
            >
              <div className="text-center">
                <div className="text-2xl font-medium gradient-text mb-1">
                  50+
                </div>
                <div className="text-slate-400 text-sm font-light">
                  Projects
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-medium gradient-text mb-1">
                  15+
                </div>
                <div className="text-slate-400 text-sm font-light">
                  PCB Designs
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-medium gradient-text mb-1">
                  3+
                </div>
                <div className="text-slate-400 text-sm font-light">
                  Years Experience
                </div>
              </div>
            </div>
          </div>

          <div ref={cardsRef} className="grid grid-cols-2 gap-4">
            <div className="professional-card p-6 rounded-xl hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 accent-gradient rounded-lg flex items-center justify-center mb-4 pulse-glow">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="font-medium text-white mb-2">Innovation</h3>
              <p className="text-slate-400 text-sm font-light">
                Exploring new technologies and creative solutions
              </p>
            </div>

            <div className="professional-card p-6 rounded-xl hover:scale-105 transition-transform duration-300 mt-6">
              <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-medium text-white mb-2">Precision</h3>
              <p className="text-slate-400 text-sm font-light">
                Meticulous attention to detail in every project
              </p>
            </div>

            <div className="professional-card p-6 rounded-xl hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-medium text-white mb-2">Efficiency</h3>
              <p className="text-slate-400 text-sm font-light">
                Optimizing designs for maximum performance
              </p>
            </div>

            <div className="professional-card p-6 rounded-xl hover:scale-105 transition-transform duration-300 mt-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="font-medium text-white mb-2">Learning</h3>
              <p className="text-slate-400 text-sm font-light">
                Continuously expanding knowledge and skills
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
