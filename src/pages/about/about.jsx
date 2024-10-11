import {
  ContainerAbout,
  TitleAbout,
  TextAbout,
  ContactItems,
  Gmail,
  Github,
  Linkedin,
  Whatsapp,
} from "./components";
import { dataText } from "./dataAbout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Tooltip from "@mui/material/Tooltip";

export function About() {
  return (
    <ContainerAbout id="about">
      <TitleAbout>Sobre mim</TitleAbout>

      {dataText.map((item, index) => (
        <TextAbout key={index}>{item.p}</TextAbout>
      ))}

      <ContactItems>
        <Tooltip title="Gmail">
          <Gmail
            href="https://mail.google.com/mail/?view=cm&fs=1&to=cauanlagrotta.dev@gmail.com"
            target="_blank"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </Gmail>
        </Tooltip>

        <Tooltip title="Github">
          <Github href="https://github.com/CauanLagrotta" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </Github>
        </Tooltip>

        <Tooltip title="LinkedIn">
          <Linkedin href="https://www.linkedin.com/in/cauan-silva-lagrotta/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </Linkedin>
        </Tooltip>

        <Tooltip title="Whatsapp">
          <Whatsapp href="https://wa.me/5532998552418?text=Olá,%20vim%20pelo%20seu%20portfólio%20e%20Gostaria%20de%20conversar!" target="_blank">
            <FontAwesomeIcon icon={faWhatsapp} />
          </Whatsapp>
        </Tooltip>
      </ContactItems>
    </ContainerAbout>
  );
}
