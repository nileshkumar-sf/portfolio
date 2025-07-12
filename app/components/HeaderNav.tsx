"use client";

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Coding Profiles', href: '#coding-profiles' },
  { name: 'Contact', href: '#contact' },
];

export default function HeaderNav() {
  return (
    <header className="w-full border-b border-slate-800 shadow-lg" style={{background: "none"}}>
      <nav className="flex justify-center gap-8 py-4">
        {navLinks.map(link => (
          <a
            key={link.name}
            href={link.href}
            className="relative text-slate-100 font-medium px-2 py-1 transition-colors duration-300 group"
            onClick={e => {
              e.preventDefault();
              const id = link.href.replace('#', '');
              const el = document.getElementById(id);
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            <span className="relative z-10">{link.name}</span>
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded"></span>
          </a>
        ))}
      </nav>
    </header>
  );
}