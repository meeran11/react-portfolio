import {
  SiReact, SiNodedotjs, SiPostgresql, SiMongodb,
  SiJavascript, SiTypescript, SiTailwindcss, SiGit,
  SiDocker, SiExpress, SiNextdotjs, SiPython,
  SiFirebase,
  SiPostman
} from 'react-icons/si';
import { FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { TbBrandRedux } from 'react-icons/tb';

export const personalDetails = {
  name: "Meeran",
  role: "Full Stack Developer",
  taglines: [
    "Full Stack Developer",
    "Backend Architect",
    "UI/UX Enthusiast",
    "Problem Solver"
  ],
  bio: "I craft robust, pixel-perfect web applications with clean code and thoughtful architecture. Passionate about building things that live on the internet — from interactive front-ends to scalable backend systems.",
  email: "meeran.official255@gmail.com",
  profileImage: "https://res.cloudinary.com/drrhzkpxn/image/upload/v1767373207/ChatGPT_Image_Jan_2_2026_09_59_32_PM_bytjxn.png",
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/meeran11", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/meeran", icon: "linkedin" },
  { name: "Email", url: "mailto:meeran.official255@gmail.com", icon: "email" },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Postman", icon: SiPostman, color: "#F05032" },
    ]
  }
];

// Keep flat skills for backward compat
export const skills = skillCategories.flatMap(cat => cat.skills);

export const projects = [
  {
    title: "Car Rental Platform",
    description: "A full-stack car rental application with user authentication, real-time booking system, and admin dashboard for fleet management.",
    tech: ["React", "Tailwind CSS", "PostgreSQL", "Node.js", "Express"],
    link: "https://car-rental-system-demo-one.vercel.app/",
    featured: false,
  },
  {
    title: "Drive Lite",
    description: "A cloud storage solution inspired by Google Drive with file upload, folder management, and sharing capabilities with a clean UI.",
    tech: ["Node.js", "MongoDB", "Express", "EJS"],
    link: "https://drivelite.vercel.app/",
    featured: false,
  },
];

export const experience = [
  {
    role: "Self-Taught Developer",
    type: "Continuous Learning",
    period: "2023 - Present",
    description: "Deep-dived into full-stack development through hands-on projects, open source contributions, and systematic study of computer science fundamentals.",
    highlights: ["JavaScript", "Data Structures", "System Design", "MongoDB"],
  },
];