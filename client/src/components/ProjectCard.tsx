import { Project } from "@/lib/types";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div 
      className="h-full bg-card rounded-lg overflow-hidden group border border-white/5 hover:border-primary/50 transition-all hover:shadow-[0_0_15px_rgba(100,255,218,0.1)] duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden h-56">
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-70 z-10"></div>
        
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
            {project.icon}
          </div>
        </motion.div>
        
        <div className="absolute top-4 right-4 flex gap-2 z-20">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-background/60 backdrop-blur-sm rounded-full text-foreground hover:text-primary transition-colors"
              aria-label="View GitHub repository"
            >
              <Github size={16} />
            </a>
          )}
          {project.liveDemo && (
            <a 
              href={project.liveDemo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-background/60 backdrop-blur-sm rounded-full text-foreground hover:text-primary transition-colors"
              aria-label="View live demo"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-medium mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
