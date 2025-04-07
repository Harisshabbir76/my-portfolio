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
  firstName: "Haris",
  lastName: "Shabbir",
  role: "Full Stack Developer",
  mainTechnologies: [
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Python/Django"
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
      name: "TypeScript",
      proficiency: 85,
      icon: createIcon(Code, "text-primary h-5 w-5")
    },
    {
      name: "JavaScript",
      proficiency: 90,
      icon: createIcon(Code, "text-primary h-5 w-5")
    },
    {
      name: "HTML/CSS",
      proficiency: 85,
      icon: createIcon(PenTool, "text-primary h-5 w-5")
    }
  ],
  backend: [
    {
      name: "Python/Django",
      proficiency: 90,
      icon: createIcon(Server, "text-secondary h-5 w-5")
    },
    {
      name: "Node.js",
      proficiency: 85,
      icon: createIcon(Server, "text-secondary h-5 w-5")
    },
    {
      name: "MongoDB",
      proficiency: 85,
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
      name: "Next.js",
      proficiency: 80,
      icon: createIcon(Code, "text-[hsl(36,100%,50%)] h-5 w-5")
    },
    {
      name: "Responsive Design",
      proficiency: 90,
      icon: createIcon(Smartphone, "text-[hsl(36,100%,50%)] h-5 w-5")
    },
    {
      name: "Full Stack Development",
      proficiency: 85,
      icon: createIcon(Workflow, "text-[hsl(36,100%,50%)] h-5 w-5")
    }
  ]
};

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A full-featured e-commerce website built with Django framework, featuring product catalog, user authentication, and checkout functionality.",
    category: "fullstack",
    technologies: ["Python", "Django", "HTML/CSS", "JavaScript"],
    github: "https://github.com/Harisshabbir76/E-com-web-Django",
    liveDemo: "",
    icon: createIcon(Store, "text-primary opacity-20 w-24 h-24")
  },
  {
    id: 2,
    title: "MERN Chat App",
    description: "A real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js) featuring user authentication, chat rooms, and direct messaging.",
    category: "fullstack",
    technologies: ["TypeScript", "React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/Harisshabbir76/Mern-Chat-App",
    liveDemo: "",
    icon: createIcon(Globe, "text-secondary opacity-20 w-24 h-24")
  },
  {
    id: 3,
    title: "MERN Job Portal",
    description: "A job portal application built with the MERN stack where employers can post jobs and job seekers can apply. Features user authentication and profile management.",
    category: "fullstack",
    technologies: ["TypeScript", "React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/Harisshabbir76/MERN-job-portal",
    liveDemo: "",
    icon: createIcon(BarChart, "text-[hsl(36,100%,50%)] opacity-20 w-24 h-24")
  },
  {
    id: 4,
    title: "Portfolio Generator",
    description: "A portfolio generator application built with the MERN stack that allows users to create and customize their own portfolio websites.",
    category: "fullstack",
    technologies: ["TypeScript", "React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/Harisshabbir76/MERN-portfolio-generator",
    liveDemo: "",
    icon: createIcon(Layout, "text-primary opacity-20 w-24 h-24")
  },
  {
    id: 5,
    title: "Django CRM",
    description: "A Customer Relationship Management (CRM) system built with Django, featuring customer management, lead tracking, and sales analytics.",
    category: "fullstack",
    technologies: ["Python", "Django", "HTML/CSS", "JavaScript"],
    github: "https://github.com/Harisshabbir76/Django-CRM",
    liveDemo: "",
    icon: createIcon(Database, "text-secondary opacity-20 w-24 h-24")
  },
  {
    id: 6,
    title: "Instagram Clone (Postgram)",
    description: "An Instagram-like social media platform built with Django and React, featuring photo sharing, comments, likes, and user profiles.",
    category: "fullstack",
    technologies: ["TypeScript", "React", "Django", "PostgreSQL"],
    github: "https://github.com/Harisshabbir76/Postgram-Instagram-",
    liveDemo: "",
    icon: createIcon(PenTool, "text-[hsl(36,100%,50%)] opacity-20 w-24 h-24")
  }
];

export const contactInfo: ContactInfo = {
  email: "contact@example.com", // Update with your actual email if you'd like
  location: "Pakistan", 
  social: {
    github: "https://github.com/Harisshabbir76",
    linkedin: "https://linkedin.com/in/haris-shabbir",
    twitter: "https://twitter.com/harisshabbir",
    codepen: "https://codepen.io/harisshabbir"
  }
};
