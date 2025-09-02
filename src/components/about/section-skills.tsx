import { useState } from "react";
import { Button } from "../ui/button";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";
import { hardSkills, softSkills } from "./skills-data";
import * as motion from "motion/react-client";
import Image from "next/image";

export function SectionSkills() {
  const [sectionActive, setSectionActive] = useState<"hard" | "soft">("soft");

  const SwitchToSoft = () => {
    setSectionActive("soft");
  };

  const SwitchToHard = () => {
    setSectionActive("hard");
  };

  return (
    <div className="overflow-x-hidden">
      <div className="flex flex-col gap-7 md:gap-0 md:flex-row md:justify-between items-center mb-8">
        <h2 className="text-2xl text-sky-600 self-start">Minhas habilidades</h2>

        <div className="border-gray-600 border-2 rounded-lg overflow-hidden flex">
          <Button
            onClick={SwitchToHard}
            className={`px-4 py-2 cursor-pointer rounded-none border-r-2 border-gray-600 transition-all ${
              sectionActive === "hard"
                ? "bg-sky-800 text-white brightness-100"
                : "bg-transparent text-gray-500 hover:bg-gray-100"
            }`}
          >
            Hard Skills
          </Button>
          <Button
            onClick={SwitchToSoft}
            className={`px-4 py-2 cursor-pointer rounded-none transition-all ${
              sectionActive === "soft"
                ? "bg-sky-800 text-white brightness-100"
                : "bg-transparent text-gray-500 hover:bg-gray-100"
            }`}
          >
            Soft Skills
          </Button>
        </div>
      </div>

      <div className="mt-8">
        {sectionActive === "hard" ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {hardSkills.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                key={index}
                className="flex flex-col items-center justify-center mt-8"
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  width={500}
                  height={500}
                  className="size-10 md:size-12 rounded-lg hover:shadow-2xl hover:shadow-black hover:scale-125 duration-200"
                />
                <p className="text-gray-500 text-sm md:text-">{item.name}</p>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center mt-20">
            <Terminal className="bg-black/40 border-0">
              <TypingAnimation>&gt; npx show soft-skills</TypingAnimation>

              {softSkills.map((item, index) => (
                <AnimatedSpan key={index} className="text-green-500">
                  <span>✔ {item.title}</span>
                </AnimatedSpan>
              ))}

              <TypingAnimation className="text-muted-foreground">
                Soft Skills exibidas com sucesso!
              </TypingAnimation>
            </Terminal>
          </div>
        )}
      </div>
    </div>
  );
}
