import React from "react";

export default function AboutSection() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center py-20 px-6 rounded-xl shadow-lg text-slate-100">
      <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
      <p className="max-w-2xl mb-8 text-slate-300 text-center">
        I’m a software engineer with 3+ years of experience working across backend systems, frontend interfaces, and cloud-native infrastructure. I’ve built production-ready solutions using technologies like Node.js, LoopBack 4, Angular, React, PostgreSQL, and AWS — with a strong focus on clean architecture and long-term maintainability.
      </p>
      <p className="max-w-2xl mb-8 text-slate-300 text-center">
        I enjoy working in fast-paced environments where I can design solutions from scratch, implement them end-to-end, and optimize for both the developer and user experience. Lately, I&apos;ve been building tools, exploring system design patterns, and simplifying complex workflows in large-scale applications.
      </p>
      <div className="w-full flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-2 text-blue-300 text-center">Education</h3>
        <ul className="list-disc list-inside text-slate-200 text-center">
          <li>Bachelor of Computer Applications, University of Lucknow (2019–2022)</li>
          <li>Higher Secondary Certificate, St. Francis&apos; College, Lucknow (2017–2019)</li>
        </ul>
      </div>
    </section>
  );
}
