// import Contact from "./components/contact";
import { NavBar } from "./components/navBar";
// import Projects from "./components/projects";
import Skills from "./components/skills";
import WelcomeHero from "./components/welcomeHero";

export function App() {
  return (
    <main className="h-screen w-full px-2 lg:px-10 xl:px-20  items-center bg-gray-950 overflow-y-auto">
      <NavBar />
      <WelcomeHero />
      <Skills />
      {/* <Projects /> */}
      {/* <Contact /> */}
    </main>
  );
}
