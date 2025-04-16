import HeroMain from "./sections/hero/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import SubHero from "./sections/subhero/SubHero";

function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
      <SubHero />
    </main>
  );
}

export default App;
