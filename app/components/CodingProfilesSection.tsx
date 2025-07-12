import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const profiles = [
  {
    name: "LinkedIn",
    username: "nilesh-kr",
    description: "Connect with me for professional updates and networking.",
    url: "https://www.linkedin.com/in/nilesh-kr/",
    icon: (
      <span className="text-blue-700">
        <FaLinkedin size={40} />
      </span>
    ),
  },
  {
    name: "GitHub",
    username: "nileshkumar-sf",
    description: "GitHub profile for professional projects.",
    url: "https://github.com/nileshkumar-sf",
    icon: (
      <span className="text-gray-800">
        <FaGithub size={40} />
      </span>
    ),
  },
  {
    name: "GitHub",
    username: "nileshkr9919",
    description: "Secondary GitHub profile for personal, archived and legacy work.",
    url: "https://github.com/nileshkr9919",
    icon: (
      <span className="text-gray-800">
        <FaGithub size={40} />
      </span>
    ),
  },
  {
    name: "LeetCode",
    username: "nileshkr9919",
    description: "Solving coding challenges and improving problem-solving skills.",
    url: "https://leetcode.com/nileshkr9919/",
    icon: (
      <span className="text-yellow-500">
        <SiLeetcode size={40} />
      </span>
    ),
  },
  {
    name: "HackerRank",
    username: "nileshkr9919",
    description: "Practicing algorithms and data structures.",
    url: "https://www.hackerrank.com/nileshkr9919",
    icon: (
      <span className="text-green-600">
        <FaHackerrank size={40} />
      </span>
    ),
  },
];

const CodingProfilesSection: React.FC = () => (
  <section className="w-full min-h-screen py-20 px-6 text-slate-100">
    <h2 className="text-3xl font-bold mb-8 text-center text-blue-300 drop-shadow">Coding Profiles</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-4xl mx-auto">
      {profiles.map((profile, idx) => (
        <a
          key={profile.url + idx}
          href={profile.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-xs bg-transparent rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-slate-700 flex flex-col items-center p-6 group"
        >
          <div className="mb-4">{profile.icon}</div>
          <div className="font-semibold text-lg text-blue-300 mb-1">{profile.name}</div>
          <div className="text-sm text-blue-200 mb-2">@{profile.username}</div>
          <div className="text-sm text-slate-200 text-center">{profile.description}</div>
        </a>
      ))}
    </div>
  </section>
);

export default CodingProfilesSection;