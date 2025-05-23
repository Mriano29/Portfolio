import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Professional", to: "/" },
  { label: "Contact", to: "contact" },
];

export function NavBar() {
  const [showNav, setShowNav] = useState(false);
  const [showLine, setShowLine] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowNav(true), 1000);
    const timer2 = setTimeout(() => setShowLine(false), 1700);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Top Loading Line */}
      <AnimatePresence>
        {showLine && (
          <motion.div
            initial={{ width: 0, opacity: 1 }}
            animate={{ width: "100%", opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed top-0 left-0 h-1 bg-blue-600 z-50 hidden lg:block"
          />
        )}
      </AnimatePresence>

      {/* Desktop Nav */}
      {showNav && (
        <motion.nav
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="fixed w-full py-4 hidden lg:flex justify-between items-center top-0 z-50 bg-gray-950 px-10"
        >
          <Link
            to="/"
            className="text-xl font-bold text-blue-600 hover:text-blue-600 transition"
          >
            Miguel Riaño
          </Link>
          <ul className="flex space-x-6 text-white font-medium">
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <Link to={to} className="hover:text-blue-600 transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}

      {/* Mobile Nav Icon */}
      <nav className="fixed w-full flex lg:hidden justify-start items-center top-0 z-50 px-8 py-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Open Menu"
          className="text-blue-400 hover:text-blue-600 transition"
        >
          <TiThMenu size={24} />
        </button>
      </nav>

      {/* Mobile Side Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black z-40"
            />

            <motion.aside
              ref={menuRef}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 w-64 h-full bg-gray-900 bg-opacity-90 text-white z-50 shadow-lg p-6 backdrop-blur-md opacity-90"
            >
              <div className="flex justify-end mb-4">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-blue-400 text-2xl"
                  aria-label="Close Menu"
                >
                  <IoCloseSharp />
                </button>
              </div>
              <ul className="flex flex-col space-y-4">
                {navLinks.map(({ label, to }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-white hover:text-blue-500 transition border-b border-gray-700 pb-2 text-center"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
