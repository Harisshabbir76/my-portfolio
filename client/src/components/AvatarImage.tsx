import { motion, useScroll, useTransform } from "framer-motion";
import { createContext, useContext, useEffect, useState } from "react";

// Create a context to share avatar state between components
type AvatarContextType = {
  inHeroSection: boolean;
  setInHeroSection: (value: boolean) => void;
};

const AvatarContext = createContext<AvatarContextType | null>(null);

export const AvatarProvider = ({ children }: { children: React.ReactNode }) => {
  const [inHeroSection, setInHeroSection] = useState(true);
  
  return (
    <AvatarContext.Provider value={{ inHeroSection, setInHeroSection }}>
      {children}
    </AvatarContext.Provider>
  );
};

export const useAvatar = () => {
  const context = useContext(AvatarContext);
  if (!context) {
    throw new Error("useAvatar must be used within an AvatarProvider");
  }
  return context;
};

interface AvatarImageProps {
  position: "hero" | "about";
  className?: string;
  size?: number;
}

export function AvatarImage({ position, className = "", size = 320 }: AvatarImageProps) {
  const { inHeroSection } = useAvatar();
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  
  // Set initial visibility based on position and current section
  useEffect(() => {
    setIsVisible((position === "hero" && inHeroSection) || 
                (position === "about" && !inHeroSection));
  }, [inHeroSection, position]);
  
  // Calculate opacity based on scroll position for hero image
  const heroOpacity = useTransform(
    scrollY,
    [0, 300], // scroll values
    [1, 0]    // opacity values
  );
  
  // Calculate opacity based on scroll position for about image
  const aboutOpacity = useTransform(
    scrollY,
    [0, 200, 300], // scroll values
    [0, 0, 1]      // opacity values
  );
  
  // Calculate scale based on scroll position
  const scale = useTransform(
    scrollY,
    [0, 300],
    position === "hero" ? [1, 0.8] : [0.8, 1]
  );
  
  // Avatar styling
  const avatarStyle = {
    opacity: position === "hero" ? heroOpacity : aboutOpacity,
    scale,
    borderRadius: "50%",
    border: "3px solid hsl(var(--primary))",
  };
  
  return (
    <motion.div
      className={`overflow-hidden bg-muted ${className}`}
      style={{
        ...avatarStyle,
        width: size,
        height: size,
        boxShadow: "0 0 30px 5px hsla(var(--primary) / 0.3)",
      }}
      initial={{ opacity: position === "hero" ? 1 : 0 }}
    >
      <img 
        src="/avatar.svg" 
        alt="Developer Avatar" 
        className="w-full h-full object-cover"
        onError={(e) => {
          // Fallback to a default silhouette if image fails to load
          (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='320' viewBox='0 0 320 320'%3E%3Ccircle cx='160' cy='160' r='160' fill='%231a1a1a'/%3E%3Ccircle cx='160' cy='120' r='60' fill='%23333'/%3E%3Cpath d='M160 190 C 100 190, 60 250, 60 320 L 260 320 C 260 250, 220 190, 160 190 Z' fill='%23333'/%3E%3C/svg%3E";
        }}
      />
    </motion.div>
  );
}