import { Routes, Route, HashRouter, useLocation } from "react-router-dom";
import { NavBar } from "./components/navBar";
import { ContactPage, Professional } from "./pages";
import { motion, AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Professional />
            </motion.div>
          }
        />
        <Route
          path="contact"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ContactPage />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function AppRouter() {
  return (
    <HashRouter basename="">
      <NavBar />
      <main className="h-full w-full px-2 lg:px-10 xl:px-20 items-center overflow-y-auto hide no-scrollbar relative">
        <motion.div
          className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-950 via-black to-blue-900 animate-gradient"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <AnimatedRoutes />
      </main>
    </HashRouter>
  );
}
