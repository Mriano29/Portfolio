export function NavBar() {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 hidden lg:flex justify-between items-center fixed top-0 z-50">
      <a
        href="#welcome"
        className="text-xl font-bold text-blue-600 hover:text-blue-400 transition"
      >
         in progress...
      </a>
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li>
          <a href="#about" className="hover:text-blue-600 transition">
            About me
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-blue-600 transition">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-600 transition">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
