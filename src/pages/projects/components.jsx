import styled from "styled-components";

const ContainerProjects = styled.div({
  width: "100vw",
  minHeight: "100vh",
  backgroundColor: "#0d0e0e",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  padding: "100px 0",

  
  '@media (max-width: 768px)': {
    padding: "50px 0",
  },
});

const TitleProject = styled.h1({
  fontSize: "50px",
  color: "#0e76ae",
  fontFamily: "Roboto, sans-serif",
  overflow: "hidden",
  marginTop: "40px",
  marginBottom: "60px",

  '@media (max-width: 768px)': {
    fontSize: "40px",
    marginTop: "20px",
    marginBottom: "40px",
  },

  '@media (max-width: 480px)': {
    fontSize: "30px",
    marginTop: "10px",
    marginBottom: "20px",
  },
});

const GridContainer = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "40px",
  overflow: "hidden",
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 40px",


  '@media (max-width: 1024px)': {
    gridTemplateColumns: "repeat(2, 1fr)", 
  },

  '@media (max-width: 768px)': {
    gridTemplateColumns: "repeat(1, 1fr)", 
    gridGap: "20px",
    padding: "0 20px",
  },

  '@media (max-width: 480px)': {
    gridGap: "15px",
    padding: "0 10px",
  },
});

const CardContainer = styled.div({
  width: "100%",
  backgroundColor: "#2b2b2b",
  borderRadius: "8px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  overflow: "hidden",
  color: "#fff",
  fontFamily: "'Roboto', sans-serif",
  display: "flex",
  flexDirection: "column", 
  justifyContent: "space-between",

  '@media (max-width: 768px)': {
    borderRadius: "6px",
  },
});

const CardImage = styled.img({
  width: "100%",
  height: "200px",
  objectFit: "cover",

  '@media (max-width: 768px)': {
    height: "180px",
  },

  '@media (max-width: 480px)': {
    height: "150px",
  },
});

const CardContent = styled.div({
  padding: "20px",

  
  '@media (max-width: 768px)': {
    padding: "15px",
  },

  '@media (max-width: 480px)': {
    padding: "10px",
  },
});

const CardTitle = styled.h3({
  fontSize: "24px",
  marginBottom: "10px",


  '@media (max-width: 768px)': {
    fontSize: "20px",
  },

  '@media (max-width: 480px)': {
    fontSize: "18px",
  },
});

const CardDescription = styled.p({
  fontSize: "16px",
  marginBottom: "20px",


  '@media (max-width: 768px)': {
    fontSize: "14px",
    marginBottom: "15px",
  },

  '@media (max-width: 480px)': {
    fontSize: "12px",
    marginBottom: "10px",
  },
});

const CardLinks = styled.div({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "10px",


  '@media (max-width: 768px)': {
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
});

const CardLink = styled.a({
  textDecoration: "none",
  color: "#00A9FF",
  fontWeight: "bold",
  

  "&:hover": {
    textDecoration: "underline",
  },

  '@media (max-width: 768px)': {
    fontSize: "14px",
  },

  '@media (max-width: 480px)': {
    fontSize: "12px",
  },
});

export {
  ContainerProjects,
  TitleProject,
  GridContainer,
  CardContainer,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
  CardLinks,
  CardLink
};
