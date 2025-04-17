import HeroMain from "./sections/hero/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import SubHero from "./components/SubHero";
import AboutMain from "./sections/about/AboutMain";
import Helper from "./components/Helper";
import SkillsMain from "./sections/skills/SkillsMain";
import SubSkills from "./components/SubSkills";
import ExperienceMain from "./sections/experience/ExperienceMain";
import ProjectsMain from "./sections/projects/ProjectsMain";
import ContactMain from "./sections/contact/ContactMain";
import FooterMain from "./components/footer/FooterMain";

function App() {
  return (
    <main className="font-body">
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
