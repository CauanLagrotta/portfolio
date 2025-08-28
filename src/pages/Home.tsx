import * as motion from "motion/react-client";
import { AnimatedName } from "../components/home/animated/AnimatedName";
import { Lozengue } from "../components/home/animated/Lozengue";
import { ArrowDownIcon } from "@phosphor-icons/react";

export function Home() {
  return (
    <div className="flex flex-col items-center md:pt-16 relative min-h-screen">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-900/10 via-transparent to-blue-900/10 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <AnimatedName />
      </motion.div>

      <div className="flex flex-col sm:flex-row justify-around w-full mt-15 sm:mt-25 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -100, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="sm:w-1/2 px-4 leading-8 relative"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 shadow-2xl hover:shadow-sky-500/10 transition-all duration-500 hover:border-sky-500/30">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-blue-500/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
            <p className="relative z-10 text-gray-200">
              <span className="text-sky-400 font-semibold">Olá!</span> Me chamo Cauan Silva Lagrotta, tenho 18 anos e estou estudando
              <span className="text-sky-300 font-medium"> Desenvolvimento Web Fullstack</span>. Tenho experiência em projetos usando
              HTML, CSS, JavaScript, React, Node.js, MySQL e muito mais. Estou em
              constante aprendizado e desenvolvo projetos para colocar em prática
              tudo o que aprendo. Atualmente, estou buscando oportunidades de
              <span className="text-sky-300 font-medium"> estágio</span> para ganhar experiência e contribuir com o desenvolvimento de
              soluções inovadoras.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="px-4 leading-8 mt-15 sm:mt-0"
        >
          {/* Losango com as hard e soft skills */}
          <Lozengue />
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-sky-400/70"
        >
          <span className="text-sm mb-2">Explore mais</span>
          <ArrowDownIcon size={24} />
        </motion.div>
      </motion.div>
    </div>
  );
};
