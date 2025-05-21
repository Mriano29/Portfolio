export function Projects() {
  const experience = [
    {
      title: "Internship at Reply Next",
      description:
        "Helped creating new functionalities, maintaining the codebase, bugfixes and took part in migrating the codebase to a new framework.",
      date: "March 2023 - May 2023",
      Keywords: ["TypeScript", "React", "Node.js", "RTK", "Figma", "Next.js"],
    },
  ];

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center text-center px-4 py-10 gap-5"
    >
      <h2 className="text-3xl xl:text-5xl text-blue-600 font-semibold text-center">
        Experience
      </h2>
      {experience.map((exp, index) => (
        <div
          key={index}
          className="max-w-xl w-full bg-blue-900 p-6 rounded-xl shadow-lg text-white text-left"
        >
          <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
          <p className="text-sm text-gray-400 mb-2">{exp.date}</p>
          <p className="mb-4">{exp.description}</p>
          <div className="flex flex-wrap gap-2">
            {exp.Keywords.map((keyword, i) => (
              <span
                key={i}
                className="bg-gray-700 text-xs px-2 py-1 rounded-full"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
