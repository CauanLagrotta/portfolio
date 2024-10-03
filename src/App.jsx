import { Header } from "./pages/header/header"
import { Home } from "./pages/home/home"
import { About } from "./pages/about/about"
import { Projects } from "./pages/projects/projects"
import { Footer } from "./pages/footer/footer"

import "./App.css"

export function App() {
    return (
        <div>
            <Header />
            <Home />
            <About />
            <Projects />
            <Footer />
        </div>
        
    )
}