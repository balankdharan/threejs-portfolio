import {
  animeRecommend,
  chatApp,
  expenseTracker,
  notionBlog,
  talkWithDb,
  ticTacToe,
} from "../assets/projects";
import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Getting started",
    company_name: "JavaScript & Node.js",
    icon: javascript,
    iconBg: "#fbe9a4",
    date: "2021",
    points: [
      "Learned the JavaScript fundamentals: callbacks, promises, async/await, DOM events and the Fetch API.",
      "Built my first backend with Express and MongoDB: signup, login and JWT authentication with cookies.",
    ],
  },
  {
    title: "Building full-stack apps",
    company_name: "React, Node.js & SQL",
    icon: react,
    iconBg: "#accbe1",
    date: "2024",
    points: [
      "Built React apps end to end: a social media app on MySQL, a chat app with Flask and WebSockets, a REST API on PostgreSQL.",
      "Made small games and tools in Python (Pygame, Turtle, Tkinter).",
      "Started learning 3D on the web with Three.js, which is how this site was made.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Working in an organization",
    icon: nextjs,
    iconBg: "#b7e4c7",
    date: "Now",
    points: [
      "Working as a full stack developer on real products with a team.",
      "Building with Next.js, TypeScript, GraphQL, PostgreSQL and Docker.",
      "Exploring Gen AI: an app that lets you query a MongoDB database in plain English.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/balankdharan",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/balankdharan",
  },
];

export const projects = [
  {
    image: talkWithDb,
    name: "Chat With Your Database",
    description:
      'A Gen AI app that lets you ask questions about a MongoDB database in plain English, like "how many users are active?", and get the answer back.',
    tags: ["React", "Node.js", "MongoDB", "Gen AI"],
    link: "https://github.com/balankdharan/talk-with-db",
  },
  {
    image: notionBlog,
    name: "Notion Blog",
    description:
      "A full-stack blogging platform inspired by Notion, with a rich-text editor, cover images and publish, edit and delete for your own posts.",
    tags: ["React", "Express", "MongoDB", "Tailwind"],
    link: "https://github.com/balankdharan/notion-mern-blog",
    demo: "https://notion-mern-blog.vercel.app",
  },
  {
    image: chatApp,
    name: "Real-time Chat App",
    description:
      "A 1:1 chat app with online status and real-time messages, built on the PERN stack with Prisma, Socket.IO and TypeScript.",
    tags: ["React", "PostgreSQL", "Socket.IO", "TypeScript"],
    link: "https://github.com/balankdharan/chatApp-PERN",
  },
  {
    image: expenseTracker,
    name: "GraphQL Expense Tracker",
    description:
      "Track income and expenses with a chart of where the money goes. Apollo Server and Apollo Client on the MERN stack, with login.",
    tags: ["GraphQL", "Apollo", "React", "MongoDB"],
    link: "https://github.com/balankdharan/graphqlExpense",
  },
  {
    image: animeRecommend,
    name: "Anime Recommendation",
    description:
      "Search for an anime you like and get similar ones, found with fuzzy title search and cosine similarity on genres.",
    tags: ["React", "Node.js", "Cosine similarity"],
    link: "https://github.com/balankdharan/anime-recommend-cosine",
  },
  {
    image: ticTacToe,
    name: "Tic Tac Toe",
    description:
      "Tic Tac Toe for two players or against a bot that can't be beaten, using the Minimax algorithm.",
    tags: ["React", "Vite", "Minimax"],
    link: "https://github.com/balankdharan/ticTacToe-react",
  },
];
