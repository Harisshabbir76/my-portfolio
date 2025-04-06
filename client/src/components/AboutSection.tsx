import { motion } from "framer-motion";
import { developerInfo } from "@/lib/data";
import { AvatarImage } from "./AvatarImage";

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
            className="relative mx-auto flex justify-center items-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Container for avatar with decorative border */}
            <div className="relative group">
              {/* Decorative border that moves on hover */}
              <div className="absolute inset-0 border-2 border-primary rounded-full transform translate-x-5 translate-y-5 transition-transform group-hover:translate-x-3 group-hover:translate-y-3 duration-300 w-[280px] h-[280px]"></div>
              
              {/* About section avatar */}
              <div className="relative">
                <AvatarImage 
                  position="about" 
                  className="shadow-xl" 
                  size={270}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
