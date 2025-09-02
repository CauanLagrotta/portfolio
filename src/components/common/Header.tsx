"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  XIcon,
  ListIcon,
  UserIcon,
  SuitcaseIcon,
  ChatTextIcon,
  HouseIcon,
} from "@phosphor-icons/react";
import { SVGProps, useState } from "react";

interface ItemsProps {
  title: string;
  url: string;
  icon?: React.ComponentType<SVGProps<SVGSVGElement>>;
}

const items: ItemsProps[] = [
  { title: "Home", url: "/", icon: HouseIcon },
  { title: "Sobre mim", url: "/about", icon: UserIcon },
  { title: "Projetos", url: "/projects", icon: SuitcaseIcon },
  { title: "Contato", url: "/contact", icon: ChatTextIcon },
];

export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (url: string) =>
    `py-3 flex items-center gap-4 transition-all duration-200 ${
      pathname === url
        ? "border-b-2 border-b-sky-500 text-sky-500 hover:border-b-sky-700 hover:text-sky-700"
        : "border-transparent border-b-2 hover:border-b-sky-700 hover:text-sky-700"
    }`;

  return (
    <header className="mb-10 w-full fixed z-20">
      {/* Desktop nav */}
      <div className="hidden md:flex">
        <nav className="bg-gray-900 h-20 w-full flex justify-center gap-16">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.url}
              className={linkClass(item.url)}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile nav */}
      <div className="md:hidden flex items-center justify-between bg-gray-900 h-20 px-4">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-white focus:outline-none z-40"
        >
          {isSidebarOpen ? <XIcon size={32} /> : <ListIcon size={32} />}
        </button>
      </div>

      {isSidebarOpen && (
        <div className="fixed top-0 left-0 h-full w-64 bg-gray-900 transform translate-x-0 transition-transform duration-300 z-30">
          <nav className="flex flex-col p-4 space-y-4 mt-20">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.url}
                  className={`text-white py-2 px-4 rounded-lg transition-all duration-200 ${
                    pathname === item.url
                      ? "bg-gray-800 text-sky-500"
                      : "hover:bg-gray-800 hover:text-sky-700"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsSidebarOpen(false);
                  }}
                >
                  <span className="flex gap-4">
                    {Icon && <Icon fontSize={22} />} {item.title}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
