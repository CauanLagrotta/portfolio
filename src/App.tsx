import { Route, Routes } from "react-router-dom";
import { Header } from "./components/common/Header";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/common/Footer";

export function App() {
  return (
    <div className="flex-col h-screen bg-gray-900 text-gray-100 overflow-auto">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}
