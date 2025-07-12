import React from "react";

type Project = {
  name: string;
  description: string;
  techStack: string[];
  githubLinks: { label: string; url: string }[];
};

const projects: Project[] = [
  {
    name: "NestJS CLI Enhancement",
    description:
      "Added a `remove` command to the official NestJS CLI that enables clean removal of apps in monorepo setups, automatically updating `nest-cli.json`. Improves developer experience in large codebases.",
    techStack: ["TypeScript", "NestJS", "CLI"],
    githubLinks: [
      {
        label: "GitHub PR #2437",
        url: "https://github.com/nestjs/nest-cli/pull/2437",
      },
    ],
  },
  {
    name: "Knowledge Transfer agent",
    description:
      "An agentic AI built using Crew AI that can explain any file from any codebase. Just provide a file, and the agent will analyze and explain its purpose, structure, and functionality.",
    techStack: ["Python", "Agentic AI", "Crew AI"],
    githubLinks: [
      {
        label: "nileshkumar-sf GitHub",
        url: "https://github.com/nileshkumar-sf/kt-agent",
      },
    ],
  },
  {
    name: "workflows-creator",
    description:
      "An open-source Angular library that provides an intuitive, statement-based UI for designing workflows. Users can configure trigger events, conditional events, timer events, actions, and branching logic. The library then generates a BPMN XML that can be deployed to workflow engines like Camunda for automation.",
    techStack: ["Angular", "TypeScript", "BPMN.js", "Camunda"],
    githubLinks: [
      {
        label: "nileshkr9919 GitHub",
        url: "https://github.com/nileshkr9919/workflows-creator",
      },
    ],
  },
  {
    name: "E-commerce application",
    description:
      "A backend-only order management system built with NestJS using a microservices architecture. Implements an event-driven design with Redis used for Pub/Sub, caching, and inter-service communication. Applies the SAGA pattern for managing distributed transactions between services. Follows modular service separation, and scalable infrastructure.",
    techStack: [
      "NestJS",
      "TypeScript",
      "Redis",
      "Microservices",
      "SAGA Pattern",
    ],
    githubLinks: [
      {
        label: "GitHub - nileshkumar-sf",
        url: "https://github.com/nileshkumar-sf/qp-assessment",
      },
    ],
  },
  {
    name: "Request-Body-Sanitizer",
    description:
      "A lightweight, framework-agnostic TypeScript library that sanitizes request bodies based on OpenAPI schemas. It automatically strips or transforms fields according to a declarative configuration, ensuring consistent, clean payloads across APIs. Compatible with any framework that supports OpenAPI-based request validation.",
    techStack: ["TypeScript", "OpenAPI"],
    githubLinks: [
      {
        label: "GitHub - nileshkumar-sf",
        url: "https://github.com/nileshkumar-sf/request-body-sanitizer",
      },
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section className="w-full min-h-screen py-20 px-6">
      <h2 className="text-3xl font-bold mb-8 text-slate-100 text-center">
        Highlighted Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-transparent rounded-xl shadow-lg p-6 flex flex-col justify-between border border-slate-700 hover:shadow-xl transition-shadow"
          >
            <div>
              <h3 className="text-xl font-semibold text-blue-300 mb-2">
                {project.name}
              </h3>
              <p className="text-slate-300 mb-4">{project.description}</p>
              <div className="mb-4">
                <span className="font-medium text-blue-200">Tech Stack:</span>
                <ul className="flex flex-wrap gap-2 mt-2">
                  {project.techStack.map((tech) => (
                    <li
                      key={tech}
                      className="bg-blue-900 text-blue-200 px-2 py-1 rounded text-xs font-medium border border-blue-700"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-4 flex gap-3">
              {project.githubLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative font-semibold text-blue-200 px-3 py-1 rounded transition-colors duration-300 group"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded"></span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
