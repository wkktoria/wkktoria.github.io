import HeroMain from "./sections/hero/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import SubHero from "./components/SubHero";
import AboutMain from "./sections/about/AboutMain";
import SkillsMain from "./sections/skills/SkillsMain";
import SubSkills from "./components/SubSkills";
import ExperienceMain from "./sections/experience/ExperienceMain";
import ProjectsMain from "./sections/projects/ProjectsMain";
import ContactMain from "./sections/contact/ContactMain";
import FooterMain from "./components/footer/FooterMain";

function App() {
  return (
    <main className="font-body text-white relative overflow-hidden">
      <NavbarMain />
      <HeroMain />
      <SubHero />
      <AboutMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <ProjectsMain />
      <ContactMain />
      <FooterMain />
    </main>
  );
}

export default App;
