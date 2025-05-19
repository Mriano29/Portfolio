import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function WelcomeHero() {
  return (
    <>
      <section
        id="welcome"
        className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10"
      >
        <div className="flex flex-col lg:gap-2 max-w-[600px] justify-center text-center lg:text-justify w-full">
          <div className="flex flex-col lg:flex-row gap-1 w-full items-center">
            <h1 className="text-3xl xl:text-5xl text-white">
              ¡Hello! My name is
            </h1>
          </div>
          <h2 className="text-5xl lg:text-6xl xl:text-7xl text-blue-600 mb-2 font-semibold">
            Miguel Riaño
          </h2>
          <p className="text-gray-300 text-sm md:text-lg lg:text-xl xl:text-2xl">
            I'm a junior software developer from Spain with a keen passion for
            UI/UX design. I strive to build visually engaging and intuitive
            websites, always aiming to improve the user experience. I'm eager to
            discover new opportunities that allow me to grow and refine my
            skills.
          </p>
          <div className="flex flex-row gap-5 mt-5 items-center justify-center lg:justify-start">
            <a
              href="  https://github.com/Mriano29"
              target="_blank"
              className="text-white"
            >
              <FaGithub size={40} />
            </a>
            <a
              href="https://www.linkedin.com/in/mriano29/"
              target="_blank"
              className="text-white"
            >
              <FaLinkedin size={40} />
            </a>
            <a
              href="/MarrCV.pdf"
              download="MarrCV.pdf"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 font-semibold py-2 px-4 rounded transition duration-300 inline-block"
            >
              Download my CV
            </a>
          </div>
        </div>
        <div className="h-full flex flex-col items-center justify-center gap-5 relative mt-3 lg:mt-0 ">
          <div className="h-[300px] md:h-[400px] w-[225px] md:w-[300px] bg-cyan-700 rotate-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-3xl" />
          <img
            src="marr.jpg"
            alt="Miguel Riaño picture"
            className="rounded-3xl max-w-xs relative z-10 h-[300px] md:h-fit w-[225px] md:w-fit"
          />
        </div>
      </section>
    </>
  );
}
