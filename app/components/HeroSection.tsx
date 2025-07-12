import React from "react";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center py-20 px-4 text-slate-100">
      <h1 className="text-4xl font-bold mb-4 tracking-wide text-center">Nilesh Kumar</h1>
      <h2 className="text-xl mb-4 tracking-tight text-center">Software Engineer • JavaScript Specialist</h2>
      <p className="max-w-2xl text-center mb-8 text-slate-300">
        I design systems with intention — scalable in architecture, resilient in design, and elegant in developer and user experience. With 3+ years of hands-on experience across backend, frontend, and cloud, I don&apos;t just write code — I craft solutions that last, scale, and evolve.
      </p>
    </section>
  );
}