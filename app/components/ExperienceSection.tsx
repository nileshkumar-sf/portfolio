// ExperienceSection.tsx
import React from "react";

type Experience = {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
  achievements?: string[];
};

const experiences: Experience[] = [
  {
    company: "SourceFuse",
    role: "Software Engineer",
    period: "Jan 2022 – Aug 2025",
    responsibilities: [
      "Worked on multiple production-grade architectures across backend, frontend, and cloud.",
      "Mentored junior developers and regularly contributed to code reviews and design discussions.",
      "Collaborated with cross-functional teams including QA, DevOps, and product to deliver end-to-end features.",
      "Built internal tools and open-source libraries to streamline development workflows.",
      "Currently serving notice period until 14th August 2025.",
    ],
  },
  {
    company: "Airtel",
    role: "Software Engineer",
    period: "Joining on 14th August 2025",
    responsibilities: [
      "Will be joining Airtel’s NSO – Business Process Automation team. Responsibilities will be defined post onboarding.",
    ],
  },
];


export default function ExperienceSection() {
  return (
    <section className="w-full min-h-screen py-20 px-6 rounded-xl shadow-lg text-slate-100">
      <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
      <div className="flex flex-col items-center gap-8 max-w-2xl mx-auto relative">
        {experiences.map((exp, idx) => (
          <div key={idx} className="flex items-center w-full relative">
            <div className="flex flex-col items-center mr-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 border-4 border-blue-300 flex items-center justify-center shadow-lg z-10">
                <span className="text-white font-bold">{idx + 1}</span>
              </div>
              {idx < experiences.length - 1 && (
                <div className="w-1 h-24 bg-blue-400 mx-auto -mt-7"></div>
              )}
            </div>
            <div className="bg-slate-800 shadow-lg rounded-lg p-6 border border-slate-700 flex-1">
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-blue-300">{exp.role}</h3>
                  <p className="text-slate-300">{exp.company}</p>
                </div>
                <span className="text-sm text-slate-400 mt-2 md:mt-0">{exp.period}</span>
              </div>
              <div className="mb-4">
                <h4 className="font-medium text-blue-200">Key Responsibilities:</h4>
                <ul className="list-disc list-inside ml-4">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="text-slate-200">{item}</li>
                  ))}
                </ul>
              </div>
              {exp.achievements && exp.achievements.length > 0 && (
                <div className="mb-2">
                  <h4 className="font-medium text-blue-200">Achievements:</h4>
                  <ul className="list-disc list-inside ml-4">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="text-slate-200">{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}