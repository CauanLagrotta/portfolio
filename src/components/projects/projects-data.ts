interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  deploy?: string;
  github: string;
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "Birthday Reminder",
    description:
      "Um projeto simples de um lembrete de aniversariantes com React e Tailwind CSS, permitindo adicionar aniversariantes e exibir uma lista de aniversariantes.",
    image: "./project_images/birthdayreminder.jpeg",
    github: "https://github.com/CauanLagrotta/birthday_reminder.git",
  },
  {
    id: 2,
    title: "Gerenciador de Pedidos",
    description:
      "Aplicação web para gerenciar pedidos de restaurante, com autenticação e controle de produtos e carrinho.",
    image: "./project_images/restaurant.png",
    github: "https://github.com/CauanLagrotta/restaurant-falae.git",
  },
  {
    id: 3,
    title: "To-Do List",
    description:
      "Lista de tarefas interativa com salvamento no LocalStorage, permitindo adicionar, remover e marcar como concluídas.",
    image: "./project_images/todolist.jfif",
    deploy: "https://todolist-omega-henna.vercel.app",
    github: "https://github.com/CauanLagrotta/todolist.git",
  },
  {
    id: 4,
    title: "Jogo da Velha",
    description:
      "Jogo da Velha clássico para dois jogadores, com detecção automática de vitória ou empate.",
    image: "./project_images/jogodavelha.jfif",
    deploy: "https://jogo-da-velha-pi-bice.vercel.app",
    github: "https://github.com/CauanLagrotta/jogo-da-velha.git",
  },
  {
    id: 5,
    title: "Quadro de Desenho",
    description:
      "Aplicativo de desenho em canvas com seleção de cores e opção de limpar o quadro.",
    image: "./project_images/quadrodedesenho.jfif",
    deploy: "https://quadro-de-desenho.vercel.app",
    github: "https://github.com/CauanLagrotta/quadro-de-desenho.git",
  },
];
