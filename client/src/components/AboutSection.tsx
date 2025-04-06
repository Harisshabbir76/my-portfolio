import { motion } from "framer-motion";
import { developerInfo } from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground relative">About Me</h2>
          <div className="h-px bg-primary flex-grow max-w-sm"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-muted-foreground">
              Hello! I'm <span className="text-primary">{developerInfo.firstName}</span>, a passionate MERN stack developer with a love for creating interactive, responsive, and user-friendly web applications.
            </p>
            <p className="text-muted-foreground">
              With several years of experience in web development, I've worked on a diverse range of projects from e-commerce platforms to real-time applications. My focus is on writing clean, efficient code and implementing modern design principles.
            </p>
            <p className="text-muted-foreground">
              I enjoy solving complex problems and continuously learning new technologies to stay at the forefront of web development.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-medium mb-3">Main technologies I work with:</h3>
              <div className="grid grid-cols-2 gap-2">
                {developerInfo.mainTechnologies.map((tech, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary"></div>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative mx-auto"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="w-80 h-80 relative group">
              <div className="absolute inset-0 border-2 border-primary rounded-md transform translate-x-5 translate-y-5 transition-transform group-hover:translate-x-3 group-hover:translate-y-3 duration-300"></div>
              <div className="absolute inset-0 bg-card overflow-hidden rounded-md">
                <div className="w-full h-full flex items-center justify-center bg-card text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-40 h-40 opacity-80">
                    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z" />
                    <path d="M8.5 8.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path d="M21.5 8.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path d="M8.5 15.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path d="M21.5 15.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
