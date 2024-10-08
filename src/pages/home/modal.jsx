import { ModalContainer, ModalContent, Title, ContainerCards, Card, CardTitle, CardSubtitle, DivSoftSkills, DivHardSkills, Image, CloseButton, TextSoftSkills } from "./componentsModal";
import { softSkills, dataImg } from "./dataHome";
import { useRef, useState, useEffect } from "react";

export function Modal({ closeModal }) {
  const [isSoftSkillsOpen, setIsSoftSkillsOpen] = useState(false);
  const [isHardSkillsOpen, setIsHardSkillsOpen] = useState(false);
  const [softSkillsHeight, setSoftSkillsHeight] = useState(0);
  const [hardSkillsHeight, setHardSkillsHeight] = useState(0);

  const softSkillsRef = useRef(null);
  const hardSkillsRef = useRef(null);

  useEffect(() => {
    if (softSkillsRef.current && isSoftSkillsOpen) {
      setSoftSkillsHeight(softSkillsRef.current.scrollHeight);
    }
    if (hardSkillsRef.current && isHardSkillsOpen) {
      setHardSkillsHeight(hardSkillsRef.current.scrollHeight);
    }
  }, [isSoftSkillsOpen, isHardSkillsOpen]); 

  const toggleCard = (cardType) => {
    if (cardType === "softSkills") {
      setIsSoftSkillsOpen(!isSoftSkillsOpen);
    } else if (cardType === "hardSkills") {
      setIsHardSkillsOpen(!isHardSkillsOpen);
    }
  };

  const seeSoftSkills = "ver soft skills";
  const seeHardSkills = "ver hard skills";
  const unsee = "ocultar";

  return (
    <ModalContainer onClick={closeModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Title>Minhas Habilidades</Title>
        <ContainerCards>
          <Card onClick={() => toggleCard("softSkills")}>
            <CardTitle>Soft Skills</CardTitle>
            <CardSubtitle>{isSoftSkillsOpen ? unsee : seeSoftSkills}</CardSubtitle>

            <DivSoftSkills
              ref={softSkillsRef}
              style={{
                maxHeight: isSoftSkillsOpen ? `${softSkillsHeight + 5000}px` : "0",
                overflow: "hidden",
                transition: "max-height 0.3s ease-in-out",
              }}
            >
              {softSkills.map((skill, index) => (
                <TextSoftSkills key={index}>{skill}</TextSoftSkills>
              ))}
            </DivSoftSkills>
          </Card>

          <Card onClick={() => toggleCard("hardSkills")}>
            <CardTitle>Hard Skills</CardTitle>
            <CardSubtitle>{isHardSkillsOpen ? unsee : seeHardSkills}</CardSubtitle>
            <DivHardSkills
              ref={hardSkillsRef}
              style={{
                maxHeight: isHardSkillsOpen ? `${hardSkillsHeight}px` : "0",
              }}
            >
              {dataImg.map((img, index) => (
                <Image key={index} src={img.url} alt={img.name} />
              ))}
            </DivHardSkills>
          </Card>
        </ContainerCards>

        <CloseButton onClick={closeModal}>Fechar</CloseButton>
      </ModalContent>
    </ModalContainer>
  );
}
