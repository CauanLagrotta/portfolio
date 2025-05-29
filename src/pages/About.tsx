import * as motion from "motion/react-client";
import profileImg from "../images/profile.jpeg";

export function About() {
  return (
    <div className="flex flex-col items-center px-4 py-10 md:px-20">
      <h2 className="text-4xl text-sky-600 self-start mb-8">Sobre mim</h2>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Foto com animação */}
        <motion.div
          initial={{ opacity: 0, y: 50, x: -50 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={profileImg}
            className="w-64 md:w-80 h-auto rounded-2xl shadow-lg"
            alt="Foto de perfil"
          />
        </motion.div>

        {/* Texto com animação */}
        <motion.div
          initial={{ opacity: 0, y: 50, x: 50 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-300 leading-8 max-w-2xl"
        >
          <p className="mb-4">
            Olá! Sou Cauan Silva Lagrotta, tenho 18 anos e atualmente estou em
            formação como Desenvolvedor Web Fullstack pela Codi Academy
            (conclusão em 2026) e também curso Análise e Desenvolvimento de
            Sistemas pela Descomplica (conclusão em 2027).
          </p>

          <p className="mb-4">
            Sou apaixonado por tecnologia e inovação digital, com foco em transformar ideias em soluções web modernas e eficientes. Tenho me dedicado ao estudo de tecnologias como HTML, CSS, JavaScript, React, Node.js, Express e MySQL, além de ferramentas como Styled-components e muito mais.
          </p>

          <p>
            Acredito que um bom desenvolvedor precisa unir funcionalidade e usabilidade, e é exatamente isso que busco ao aplicar meus conhecimentos: criar produtos que entreguem valor real, com qualidade e boa experiência para o usuário.
          </p>

        </motion.div>
      </div>
    </div>
  );
}
