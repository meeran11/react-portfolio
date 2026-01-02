import { Code, Database, Layout, Server } from 'lucide-react';

export const personalDetails = {
  name: "Meeran ",
  role: "Full Stack Developer",
  bio: "I build accessible, pixel-perfect, secure, and performant web applications.",
  email: "meeran.official255@gmail.com"
};

export const skills = [
  { name: "React", icon: Layout },
  { name: "Node.js", icon: Server },
  { name: "PostgreSQL", icon: Database },
  { name: "MongoDB", icon: Database },
  // Add more skills here
];

export const projects = [
  {
    title: "Car Rental Platform",
    description: "A full-stack car rental application with user authentication",
    tech: ["React", "Tailwind", "PosrtgreSQL", "Node.js"],
    link: "https://car-rental-system-demo-one.vercel.app/"
  },
  {
    title: "Drive Lite",
    description: "A cloud storage solution with file upload and sharing capabilities.",
    tech: ["Node.js", "MongoDB", "Express"],
    link: "https://drivelite.vercel.app/"
  }
];