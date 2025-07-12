"use client";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaUser, FaBriefcase, FaProjectDiagram, FaCode, FaEnvelope } from "react-icons/fa";
import { MdStars } from "react-icons/md";

const sections = [
  { id: "hero", label: "Home", icon: AiOutlineHome },
  { id: "about", label: "About", icon: FaUser },
  { id: "experience", label: "Experience", icon: FaBriefcase },
  { id: "projects", label: "Projects", icon: FaProjectDiagram },
  { id: "skills", label: "Skills", icon: MdStars },
  { id: "coding-profiles", label: "Coding Profiles", icon: FaCode },
  { id: "contact", label: "Contact", icon: FaEnvelope },
];

export default function SideStepperNav() {
  const [activeId, setActiveId] = React.useState<string>("hero");

  React.useEffect(() => {
    const handleScroll = () => {
      let found = "hero";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            found = section.id;
            break;
          }
        }
      }
      setActiveId(found);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className="sticky top-8 md:fixed md:left-6 md:top-1/2 md:-translate-y-1/2 z-50 flex flex-row md:flex-col gap-2 md:gap-3 bg-slate-900/90 p-2 md:p-4 rounded-xl shadow-lg border border-slate-800
      max-w-full overflow-x-auto md:max-w-xs"
      aria-label="Section navigation"
    >
      {sections.map((section) => {
        const Icon = section.icon;
        return (
          <button
            key={section.id}
            onClick={() => handleScroll(section.id)}
            className={`w-full flex items-center gap-3 text-left px-4 py-2 rounded-2xl border-2 transition-all duration-300
              bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900
              ${
                activeId === section.id
                  ? "border-blue-400 shadow-lg font-bold text-blue-300 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900"
                  : "border-slate-700 text-slate-100 hover:border-blue-300 hover:text-blue-200 hover:bg-gradient-to-r hover:from-slate-800 hover:via-blue-900 hover:to-slate-800"
              }
              focus:outline-none focus:ring-2 focus:ring-blue-400`}
            style={{
              boxShadow:
                activeId === section.id
                  ? "0 4px 24px 0 rgba(40, 120, 255, 0.15)"
                  : "0 2px 8px 0 rgba(30, 41, 59, 0.10)",
              backdropFilter: "blur(2px)",
            }}
            aria-label={`Go to ${section.label}`}
          >
            <Icon className={`h-5 w-5 ${activeId === section.id ? "text-blue-300" : "text-slate-400"} transition-colors duration-200`} />
            {section.label}
          </button>
        );
      })}
    </nav>
  );
}