import { projectsData } from "../components/projects/projects-data";
import { ArrowSquareOutIcon, GithubLogoIcon } from "@phosphor-icons/react";

export function Projects() {
  return (
    <div className="flex flex-col pt-30 pb-10 items-center px-4 md:px-20 md:pt-30 z-10">
      <h2 className="text-4xl text-sky-600 self-start mb-8">
        Principais projetos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectsData.map((item, index) => (
          <div key={index} className="flex justify-center">
            <div className="transition-all duration-300 transform w-[500px] bg-zinc-900 text-zinc-100 rounded-xl overflow-hidden shadow-lg flex flex-col">
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
      </div>
    </div>
  );
}
