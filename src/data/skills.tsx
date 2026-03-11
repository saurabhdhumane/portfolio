import {
  Layout, Server, Database, Code2, Smartphone,
  Cloud, Box, GitBranch, ShieldCheck, Code,
  FileCode, Brush, Palette,
  Users,
  Terminal,
  Layers
} from 'lucide-react';

export const skillCategories = [
  {
    title: "Frontend Engineering",
    skills: [
      { icon: <Layout />, name: "React.js", color: "text-blue-400" },
      { icon: <Smartphone />, name: "React Native", color: "text-blue-500" },
      { icon: <Code />, name: "JavaScript", color: "text-yellow-400" },
      { icon: <Code2 />, name: "TypeScript", color: "text-blue-600" },
      { icon: <Palette />, name: "Tailwind CSS", color: "text-cyan-400" },
      { icon: <FileCode />, name: "HTML5", color: "text-orange-500" },
      { icon: <Brush />, name: "CSS3", color: "text-blue-500" },
      { icon: <Layout />, name: "Bootstrap & jQuery", color: "text-purple-500" },
    ]
  },
  {
    title: "Backend & Databases",
    skills: [
      { icon: <Server />, name: "Node.js", color: "text-green-500" },
      { icon: <Code2 />, name: "Express.js", color: "text-slate-300" },
      { icon: <Server />, name: "RESTful APIs", color: "text-cyan-400" },
      { icon: <Database />, name: "MongoDB", color: "text-emerald-500" },
      { icon: <Database />, name: "PostgreSQL & SQL", color: "text-blue-300" },
    ]
  },
  {
    title: "DevOps, Cloud & Security",
    skills: [
      { icon: <Box />, name: "Docker", color: "text-blue-400" },
      { icon: <Cloud />, name: "AWS & Droplets", color: "text-orange-400" },
      { icon: <GitBranch />, name: "Git & GitHub", color: "text-orange-600" },
      { icon: <ShieldCheck />, name: "JWT & OAuth", color: "text-fuchsia-400" },
    ]
  },
  {
    title: "Architecture, Tools & Agile",
    skills: [
      { icon: <Layers />, name: "MERN Stack", color: "text-blue-500" },
      { icon: <Server />, name: "Microservices & MVC", color: "text-purple-400" },
      { icon: <Code />, name: "SOLID Principles", color: "text-green-400" },
      // { icon: <GitBranch />, name: "Git & GitHub", color: "text-orange-600" },
      { icon: <Terminal />, name: "Postman & VS Code", color: "text-orange-400" },
      { icon: <Users />, name: "Agile & Scrum", color: "text-blue-300" },
    ]
  }
];