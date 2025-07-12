"use client";
import React, { useEffect, useState } from "react";
import { FaAngular, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaGitAlt, FaAws, FaJava } from "react-icons/fa";
import { SiPostgresql, SiTypescript, SiReact, SiDocker, SiJavascript, SiMongodb, SiRedis, SiExpress, SiNestjs, SiNextdotjs } from "react-icons/si";

const techIcons = [
  { icon: FaAngular, name: "Angular", color: "#dd0031" },
  { icon: FaNodeJs, name: "Node.js", color: "#68a063" },
  { icon: SiNestjs, name: "NestJS", color: "#ea2845" },
  { icon: SiNextdotjs, name: "Next.js", color: "#fff" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178c6" },
  { icon: SiReact, name: "React", color: "#61dafb" },
  { icon: SiDocker, name: "Docker", color: "#2496ed" },
  { icon: FaPython, name: "Python", color: "#3776ab" },
  { icon: SiJavascript, name: "JavaScript", color: "#f7df1e" },
  { icon: FaAws, name: "AWS", color: "#ff9900" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiRedis, name: "Redis", color: "#DC382D" },
  { icon: SiExpress, name: "Express", color: "#444" },
  { icon: FaHtml5, name: "HTML5", color: "#e34c26" },
  { icon: FaCss3Alt, name: "CSS3", color: "#2965f1" },
  { icon: FaGitAlt, name: "Git", color: "#f1502f" },
  { icon: FaJava, name: "Java", color: "#007396" },
];

function getRandomPositions(count: number) {
  const positions: { 
    top: string; 
    left: string; 
    duration: string; 
    delay: string; 
    pulseDelay: string;
    orbitRadius: number;
    orbitDuration: string;
  }[] = [];
  const minDist = 12;
  const edgeDist = 10;

  for (let i = 0; i < count; i++) {
    let tries = 0;
    let top: number, left: number;
    do {
      top = edgeDist + Math.random() * (100 - 2 * edgeDist);
      left = edgeDist + Math.random() * (100 - 2 * edgeDist);
      tries++;
    } while (
      positions.some(
        p =>
          Math.abs(parseFloat(p.top) - top) < minDist &&
          Math.abs(parseFloat(p.left) - left) < minDist
      ) &&
      tries < 100
    );
    
    positions.push({
      top: `${top}%`,
      left: `${left}%`,
      duration: `${8 + Math.random() * 4}s`,
      delay: `${Math.random() * 6}s`,
      pulseDelay: `${Math.random() * 3}s`,
      orbitRadius: 15 + Math.random() * 25,
      orbitDuration: `${15 + Math.random() * 10}s`,
    });
  }
  return positions;
}

const TechOrb = ({ 
  children, 
  color, 
  pulseDelay, 
  orbitRadius, 
  orbitDuration 
}: { 
  children: React.ReactNode; 
  color: string; 
  pulseDelay: string;
  orbitRadius: number;
  orbitDuration: string;
}) => {
  return (
    <div className="relative">
      {/* Outer energy ring */}
      <div 
        className="absolute animate-energy-ring"
        style={{
          width: '80px',
          height: '80px',
          left: '-10px',
          top: '-10px',
          borderRadius: '50%',
          background: `conic-gradient(from 0deg, transparent, ${color}40, transparent, ${color}60, transparent)`,
          animationDelay: pulseDelay,
          animationDuration: orbitDuration,
        }}
      />
      
      {/* Orbiting particles */}
      <div 
        className="absolute animate-orbit-1"
        style={{
          width: '4px',
          height: '4px',
          background: color,
          borderRadius: '50%',
          left: `${30 + orbitRadius}px`,
          top: '28px',
          boxShadow: `0 0 6px ${color}`,
          animationDuration: orbitDuration,
          animationDelay: pulseDelay,
        }}
      />
      <div 
        className="absolute animate-orbit-2"
        style={{
          width: '3px',
          height: '3px',
          background: color,
          borderRadius: '50%',
          left: `${30 + orbitRadius * 0.7}px`,
          top: '29px',
          boxShadow: `0 0 4px ${color}`,
          animationDuration: `${parseFloat(orbitDuration) * 0.8}s`,
          animationDelay: `calc(${pulseDelay} + 0.5s)`,
        }}
      />
      
      {/* Main orb container */}
      <div 
        className="relative w-16 h-16 rounded-full animate-orb-pulse"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${color}20, ${color}60, ${color}90)`,
          boxShadow: `
            0 0 20px ${color}40,
            0 0 40px ${color}20,
            inset 0 0 20px ${color}30
          `,
          animationDelay: pulseDelay,
        }}
      >
        {/* Inner glow */}
        <div 
          className="absolute inset-2 rounded-full animate-inner-glow"
          style={{
            background: `radial-gradient(circle at 40% 40%, ${color}40, transparent 70%)`,
            animationDelay: pulseDelay,
          }}
        />
        
        {/* Shimmer effect */}
        <div 
          className="absolute inset-0 rounded-full animate-shimmer"
          style={{
            background: `linear-gradient(45deg, transparent 30%, ${color}20 50%, transparent 70%)`,
            animationDelay: `calc(${pulseDelay} + 1s)`,
          }}
        />
        
        {/* Tech icon */}
        <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold z-10" style={{ filter: 'none', textShadow: '0 0 8px rgba(0,0,0,0.8)' }}>
          {children}
        </div>
        
        {/* Sparkle effects */}
        <div className="absolute top-1 right-2 w-1 h-1 bg-white rounded-full animate-sparkle-1" style={{ animationDelay: pulseDelay }} />
        <div className="absolute bottom-2 left-2 w-1 h-1 bg-white rounded-full animate-sparkle-2" style={{ animationDelay: `calc(${pulseDelay} + 0.7s)` }} />
        <div className="absolute top-1/2 left-1 w-1 h-1 bg-white rounded-full animate-sparkle-3" style={{ animationDelay: `calc(${pulseDelay} + 1.4s)` }} />
      </div>
      
      {/* Floating energy wisps */}
      <div 
        className="absolute animate-wisp-1"
        style={{
          width: '2px',
          height: '8px',
          background: `linear-gradient(to bottom, ${color}, transparent)`,
          left: '10px',
          top: '5px',
          borderRadius: '1px',
          animationDelay: pulseDelay,
        }}
      />
      <div 
        className="absolute animate-wisp-2"
        style={{
          width: '2px',
          height: '6px',
          background: `linear-gradient(to bottom, ${color}, transparent)`,
          right: '8px',
          bottom: '8px',
          borderRadius: '1px',
          animationDelay: `calc(${pulseDelay} + 0.8s)`,
        }}
      />
    </div>
  );
};

export default function TechStackBackground() {
  const [positions, setPositions] = useState<{
    top: string;
    left: string;
    duration: string;
    delay: string;
    pulseDelay: string;
    orbitRadius: number;
    orbitDuration: string;
  }[]>([]);

  useEffect(() => {
    setPositions(getRandomPositions(techIcons.length));
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/3 via-blue-900/3 to-cyan-900/3 animate-ambient-glow" />
      
      {/* Background blur overlay */}
      <div className="absolute inset-0 backdrop-blur-[0.5px] bg-black/5" />
      
      {techIcons.map((tech, i) => {
        const Icon = tech.icon;
        const pos = positions[i] || {
          top: "50%",
          left: "50%",
          duration: "10s",
          delay: "0s",
          pulseDelay: "0s",
          orbitRadius: 20,
          orbitDuration: "20s",
        };
        return (
          <div
            key={tech.name + i}
            className="absolute animate-tech-float"
            style={{
              top: pos.top,
              left: pos.left,
              transform: 'translate(-50%, -50%)',
              animationDuration: pos.duration,
              animationDelay: pos.delay,
              opacity: 0.6,
              filter: 'blur(0.3px)',
            }}
            aria-label={tech.name}
          >
            <TechOrb 
              color={tech.color} 
              pulseDelay={pos.pulseDelay}
              orbitRadius={pos.orbitRadius}
              orbitDuration={pos.orbitDuration}
            >
              <Icon />
            </TechOrb>
          </div>
        );
      })}
      
      <style jsx>{`
        @keyframes tech-float {
          0% { transform: translate(-50%, -50%) translateY(0) translateX(0) scale(1) rotate(0deg); }
          20% { transform: translate(-50%, -50%) translateY(-25px) translateX(10px) scale(1.05) rotate(2deg); }
          40% { transform: translate(-50%, -50%) translateY(-15px) translateX(-8px) scale(0.95) rotate(-1deg); }
          60% { transform: translate(-50%, -50%) translateY(-35px) translateX(5px) scale(1.08) rotate(1deg); }
          80% { transform: translate(-50%, -50%) translateY(-10px) translateX(-12px) scale(1.02) rotate(-2deg); }
          100% { transform: translate(-50%, -50%) translateY(0) translateX(0) scale(1) rotate(0deg); }
        }
        
        @keyframes orb-pulse {
          0% { transform: scale(1); filter: brightness(0.8) saturate(1.2); }
          25% { transform: scale(1.12); filter: brightness(1.1) saturate(1.5); }
          50% { transform: scale(1.08); filter: brightness(1.3) saturate(1.8); }
          75% { transform: scale(1.15); filter: brightness(1.0) saturate(1.3); }
          100% { transform: scale(1); filter: brightness(0.8) saturate(1.2); }
        }
        
        @keyframes inner-glow {
          0% { opacity: 0.3; transform: scale(1) rotate(0deg); }
          33% { opacity: 0.7; transform: scale(1.2) rotate(120deg); }
          66% { opacity: 0.5; transform: scale(1.15) rotate(240deg); }
          100% { opacity: 0.3; transform: scale(1) rotate(360deg); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-150%) translateY(-20px) rotate(45deg); opacity: 0; }
          10% { opacity: 0.8; }
          50% { opacity: 1; transform: translateX(0%) translateY(0px) rotate(45deg); }
          90% { opacity: 0.6; }
          100% { transform: translateX(150%) translateY(20px) rotate(45deg); opacity: 0; }
        }
        
        @keyframes energy-ring {
          0% { transform: rotate(0deg) scale(1); opacity: 0.2; }
          25% { transform: rotate(90deg) scale(1.15); opacity: 0.5; }
          50% { transform: rotate(180deg) scale(1.25); opacity: 0.7; }
          75% { transform: rotate(270deg) scale(1.1); opacity: 0.4; }
          100% { transform: rotate(360deg) scale(1); opacity: 0.2; }
        }
        
        @keyframes orbit-1 {
          0% { transform: rotate(0deg) translateX(20px) rotate(0deg) scale(1); }
          25% { transform: rotate(90deg) translateX(20px) rotate(-90deg) scale(1.2); }
          50% { transform: rotate(180deg) translateX(20px) rotate(-180deg) scale(1); }
          75% { transform: rotate(270deg) translateX(20px) rotate(-270deg) scale(1.1); }
          100% { transform: rotate(360deg) translateX(20px) rotate(-360deg) scale(1); }
        }
        
        @keyframes orbit-2 {
          0% { transform: rotate(0deg) translateX(15px) rotate(0deg) scale(1); }
          30% { transform: rotate(-108deg) translateX(15px) rotate(108deg) scale(0.8); }
          60% { transform: rotate(-216deg) translateX(15px) rotate(216deg) scale(1.1); }
          100% { transform: rotate(-360deg) translateX(15px) rotate(360deg) scale(1); }
        }
        
        @keyframes sparkle-1 {
          0%, 60% { opacity: 0; transform: scale(0) rotate(0deg); }
          70% { opacity: 0.8; transform: scale(1.8) rotate(180deg); }
          85% { opacity: 1; transform: scale(1.5) rotate(270deg); }
          100% { opacity: 0; transform: scale(0) rotate(360deg); }
        }
        
        @keyframes sparkle-2 {
          0%, 50% { opacity: 0; transform: scale(0) rotate(0deg); }
          60% { opacity: 0.6; transform: scale(1.3) rotate(120deg); }
          80% { opacity: 1; transform: scale(1.6) rotate(240deg); }
          100% { opacity: 0; transform: scale(0) rotate(360deg); }
        }
        
        @keyframes sparkle-3 {
          0%, 70% { opacity: 0; transform: scale(0) rotate(0deg); }
          80% { opacity: 0.9; transform: scale(1.4) rotate(90deg); }
          95% { opacity: 1; transform: scale(1.2) rotate(180deg); }
          100% { opacity: 0; transform: scale(0) rotate(270deg); }
        }
        
        @keyframes wisp-1 {
          0% { opacity: 0; transform: translateY(0) translateX(0) scale(1) rotate(0deg); }
          20% { opacity: 0.6; transform: translateY(-5px) translateX(3px) scale(1.1) rotate(10deg); }
          50% { opacity: 0.9; transform: translateY(-15px) translateX(-2px) scale(1.3) rotate(-5deg); }
          80% { opacity: 0.4; transform: translateY(-25px) translateX(5px) scale(0.9) rotate(15deg); }
          100% { opacity: 0; transform: translateY(-35px) translateX(0px) scale(0.7) rotate(0deg); }
        }
        
        @keyframes wisp-2 {
          0% { opacity: 0; transform: translateY(0) translateX(0) scale(1) rotate(0deg); }
          30% { opacity: 0.5; transform: translateY(-8px) translateX(-4px) scale(1.2) rotate(-8deg); }
          60% { opacity: 0.8; transform: translateY(-18px) translateX(2px) scale(1.1) rotate(12deg); }
          90% { opacity: 0.3; transform: translateY(-28px) translateX(-3px) scale(0.8) rotate(-6deg); }
          100% { opacity: 0; transform: translateY(-38px) translateX(0px) scale(0.6) rotate(0deg); }
        }
        
        @keyframes ambient-glow {
          0% { opacity: 0.8; transform: scale(1); }
          25% { opacity: 0.5; transform: scale(1.02); }
          50% { opacity: 0.9; transform: scale(1.01); }
          75% { opacity: 0.6; transform: scale(1.03); }
          100% { opacity: 0.8; transform: scale(1); }
        }
        
        .animate-tech-float {
          animation-name: tech-float;
          animation-iteration-count: infinite;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-orb-pulse {
          animation-name: orb-pulse;
          animation-duration: 5s;
          animation-iteration-count: infinite;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-inner-glow {
          animation-name: inner-glow;
          animation-duration: 6s;
          animation-iteration-count: infinite;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-shimmer {
          animation-name: shimmer;
          animation-duration: 3s;
          animation-iteration-count: infinite;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-energy-ring {
          animation-name: energy-ring;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }
        
        .animate-orbit-1 {
          animation-name: orbit-1;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }
        
        .animate-orbit-2 {
          animation-name: orbit-2;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }
        
        .animate-sparkle-1 {
          animation-name: sparkle-1;
          animation-duration: 4s;
          animation-iteration-count: infinite;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-sparkle-2 {
          animation-name: sparkle-2;
          animation-duration: 5s;
          animation-iteration-count: infinite;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-sparkle-3 {
          animation-name: sparkle-3;
          animation-duration: 6s;
          animation-iteration-count: infinite;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-wisp-1 {
          animation-name: wisp-1;
          animation-duration: 5s;
          animation-iteration-count: infinite;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-wisp-2 {
          animation-name: wisp-2;
          animation-duration: 6s;
          animation-iteration-count: infinite;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-ambient-glow {
          animation-name: ambient-glow;
          animation-duration: 12s;
          animation-iteration-count: infinite;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
}