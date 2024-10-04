import { ContainerHome, LeftSide, Image, RightSide, Title, Text, Bottom, TechsDiv, Techs } from "./components"
import { dataImg } from "./data"

export function Home(){
    const cauan = "<CauanLagrotta />"

    return(
        <ContainerHome id="home">
            <LeftSide >
                <Image src="./images/home.png" />
            </LeftSide>

            <RightSide>
                <Title> {cauan} </Title>

                <Text>
                     Olá! Eu sou Cauan Lagrotta, desenvolvedor web em formação, apaixonado por criar experiências interativas e funcionais na web. Estou focado em aprender e aplicar as melhores práticas de desenvolvimento fullstack para construir interfaces dinâmicas e sistemas eficientes. 
                </Text>
                <Bottom/>

                <TechsDiv>
                    {dataImg.map((item) => (
                        <Techs src={item.url} />
                    ))}
                </TechsDiv>
            </RightSide>
        </ContainerHome>
    )
}