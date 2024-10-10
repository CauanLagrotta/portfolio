import styled from "styled-components";

const ContainerFooter = styled.div({
    width: "100vw",
    height: "100px",
    backgroundColor: "#1b235b",
    color: "#fff",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "50px",
    padding: "0 10%",

    '@media (max-width: 768px)': {
        flexDirection: "column",
        height: "auto",
        padding: "20px 0",
    }
});

const LeftSide = styled.div({
    display: "flex",
    alignItems: "center",
    gap: "20px",

    '@media (max-width: 768px)': {
        flexDirection: "column",
        gap: "10px",
    }
});

const RightSide = styled.div({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontFamily: "Roboto, sans-serif",

    '@media (max-width: 768px)': {
        flexDirection: "column",
        gap: "10px",
    }
});

const LinkItem = styled.a({
    fontSize: "20px",
    color: "#fff",
    textDecoration: "none",
    fontFamily: "Roboto, sans-serif",

    '&:hover': {
        color: "#0e76a8",
        textDecoration: "underline",
        cursor: "pointer",
    },

    '@media (max-width: 768px)': {
        fontSize: "18px",
    }
});

const ContactItems = styled.div({
    display: "flex",
    alignItems: "center",
    gap: "15px",

    '@media (max-width: 768px)': {
        gap: "10px",
    }
});

const IconLink = styled.a({
    fontSize: "30px",
    color: "#fff",

    '&:hover': {
        color: "#0e76a8",
        cursor: "pointer",
    },

    '@media (max-width: 768px)': {
        fontSize: "25px",
    }
});

export { ContainerFooter, LeftSide, RightSide, LinkItem, ContactItems, IconLink };
