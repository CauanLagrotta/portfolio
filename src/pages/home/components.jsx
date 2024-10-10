import styled, { keyframes } from "styled-components";

const ContainerHome = styled.div({
  width: "100vw",
  height: "100vh",
  backgroundColor: "#0d0e0e",
  paddingTop: "100px",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  '@media (max-width: 1024px) and (max-height: 1366px)': {
    flexDirection: "column-reverse",
  },

  '@media (max-width: 1024px) and (max-height: 600px)': {
    flexDirection: "row",
  },

  '@media (max-width: 912px) and (max-height: 1368px)': {
    flexDirection: "column-reverse",
  },

  '@media (max-width: 820px)': {
    flexDirection: "column-reverse",
    justifyContent: "center", 
    alignItems: "center", 
    marginTop: "20px",
  },

  '@media (max-width: 768px)': {
    flexDirection: "column-reverse",
  },

  '@media (max-width: 500px)': {
    marginTop: "50px",
  },
});
const LeftSide = styled.div({
  width: "50%",
  height: "100%",
  overflow: "hidden",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});


const fadeInOut = keyframes`
  0% {
    color: #0e76a8;
 
  }

  50% {
    color: transparent;
  }

  100% {
    color: #0e76a8;
  }
`;

const FadeText = styled.p`
  color: #0e76a8;
  font-weight: bold;
  font-family: 'Arial', Sans-serif;
  animation: ${fadeInOut} 4s infinite ease-in-out;
  font-size: 20px;
  
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1024px) and (max-height: 1366px) {
    font-size: 30px;
  }

  @media (max-width: 1280px) and (max-height: 800px) {
    font-size: 30px;
  }

  @media (max-width: 1024px) and (max-height: 600px) {
    font-size: 25px;
    overflow: hidden;
    margin-left: 50px;
  }

  @media (max-width: 912px) and (max-height: 1368px) {
    font-size: 30px;
  }

  @media (max-width: 820px) and (max-height: 1180px) {
    font-size: 30px;
  }

  @media (max-width: 540px) and (max-height: 720px) {
    font-size: 20px;
    overflow: hidden;
  }

  @media (max-width: 430px) and (max-height: 932px) {
    font-size: 20px;
  }

  @media (max-width: 414px) and (max-height: 896px) {
    font-size: 20px;
    overflow: hidden;
  }

  @media (max-width: 375px) and (max-height: 667px) {
    font-size: 15px;
  }

  @media (max-width: 360px) and (max-height: 740px) {
    font-size: 15px;
  }

  @media (max-width: 344px) and (max-height: 882px) {
    font-size: 15px;
  }
`;

const Image = styled.img({
  width: "400px",
  height: "400px",
  transition: "all 0.5s ease",
  filter: "drop-shadow(0 0 20px rgba(0, 123, 255, 0.8))",
  animation: "pulse 3s ease-in-out infinite, float 3s ease-in-out infinite",

  '&:hover': {
    cursor: "pointer",
  },

  '@media (max-width: 1024px) and (max-height: 600px)': {
    width: "200px",
    height: "200px",
  },

  '@media (max-width: 820px)': {
    width: "300px",
    height: "300px",
  },

  '@media (max-width: 500px)': {
    width: "150px", 
    height: "150px",
  },

  '@media (max-width: 430px) and (max-height: 932px)': {
    width: "300px",
    height: "300px",
  },

  '@media (max-width: 414px) and (max-height: 896px)': {
    width: "200px",
    height: "200px",
  },

  '@media (max-width: 412px) and (max-height: 915px)': {
    width: "200px",
    height: "200px",
  },

  '@media (max-width: 390px) and (max-height: 844px)': {
    width: "200px",
    height: "200px",
  },

  '@media (max-width: 375px) and (max-height: 667px)': {
    width: "200px",
    height: "200px",
  },

  '@media (max-width: 344px) and (max-height: 882px)': {
    width: "200px",
    height: "200px",
  },

  
  '@keyframes pulse': {
    '0%': {
      filter: "drop-shadow(0 0 5px rgba(0, 123, 255, 0.8))",
    },
    '50%': {
      filter: "drop-shadow(0 0 10px rgba(0, 123, 255, 1))",
    },
    '100%': {
      filter: "drop-shadow(0 0 5px rgba(0, 123, 255, 0.8))",
    }
  },

  '@keyframes float': {
    '0%': {
      transform: "translateY(0px)",
    },
    '50%': {
      transform: "translateY(-20px)", 
    },
    '100%': {
      transform: "translateY(0px)",
    }
  }
});

