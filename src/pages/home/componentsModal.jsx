import styled from "styled-components";

const ModalContainer = styled.div({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
});

const ModalContent = styled.div({
  backgroundColor: "#1b235b",
  padding: "30px",
  borderRadius: "16px",
  width: "90%",
  maxWidth: "800px",
  textAlign: "center",
  color: "#fff",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",

  "@media (max-width: 768px)": {
    padding: "20px",
  },
});

const Title = styled.h2({
  fontFamily: "'Arial', Sans-serif", 
  fontSize: "28px",
  marginBottom: "30px",
});

const ContainerCards = styled.div({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "flex-start",
  gap: "20px",

  "@media (max-width: 768px)": {
    flexDirection: "column",
  },
});

const Card = styled.div({
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  width: "45%",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
  border: "2px solid transparent",

  "&:hover": {
    border: "2px solid #0e76a8",
  },

  "@media (max-width: 768px)": {
    width: "100%",
  },
});

const CardTitle = styled.h3({
  color: "#0e76a8",
  fontFamily: "'Arial', Sans-serif",
  fontSize: "22px",
  marginBottom: "10px",
});

const CardSubtitle = styled.p({
  color: "#0e76a8",
  fontFamily: "'Arial', Sans-serif",
  fontSize: "18px",
  marginBottom: "10px",
});

const DivSoftSkills = styled.div({
  lineHeight: "1.5",
  overflow: "hidden",
  transition: "max-height 0.3s ease-in-out",
  color: "#00A9FF",
  fontFamily: "'Arial', Sans-serif",
  fontSize: "18px",
  
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "5px",

});

const DivHardSkills = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "10px",

  maxHeight: "0",
  overflow: "hidden",
  transition: "max-height 0.3s ease-in-out",
});

const TextSoftSkills = styled.p({
  color: "#1d045a",
  fontWeight: "bold",
  fontFamily: "'Arial', Sans-serif",
  fontSize: "18px",
  lineHeight: "1.5",

  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "5px",
});

const Image = styled.img({
  width: "50px",
  height: "50px",
  borderRadius: "8px",
});

const CloseButton = styled.button({
  marginTop: "20px",
  padding: "20px",
  width: "50%",
  backgroundColor: "#0e76a8",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontFamily: "'Arial', Sans-serif",
  fontSize: "20px"
});

export { ModalContainer, ModalContent, Title, ContainerCards, Card, CardTitle, CardSubtitle, DivSoftSkills, DivHardSkills, Image, CloseButton, TextSoftSkills };
