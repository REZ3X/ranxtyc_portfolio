"use client";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden section-bg">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 accent-gradient rounded-full flex items-center justify-center shadow-xl hero-glow">
            <span className="text-4xl font-medium text-white">RA</span>
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-light text-white mb-6">
          Rani <span className="gradient-text font-medium">Anggraini</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-slate-300 mb-8 font-light">
          Electronics Communication Engineering Student
        </p>
        
        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Passionate about PCB design, component assembly, and electronic systems. 
          Building the future through innovative electronic solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 accent-gradient text-white rounded-lg hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-200 font-light"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-sky-500 text-sky-400 rounded-lg hover:bg-sky-500 hover:text-white transition-colors duration-200 font-light"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
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