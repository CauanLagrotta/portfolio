import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { SkillsDialog } from "../dialog/SkillsDialog";

export const Lozengue = () => {
  const controls = useAnimation();
  const [rotated, setRotated] = useState(false);

  const handleClick = () => {
    setRotated(!rotated);
    controls.start({
      rotate: rotated ? 0 : 45,
      boxShadow: rotated
        ? "0px 0px 0px rgba(0,0,0,0)"
        : "0px 0px 30px 5px rgba(22, 150, 255, 0.808)",
      scale: rotated ? 1 : 1.1,
    });
  };

  const handleDialogChange = (isOpen: boolean) => {
    if (!isOpen) {
      controls.start({
        rotate: 0,
        boxShadow: "0px 0px 0px rgba(0,0,0,0)",
        scale: 1,
      });
      setRotated(false);
    }
  };

  return (
    <div className="relative w-64 h-64 flex items-center justify-center mx-auto mb-16">
      <Dialog.Root onOpenChange={handleDialogChange}>
        <Dialog.Trigger asChild>
          <div className="relative w-full h-full">
            {/*  Borda do quadrado ao rodar */}
            {rotated && (
              <motion.div
                animate={{ rotate: 45 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 border-4 border-blue-700 rounded-2xl"
              />
            )}

            {/* Quadrado que ao girar vira um losango */}
            <motion.div
              animate={controls}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              onClick={handleClick}
              className="absolute w-52 h-52 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                bg-gradient-to-br from-blue-800 to-blue-950 rounded-2xl shadow-xl cursor-pointer"
            />

            <p className="absolute w-full h-full flex items-center justify-center text-white font-semibold pointer-events-none z-10">
              Ver habilidades
            </p>
          </div>
        </Dialog.Trigger>
        <SkillsDialog />
      </Dialog.Root>
    </div>
  );
};
