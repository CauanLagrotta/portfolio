interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  deploy?: string;
  github: string;
  featured: boolean;
  tools: string[];
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "Birthday Reminder",
    description:
      "Um projeto simples de um lembrete de aniversariantes com React e Tailwind CSS, permitindo adicionar aniversariantes e exibir uma lista de aniversariantes.",
    image: "/assets/project_images/birthdayreminder.jpeg",
    github: "https://github.com/CauanLagrotta/birthday_reminder.git",
    featured: true,
    tools: [
      "React",
      "Typescript",
      "Nodejs",
      "Express",
      "Postgresql",
      "Prisma",
      "Gemini API",
      "Docker-compose",
      "TailwindCSS",
    ],
  },
  {
    id: 2,
    title: "Gerenciador de Pedidos",
    description:
      "Aplicação web para gerenciar pedidos de restaurante, com autenticação e controle de produtos e carrinho.",
    image: "/assets/project_images/restaurant.png",
    github: "https://github.com/CauanLagrotta/restaurant-falae.git",
    featured: false,
    tools: [
      "React",
      "Typescript",
      "TailwindCSS",
      "Nodejs",
      "Express",
      "SQLite",
      "Prisma",
    ],
  },
  {
    id: 3,
    title: "To-Do List",
    description:
      "Lista de tarefas interativa com salvamento no LocalStorage, permitindo adicionar, remover e marcar como concluídas.",
    image: "/assets/project_images/todolist.png",
    deploy: "https://todolist-omega-henna.vercel.app",
    github: "https://github.com/CauanLagrotta/todolist.git",
    featured: false,
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 4,
    title: "B7 pizza",
    description:
      "Projeto desenvolvido durante a aula, com React e Tailwind CSS, permitindo visualizar e gerenciar vendas, também inclui sistema de pagamento com Stripe.",
    image: "/assets/project_images/b7pizza.jpeg",
    github: "https://github.com/CauanLagrotta/b7-pizza.git",
    featured: false,
    tools: [
      "Nextjs",
      "React",
      "Typescript",
      "TailwindCSS",
      "Postgresql",
      "Prisma",
      "Stripe",
    ],
  },
  {
    id: 5,
    title: "Dashboard de Vendas Frontend",
    description:
      "Dashboard de vendas frontend com React e Tailwind CSS, permitindo visualizar e gerenciar vendas. Projeto desenvolvido para a Codi Academy.",
    image: "/assets/project_images/dashboard.png",
    deploy: "https://challenge-vii-noites-ufjf.vercel.app/",
    github: "https://github.com/CauanLagrotta/ChallengeVII-noites-ufjf.git",
    featured: true,
    tools: ["React", "Typescript", "TailwindCSS", "Shadcn", "Sweet Alert2"],
  },
  {
    id: 6,
    title: "NLW Agents",
    description:
      "Projeto desenvolvido durante o evento NLW da Rocketseat, com React e Tailwind CSS e integração com API do Gemini.",
    image: "/assets/project_images/nlw-agents.png",
    github: "https://github.com/CauanLagrotta/nlw-agents.git",
    featured: true,
    tools: [
      "React",
      "Typescript",
      "TailwindCSS",
      "React Query",
      "RadixUI",
      "Nodejs",
      "Fastify",
      "Drizzle ORM",
      "Postgresql",
      "Gemini API",
    ],
  },
  {
    id: 7,
    title: "Ignite Shop",
    description:
      "O Ignite Shop é um aplicação web de vendas de camisetas com temas do mundo dev, mostrando com detalhes a parte visual e informacional das camisetas, além de apresentar um carrinho onde o cliente pode adicionar as suas compras.",
    image: "/assets/project_images/ignite-shop.png",
    github: "https://github.com/CauanLagrotta/ignite-shop.git",
    featured: false,
    tools: [
      "React",
      "Typescript",
      "TailwindCSS",
      "Stitches",
      "RadixUI",
      "Stripe",
      "Swiper",
    ],
  },
  {
    id: 8,
    title: "NFT Marketplace",
    description:
      "Marketplace de NFTs totalmente funcional com NEXT JS. Interface amigável, integração com a funcionalidade Web3 e recursos como criação, compra e venda de NFTs.",
    image: "/assets/project_images/nft-marketplace.jpeg",
    github: "https://github.com/CauanLagrotta/nft-marketplace.git",
    featured: false,
    tools: [
      "React",
      "Typescript",
      "TailwindCSS",
      "Nextjs",
      "React toastify",
      "Framer-motion",
    ],
  },
  {
    id: 9,
    title: "Ignite Pomodoro",
    description:
      "Ignite Timer é um aplicativo que auxilia o usuário a controlar o tempo no método 'Pomodoro' de gerenciamento e organização do tempo",
    image: "/assets/project_images/ignite-pomodoro.png",
    github: "https://github.com/CauanLagrotta/ignite_pomodoro.git",
    featured: false,
    tools: ["React", "Typescript", "Styled-components", "Date-fns"],
  },
];
