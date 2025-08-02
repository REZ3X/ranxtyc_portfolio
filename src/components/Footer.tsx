import { handleNavClick } from "@/utils/smoothScroll";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-slate-100 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Rani Anggraini
            </h3>
            <p className="text-slate-300 mb-6 max-w-md font-light">
              Electronics Communication Engineering student passionate about
              innovative electronic solutions and cutting-edge technology.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-11 h-11 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 hover:scale-110"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleNavClick("#home")}
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-200 font-light text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("#about")}
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-200 font-light text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("#skills")}
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-200 font-light text-left"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("#experience")}
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-200 font-light text-left"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("#education")}
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-200 font-light text-left"
                >
                  Education
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("#projects")}
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-200 font-light text-left"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-200 font-light text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Specializations
            </h4>
            <ul className="space-y-3">
              <li className="text-slate-300 font-light flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                PCB Design
              </li>
              <li className="text-slate-300 font-light flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Component Assembly
              </li>
              <li className="text-slate-300 font-light flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Circuit Analysis
              </li>
              <li className="text-slate-300 font-light flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Signal Processing
              </li>
              <li className="text-slate-300 font-light flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Electronic Testing
              </li>
              <li className="text-slate-300 font-light flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                System Integration
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0 font-light">
              © {currentYear} Rani Anggraini. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-slate-400 font-light">
                Crafted with ⚡ for Electronics Engineering
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-slate-400 font-light">
                  Available for projects
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}