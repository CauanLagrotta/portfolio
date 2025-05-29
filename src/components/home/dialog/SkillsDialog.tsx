import * as Dialog from "@radix-ui/react-dialog";
import { XIcon, ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import { softSkills, hardSkills } from "../skills-data";
import { useState } from "react";
import * as motion from "motion/react-client";

export const SkillsDialog = () => {
  const [showHardSkills, setShowHardSkills] = useState(false);
  const [showSoftSkills, setShowSoftSkills] = useState(true);

  const handleShowHardSkills = () => {
    setShowHardSkills(true);
    setShowSoftSkills(false);
  };
  const handleShowSoftSkills = () => {
    setShowHardSkills(false);
    setShowSoftSkills(true);
  };

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/40" />
      <Dialog.Content className="fixed top-1/2 left-1/2 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 bg-zinc-950 rounded-xl p-6 shadow-lg z-50">
        <Dialog.Close className="absolute top-4 right-4 focus:outline-sky-500 focus:outline rounded-md">
          <XIcon
            size={24}
            className="text-white hover:text-gray-500 cursor-pointer transition-all duration-200"
          />
        </Dialog.Close>

        <Dialog.Title className="text-xl text-sky-500 font-bold mb-4">
          Minhas Habilidades
        </Dialog.Title>

        <div className="flex gap-5 mt-5 flex-col items-center h-80">
          <div className="flex w-full justify-between">
            <ArrowLeftIcon
              size={24}
              className={` ${
                showSoftSkills
                  ? "text-transparent"
                  : "text-white hover:text-gray-500 cursor-pointer transition-all duration-200"
              } `}
              onClick={handleShowSoftSkills}
            />

            <ArrowRightIcon
              size={24}
              className={` ${
                showHardSkills
                  ? "text-transparent"
                  : "text-white hover:text-gray-500 cursor-pointer transition-all duration-200"
              } `}
              onClick={handleShowHardSkills}
            />
          </div>

          {showSoftSkills && (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-semibold text-blue-500 mb-2">Soft Skills</h3>
              <ul className="mb-4 list-disc list-inside text-gray-400">
                {softSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </motion.div>
          )}

          {showHardSkills && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-semibold text-blue-500 mb-2">Hard Skills</h3>
              <div className="grid grid-cols-7 gap-2">
                {hardSkills.map((imgUrl, index) => (
                  <img
                    key={index}
                    src={imgUrl}
                    alt={`Hard skill ${index + 1}`}
                    className="w-10 h-10 object-contain"
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
};
