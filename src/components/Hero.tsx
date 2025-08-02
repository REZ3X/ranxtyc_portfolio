"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ProfileCard from "@/components/ui/ProfileCard/ProfileCard";
import { handleNavClick } from "@/utils/smoothScroll";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const profileCardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const helloTextRef = useRef<HTMLSpanElement>(null);
  const nameTextRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const blobsRef = useRef<HTMLDivElement[]>([]);

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    const ctx = gsap.context(() => {
      gsap.set(profileCardRef.current, {
        opacity: 0,
        x: -100,
        rotationY: -45,
        scale: 0.8,
      });

      gsap.set(helloTextRef.current, {
        opacity: 0,
        y: 50,
        rotationX: -45,
      });

      gsap.set(nameTextRef.current, {
        opacity: 0,
        y: 50,
        rotationX: -45,
      });

      gsap.set(subtitleRef.current, {
        opacity: 0,
        y: 30,
        scale: 0.9,
      });

      gsap.set(descriptionRef.current, {
        opacity: 0,
        y: 30,
      });

      gsap.set(buttonsRef.current?.children, {
        opacity: 0,
        y: 30,
        scale: 0.8,
      });

      gsap.set(statsRef.current?.children, {
        opacity: 0,
        y: 20,
        scale: 0.8,
      });

      gsap.set(blobsRef.current, {
        scale: 0,
        opacity: 0,
      });

      gsap.to(blobsRef.current, {
        scale: 1,
        opacity: 0.2,
        duration: 2,
        ease: "power2.out",
        stagger: 0.3,
      });

      const tl = gsap.timeline({ delay: 0.5 });

      tl.to(profileCardRef.current, {
        opacity: 1,
        x: 0,
        rotationY: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
      });

      tl.to(
        helloTextRef.current,
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.6"
      );

      tl.to(
        nameTextRef.current,
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      );

      tl.to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      );

      tl.to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      );

      tl.to(
        buttonsRef.current?.children,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          stagger: 0.1,
        },
        "-=0.2"
      );

      tl.to(
        statsRef.current?.children,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: "back.out(1.7)",
          stagger: 0.1,
        },
        "-=0.1"
      );

      tl.call(() => {
        setHasAnimated(true);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden section-bg"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>

      <div
        ref={(el) => el && (blobsRef.current[0] = el)}
        className="absolute top-20 left-10 w-72 h-72 bg-sky-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"
      ></div>
      <div
        ref={(el) => el && (blobsRef.current[1] = el)}
        className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"
      ></div>
      <div
        ref={(el) => el && (blobsRef.current[2] = el)}
        className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"
      ></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            ref={profileCardRef}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md lg:max-w-lg">
              <ProfileCard
                name="Rani Anggraini"
                title="Electronics Engineering Student"
                handle="ranxtyc"
                status="Available for Projects"
                contactText="Get In Touch"
                avatarUrl="/assets/rani-avatar.jpg"
                miniAvatarUrl="/assets/rani-mini.jpg"
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={false}
                className="hero-profile-card"
                behindGradient="radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(199,100%,70%,var(--card-opacity)) 4%,hsla(199,50%,60%,calc(var(--card-opacity)*0.75)) 10%,hsla(199,25%,50%,calc(var(--card-opacity)*0.5)) 50%,hsla(199,0%,40%,0) 100%),radial-gradient(35% 52% at 55% 20%,#0ea5e9c4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#38bdf8ff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#0284c7ff 0%,#0ea5e9ff 40%,#38bdf8ff 60%,#0284c7ff 100%)"
                innerGradient="linear-gradient(145deg,#0a0a0a 0%,#1a1a1a 100%)"
              />
            </div>
          </div>

          <div className="text-left lg:text-left">
            <h1
              ref={titleRef}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-4 leading-tight"
            >
              <span
                ref={helloTextRef}
                className="block text-lg sm:text-xl lg:text-2xl text-slate-400 font-light mb-2"
              >
                Hello, I'm
              </span>
              <span ref={nameTextRef} className="gradient-text font-medium">
                Rani Anggraini
              </span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-6 font-light"
            >
              Electronics Communication Engineering Student
            </p>

            <p
              ref={descriptionRef}
              className="text-base sm:text-lg text-slate-400 mb-8 max-w-xl font-light leading-relaxed"
            >
              Passionate about PCB design, component assembly, and electronic
              systems. Building the future through innovative electronic
              solutions and precision engineering.
            </p>

            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <button
                onClick={() => handleNavClick("#projects")}
                className="inline-flex items-center px-8 py-4 accent-gradient text-white rounded-lg hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-200 font-light transform hover:scale-105 group"
              >
                View My Projects
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200"
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
              <button
                onClick={() => handleNavClick("#contact")}
                className="inline-flex items-center px-8 py-4 border-2 border-sky-500 text-sky-400 rounded-lg hover:bg-sky-500 hover:text-white transition-all duration-200 font-light transform hover:scale-105 group"
              >
                <svg
                  className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200"
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
                Get In Touch
              </button>
            </div>

            <div
              ref={statsRef}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-700/50"
            >
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-medium gradient-text mb-1">
                  50+
                </div>
                <div className="text-slate-400 text-xs sm:text-sm font-light">
                  Projects
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-medium gradient-text mb-1">
                  15+
                </div>
                <div className="text-slate-400 text-xs sm:text-sm font-light">
                  PCB Designs
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-medium gradient-text mb-1">
                  3+
                </div>
                <div className="text-slate-400 text-xs sm:text-sm font-light">
                  Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
