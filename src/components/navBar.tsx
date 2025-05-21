import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

export function NavBar() {
  const [showNav, setShowNav] = useState(false);
  const [showLine, setShowLine] = useState(true);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowNav(true), 1000);
    const timer2 = setTimeout(() => setShowLine(false), 1700);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
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
      {showNav && (
        <motion.nav
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className=" fixed w-full py-4 hidden lg:flex justify-between items-center top-0 z-50 bg-gray-950 px-10"
        >
          <a
            href="/"
            className="text-xl font-bold text-blue-600 hover:text-blue-600 transition"
          >
            Miguel Riaño
          </a>
          <ul className="flex space-x-6 text-white font-medium">
            <li>
              <a href="/" className="hover:text-blue-600 transition">
                Profesional
              </a>
            </li>
            <li>
              <a href="personal" className="hover:text-blue-600 transition">
                Personal
              </a>
            </li>
            <li>
              <a href="contact" className="hover:text-blue-600 transition">
                Contact
              </a>
            </li>
          </ul>
        </motion.nav>
      )}
    </>
  );
}
