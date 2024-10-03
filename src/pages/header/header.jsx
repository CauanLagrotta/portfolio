import { useState } from "react";
import { ContainerHeader, Logo, ContainerLinks, Link, MenuButton, SideBar, SideBarOpen, Close } from "./components";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


export function Header() {
  const [open, setOpen] = useState(false);

  const toggleSideBar = () => {
    setOpen(!open); 
  };

  return (
    <ContainerHeader>
      <a href="#home">
        <Logo src="./images/header.png" />
      </a>


      <ContainerLinks>
        <Link href="#home"> Home </Link>
        <Link href="#about"> Sobre mim </Link>
        <Link href="#projects"> Projetos </Link>
      </ContainerLinks>

      <MenuButton onClick={toggleSideBar}>
        {open ? <CloseIcon /> : <MenuIcon />} 
      </MenuButton>

      {open ? (
        <SideBarOpen>
          <Close onClick={toggleSideBar} />
          <Link href="#home" onClick={toggleSideBar}> Home </Link>
          <Link href="#about" onClick={toggleSideBar}> Sobre mim </Link>
          <Link href="#projects" onClick={toggleSideBar}> Projetos </Link>
        </SideBarOpen>
      ) : (
        <SideBar />
      )}
    </ContainerHeader>
  );
}
