import { ListIcon, XIcon } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="mt-10 mb-10 w-full flex justify-around items-center overflow-hidden">
      <button
        className={`sm:hidden ${
          isMenuOpen ? "fixed right-0 top-10" : ""
        } ml-auto mr-5 z-50 `}
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <XIcon size={32} weight="bold" />
        ) : (
          <ListIcon size={32} weight="bold" />
        )}
      </button>

      <nav className="hidden sm:flex justify-around bg-gray-800 rounded-full min-w-3xl">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `border-b-2 border-transparent hover:border-b-2 hover:border-b-sky-700 hover:text-sky-700 py-3 flex gap-4 transition-all duration-200 ${
              isActive ? "border-b-sky-500 text-sky-500" : ""
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `border-b-2 border-transparent hover:border-b-2 hover:border-b-sky-700 hover:text-sky-700 py-3 flex gap-4 transition-all duration-200 ${
              isActive ? "border-b-sky-500 text-sky-500" : ""
            }`
          }
        >
          Sobre mim
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `border-b-2 border-transparent hover:border-b-2 hover:border-b-sky-700 hover:text-sky-700 py-3 flex gap-4 transition-all duration-200 ${
              isActive ? "border-b-sky-500 text-sky-500" : ""
            }`
          }
        >
          Projetos
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `border-b-2 border-transparent hover:border-b-2 hover:border-b-sky-700 hover:text-sky-700 py-3 flex gap-4 transition-all duration-200 ${
              isActive ? "border-b-sky-500 text-sky-500" : ""
            }`
          }
        >
          Contato
        </NavLink>
      </nav>

      {/* Menu lateral para dispositivos mobile */}
      {/* Overlay para fechar quando clicar fora */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-opacity-40 z-30 sm:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full bg-gray-800 w-1/2 transform transition-transform duration-300 ease-in-out sm:hidden z-40 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-6">
          <NavLink
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `border-b-2 border-transparent hover:border-b-2 hover:border-b-sky-700 hover:text-sky-700 py-3 flex gap-4 transition-all duration-200 ${
                isActive ? "border-b-sky-500 text-sky-500" : ""
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `border-b-2 border-transparent hover:border-b-2 hover:border-b-sky-700 hover:text-sky-700 py-3 flex gap-4 transition-all duration-200 ${
                isActive ? "border-b-sky-500 text-sky-500" : ""
              }`
            }
          >
            Sobre mim
          </NavLink>

          <NavLink
            to="/projects"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `border-b-2 border-transparent hover:border-b-2 hover:border-b-sky-700 hover:text-sky-700 py-3 flex gap-4 transition-all duration-200 ${
                isActive ? "border-b-sky-500 text-sky-500" : ""
              }`
            }
          >
            Projetos
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `border-b-2 border-transparent hover:border-b-2 hover:border-b-sky-700 hover:text-sky-700 py-3 flex gap-4 transition-all duration-200 ${
                isActive ? "border-b-sky-500 text-sky-500" : ""
              }`
            }
          >
            Contato
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
