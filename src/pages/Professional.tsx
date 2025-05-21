import { Skills, WelcomeHero } from "../sections";

export function Professional() {
  return (
    <main className="h-full w-full flex flex-col md:px-10 lg:px-0 gap-10">
      <WelcomeHero />
      <Skills />
    </main>
  );
}
