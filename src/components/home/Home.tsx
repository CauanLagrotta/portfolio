import * as motion from "motion/react-client";
import { AnimatedName } from "./animated/AnimatedName";
import { Lozengue } from "./animated/Lozengue";

export const Home = () => {
  return (
    <div id="home" className="flex flex-col items-center">
      <AnimatedName />

      <div className="flex flex-col sm:flex-row justify-around w-full mt-15">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="sm:w-1/2 px-4 leading-8 "
        >
          Olá! Me chamo Cauan Silva Lagrotta, tenho 18 anos e estou estudando
          Desenvolvimento Web Fullstack. Tenho experiência em projetos usando
          HTML, CSS, JavaScript, React, Node.js, MySQL e muito mais. Estou em
          constante aprendizado e desenvolvo projetos para colocar em prática
          tudo o que aprendo. Atualmente, estou buscando oportunidades de
          estágio para ganhar experiência e contribuir com o desenvolvimento de
          soluções inovadoras.
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="px-4 leading-8 mt-15 sm:mt-0"
        >
          {/* Losango com as hard e soft skills */}
          <Lozengue />
        </motion.div>
      </div>
    </div>
  );
};
