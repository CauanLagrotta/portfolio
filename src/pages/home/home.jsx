import { useState, useEffect } from "react"
import { ContainerHome, LeftSide, Image, RightSide, Title, Text, Bottom } from "./components"
import { Modal } from "./modal.jsx"
import { cauan } from "./dataHome"

export function Home(){
   const [displayedText, setDisplayedText] = useState("")
   const [index, setIndex] = useState(0)
   const [isModalOpen, setIsModalOpen] = useState(false)

   const handleImageClick = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

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
                <Image src="./images/bluebrain.png" onClick={handleImageClick}/>
            </LeftSide>

            <RightSide>
                <Title> {displayedText} </Title>

                <Text>
                     Olá! Eu sou Cauan Lagrotta, desenvolvedor web em formação, apaixonado por criar experiências interativas e funcionais na web. Estou focado em aprender e aplicar as melhores práticas de desenvolvimento fullstack para construir interfaces dinâmicas e sistemas eficientes. 
                </Text>

                <Bottom/>

            </RightSide>

            {isModalOpen && (
                <Modal closeModal={closeModal}/>
            )}
        </ContainerHome>
    )
}