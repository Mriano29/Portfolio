export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-start justify-center text-center px-4 bg-gray-100 gap-5 lg:gap-20 pt-24"
    >
      <div>
        <h2 className="text-6xl font-bold text-blue-600 mb-4">Languages</h2>
        <ul className="flex flex-col lg:flex-row items-start justify-between gap-4">
          <li className="text-xl text-gray-700 mb-2">JavaScript</li>
          <li className="text-xl text-gray-700 mb-2">TypeScript</li>
          <li className="text-xl text-gray-700 mb-2">Python</li>
          <li className="text-xl text-gray-700 mb-2">Java</li>
          <li className="text-xl text-gray-700 mb-2">C#</li>
        </ul>
      </div>
      <div>
        <h2 className="text-6xl font-bold text-blue-600 mb-4">Frameworks</h2>
        <ul className="flex flex-col lg:flex-row items-start justify-between gap-4">
          <li className="text-xl text-gray-700 mb-2">React</li>
          <li className="text-xl text-gray-700 mb-2">React Native</li>
          <li className="text-xl text-gray-700 mb-2">Node.js</li>
          <li className="text-xl text-gray-700 mb-2">Express</li>
          <li className="text-xl text-gray-700 mb-2">Flask</li>
        </ul>
      </div>
    </section>
  );
}
