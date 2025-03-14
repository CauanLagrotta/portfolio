import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';

const ContainerHeader = styled.div({
  width: "100vw",
  height: "100px",
  backgroundColor: "#1b235b",
  color: "#fff",
  position: "fixed",
  zIndex: "999",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Logo = styled.img({
  width: "100px",
  height: "100px",
  marginLeft: "20px",
  marginBottom: "10px",

  '&:hover': {
    cursor: "pointer"
  }
});

const ContainerLinks = styled.div({
  marginRight: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",

  '@media (max-width: 768px)': {
    display: "none", 
  },
});

const Link = styled.a(() => ({
  fontFamily: "Hammersmith One, sans-serif",
  fontSize: "20px",
  textDecoration: "none",
  position: "relative",
  color: "#fff",
  paddingBottom: "5px",

  '&::after': {
    content: '""',
    position: "absolute",
    left: "0",
    bottom: "0",
    width: "100%",
    height: "5px",
    backgroundColor: "#0e76ae",
    transform: "scaleX(0)",
    transition: "transform 0.3s ease-in-out",
    transformOrigin: "left",
  },

  '&:hover::after': {
    transform: "scaleX(1)",
  },

  '&:hover':{
    cursor: "pointer",
  }
}));

const MenuButton = styled.button({
  border: "none",
  backgroundColor: "transparent",
  color: "#fff",
  fontSize: "20px",
  cursor: "pointer",
  display: "none",

  '@media (max-width: 768px)': {
    display: "block",
    marginRight: "20px",
  },
});

const SideBar = styled.div(({ open }) => ({
  position: "fixed",
  top: "0",
  right: "0", 
  width: "50%", 
  height: "100vh",
  backgroundColor: "#1b235b",
  boxShadow: "-2px 0 5px rgba(0, 0, 0, 0.5)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
  transition: "transform 0.3s ease-in-out",
  transform: open ? "translateX(0)" : "translateX(100%)", 
  zIndex: "1000",

  '@media (max-width: 768px)': {
    width: "60%",
  },

  '@media (max-width: 480px)': {
    width: "75%", 
  },
}));

const CloseButton = styled(CloseIcon)({
  position: "absolute",
  top: "20px",
  right: "20px",
  color: "#e61313",
  cursor: "pointer",
});

export { ContainerHeader, Logo, ContainerLinks, Link, MenuButton, CloseButton, SideBar };
