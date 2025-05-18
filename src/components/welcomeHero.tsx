export default function WelcomeHero() {
  return (
    <section
      id="welcome"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center px-4 bg-gray-100 gap-5 lg:gap-20 pt-24"
    >
      <div className="flex flex-col">
        <h1 className="text-5xl font-bold mb-4">Hello! My name is</h1>
        <h2 className="text-6xl font-bold text-blue-600 mb-4">Miguel Riaño</h2>
        <p className="text-xl text-gray-700 mb-6">
          Junior multi-platform app developer
        </p>
        <a
          href="#projects"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Ver Proyectos
        </a>
      </div>
      <img
        src="marr.jpg"
        alt="Miguel Riaño picture"
        className="rounded-3xl max-w-xs md:max-w-sm"
      />
    </section>
  );
}
