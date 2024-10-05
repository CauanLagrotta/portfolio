import { useState, useEffect } from "react"
import { ContainerHome, LeftSide, Image, RightSide, Title, Text, Bottom, TechsDiv, Techs } from "./components"
import { dataImg, cauan } from "./dataHome"

export function Home(){
   const [displayedText, setDisplayedText] = useState("")
   const [index, setIndex] = useState(0)

    useEffect(() => {
        if (index < cauan.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + cauan[index])
                setIndex(index + 1)
            }, 350)

            return () => clearTimeout(timeout)

        } else {

            setIndex(0)
            setDisplayedText('')
        }
    }, [index])
    
    return(
        <ContainerHome id="home">
            <LeftSide >
                <Image src="./images/home.png" />
            </LeftSide>

            <RightSide>
                <Title> {displayedText} </Title>

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