import { Route, Routes } from "react-router-dom";
import { Header } from "./components/common/Header";
import { Home } from "./components/home/Home";
import { About } from "./components/about/About";
import { Projects } from "./components/projects/Projects";

export function App() {
  return (
    <div className="flex-col h-screen bg-gray-900 text-gray-100 overflow-auto">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}
