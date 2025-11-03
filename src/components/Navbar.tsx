"use client";
import { useState, useEffect } from "react";
import { handleNavClick } from "@/utils/smoothScroll";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#gallery", label: "Gallery" },
    // { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavItemClick = (href: string) => {
    handleNavClick(href);
    setIsNavOpen(false);
  };

  return (
    <>
      <div className={`fixed top-6 right-6 z-50 transition-all duration-300`}>
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer ${
            isScrolled || isNavOpen
              ? "bg-zinc-900/90 backdrop-blur-md border border-zinc-700/50 shadow-lg"
              : "bg-zinc-800/60 backdrop-blur-sm border border-zinc-600/30"
          } hover:bg-blue-600 hover:border-blue-500 group`}
        >
          <svg
            className={`w-6 h-6 text-slate-300 group-hover:text-white transition-all duration-300 ${
              isNavOpen ? "rotate-90" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isNavOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isNavOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 cursor-pointer"
          onClick={() => setIsNavOpen(false)}
        />
      )}

      <nav
        className={`fixed top-6 right-20 h-auto bg-zinc-900/95 backdrop-blur-xl border border-zinc-700/50 rounded-2xl z-40 transform transition-all duration-300 ease-in-out ${
          isNavOpen
            ? "translate-x-0 opacity-100 scale-100"
            : "translate-x-full opacity-0 scale-95"
        }`}
      >
        <div className="hidden md:block">
          <div className="flex items-center px-6 py-4">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => handleNavItemClick(item.href)}
                className="group flex items-center space-x-2 text-slate-300 hover:text-blue-400 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-zinc-800/50 whitespace-nowrap cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="text-sm font-light">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="md:hidden p-6">
          <div className="space-y-3 min-w-[200px]">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => handleNavItemClick(item.href)}
                className="group flex items-center space-x-3 text-slate-300 hover:text-blue-400 transition-all duration-300 p-3 rounded-lg hover:bg-zinc-800/50 border border-transparent hover:border-blue-500/30 w-full text-left cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="text-base font-light">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
