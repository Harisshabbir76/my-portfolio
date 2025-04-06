import { Skill } from "@/lib/types";

interface SkillCardProps {
  skill: Skill;
  colorScheme: "primary" | "secondary" | "tertiary";
}

export default function SkillCard({ skill, colorScheme }: SkillCardProps) {
  const getColorClass = () => {
    switch (colorScheme) {
      case "primary":
        return {
          bgColor: "bg-primary/10",
          textColor: "text-primary",
          borderHover: "hover:border-primary/50",
          shadow: "hover:shadow-[0_0_15px_rgba(100,255,218,0.1)]",
          progressBg: "bg-primary"
        };
      case "secondary":
        return {
          bgColor: "bg-secondary/10",
          textColor: "text-secondary",
          borderHover: "hover:border-secondary/50",
          shadow: "hover:shadow-[0_0_15px_rgba(189,52,254,0.1)]",
          progressBg: "bg-secondary"
        };
      case "tertiary":
        return {
          bgColor: "bg-[hsl(36,100%,50%)]/10",
          textColor: "text-[hsl(36,100%,50%)]",
          borderHover: "hover:border-[hsl(36,100%,50%)]/50",
          shadow: "hover:shadow-[0_0_15px_rgba(255,138,0,0.1)]",
          progressBg: "bg-[hsl(36,100%,50%)]"
        };
    }
  };
  
  const colors = getColorClass();
  
  return (
    <div className={`bg-background rounded-lg p-4 border border-white/5 ${colors.borderHover} transition-all ${colors.shadow} duration-300 h-full`}>
      <div className="flex items-center mb-3">
        <div className={`w-10 h-10 rounded-full ${colors.bgColor} flex items-center justify-center mr-3`}>
          {skill.icon}
        </div>
        <h4 className="font-medium">{skill.name}</h4>
      </div>
      <div className="w-full bg-card rounded-full h-2 mt-2">
        <div 
          className={`${colors.progressBg} h-2 rounded-full`} 
          style={{ width: `${skill.proficiency}%` }}
        ></div>
      </div>
    </div>
  );
}
