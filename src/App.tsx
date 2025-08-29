import { Route, Routes } from "react-router-dom";
import { Header } from "./components/common/Header";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";

export function App() {
  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-100">
      <div className="fixed inset-0 z-0 ">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-800 to-gray-900 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
