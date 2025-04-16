import HeroMain from "./sections/hero/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import SubHero from "./sections/subhero/SubHero";
import AboutMain from "./sections/about/AboutMain";
import Helper from "./components/Helper";
import SkillsMain from "./sections/skills/SkillsMain";
import SubSkills from "./sections/subskills/SubSkills";

function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
      <SubHero />
      <AboutMain />
      <SkillsMain />
      <SubSkills />
      <Helper />
    </main>
  );
}

export default App;
