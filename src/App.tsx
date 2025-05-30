import { Route, Routes } from "react-router-dom";
import { Header } from "./components/common/Header";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";

export function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100 overflow-auto overflow-x-hidden">
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
