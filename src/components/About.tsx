"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="about" className="py-20 section-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 fade-in-up ${isVisible ? 'animate' : ''}`}>
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
            About <span className="gradient-text font-medium">Me</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto font-light">
            Driven by curiosity and innovation in electronics communication engineering
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 fade-in-left ${isVisible ? 'animate' : ''}`}>
            <p className="text-lg text-slate-300 leading-relaxed font-light">
              As a dedicated Electronics Communication Engineering student, I am passionate about 
              bridging the gap between theoretical knowledge and practical applications. My journey 
              in electronics has been marked by a deep fascination with how electronic components 
              work together to create complex communication systems.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed font-light">
              I specialize in PCB design, component assembly, and electronic system integration. 
              My hands-on experience includes working with various electronic components, 
              understanding circuit design principles, and implementing efficient communication protocols.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed font-light">
              With a keen eye for detail and a methodical approach to problem-solving, 
              I strive to create innovative solutions that push the boundaries of what's possible 
              in electronic communication systems.
            </p>

            <div className={`grid grid-cols-2 gap-6 mt-8 stagger-container ${isVisible ? 'animate' : ''}`}>
              <div className="text-center p-4 stagger-child">
                <div className="text-3xl font-medium gradient-text mb-2">50+</div>
                <div className="text-slate-400 font-light">Projects Completed</div>
              </div>
              <div className="text-center p-4 stagger-child">
                <div className="text-3xl font-medium gradient-text mb-2">15+</div>
                <div className="text-slate-400 font-light">PCB Designs</div>
              </div>
            </div>
          </div>

          <div className={`grid grid-cols-2 gap-4 fade-in-right ${isVisible ? 'animate' : ''}`}>
            <div className="space-y-4">
              <div className="professional-card p-6 rounded-xl float">
                <div className="w-12 h-12 accent-gradient rounded-lg flex items-center justify-center mb-4 pulse-glow">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-medium text-white mb-2">Innovation</h3>
                <p className="text-slate-400 text-sm font-light">Always exploring new technologies and creative solutions</p>
              </div>
              
              <div className="professional-card p-6 rounded-xl float-delayed">
                <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-medium text-white mb-2">Precision</h3>
                <p className="text-slate-400 text-sm font-light">Meticulous attention to detail in every project</p>
              </div>
            </div>
            
            <div className="space-y-4 mt-8">
              <div className="professional-card p-6 rounded-xl float">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-medium text-white mb-2">Efficiency</h3>
                <p className="text-slate-400 text-sm font-light">Optimizing designs for maximum performance</p>
              </div>
              
              <div className="professional-card p-6 rounded-xl float-delayed">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-medium text-white mb-2">Learning</h3>
                <p className="text-slate-400 text-sm font-light">Continuously expanding knowledge and skills</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}