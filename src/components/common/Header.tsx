import ScrollSpy from "react-scrollspy-navigation";

export const Header = () => {
  return (
    <div>
      <ScrollSpy activeClass="font-bold text-blue-600 border-l-4 border-blue-600 pl-2">
        <nav className="flex flex-col items-start p-4 space-y-2">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </nav>
      </ScrollSpy>
    </div>
  );
};
