import HeroMain from "./sections/hero/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import SubHero from "./sections/subhero/SubHero";
import AboutMain from "./sections/about/AboutMain";

function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
      <SubHero />
      <AboutMain />
    </main>
  );
}

export default App;
