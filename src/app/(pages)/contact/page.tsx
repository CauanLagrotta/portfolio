"use client";

import * as motion from "motion/react-client";
import {
  WhatsappLogoIcon,
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function Contact() {
  return (
    <div className="flex flex-col items-center pt-30 px-4 py-10 md:px-20 md:pt-30 z-10">
      <AuroraText
        colors={["#1f68c7", "#991ee0"]}
        className="text-5xl font-extrabold text-sky-600 mb-8"
      >
        Contato
      </AuroraText>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-700 p-10 rounded-2xl max-w-auto"
      >
        <div className="flex flex-col gap-6">
          <strong className="font-bold">
            Tem um projeto interessante em mente ou está em busca de alguém para
            colaborar em algo novo?
          </strong>

          <p>
            Estou sempre aberto a conversar sobre ideias, parcerias ou
            oportunidades profissionais. Fique à vontade para me chamar em
            qualquer um dos canais a seguir. Será um prazer trocar uma ideia!
          </p>

          <motion.div className="grid grid-cols-2 font-bold sm:flex gap-10 mt-10 sm:items-center sm:justify-center ">
            <a
              href="https://github.com/CauanLagrotta"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition-all duration-200 flex flex-col items-center"
            >
              <GithubLogoIcon size={32} />
              <p>Github</p>
            </a>
            <a
              href="https://mail.google.com/mail/u/0/?fs=1&to=cauanlagrotta.dev@gmail.com&tf=cm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-800 transition-all duration-200 flex flex-col items-center"
            >
              <EnvelopeSimpleIcon size={32} />
              <p>Email</p>
            </a>
            <a
              href="https://wa.me/5532998552418?text=Olá,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar."
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800 transition-all duration-200 flex flex-col items-center"
            >
              <WhatsappLogoIcon size={32} />
              <p>Whatsapp</p>
            </a>
            <a
              href="https://www.linkedin.com/in/cauan-silva-lagrotta/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 transition-all duration-200 flex flex-col items-center"
            >
              <LinkedinLogoIcon size={32} />
              <p>LinkedIn</p>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
