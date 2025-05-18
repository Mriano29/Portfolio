export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center px-4 bg-gray-100 gap-5 lg:gap-20 pt-24"
    >
      <img
        src="marr.jpg"
        alt="Miguel Riaño picture"
        className="rounded-3xl max-w-xs md:max-w-sm"
      />
      <div className="flex flex-col">
        <h2 className="text-5xl font-bold mb-4 text-blue-600">About me</h2>
        <p className="text-xl text-gray-700 mb-6">
          I am a junior multi-platform app developer with a passion for creating
          innovative and user-friendly applications. I have a strong foundation
          in programming languages and frameworks, and I am always eager to
          learn new technologies and improve my skills.
        </p>
      </div>
    </section>
  );
}
