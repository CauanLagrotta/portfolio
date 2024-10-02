import styled from "styled-components";

const Container = styled.div({
    width: "100vw",
    height: "100px",
    backgroundColor: "#1b235b",
    color: "#fff",
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

export { Container, Logo, ContainerLinks, Link };
