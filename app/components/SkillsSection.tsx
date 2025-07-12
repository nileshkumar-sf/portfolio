// [`SkillsSection.tsx`](portfolio/app/components/SkillsSection.tsx)
import React from "react";

const skills = {
  Languages: ["TypeScript", "JavaScript", "Python", "Java"],
  Frameworks: ["Next.js", "React", "Angular", "Node.js", "Express", "LoopBack 4", "Nest.js"],
  Databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  "Tools/Other": ["Git", "Docker", "Camunda BPM", "AWS"],
};

export default function SkillsSection() {
  return (
    <section className="w-full min-h-screen py-20 px-6 text-slate-100">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-300 drop-shadow">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="bg-transparent rounded-lg shadow p-6 flex flex-col border border-slate-700"
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-200">
              {category}
            </h3>
            <ul className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <li
                  key={skill}
                  className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm font-medium border border-blue-700"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}