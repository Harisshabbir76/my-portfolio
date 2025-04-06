import { ReactNode } from "react";

export interface DeveloperInfo {
  firstName: string;
  lastName: string;
  role: string;
  mainTechnologies: string[];
}

export interface Skill {
  name: string;
  proficiency: number;
  icon: ReactNode;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  category: "frontend" | "fullstack" | "3d";
  technologies: string[];
  github?: string;
  liveDemo?: string;
  icon: ReactNode;
}

export interface ContactInfo {
  email: string;
  location: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
    codepen: string;
  }
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
