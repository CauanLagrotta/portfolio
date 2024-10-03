import styled from "styled-components"

const ContainerHome = styled.div({
    width: "100vw",
    height: "100vh",
    backgroundColor: "#0d0e0e",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
})

const LeftSide = styled.div({
    width: "50%",
    height: "100%",

    '@media (max-width: 768px)': {
       display: "none",
       width: "0",
       height: "0",
    },

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
})

const Image = styled.img({
    width: "500px",
    height: "500px",
    borderRadius: "50%",
})

const RightSide = styled.div({
    width: "50%",
    height: "100%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",

    '@media (max-width: 768px)': {
        width: "100%",
        height: "100%",
        backgroundColor: "#0d0e0e",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
    },
})

const Title = styled.h1({
    color: "#0e76ae",
    fontSize: "40px",
    textAlign: "center",
    fontFamily: "Roboto, sans-serif",

    '@media (max-width: 768px)': {
        fontSize: "30px",
    },
})

const Text = styled.p({
    color: "#fff",
    width: "80%",
    fontSize: "15px",
    textAlign: "justify",
    fontFamily: "Roboto, sans-serif",
    lineHeight: "25px",
})

const Bottom = styled.div({
    height: "5px",
    width: "80%",
    backgroundColor: "#1b235b",
})

const TechsDiv = styled.div({
    width: "80%",
    height: "auto",

    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px",
})

const Techs = styled.img({
    width: "50px",
    height: "50px",
})


export { ContainerHome, LeftSide, Image, RightSide, Title, Text, Bottom, TechsDiv, Techs }