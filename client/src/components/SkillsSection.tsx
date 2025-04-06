import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { skills } from "@/lib/data";
import { Laptop, Server, Drill } from "lucide-react";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-card">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground relative">Skills</h2>
          <div className="h-px bg-primary flex-grow max-w-sm"></div>
        </motion.div>
        
        <div className="space-y-12">
          {/* Frontend Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-medium mb-6 flex items-center">
              <div className="w-8 h-8 mr-3 rounded-full bg-primary/20 flex items-center justify-center">
                <Laptop className="text-primary w-4 h-4" />
              </div>
              Frontend Development
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.frontend.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <SkillCard skill={skill} colorScheme="primary" />
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Backend Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-medium mb-6 flex items-center">
              <div className="w-8 h-8 mr-3 rounded-full bg-secondary/20 flex items-center justify-center">
                <Server className="text-secondary w-4 h-4" />
              </div>
              Backend Development
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.backend.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <SkillCard skill={skill} colorScheme="secondary" />
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Tools & Others */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-medium mb-6 flex items-center">
              <div className="w-8 h-8 mr-3 rounded-full bg-[hsl(36,100%,50%)]/20 flex items-center justify-center">
                <Drill className="text-[hsl(36,100%,50%)] w-4 h-4" />
              </div>
              Tools & Others
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.tools.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <SkillCard skill={skill} colorScheme="tertiary" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
