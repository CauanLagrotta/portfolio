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

    '@media (max-width: 1280px) and (max-height: 1366px)': {
        fontSize: "30px",
        lineHeight: "40px",
    },

    '@media (max-width: 912px) and (max-height: 1368px)': {
        fontSize: "30px",
        lineHeight: "40px",
        overflow: "hidden",
    },

    '@media (max-width: 820px)': {
        fontSize: "30px",
        lineHeight: "40px",
    },

    '@media (max-width: 768px)': {
        textAlign: "start",
        fontSize: "20px",
        lineHeight: "30px",

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
    },

    '@media (max-width: 1280px) and (max-height: 800px)': {
        fontSize: "70px",
    },

    '@media (max-width: 1024px) and (max-height: 1366px)': {
        fontSize: "70px",
    },

    '@media (max-width: 912px) and (max-height: 1368px)': {
        fontSize: "70px",
        
     },

    '@media (max-width: 820px)': {
        fontSize: "70px",
    },

    '@media (max-width: 768px)': {
        fontSize: "50px",
    },
});

const Github = styled.a({
    fontSize: "45px",
    color: "#fff",
    textDecoration: "none",

    '&:hover': {
        cursor: "pointer"
    },

    '@media (max-width: 1280px) and (max-height: 800px)': {
        fontSize: "70px",
    },

    '@media (max-width: 1024px) and (max-height: 1366px)': {
        fontSize: "70px",
    },

    '@media (max-width: 912px) and (max-height: 1368px)': {
        fontSize: "70px",
        
     },

    '@media (max-width: 820px)': {
        fontSize: "70px",
    },

    '@media (max-width: 768px)': {
        fontSize: "50px",
    },
});

const Linkedin = styled.a({
    fontSize: "45px",
    color: "#0e76a8",
    textDecoration: "none",

    '&:hover': {
        cursor: "pointer",
    },

    '@media (max-width: 1280px) and (max-height: 800px)': {
        fontSize: "70px",
    },

    '@media (max-width: 1024px) and (max-height: 1366px)': {
        fontSize: "70px",
    },

    '@media (max-width: 912px) and (max-height: 1368px)': {
        fontSize: "70px",
        
     },

    '@media (max-width: 820px)': {
        fontSize: "70px",
    },

    '@media (max-width: 768px)': {
        fontSize: "50px",
    },
});

const Whatsapp = styled.a({
    fontSize: "45px",
    color: "#25d366",
    textDecoration: "none",

    '&:hover': {
        cursor: "pointer"
    },

    '@media (max-width: 1280px) and (max-height: 800px)': {
        fontSize: "70px",
    },

    '@media (max-width: 1024px) and (max-height: 1366px)': {
        fontSize: "70px",
    },

    '@media (max-width: 912px) and (max-height: 1368px)': {
        fontSize: "70px",
        
     },

    '@media (max-width: 820px)': {
        fontSize: "70px",
    },

    '@media (max-width: 768px)': {
        fontSize: "50px",
    },
});

export { ContainerAbout, TitleAbout, TextAbout, ContactItems, Gmail, Github, Linkedin, Whatsapp };
