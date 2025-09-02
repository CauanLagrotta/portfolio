"use client";

import * as motion from "motion/react-client";
import workspace from "/public/assets/workspace.png";
import { SectionSkills } from "@/components/about/section-skills";
import { CodeIcon, CoffeeIcon, HammerIcon } from "@phosphor-icons/react";
import { AuroraText } from "@/components/magicui/aurora-text";
import Image from "next/image";

export default function About() {
  const dayOfBirth = 6;
  const monthOfBirth = 7;
  const yearOfBirth = 2006;

  const today = new Date().getDate();
  const actualMonth = new Date().getMonth();
  const actualYear = new Date().getFullYear();

  let yearsOld = actualYear - yearOfBirth;
  if (dayOfBirth === today && monthOfBirth === actualMonth) {
    yearsOld++;
  }

  return (
    <div className="z-10 w-full ">
      <div className="flex flex-col items-center pt-30 pb-10">
        <AuroraText
          colors={["#1f68c7", "#991ee0"]}
          className="text-5xl font-extrabold text-sky-600 mb-8"
        >
          Sobre mim
        </AuroraText>

        <div className="flex flex-col lg:flex-row-reverse items-center gap-6 sm:gap-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 50, x: -50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={workspace}
              width={800}
              height={800}
              className="rounded-2xl shadow-2xl shadow-gray-950 w-[500px]"
              alt="Foto de perfil"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50, x: 50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-300 flex flex-col gap-5 leading-7 sm:leading-8 max-w-lg sm:max-w-xl md:max-w-2xl px-2 sm:px-0 text-lg"
          >
            <p>
              Olá! Sou Cauan Silva Lagrotta, tenho {yearsOld} anos e atualmente
              estou em formação como Desenvolvedor Web Fullstack pela Codi
              Academy (conclusão em 2026) e também curso Análise e
              Desenvolvimento de Sistemas pela Descomplica (conclusão em 2027).
            </p>

            <p>
              Acredito que um bom desenvolvedor precisa unir funcionalidade e
              usabilidade, e é exatamente isso que busco ao aplicar meus
              conhecimentos: criar produtos que entreguem valor real, com
              qualidade e boa experiência para o usuário.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mx-3 sm:mx-5 text-center mt-20">
          <div className="hover:scale-110 border-2 border-transparent hover:border-sky-600 duration-200 flex justify-center items-center flex-col gap-3 bg-gray-800 rounded-lg p-10 shadow-2xl drop-shadow-black">
            <span className="text-3xl ">
              <CodeIcon className="text-sky-600 size-10 md:size-12" />
            </span>
            <h4 className="text-2xl font-semibold">+50</h4>
            <p className="text-gray-400 text-md">Projetos</p>
          </div>

          <div className="hover:scale-110 border-2 border-transparent hover:border-sky-600 duration-200 flex justify-center items-center flex-col gap-3 bg-gray-800 rounded-lg p-10 shadow-2xl drop-shadow-black">
            <span className="text-3xl">
              <HammerIcon className="text-sky-600 size-10 md:size-12" />
            </span>
            <h4 className="text-2xl font-semibold">+10</h4>
            <p className="text-gray-400 text-md">Tecnologias e ferramentas</p>
          </div>

          <div className="hover:scale-110 border-2 border-transparent hover:border-sky-600 duration-200 flex justify-center items-center flex-col gap-3 bg-gray-800 rounded-lg p-10 shadow-2xl drop-shadow-black">
            <span className="text-3xl">
              <CoffeeIcon className="text-sky-600 size-10 md:size-12" />
            </span>
            <h4 className="text-2xl font-semibold">∞</h4>
            <p className="text-gray-400 text-md">Cafés</p>
          </div>
        </div>

        <div className="bg-gray-800 mt-20 pb-10 p-6 sm:p-10 w-[380px] overflow-x-hidden rounded-xl lg:rounded-none md:w-[700px] lg:w-full lg:min-h-screen">
          <SectionSkills />
        </div>

        <h2 className="mt-20 text-3xl font-bold">O que me motiva?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mx-3 sm:mx-5 text-center mt-10">
          <div className="flex flex-col gap-3 bg-gray-800 rounded-lg p-10 shadow-2xl drop-shadow-black">
            <span className="text-2xl md:text-3xl">🚀</span>
            <h4 className="text-xl md:text-3xl font-semibold">Inovação</h4>
            <p className="text-gray-400">
              Sempre explorando novas tecnologias e abordagens para resolver
              melhor os problemas.
            </p>
          </div>

          <div className="flex flex-col gap-3 bg-gray-800 rounded-lg p-10 shadow-2xl drop-shadow-black">
            <span className="text-2xl md:text-3xl">⭐</span>
            <h4 className="text-xl md:text-3xl font-semibold">Qualidade</h4>
            <p className="text-gray-400">
              Comprometido em escrever código limpo e sustentável que resista a
              todos os tipos de testes, mas principalmente ao teste do tempo.
            </p>
          </div>

          <div className="flex flex-col gap-3 bg-gray-800 rounded-lg p-10 shadow-2xl drop-shadow-black">
            <span className="text-2xl md:text-3xl">💡</span>
            <h4 className="text-xl md:text-3xl font-semibold">Impacto</h4>
            <p className="text-gray-400">
              Construindo soluções que fazem real a diferença na vida das
              pessoas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
