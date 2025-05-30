import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { projectsData } from "../components/projects/projects-data";
import { ArrowSquareOutIcon, GithubLogoIcon } from "@phosphor-icons/react";
import * as motion from "motion/react-client";
import "keen-slider/keen-slider.min.css";

export function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 15,
      origin: "center",
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <div className="flex flex-col items-center px-4 py-10 md:px-20 md:pt-16">
      <h2 className="text-4xl text-sky-600 self-start mb-8">
        Principais projetos
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        ref={sliderRef}
        className="keen-slider w-full cursor-grab"
      >
        {projectsData.map((item, index) => (
          <div key={item.id} className="keen-slider__slide flex justify-center">
            <div
              className={`transition-all duration-300 transform ${
                index === currentSlide ? "scale-105" : "scale-80 opacity-80"
              } w-[300px] bg-zinc-900 text-zinc-100 rounded-xl overflow-hidden shadow-lg flex flex-col`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-zinc-400 text-sm">{item.description}</p>
                </div>

                <div className="mt-4 flex gap-16 justify-center items-center">
                  {item.deploy && (
                    <a
                      href={item.deploy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition flex flex-col items-center justify-center"
                      title="Ver projeto online"
                    >
                      <ArrowSquareOutIcon size={24} />
                      <p>Deploy</p>
                    </a>
                  )}
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-300 hover:text-gray-600 transition flex flex-col items-center justify-center"
                    title="Ver código no GitHub"
                  >
                    <GithubLogoIcon size={24} />
                    <p>Github</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* indicador de quantos cards tem e qual está ativo */}
      <div className="flex gap-2 mt-6">
        {projectsData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
              idx === currentSlide ? "bg-sky-500 scale-110" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}