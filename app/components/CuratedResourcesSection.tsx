'use client';
import React from "react";
import Image from "next/image";

const resources = [
  {
    name: "Beej's Guide to Network Programming",
    url: "https://beej.us/guide/bgnet/html/split/",
    desc: "Practical guide to network programming in C.",
  },
  {
    name: "Docker Curriculum",
    url: "https://docker-curriculum.com/",
    desc: "Hands-on Docker tutorial for beginners and intermediates.",
  },
  {
    name: "Docker Handbook",
    url: "https://docker-handbook.farhan.dev/",
    desc: "Comprehensive Docker guide for developers.",
  },
  {
    name: "Full Stack Open",
    url: "https://fullstackopen.com/en/",
    desc: "Free course on modern web development with JavaScript.",
  },
  {
    name: "High Performance Browser Networking",
    url: "https://hpbn.co/",
    desc: "In-depth guide to networking for web developers.",
  },
  {
    name: "How Browsers Work",
    url: "https://web.dev/articles/howbrowserswork",
    desc: "Comprehensive article on browser internals and rendering engines.",
  },
  {
    name: "HTTP Working Group Specifications",
    url: "https://httpwg.org/specs/",
    desc: "Official HTTP protocol specifications and related documents.",
  },
  {
    name: "Martin Fowler",
    url: "https://martinfowler.com/",
    desc: "Articles and books on software architecture and design.",
  },
  {
    name: "Microservices.io",
    url: "https://microservices.io/",
    desc: "Patterns and concepts for microservices architecture.",
  },
  {
    name: "Stanford CS Library",
    url: "http://cslibrary.stanford.edu/",
    desc: "Classic CS papers and educational resources.",
  },
  {
    name: "Teach Yourself Computer Science",
    url: "https://teachyourselfcs.com/",
    desc: "Self-study curriculum for foundational CS topics.",
  },
  {
    name: "The Internals of PostgreSQL",
    url: "https://www.interdb.jp/pg/index.html",
    desc: "Detailed exploration of PostgreSQL's internal architecture.",
  },
  {
    name: "The Twelve-Factor App",
    url: "https://12factor.net/",
    desc: "Best practices for building scalable SaaS applications.",
  },
  {
    name: "Use The Index, Luke!",
    url: "https://use-the-index-luke.com/",
    desc: "A guide to database indexing and performance for developers.",
  },
];

function getPreviewImage(url: string) {
  return `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;
}

export default function CuratedResourcesSection() {
  // Sort resources alphabetically by name
  const sortedResources = [...resources].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <section id="curated-resources" className="w-full py-20 px-6 flex flex-col items-center justify-center text-slate-100">
      <h2 className="text-3xl font-bold mb-6 text-center">Interesting reads</h2>
      <p className="max-w-xl mb-8 text-slate-300 text-center">
        A handpicked collection of high-quality, unique, and rare resources for deepening your knowledge in computer science, software engineering, and system design:
      </p>
      <ul className="max-w-2xl w-full space-y-6">
        {sortedResources.map((res) => (
          <li key={res.url} className="bg-slate-800 rounded-lg p-4 shadow flex flex-col md:flex-row gap-4 items-center">
            <a href={res.url} target="_blank" rel="noopener noreferrer" className="block md:w-80 w-full flex-shrink-0">
              <Image
                src={getPreviewImage(res.url)}
                alt={`Preview of ${res.name}`}
                width={320}
                height={200}
                className="rounded-md w-full h-48 object-cover bg-slate-700"
                unoptimized
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </a>
            <div className="flex-1">
              <a href={res.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 font-semibold hover:underline text-lg">
                {res.name}
              </a>
              <div className="text-slate-300 text-sm mt-1">{res.desc}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}