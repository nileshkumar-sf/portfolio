'use client';
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/nileshkumar-sf', icon: FaGithub },
  { name: 'GitHub', href: 'https://github.com/nileshkr9919', icon: FaGithub },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/nilesh-kr', icon: FaLinkedin },
  { name: 'LeetCode', href: 'https://leetcode.com/nileshkr9919', icon: SiLeetcode },
  { name: 'HackerRank', href: 'https://www.hackerrank.com/nileshkr9919', icon: FaHackerrank },
];

import React from "react";


export default function Footer() {
  return (
    <>
      {/* Desktop: fixed right vertical */}
      <aside
        className="hidden md:flex fixed right-4 bottom-24 flex-col gap-6 bg-transparent border border-slate-800 rounded-xl p-3 z-40 shadow-none"
        aria-label="External profiles"
      >
        {socialLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <Icon className="w-6 h-6" />
            </a>
          );
        })}
      </aside>
      {/* Mobile: horizontal bottom bar */}
      <aside
        className="flex md:hidden fixed bottom-2 left-1/2 -translate-x-1/2 flex-row gap-6 bg-slate-900/80 border border-slate-800 rounded-xl px-4 py-2 z-40 shadow-lg"
        aria-label="External profiles"
      >
        {socialLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <Icon className="w-6 h-6" />
            </a>
          );
        })}
      </aside>
    </>
  );
}