import { Routes, Route, HashRouter } from "react-router-dom";
import { NavBar } from "./components/navBar";
import { ContactPage, Personal, Professional } from "./pages";

export default function AppRouter() {
  return (
    <HashRouter basename="">
      <NavBar />
      <main className="h-screen w-full px-2 lg:px-10 xl:px-20 items-center bg-gray-900 overflow-y-auto hide no-scrollbar">
        <Routes>
          <Route path="/" element={<Professional />} />
          <Route path="personal" element={<Personal />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      </main>
    </HashRouter>
  );
}
