import {
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiExpress,
  SiNextdotjs,
  SiPython,
  SiFirebase,
  SiPostman,
  SiGithub,
  SiSupabase,
  SiOpenai,
  SiHuggingface,
  SiLinux,
  SiVercel,
  // SiAzuredevops,
  SiLangchain
} from "react-icons/si";

import { FaHtml5, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";

export const personalDetails = {
  name: "Meeran Uz Zaman",

  role: "Full Stack & AI Engineer",

  taglines: [
    "Full Stack Developer",
    "AI & RAG Engineer",
    "React · Node.js · PostgreSQL",
    "LangChain · LangGraph · LLMs"
  ],

  bio:
  "Full Stack & AI Developer building production-ready web and AI applications end-to-end. Skilled in React, Node.js, PostgreSQL, and MongoDB, with hands-on experience in RAG pipelines, LangChain, and LLM-powered systems. Comfortable owning projects from architecture through CI/CD deployment on Azure and GitHub Actions.",
  email: "meeranuzzaman19@gmail.com",

  profileImage:
    "https://res.cloudinary.com/drrhzkpxn/image/upload/v1767373207/ChatGPT_Image_Jan_2_2026_09_59_32_PM_bytjxn.png",

  resume: "/resume.pdf",

  github: "https://github.com/meeran11",

  linkedin: "https://www.linkedin.com/in/meeran-uz-zaman",

  portfolio: "https://meeranuzzaman.vercel.app/",
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/meeran11",
    icon: "github",
  },

  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/meeran-uz-zaman",
    icon: "linkedin",
  },

  {
    name: "Email",
    url: "mailto:meeranuzzaman19@gmail.com",
    icon: "email",
  },
];

export const skillCategories = [
  {
    title: "Artificial Intelligence",

    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Machine Learning", icon: FaDatabase, color: "#FF9800" },
      { name: "Generative AI", icon: SiOpenai, color: "#10A37F" },
      { name: "OpenAI API", icon: SiOpenai, color: "#10A37F" },
      { name: "LangChain", icon: SiLangchain, color: "#00C853" },
      { name: "Hugging Face", icon: SiHuggingface, color: "#FFD21E" },
      { name: "Prompt Engineering", icon: SiOpenai, color: "#10A37F" },
      { name: "RAG", icon: FaDatabase, color: "#FF5722" },
      { name: "LLMs", icon: SiOpenai, color: "#10A37F" },
      { name: "Whisper", icon: SiOpenai, color: "#10A37F" },
      { name: "Embeddings", icon: FaDatabase, color: "#3F51B5" },
      { name: "NLP", icon: FaDatabase, color: "#8BC34A" },
      { name: "LangGraph", icon: SiLangchain, color: "#00C853" }
    ],
  },

  {
    title: "Frontend",

    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Redux", icon: TbBrandRedux, color: "#764ABC" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    ],
  },

  {
    title: "Backend",

    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "REST APIs", icon: FaDatabase, color: "#FF9800" },
    ],
  },

  {
    title: "Tools & DevOps",

    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      // { name: "Azure", icon: SiAzuredevops, color: "#0078D4" },
      { name: "CI/CD", icon: SiGithub, color: "#2088FF" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
    ],
  },
];

export const skills = skillCategories.flatMap((cat) => cat.skills);

export const projects = [
  {
    title: "🤖 RAG Video Agent",

    description:
      "Full-stack RAG application that transforms YouTube videos into a searchable knowledge base. Built a FastAPI backend from scratch with Whisper transcription, background threading, per-video ChromaDB vector collections, and LangChain-powered Q&A — deployed on Render and Vercel.",

    tech: [
      "Python",
      "FastAPI",
      "Next.js",
      "Whisper",
      "LangChain",
      "ChromaDB",
      "RAG",
      "Mistral AI",
    ],

    link: "https://github.com/meeran11/RAG-Video-Agent",

    featured: true,
  },

  {
    title: "🧠 Multi-Agent Research Studio",

    description:
      "Autonomous research assistant orchestrating Search, Scraper, Writer, and Critic agents via LangGraph to generate structured, high-quality research reports end-to-end. Ported to a polished Streamlit interface with a custom design system.",

    tech: [
      "Python",
      "LangGraph",
      "LangChain",
      "Streamlit",
      "LLMs",
      "Tavily",
    ],

    link: "https://multi-agent-ai-researcher.streamlit.app/",

    featured: true,
  },

  {
    title: "🚗 Car Rental & Maintenance API",

    description:
      "Secure RESTful backend with JWT authentication, role-based access control, and modular PostgreSQL-backed architecture — built for scalability and clean separation of concerns.",

    tech: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
    ],

    link: "https://car-rental-system-demo-one.vercel.app/",

    featured: true,
  },

  {
    title: "☁️ DriveLite",

    description:
      "Cloud-based file management system with a full CI/CD pipeline via GitHub Actions, automating build, test, and deployment to Azure for reliable, hands-off releases.",

    tech: [
      "Node.js",
      "MongoDB",
      "Supabase",
      "Azure",
      "GitHub Actions",
    ],

    link: "https://drivelite.vercel.app/",

    featured: true,
  },
];

export const experience = [
  {
    role: "Full Stack & AI Developer",

    type: "Independent Projects",

    period: "2023 - Present",

    description:
      "Designed, built, and deployed full-stack and AI-powered applications end-to-end — from backend architecture and API design to LLM-based RAG pipelines and cloud CI/CD. Worked across the stack with React, Node.js, PostgreSQL, MongoDB, LangChain, and Azure/GitHub Actions.",

    highlights: [
      "Full Stack Development",
      "RAG & LLM Pipelines",
      "LangChain / LangGraph",
      "REST API Design",
      "PostgreSQL & MongoDB",
      "CI/CD (GitHub Actions, Azure)",
      "Cloud Deployment",
      "Python & Node.js",
    ],
  },
];