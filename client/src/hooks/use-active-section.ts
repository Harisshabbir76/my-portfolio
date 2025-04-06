import { useState, useEffect } from "react";

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("home");
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      const sections = ["home", "about", "skills", "projects", "contact"];
      
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return activeSection;
};
