import styled from "styled-components";

const ContainerAbout = styled.div({
    width: "100vw",
    minHeight: "100vh",
    backgroundColor: "#0d0e0e",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "10%",

});

const TitleAbout = styled.h1({
    fontSize: "50px",
    marginBottom: "20px",
    color: "#0e76ae",
    fontFamily: "Roboto, sans-serif",
});

const TextAbout = styled.p({
    color: "#fff",
    width: "80%",
    fontSize: "20px",
    textAlign: "justify",
    fontFamily: "Roboto, sans-serif",
    lineHeight: "25px",
    marginBottom: "20px",

    '@media (max-width: 768px)': {
        textAlign: "center",
    },
});

const ContactItems = styled.div({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
    marginTop: "30px",
});

const Gmail = styled.a({
    fontSize: "45px",
    color: "#a52a2a",
    textDecoration: "none",

    '&:hover': {
        cursor: "pointer"
    }
});

const Github = styled.a({
    fontSize: "45px",
    color: "#fff",
    textDecoration: "none",

    '&:hover': {
        cursor: "pointer"
    }
});

const Linkedin = styled.a({
    fontSize: "45px",
    color: "#0e76a8",
    textDecoration: "none",

    '&:hover': {
        cursor: "pointer",
    }
});

const Whatsapp = styled.a({
    fontSize: "45px",
    color: "#25d366",
    textDecoration: "none",

    '&:hover': {
        cursor: "pointer"
    }
});

export { ContainerAbout, TitleAbout, TextAbout, ContactItems, Gmail, Github, Linkedin, Whatsapp };