const RightSide = styled.div({
  width: "50%",
  height: "100%",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "50px",

  '@media (max-width: 1024px) and (max-height: 1366px)': {
    width: "100%",
  },

  '@media (max-width: 912px) and (max-height: 1368px)': {
    width: "100%",
  },

  '@media (max-width: 820px)': {
    width: "100%",
  },

  '@media (max-width: 768px)': {
    width: "100%",
    gap: "30px",
  },

  '@media (max-width: 500px)': {
    gap: "20px", 
  },

  
});

const Title = styled.h1({
  color: "#0e76ae",
  fontSize: "40px",
  textAlign: "center",
  fontFamily: "Roboto, sans-serif",
  height: "50px",
  overflow: "hidden",

  '@media (max-width: 1280px) and (max-height: 800px)': {
    fontSize: "60px",
    height: "80px",
  },

  '@media (max-width: 1024px) and (max-height: 1366px)': {
    fontSize: "60px",
    height: "80px",
  },

  '@media (max-width: 912px) and (max-height: 1368px)': {
    fontSize: "60px",
    height: "80px",
  },

  '@media (max-width: 820px) and (max-height: 1180px)': {
    fontSize: "50px",
    height: "60px",
  },

  '@media (max-width: 768px)': {
    fontSize: "30px",
    height: "40px",
  },

  '@media (max-width: 768px) and (max-height: 1024px)': {
    fontSize: "50px",
    height: "60px",
  },

  '@media (max-width: 540px) and (max-height: 720px)': {
    height: "90px",
  },

  '@media (max-width: 430px) and (max-height: 932px)': {
    fontSize: "40px", 
  },

  '@media (max-width: 412px) and (max-height: 915px)': {
    fontSize: "40px", 
  },

  '@media (max-width: 375px) and (max-height: 667px)': {
    fontSize: "30px", 
  },

  '@media (max-width: 344px) and (max-height: 882px)': {
    fontSize: "30px", 
  },


});

const Text = styled.p({
  color: "#fff",
  width: "80%",
  fontSize: "20px",
  textAlign: "justify",
  fontFamily: "Roboto, sans-serif",
  lineHeight: "30px",
  overflow: "hidden",

  '@media (max-width: 1280px) and (max-height: 800px)': {
    fontSize: "30px",
    lineHeight: "40px",
  },

  '@media (max-width: 1024px) and (max-height: 1366px)': {
    fontSize: "40px",
    lineHeight: "50px",
  },

  
  '@media (max-width: 1024px) and (max-height: 600px)': {
    fontSize: "25px",
    lineHeight: "35px",
  },

  '@media (max-width: 912px) and (max-height: 1368px)': {
    fontSize: "30px",
    lineHeight: "40px",
  },

  '@media (max-width: 820px) and (max-height: 1180px)': {
    fontSize: "30px",
    lineHeight: "40px",
  },

  '@media (max-width: 768px) and (max-height: 1024px)': {
    fontSize: "25px",
    lineHeight: "35px",
  },

  '@media (max-width: 540px) and (max-height: 720px)': {
    fontSize: "20px",
    lineHeight: "30px",
    overflow: "hidden",
    paddingBottom: "40px",
  },

  '@media (max-width: 430px) and (max-height: 932px)': {
    fontSize: "20px",
    textAlign: "justify",
    lineHeight: "30px",
  },

  '@media (max-width: 414px) and (max-height: 896px)': {
    fontSize: "20px",
    textAlign: "justify",
  },

  '@media (max-width: 390px) and (max-height: 844px)': {
    fontSize: "20px", 
    lineHeight: "25px",
    overflow: "hidden",
  },

  '@media (max-width: 375px) and (max-height: 667px)': {
    fontSize: "15px",
    lineHeight: "20px",
    textAlign: "justify",
  },

  '@media (max-width: 360px) and (max-height: 740px)': {
    fontSize: "15px",
    lineHeight: "20px",
    textAlign: "justify",
  },

  '@media (max-width: 344px) and (max-height: 882px)': {
    fontSize: "17px",
    lineHeight: "25px",
    textAlign: "justify",
  },
});

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
  },

  '@media (max-width: 500px)': {
    width: "90%", 
  },
});

export { ContainerHome, LeftSide, FadeText, Image, RightSide, Title, Text, Bottom };