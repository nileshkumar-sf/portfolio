import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import CodingProfilesSection from "./components/CodingProfilesSection";
import SideStepperNav from "./components/SideStepperNav";
import CuratedResourcesSection from "./components/CuratedResourcesSection";

export default function Home() {
  return (
    <div className="flex w-full relative min-h-screen">
      <div className="hidden md:block md:w-56">
        <SideStepperNav />
      </div>
      <main className="flex-1 flex flex-col items-center justify-center w-full">
        <section id="hero" className="w-full">
          <HeroSection />
        </section>
        <section id="about" className="w-full">
          <AboutSection />
        </section>
        <section id="experience" className="w-full">
          <ExperienceSection />
        </section>
        <section id="projects" className="w-full">
          <ProjectsSection />
        </section>
        <section id="skills" className="w-full">
          <SkillsSection />
        </section>
        <section id="coding-profiles" className="w-full">
          <CodingProfilesSection />
        </section>
        <section id="curated-resources" className="w-full">
          <CuratedResourcesSection />
        </section>
        <section id="contact" className="w-full min-h-screen py-20 px-6 flex flex-col items-center justify-center text-slate-100">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>
          <p className="max-w-xl mb-4 text-slate-300 text-center">
            Feel free to reach out for collaboration, opportunities, or just to say hello!
          </p>
          <a
            href="mailto:nileshkr9919@gmail.com"
            className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-800 transition-colors"
          >
            Email Me
          </a>
        </section>
      </main>
    </div>
  );
}
