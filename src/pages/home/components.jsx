import styled from "styled-components"

const ContainerHome = styled.div({
    width: "100vw",
    height: "100vh",
    backgroundColor: "#0d0e0e",
    paddingTop: "100px",

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

    '@media (max-width: 820px)': {
        width: "400px",
        height: "400px",
    },
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
    height: "50px", 
    overflow: "hidden", 

    '@media (max-width: 768px)': {
        fontSize: "30px",
        height: "40px", 
    },
});


const Text = styled.p({
    color: "#fff",
    width: "80%",
    fontSize: "20px",
    textAlign: "justify",
    fontFamily: "Roboto, sans-serif",
    lineHeight: "25px",
})

const Bottom = styled.div({
    height: "5px",
    width: "80%",
    background: "linear-gradient(90deg, rgba(7,30,121,1) 10%, rgba(43,43,246,1) 22%, rgba(76,76,255,1) 40%, rgba(69,133,207,1) 56%, rgba(40,141,191,1) 77%, rgba(22,170,200,1) 94%)",
    backgroundSize: "200% 200%",
    animation: "fade 5s ease infinite",
    
    '@keyframes fade': {
        '0%': {
            backgroundPosition: "0% 50%",
        },
        '50%': {
            backgroundPosition: "100% 50%",
        },
        '100%': {
            backgroundPosition: "0% 50%",
        }
    }
});

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

    '&:hover': {
        cursor: "pointer"
    }
})


export { ContainerHome, LeftSide, Image, RightSide, Title, Text, Bottom, TechsDiv, Techs }