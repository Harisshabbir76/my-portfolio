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
              Hello! I'm <span className="text-primary">{developerInfo.firstName}</span>, a fresh and enthusiastic full-stack web developer with a passion for building interactive and user-friendly web applications.
            </p>
            <p className="text-muted-foreground">
              As a recent graduate and self-taught developer, I've focused on developing practical skills through hands-on projects. I'm particularly interested in MERN stack development and Python/Django frameworks, constantly expanding my knowledge through building real-world applications.
            </p>
            <p className="text-muted-foreground">
              I'm eager to apply my skills in a professional environment, collaborate with experienced developers, and contribute to meaningful projects while continuing to grow my expertise in web development.
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
            
            <div className="pt-6">
              <a 
                href="/Resume.pdf" 
                download
                className="px-6 py-3 border border-primary text-primary rounded font-medium hover:bg-primary/10 transition-all duration-300 inline-flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Resume
              </a>
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
