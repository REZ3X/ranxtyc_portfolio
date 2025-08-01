"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function EAC() {
  const { ref, isVisible } = useScrollAnimation();

  const education = [
    {
      degree: "Vocational School",
      field: "Electronics Communication Engineering",
      institution: "SMK Technology Institute",
      period: "2022 - 2025",
      description:
        "Specialized in electronic communication systems, PCB design, and component assembly",
      achievements: [
        "Top 10% of class",
        "Electronics Project Competition Winner",
        "Advanced PCB Design Certification",
      ],
    },
  ];

  const certifications = [
    {
      title: "IPC-A-610 Acceptability Standards",
      issuer: "IPC International",
      year: "2024",
      icon: "🏆",
    },
    {
      title: "Altium Designer Certified",
      issuer: "Altium Limited",
      year: "2023",
      icon: "⚡",
    },
    {
      title: "Electronic Circuit Analysis",
      issuer: "IEEE Standards",
      year: "2023",
      icon: "📊",
    },
    {
      title: "Soldering & Assembly Techniques",
      issuer: "Technical Institute",
      year: "2023",
      icon: "🔧",
    },
  ];

  const courses = [
    "Digital Signal Processing",
    "Microcontroller Programming",
    "RF Communication Systems",
    "Power Electronics",
    "Embedded Systems Design",
    "Wireless Communication",
    "PCB Manufacturing Processes",
    "Electronic Testing & Measurement",
  ];

  return (
    <section ref={ref} id="education" className="py-20 section-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 fade-in-up ${
            isVisible ? "animate" : ""
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
            Education &{" "}
            <span className="gradient-text font-medium">Certifications</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto font-light">
            Continuous learning and professional development in electronics
            engineering
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div
            className={`space-y-8 fade-in-left ${isVisible ? "animate" : ""}`}
          >
            <h3 className="text-2xl font-light text-white mb-6">Education</h3>
            {education.map((edu, index) => (
              <div
                key={index}
                className="professional-card rounded-2xl p-8 float"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 accent-gradient rounded-lg flex items-center justify-center flex-shrink-0 pulse-glow">
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
                        d="M12 14l9-5-9-5-9 5 9 5z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-medium text-white mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-lg font-light text-sky-400 mb-2">
                      {edu.field}
                    </p>
                    <p className="text-slate-400 mb-2 font-light">
                      {edu.institution} • {edu.period}
                    </p>
                    <p className="text-slate-300 mb-4 font-light">
                      {edu.description}
                    </p>
                    <div className="space-y-2">
                      <h5 className="font-medium text-white">
                        Key Achievements:
                      </h5>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></div>
                            <span className="text-slate-300 font-light">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="professional-card rounded-2xl p-8">
              <h4 className="text-xl font-medium text-white mb-6">
                Relevant Coursework
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className="tech-badge rounded-lg p-3 hover:scale-105 transition-transform duration-300"
                  >
                    <span className="text-slate-300 text-sm font-light">
                      {course}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`space-y-8 fade-in-right ${isVisible ? "animate" : ""}`}
          >
            <h3 className="text-2xl font-light text-white mb-6">
              Certifications
            </h3>
            <div className="grid gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="professional-card rounded-xl p-6 hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">{cert.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-white mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-sky-400 font-light mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-slate-400 font-light">{cert.year}</p>
                    </div>
                    <div className="bg-green-900 text-green-300 px-3 py-1 rounded-full text-sm font-light pulse-glow">
                      Verified
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="professional-card rounded-2xl p-8">
              <h4 className="text-xl font-medium text-white mb-6">
                Learning Progress
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 font-light">
                    Electronics Theory
                  </span>
                  <span className="text-purple-400 font-medium">Advanced</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 font-light">
                    Practical Application
                  </span>
                  <span className="text-purple-400 font-medium">Expert</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 font-light">
                    Industry Standards
                  </span>
                  <span className="text-purple-400 font-medium">
                    Proficient
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 font-light">
                    Innovation & Design
                  </span>
                  <span className="text-purple-400 font-medium">Advanced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
