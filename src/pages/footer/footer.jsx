import { ContainerFooter, LeftSide, RightSide, LinkItem, ContactItems, IconLink } from "./components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Tooltip from "@mui/material/Tooltip";

export function Footer() {
    return (
        <ContainerFooter>
            <LeftSide>
                <LinkItem href="#home">Home</LinkItem>
                <LinkItem href="#about">Sobre Mim</LinkItem>
                <LinkItem href="#projects">Projetos</LinkItem>

            </LeftSide>

            <RightSide>
                <span>Contato:</span>
                <ContactItems>
                    <Tooltip title="Email">
                        <IconLink href="https://mail.google.com/mail/?view=cm&fs=1&to=cauanlagrotta.dev@gmail.com" target="_blank">
                            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#db4437" }} />
                        </IconLink>
                    </Tooltip>
                    <Tooltip title="GitHub">
                        <IconLink href="https://github.com/CauanLagrotta" target="_blank">
                            <FontAwesomeIcon icon={faGithub} style={{ color: "#fff" }} />
                        </IconLink>
                    </Tooltip>
                    <Tooltip title="LinkedIn">
                        <IconLink href="https://www.linkedin.com/in/cauan-silva-lagrotta/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#0e76ae" }} />
                        </IconLink>
                    </Tooltip>
                    <Tooltip title="WhatsApp">
                        <IconLink href="https://wa.me/5532998552418?text=Olá,%20vim%20pelo%20seu%20portfólio%20e%20Gostaria%20de%20conversar!" target="_blank">
                            <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#25d366" }} />
                        </IconLink>
                    </Tooltip>
                </ContactItems>
            </RightSide>
        </ContainerFooter>
    );
}
