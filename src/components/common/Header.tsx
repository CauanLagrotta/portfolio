import { ListIcon, XIcon } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import * as motion from "motion/react-client";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-10 mb-10 w-full flex justify-around items-center overflow-hidden"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`sm:hidden ${
          isMenuOpen ? "fixed right-0 top-10" : ""
        } ml-auto mr-5 z-50 p-2 rounded-lg bg-gray-800/80 backdrop-blur-sm border border-gray-700 hover:border-sky-500 transition-all duration-300`}
        onClick={toggleMenu}
      >
        <motion.div
          animate={{ rotate: isMenuOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isMenuOpen ? (
            <XIcon size={32} weight="bold" className="text-sky-400" />
          ) : (
            <ListIcon size={32} weight="bold" className="text-sky-400" />
          )}
        </motion.div>
      </motion.button>

      <motion.nav 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="hidden sm:flex justify-around bg-gradient-to-r from-gray-800/90 to-gray-900/90 backdrop-blur-md rounded-full min-w-3xl px-8 py-2 border border-gray-700/50 shadow-2xl"
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative px-6 py-3 rounded-full transition-all duration-300 group ${
              isActive 
                ? "text-sky-400 bg-sky-500/20" 
                : "text-gray-300 hover:text-sky-400 hover:bg-sky-500/10"
            }`
          }
        >
          <span className="relative z-10">
          Home
          </span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `relative px-6 py-3 rounded-full transition-all duration-300 group ${
              isActive 
                ? "text-sky-400 bg-sky-500/20" 
                : "text-gray-300 hover:text-sky-400 hover:bg-sky-500/10"
            }`
          }
        >
          <span className="relative z-10">
          Sobre mim
          </span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `relative px-6 py-3 rounded-full transition-all duration-300 group ${
              isActive 
                ? "text-sky-400 bg-sky-500/20" 
                : "text-gray-300 hover:text-sky-400 hover:bg-sky-500/10"
            }`
          }
        >
          <span className="relative z-10">
          Projetos
          </span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `relative px-6 py-3 rounded-full transition-all duration-300 group ${
              isActive 
                ? "text-sky-400 bg-sky-500/20" 
                : "text-gray-300 hover:text-sky-400 hover:bg-sky-500/10"
            }`
          }
        >
          <span className="relative z-10">
          Contato
          </span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </NavLink>
      </motion.nav>

      {/* Menu lateral para dispositivos mobile */}
      {/* Overlay para fechar quando clicar fora */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-opacity-40 z-30 sm:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className={`fixed top-0 right-0 h-full bg-gray-800 w-1/2 transform transition-transform duration-300 ease-in-out sm:hidden z-40 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900" />
        <nav className="relative flex flex-col items-center justify-center h-full gap-6">
          <NavLink
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `px-6 py-3 rounded-full transition-all duration-300 ${
                isActive 
                  ? "text-sky-400 bg-sky-500/20" 
                  : "text-gray-300 hover:text-sky-400 hover:bg-sky-500/10"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `px-6 py-3 rounded-full transition-all duration-300 ${
                isActive 
                  ? "text-sky-400 bg-sky-500/20" 
                  : "text-gray-300 hover:text-sky-400 hover:bg-sky-500/10"
              }`
            }
          >
            Sobre mim
          </NavLink>

          <NavLink
            to="/projects"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `px-6 py-3 rounded-full transition-all duration-300 ${
                isActive 
                  ? "text-sky-400 bg-sky-500/20" 
                  : "text-gray-300 hover:text-sky-400 hover:bg-sky-500/10"
              }`
            }
          >
            Projetos
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `px-6 py-3 rounded-full transition-all duration-300 ${
                isActive 
                  ? "text-sky-400 bg-sky-500/20" 
                  : "text-gray-300 hover:text-sky-400 hover:bg-sky-500/10"
              }`
            }
          >
            Contato
          </NavLink>
        </nav>
      </motion.div>
    </motion.header>
  );
};
