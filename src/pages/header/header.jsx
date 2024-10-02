import { Container, Logo, ContainerLinks, Link  } from "./components"
import { Home } from "../home/home"
import { About } from "../about/about"
import { Projects } from "../projects/projects"

export function Header(){
    return(
        
        <Container>
            <a href={Home}>
                <Logo src="./images/header.png"/>
            </a>
            

            <ContainerLinks>
                <Link href={Home}> Home </Link>
                <Link href={About}> Sobre mim </Link>
                <Link href={Projects}> Projetos </Link>
            </ContainerLinks>
        </Container>
        
    )
}