import { motion } from "framer-motion";

export function Projects() {
  const experience = [
    {
      title: "Internship at Reply Next",
      description:
        "Helped creating new functionalities, maintaining the codebase, bugfixes and took part in migrating the codebase to a new framework.",
      date: "March 2023 - May 2023",
      Keywords: ["TypeScript", "React", "Node.js", "RTK", "Figma", "Next.js"],
      icon: "💼",
    },
  ];

  const projects = [
    {
      title: "Portfolio",
      description:
        "This portfolio website, built with React and Tailwind CSS, showcases my skills and projects.",
      date: "2025",
      Keywords: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "TypeScript",
        "Tailwind CSS",
      ],
      icon: "🌐",
    },
    {
      title: "Sportcrew web",
      description:
        "A simple social media web app for sports enthusiasts, built with Next.js and Supabase.",
      date: "2025",
      Keywords: ["NextJs", "Node.js", "Tailwind CSS", "Supabase", "TypeScript"],
      icon: "💬",
    },
  ];

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center text-center px-4 py-10 gap-6"
    >
      <h2 className="text-3xl xl:text-5xl text-blue-600 font-semibold text-center">
        Experience
      </h2>

      <ul className="flex flex-col gap-5 max-w-3xl w-full">
        {experience.map(
          ({ title, date, description, Keywords, icon }, index) => (
            <motion.li
              key={index}
              className="border-2 border-blue-600 rounded-xl p-4 text-white cursor-pointer select-none
                         flex flex-col md:items-center md:justify-between gap-4
                         hover:scale-105 transition-transform duration-300"
              title={`${title} (${date})`}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                type: "keyframes",
                stiffness: 260,
                damping: 20,
                delay: index * 0.2,
              }}
            >
              {/* Icon + Title + Date */}
              <div className="flex items-center gap-3 md:min-w-[220px]">
                <div className="text-3xl">{icon}</div>
                <div className="flex flex-col text-left">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="text-sm text-gray-300">{date}</p>
                </div>
              </div>

              {/* Description */}
              <p className="flex-1 text-left text-sm md:px-6">{description}</p>

              {/* Keywords */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-end">
                {Keywords.map((keyword, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-xs px-3 py-1 rounded-full whitespace-nowrap"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </motion.li>
          )
        )}
      </ul>

      <h2 className="text-3xl xl:text-5xl text-blue-600 font-semibold text-center">
        Projects
      </h2>

      <ul className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center">
        {projects.map(({ title, date, description, Keywords, icon }, index) => (
          <motion.li
            key={index}
            className="h-full border-2 border-blue-600 rounded-xl p-4 text-white cursor-pointer select-none
                         flex flex-col md:items-center md:justify-between gap-4
                         hover:scale-105 transition-transform duration-300"
            title={`${title} (${date})`}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              type: "keyframes",
              stiffness: 260,
              damping: 20,
              delay: index * 0.2,
            }}
          >
            {/* Icon + Title + Date */}
            <div className="flex items-center gap-3 md:min-w-[220px]">
              <div className="text-3xl">{icon}</div>
              <div className="flex flex-col text-left">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-sm text-gray-300">{date}</p>
              </div>
            </div>

            {/* Description */}
            <p className="flex-1 text-left text-sm md:px-6">{description}</p>

            {/* Keywords */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-end">
              {Keywords.map((keyword, i) => (
                <span
                  key={i}
                  className="bg-gray-700 text-xs px-3 py-1 rounded-full whitespace-nowrap"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
