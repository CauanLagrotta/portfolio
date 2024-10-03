import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close'; 

const ContainerHeader = styled.div({
    width: "100vw",
    height: "100px",
    backgroundColor: "#1b235b",
    color: "#fff",
    position: "fixed",

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

const Link = styled.a(props => ({
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

const SideBar = styled.div({
    position: "fixed",
    top: "0",
    right: "-100%", 
    width: "75%",
    height: "100vh",
    backgroundColor: "#1b235b",
    boxShadow: "-2px 0 5px rgba(0, 0, 0, 0.5)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    transition: "right 0.3s ease-in-out",
    zIndex: "1000",

    '@media (max-width: 768px)': {
        width: "100%",
    },
});

const Close = styled(CloseIcon)({
    color: "#e61313",
    top: "20px",
    right: "20px",
    cursor: "pointer",
});

const SideBarOpen = styled(SideBar)({
    left: "0",
});

export { ContainerHeader, Logo, ContainerLinks, Link, MenuButton, Close, SideBar, SideBarOpen };
