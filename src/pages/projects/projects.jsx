import {
  ContainerProjects,
  TitleProject,
  GridContainer,
  CardContainer,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
  CardLinks,
  CardLink,
} from "./components";
import { dataCards } from "./dataProjects";

export function Projects() {
  return (
    <ContainerProjects id="projects">
      <TitleProject>Projetos</TitleProject>

      <GridContainer>
        {dataCards.map((card) => (
         
          <CardContainer key={card.title}> 
            <CardImage src={card.image} alt="Project Image" />
            <CardContent>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
              <CardLinks>
                <CardLink href={card.github} target="_blank">
                  Ver no GitHub
                </CardLink>
                <CardLink href={card.deploy} target="_blank">
                  Ver Deploy
                </CardLink>
              </CardLinks>
            </CardContent>
          </CardContainer>
        ))}
      </GridContainer>
    </ContainerProjects>
  );
}
