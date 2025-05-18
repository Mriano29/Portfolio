import About from "./components/about";
import Contact from "./components/contact";
import { NavBar } from "./components/navBar";
import Projects from "./components/projects";
import Skills from "./components/skills";
import WelcomeHero from "./components/welcomeHero";

export function App() {
  return (
    <main className="h-full w-full flex flex-col">
      <NavBar />
      <WelcomeHero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
