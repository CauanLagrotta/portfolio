import { useEffect, useState } from "react";

export const AnimatedName = () => {
  const animateNameData = [
    "<",
    "C",
    "a",
    "u",
    "a",
    "n",
    "L",
    "a",
    "g",
    "r",
    "o",
    "t",
    "t",
    "a",
    "/",
    ">",
    " ",
  ];

  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index < animateNameData.length) {
        setDisplayedText((prev) => prev + animateNameData[index]);
        setIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setDisplayedText("");
          setIndex(0);
        }, 1000);
      }
    }, 350);

    return () => clearTimeout(timeout);
  }, [index, animateNameData]);

  return <span className="text-4xl text-sky-600 ">{displayedText}</span>;
};
