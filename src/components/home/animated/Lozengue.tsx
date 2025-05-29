import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

export const Lozengue = () => {
  const controls = useAnimation();
  const [rotated, setRotated] = useState(false);

  const handleClick = () => {
    setRotated(!rotated);
    controls.start({ rotate: rotated ? 0 : 45 });
  };

  return (
    <div className="relative w-52 h-52 flex items-center justify-center ml-auto mr-auto mb-15 sm:m-0">
      <motion.div
        animate={controls}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        onClick={handleClick}
        className="absolute w-52 h-52 bg-gradient-to-br from-blue-800 to-blue-950 rounded-2xl shadow-xl cursor-pointer"
      />
      <p className="z-10 text-white font-semibold pointer-events-none">Ver habilidades</p>
    </div>
  );
};
