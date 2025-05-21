import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const needsTexts = [
  "Motivated self-learner focused on evolving skills and embracing challenges.",
  "Resourceful developer passionate about designing user-friendly digital experiences.",
  "Adaptable team player committed to continuous improvement and collaboration.",
];

export function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center gap-5 px-6"
    >
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-600 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        Do you need a
      </motion.h1>

      <div className="flex flex-wrap gap-6 justify-center max-w-5xl">
        {needsTexts.map((text, i) => (
          <motion.div
            key={i}
            className="bg-blue-700 bg-opacity-40 rounded-lg p-4 sm:p-6 max-w-xs shadow-lg cursor-pointer transition transform duration-300 hover:scale-105 hover:bg-opacity-70 flex-1 min-w-[280px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 * i, duration: 0.5 }}
          >
            <p className="text-white text-base sm:text-lg md:text-xl font-medium text-center">
              {text}
            </p>
          </motion.div>
        ))}
      </div>
      <motion.h2
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-600 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        Contact me!
      </motion.h2>
      <motion.div
        className="flex flex-row gap-5 mt-5 items-center justify-center lg:justify-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.a
          href="https://github.com/Mriano29"
          target="_blank"
          className="text-white"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaGithub size={40} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/mriano29/"
          target="_blank"
          className="text-white"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaLinkedin size={40} />
        </motion.a>
        <button
          onClick={() => {
            navigator.clipboard.writeText("mriano290801@gmail.com");
            alert("Correo copiado al portapapeles");
          }}
          className="border-2 border-blue-600 text-blue-600 font-semibold py-2 px-4 rounded transition duration-300 transform hover:scale-105 hover:bg-blue-600 hover:text-white hover:border-blue-600"
        >
          Copy my email
        </button>
      </motion.div>
    </section>
  );
}
