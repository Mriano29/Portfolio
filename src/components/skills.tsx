import { BsFiletypeSql } from "react-icons/bs";
import {
  FaCss3Alt,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaJava,
  FaPhp,
} from "react-icons/fa";
import { FaDartLang, FaFlutter } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { PiFileCSharp } from "react-icons/pi";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiMysql,
  SiNodedotjs,
  SiOracle,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiSqlite,
  SiTypescript,
  SiWebpack,
} from "react-icons/si";
import {
  TbBrandKotlin,
  TbBrandNextjs,
  TbBrandReactNative,
  TbBrandVite,
} from "react-icons/tb";

export default function Skills() {
  const skills = {
    Languages: [
      { name: "JavaScript", icon: <IoLogoJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Python", icon: <SiPython /> },
      { name: "Java", icon: <FaJava /> },
      { name: "C#", icon: <PiFileCSharp /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "PHP", icon: <FaPhp /> },
      { name: "Dart", icon: <FaDartLang /> },
      { name: "Kotlin", icon: <TbBrandKotlin /> },
    ],
    Databases: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Oracle", icon: <SiOracle /> },
      { name: "SQLite", icon: <SiSqlite /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "SQL", icon: <BsFiletypeSql /> },
    ],
    Frameworks: [
      { name: "React", icon: <SiReact /> },
      { name: "React Native", icon: <TbBrandReactNative /> },
      { name: "Next.js", icon: <TbBrandNextjs /> },
      { name: "Flutter", icon: <FaFlutter /> },
      { name: "Express", icon: <SiExpress /> },
    ],
    Tools: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Vite", icon: <TbBrandVite /> },
      { name: "Webpack", icon: <SiWebpack /> },
      { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
      { name: "Github", icon: <FaGithub /> },
      { name: "Figma", icon: <FaFigma /> },
      { name: "Redux Toolkit", icon: <SiRedux /> },
    ],
  };

  return (
    <section id="skills" className="flex flex-col gap-5 w-full pb-10">
      <h2 className="text-3xl xl:text-5xl text-blue-600 font-semibold text-center">
        Skills
      </h2>
      {Object.entries(skills).map(([category, items]) => (
        <div key={category}>
          <h3 className="text-xl text-blue-600 mb-2">{category}</h3>

          <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-9 gap-5 justify-center items-center">
            {items.map(({ name, icon }) => (
              <li
                key={name}
                className=" w-full h-10 border-2 border-blue-600 text-white flex flex-row items-center justify-center rounded text-sm gap-2"
              >
                <div className="text-2xl mb-1">{icon}</div>
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
