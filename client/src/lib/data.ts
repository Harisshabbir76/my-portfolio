import { Project, Skill, ContactInfo, DeveloperInfo } from "./types";
import {
  Code,
  Database,
  Server,
  Layout,
  Store,
  Box,
  BarChart,
  Globe,
  Smartphone,
  Figma,
  PenTool,
  GitBranch,
  Workflow,
  HardDrive,
} from "lucide-react";
import React from "react";

export const developerInfo: DeveloperInfo = {
  firstName: "John",
  lastName: "Doe",
  role: "MERN Stack Developer",
  mainTechnologies: [
    "JavaScript (ES6+)",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Three.js"
  ]
};

// Function to create icon elements to avoid JSX in data.ts
const createIcon = (Icon: any, className: string) => {
  return React.createElement(Icon, { className });
};

export const skills: {
  frontend: Skill[];
  backend: Skill[];
  tools: Skill[];
} = {
  frontend: [
    {
      name: "React.js",
      proficiency: 90,
      icon: createIcon(Code, "text-primary h-5 w-5")
    },
    {
      name: "JavaScript",
      proficiency: 95,
      icon: createIcon(Code, "text-primary h-5 w-5")
    },
    {
      name: "Three.js",
      proficiency: 80,
      icon: createIcon(Box, "text-primary h-5 w-5")
    },
    {
      name: "CSS/SCSS",
      proficiency: 85,
      icon: createIcon(PenTool, "text-primary h-5 w-5")
    }
  ],
  backend: [
    {
      name: "Node.js",
      proficiency: 90,
      icon: createIcon(Server, "text-secondary h-5 w-5")
    },
    {
      name: "Express.js",
      proficiency: 85,
      icon: createIcon(Server, "text-secondary h-5 w-5")
    },
    {
      name: "MongoDB",
      proficiency: 80,
      icon: createIcon(Database, "text-secondary h-5 w-5")
    },
    {
      name: "RESTful APIs",
      proficiency: 90,
      icon: createIcon(Globe, "text-secondary h-5 w-5")
    }
  ],
  tools: [
    {
      name: "Git",
      proficiency: 85,
      icon: createIcon(GitBranch, "text-[hsl(36,100%,50%)] h-5 w-5")
    },
    {
      name: "Docker",
      proficiency: 70,
      icon: createIcon(HardDrive, "text-[hsl(36,100%,50%)] h-5 w-5")
    },
    {
      name: "Responsive Design",
      proficiency: 90,
      icon: createIcon(Smartphone, "text-[hsl(36,100%,50%)] h-5 w-5")
    },
    {
      name: "CI/CD",
      proficiency: 75,
      icon: createIcon(Workflow, "text-[hsl(36,100%,50%)] h-5 w-5")
    }
  ]
};

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product catalog, cart functionality, payment integration, and admin dashboard.",
    category: "fullstack",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/johndoe/ecommerce-platform",
    liveDemo: "https://ecommerce-platform-demo.com",
    icon: createIcon(Store, "text-primary opacity-20 w-24 h-24")
  },
  {
    id: 2,
    title: "3D Interactive Gallery",
    description: "An immersive 3D gallery showcasing artwork with interactive elements and animations built with Three.js.",
    category: "3d",
    technologies: ["Three.js", "JavaScript", "WebGL", "HTML/CSS"],
    github: "https://github.com/johndoe/3d-gallery",
    liveDemo: "https://3d-gallery-demo.com",
    icon: createIcon(Box, "text-secondary opacity-20 w-24 h-24")
  },
  {
    id: 3,
    title: "Admin Dashboard UI",
    description: "A responsive admin dashboard with customizable widgets, charts, and data visualization components.",
    category: "frontend",
    technologies: ["React", "Chart.js", "Tailwind CSS", "Redux"],
    github: "https://github.com/johndoe/admin-dashboard",
    liveDemo: "https://admin-dashboard-demo.com",
    icon: createIcon(BarChart, "text-[hsl(36,100%,50%)] opacity-20 w-24 h-24")
  },
  {
    id: 4,
    title: "Social Media App",
    description: "A feature-rich social media application with real-time chat, post sharing, and user profiles.",
    category: "fullstack",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/johndoe/social-media-app",
    liveDemo: "https://social-media-app-demo.com",
    icon: createIcon(Globe, "text-primary opacity-20 w-24 h-24")
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A modern portfolio website showcasing developer projects and skills with 3D elements and animations.",
    category: "frontend",
    technologies: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/johndoe/portfolio",
    liveDemo: "https://johndoe-portfolio.com",
    icon: createIcon(Layout, "text-secondary opacity-20 w-24 h-24")
  },
  {
    id: 6,
    title: "3D Product Configurator",
    description: "An interactive 3D product configurator allowing users to customize products in real-time with color and feature options.",
    category: "3d",
    technologies: ["Three.js", "React", "WebGL", "GLSL"],
    github: "https://github.com/johndoe/product-configurator",
    liveDemo: "https://product-configurator-demo.com",
    icon: createIcon(Figma, "text-[hsl(36,100%,50%)] opacity-20 w-24 h-24")
  }
];

export const contactInfo: ContactInfo = {
  email: "hello@example.com",
  location: "San Francisco, CA",
  social: {
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
    codepen: "https://codepen.io/johndoe"
  }
};
