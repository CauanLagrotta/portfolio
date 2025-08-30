
import { Button } from "@/components/ui/button";
import { Ripple } from "../components/magicui/ripple";
import { TextAnimate } from "@/components/magicui/text-animate";
import { AuroraText } from "@/components/magicui/aurora-text";
import {
  ArrowCircleDownIcon,
  ArrowRightIcon,
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="flex flex-col justify-center items-center pt-25 z-10 mx-auto overflow-hidden relative">
      <Ripple mainCircleOpacity={0.4} className="" />

      <TextAnimate
        animation="slideUp"
        duration={0.9}
        by="word"
        className="text-4xl md:text-7xl font-bold text-white brightness-200"
      >
        Olá, Eu sou
      </TextAnimate>
      <AuroraText
        colors={[
          "#3383B1",
          "#2f0f86",
          "#1f68c7",
          "#13448E",
          "#0E36A3",
          "#2f0f86",
        ]}
        speed={2}
        className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent brightness-200 h-20"
      >
        Cauan Lagrotta
      </AuroraText>

      <TextAnimate
        animation="slideUp"
        duration={0.9}
        by="word"
        className="text-gray-400 text-base md:text-xl px-12 md:ml-12 md:mt-7 md:w-4xl"
      >
        Criando experiências digitais excepcionais com código limpo e design
        moderno. Desenvolvedor Full-Stack apaixonado por criar experiências
        digitais excepcionais que fazem a diferença.
      </TextAnimate>

      <div className="flex flex-col md:flex-row items-center mt-15 gap-5">
        <Link to="/projects">
          <Button className="w-72 h-16 bg-gradient-to-r from-violet-900 to-sky-800 cursor-pointer brightness-100">
            Ver projetos <ArrowRightIcon />
          </Button>
        </Link>

        <div className="flex flex-row">
          <a
            href="/cauanlagrotta-curriculo-pt-br.pdf"
            download="cauan-lagrotta-curriculo.pdf"
          >
            <Button className="w-72 h-16 cursor-pointer">
              Baixar Currículo
              <ArrowCircleDownIcon className="size-6" />
            </Button>
          </a>
        </div>
      </div>

      <div className="flex pt-10 gap-10 ">
        <a
          href="https://github.com/CauanLagrotta"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-violet-300/10 p-3 hover:p-3 rounded-full transition-all duration-200 flex flex-col items-center"
        >
          <GithubLogoIcon size={32} />
        </a>
        <a
          href="https://www.linkedin.com/in/cauan-silva-lagrotta/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-violet-300/10 p-3 hover:p-3 rounded-full transition-all duration-200 flex flex-col items-center"
        >
          <LinkedinLogoIcon size={32} />
        </a>

        <a
          href="https://mail.google.com/mail/u/0/?fs=1&to=cauanlagrotta.dev@gmail.com&tf=cm"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-violet-300/10 p-3 hover:p-3 rounded-full transition-all duration-200 flex flex-col items-center"
        >
          <EnvelopeSimpleIcon size={32} />
        </a>
      </div>
    </div>
  );
}
