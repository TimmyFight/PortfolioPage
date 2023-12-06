import AboutSection from "./components/Organisms/AboutSection/AboutSection";
import ExperienceSection from "./components/Organisms/ExperienceSection/ExperienceSection";
import ProjectsSection from "./components/Organisms/ProjectsSection/ProjectsSection";
import ArticlesSection from "./components/Organisms/ArticlesSection/ArticlesSection";

export default function Home() {
  return (
    <section
      className="flex flex-col gap-3 items-center h-screen p-28 text-neutral-400 bg-gradient-to-r from-neutral-900 to-neutral-800"
      data-testid="applicationContainer text-justify">
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ArticlesSection />
    </section>
  );
}
