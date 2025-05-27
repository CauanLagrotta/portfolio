import { About } from "./components/about/About";
import { Header } from "./components/common/Header";
import { Home } from "./components/home/Home";
import { Projects } from "./components/projects/Projects";

export function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      <Header />

      <section>
        <Home />
      </section>

      <section>
        <About />
      </section>

      <section>
        <Projects />
      </section>
    </div>
  );
}
