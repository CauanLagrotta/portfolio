import {
  XIcon,
  ListIcon,
  UserIcon,
  SuitcaseIcon,
  ChatTextIcon,
} from "@phosphor-icons/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HouseIcon } from "@phosphor-icons/react";

const items = [
  {
    title: "Home",
    url: "/",
    icon: HouseIcon,
  },
  {
    title: "Sobre mim",
    url: "/about",
    icon: UserIcon,
  },
  {
    title: "Projetos",
    url: "/projects",
    icon: SuitcaseIcon,
  },
  {
    title: "Contato",
    url: "/contact",
    icon: ChatTextIcon,
  },
];

export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="mb-10 w-full fixed z-20">
      <div className="hidden md:flex">
        <nav className="bg-gray-900 h-20 w-full flex justify-center gap-16">
          {items.map((item) => (
            <NavLink
              key={item.title}
              to={item.url}
              className={({ isActive }) =>
                `border-b-2 mt-5 border-transparent hover:border-b-2 hover:border-b-sky-700 hover:text-sky-700 py-3 flex gap-4 transition-all duration-200 ${
                  isActive ? "border-b-sky-500 text-sky-500" : ""
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="md:hidden flex items-center justify-between bg-gray-900 h-20 px-4">
        <button
          onClick={toggleSidebar}
          className="text-white focus:outline-none z-40"
          aria-label="Toggle menu"
        >
          {isSidebarOpen ? <XIcon size={32} /> : <ListIcon size={32} />}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-30`}
      >
        <nav className="flex flex-col p-4 space-y-4 mt-20">
          {items.map((item) => (
            <NavLink
              key={item.title}
              to={item.url}
              onClick={() => setIsSidebarOpen(false)}
              className={({ isActive }) =>
                `text-white py-2 px-4 rounded-lg hover:bg-gray-800 hover:text-sky-700 transition-all duration-200 ${
                  isActive ? "bg-gray-800 text-sky-500" : ""
                }`
              }
            >
              <span className="flex gap-4">
                <item.icon size={22} /> {item.title}
              </span>
            </NavLink>
          ))}
        </nav>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 md:hidden z-20"
          onClick={toggleSidebar}
        />
      )}
    </header>
  );
};
