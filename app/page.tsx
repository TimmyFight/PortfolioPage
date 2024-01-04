import AboutSection from './components/Organisms/AboutSection/AboutSection';
import ArticlesSection from './components/Organisms/ArticlesSection/ArticlesSection';
import ExperienceSection from './components/Organisms/ExperienceSection/ExperienceSection';
import ProjectsSection from './components/Organisms/ProjectsSection/ProjectsSection';

export default function Home() {
  return (
    <section
      className="flex flex-col gap-3 items-center px-10 lg:px-2 pb-10 lg:pb-28 text-neutral-400 text-justify"
      data-testid="applicationContainer"
    >
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ArticlesSection />
    </section>
  );
}
