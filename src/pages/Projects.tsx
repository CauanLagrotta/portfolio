import { projectsData } from "../components/projects/projects-data";
import {
  ArrowSquareOutIcon,
  GithubLogoIcon,
  SealCheckIcon,
} from "@phosphor-icons/react";
import { Card, CardAction, CardDescription } from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Badge } from "@/components/ui/badge";
import { AuroraText } from "@/components/magicui/aurora-text";

export function Projects() {
  return (
    <div className="flex flex-col z-10 pt-30 pb-10 items-center px-4 md:px-20 md:pt-30">
      <AuroraText
        colors={["#1f68c7", "#991ee0"]}
        className="text-5xl font-extrabold text-sky-600 mb-8"
      >
        Principais projetos
      </AuroraText>

      <div className="flex items-center justify-center self-start gap-5 mb-7">
        <div className="rounded-full w-4 h-4 bg-amber-400" />
        <h3 className="text-gray-200 text-3xl font-bold">
          Projetos em destaque
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projectsData
          .filter((i) => i.featured)
          .map((item, index) => (
            <Card
              key={index}
              className="bg-zinc-950/40 relative w-full text-zinc-100 shadow-lg flex flex-col overflow-hidden border-none"
            >
              <div className="relative">
                {item.featured && (
                  <Badge className="absolute top-2 right-2 bg-sky-700">
                    <span className="flex items-center gap-2">
                      <SealCheckIcon />
                      <p className="text-gray-100">Destaque</p>
                    </span>
                  </Badge>
                )}
                <span className="px-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </span>
              </div>

              <div className="px-4 py-2 flex flex-wrap gap-2">
                {item.tools.length > 5
                  ? [
                      ...item.tools.slice(0, 5).map((tool, toolIdx) => (
                        <Badge
                          key={toolIdx}
                          className="bg-zinc-700 text-gray-100 text-xs"
                        >
                          {tool}
                        </Badge>
                      )),
                      <Badge
                        key="more"
                        className="bg-zinc-700 text-gray-100 text-xs"
                      >
                        +{item.tools.length - 5} mais
                      </Badge>,
                    ]
                  : item.tools.map((tool, toolIdx) => (
                      <Badge
                        key={toolIdx}
                        className="bg-zinc-700 text-gray-100 text-xs"
                      >
                        {tool}
                      </Badge>
                    ))}
              </div>

              <CardDescription className="px-4">
                <h3 className="text-xl text-gray-100">{item.title}</h3>
                <p className="w-full text-xs overflow-hidden text-ellipsis whitespace-nowrap">
                  {item.description}
                </p>
              </CardDescription>

              <CardAction className="mt-4 mx-auto flex gap-16 justify-center items-center">
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
              </CardAction>

              <BorderBeam
                duration={6}
                size={400}
                className="from-transparent via-violet-500 to-transparent"
              />
              <BorderBeam
                duration={6}
                delay={3}
                size={400}
                borderWidth={2}
                className="from-transparent via-blue-500 to-transparent"
              />
            </Card>
          ))}
      </div>

      <h3 className="text-gray-200 text-3xl self-start mt-14 font-bold">
        Outros projetos
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {projectsData
          .filter((i) => !i.featured)
          .map((item, index) => (
            <Card
              key={index}
              className="bg-zinc-950/40 relative w-full text-zinc-100 shadow-lg flex flex-col overflow-hidden border-none"
            >
              <div className="relative">
                <span className="px-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </span>
              </div>

              <div className="px-4 py-2 flex flex-wrap gap-2">
                {item.tools.length > 5
                  ? [
                      ...item.tools.slice(0, 5).map((tool, toolIdx) => (
                        <Badge
                          key={toolIdx}
                          className="bg-zinc-700 text-gray-100 text-xs"
                        >
                          {tool}
                        </Badge>
                      )),
                      <Badge
                        key="more"
                        className="bg-zinc-700 text-gray-100 text-xs"
                      >
                        +{item.tools.length - 5} mais
                      </Badge>,
                    ]
                  : item.tools.map((tool, toolIdx) => (
                      <Badge
                        key={toolIdx}
                        className="bg-zinc-700 text-gray-100 text-xs"
                      >
                        {tool}
                      </Badge>
                    ))}
              </div>

              <CardDescription className="px-4">
                <h3 className="text-xl text-gray-100">{item.title}</h3>
                <p className="w-full text-xs overflow-hidden text-ellipsis whitespace-nowrap">
                  {item.description}
                </p>
              </CardDescription>

              <CardAction className="mt-4 mx-auto flex gap-16 justify-center items-center">
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
              </CardAction>

              <BorderBeam
                duration={6}
                size={400}
                className="from-transparent via-violet-500 to-transparent"
              />
              <BorderBeam
                duration={6}
                delay={3}
                size={400}
                borderWidth={2}
                className="from-transparent via-blue-500 to-transparent"
              />
            </Card>
          ))}
      </div>
    </div>
  );
}
