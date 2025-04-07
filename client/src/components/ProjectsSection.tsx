import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ProjectsSection() {
  const [filter, setFilter] = useState("all");
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground relative">Projects</h2>
          <div className="h-px bg-primary flex-grow max-w-sm"></div>
        </motion.div>
        
        {/* Project Filter */}
        <motion.div 
          className="flex flex-wrap gap-3 mb-12 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            { id: "all", label: "All" },
            { id: "frontend", label: "Frontend" },
            { id: "fullstack", label: "Full Stack" },
            { id: "backend", label: "Backend" }
          ].map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded border-2 transition-all duration-300 ${
                filter === category.id 
                  ? "border-primary bg-primary/10 text-primary" 
                  : "border-white/10 hover:border-primary hover:bg-primary/10 text-muted-foreground hover:text-primary"
              }`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a 
            href="https://github.com/Harisshabbir76" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-3 border border-primary text-primary rounded hover:bg-primary/10 transition-all duration-300 group"
          >
            View More Projects
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
