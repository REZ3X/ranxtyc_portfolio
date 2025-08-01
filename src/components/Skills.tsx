"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  const technicalSkills = [
    { name: "PCB Design", level: 90, icon: "🔧" },
    { name: "Component Assembly", level: 85, icon: "⚡" },
    { name: "Circuit Analysis", level: 88, icon: "📊" },
    { name: "Soldering", level: 92, icon: "🔥" },
    { name: "Schematic Design", level: 87, icon: "📐" },
    { name: "Signal Processing", level: 80, icon: "📡" },
  ];

  const software = [
    "Altium Designer",
    "KiCad",
    "Eagle PCB",
    "LTSpice",
    "MATLAB",
    "Arduino IDE",
    "Proteus",
    "Multisim",
  ];

  const tools = [
    "Oscilloscope",
    "Multimeter",
    "Function Generator",
    "Logic Analyzer",
    "Spectrum Analyzer",
    "Soldering Station",
    "Hot Air Station",
    "PCB Milling Machine",
  ];

  return (
    <section ref={ref} id="skills" className="py-20 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 fade-in-up ${
            isVisible ? "animate" : ""
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
            Technical <span className="gradient-text font-medium">Skills</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto font-light">
            Expertise in electronics communication engineering and hands-on
            technical abilities
          </p>
        </div>

        <div
          className={`grid lg:grid-cols-3 gap-8 stagger-container ${
            isVisible ? "animate" : ""
          }`}
        >
          <div className="professional-card rounded-2xl p-8 stagger-child">
            <h3 className="text-xl font-medium text-white mb-6 flex items-center">
              <div className="w-8 h-8 accent-gradient rounded-lg flex items-center justify-center mr-3 pulse-glow">
                <svg
                  className="w-4 h-4 text-white"
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
              Core Skills
            </h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300 font-light flex items-center">
                      <span className="mr-2">{skill.icon}</span>
                      {skill.name}
                    </span>
                    <span className="text-sky-400 font-medium">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div
                      className={`accent-gradient h-2 rounded-full progress-bar ${
                        isVisible ? "animate" : ""
                      }`}
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        transitionDelay: `${index * 0.1 + 0.3}s`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="professional-card rounded-2xl p-8 stagger-child">
            <h3 className="text-xl font-medium text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              Software
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {software.map((item, index) => (
                <div
                  key={index}
                  className="tech-badge rounded-lg p-3 text-center transform hover:scale-105 transition-all duration-300"
                >
                  <span className="text-slate-300 font-light text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="professional-card rounded-2xl p-8 stagger-child">
            <h3 className="text-xl font-medium text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              Tools & Equipment
            </h3>
            <div className="space-y-3">
              {tools.map((tool, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-slate-300 font-light group-hover:text-green-400 transition-colors duration-300">
                    {tool}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
