import { motion, useScroll } from "framer-motion";
import { ChevronDown, Code, CodepenIcon, Github } from "lucide-react";
import { developerInfo } from "@/lib/data";
import { AvatarImage, useAvatar } from "./AvatarImage";
import { useEffect } from "react";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const { setInHeroSection } = useAvatar();
  
  // Update avatar context based on scroll position
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (y) => {
      if (y < 300) {
        setInHeroSection(true);
      } else {
        setInHeroSection(false);
      }
    });
    
    return () => unsubscribe();
  }, [scrollY, setInHeroSection]);
  
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 w-full h-full z-0 bg-background">
        <div className="absolute top-20 -left-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-tertiary/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Animated tech icons */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <motion.div 
          className="absolute text-primary/10 top-20 left-1/4"
          animate={{ 
            y: [0, -10, 0], 
            rotate: [0, 5, 0] 
          }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          <CodepenIcon size={80} />
        </motion.div>
        <motion.div 
          className="absolute text-secondary/10 bottom-40 right-1/4"
          animate={{ 
            y: [0, 10, 0], 
            rotate: [0, -5, 0] 
          }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <Code size={100} />
        </motion.div>
        <motion.div 
          className="absolute text-tertiary/10 bottom-20 left-1/5"
          animate={{ 
            y: [0, 15, 0], 
            rotate: [0, 10, 0] 
          }}
          transition={{ repeat: Infinity, duration: 6 }}
        >
          <Github size={60} />
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="font-mono text-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Hello, my name is
            </motion.p>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <span className="text-foreground">{developerInfo.firstName}</span>{" "}
              <span className="text-foreground">{developerInfo.lastName}</span>
            </motion.h1>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-medium text-muted-foreground leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              I build things for the web
            </motion.h2>
            
            <motion.p 
              className="text-muted-foreground text-lg max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              I'm a <span className="text-primary">MERN stack developer</span> specializing in creating exceptional digital experiences. Currently focused on building responsive web applications with modern technologies.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <a 
                href="#projects" 
                className="px-6 py-3 bg-primary text-primary-foreground rounded font-medium hover:bg-primary/90 transition-all duration-300"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-primary text-primary rounded font-medium hover:bg-primary/10 transition-all duration-300"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>
          
          {/* Hero avatar image */}
          <div className="hidden lg:flex justify-center items-center relative">
            <AvatarImage 
              position="hero" 
              className="shadow-xl" 
              size={300}
            />
          </div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <a 
            href="#about" 
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Scroll to About section"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown size={24} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
