import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Layers, Mail, MapPin, Github, Linkedin, Twitter, Codepen, Download } from "lucide-react";
import { contactInfo } from "@/lib/data";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });
  
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        variant: "default"
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="flex items-center gap-4 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground relative">Get In Touch</h2>
          <div className="h-px bg-primary flex-grow max-w-sm"></div>
        </motion.div>
        
        <motion.p 
          className="text-muted-foreground text-lg max-w-xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
                          {...field}
                          className="bg-background border-white/10 focus:border-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="Your email" 
                          {...field}
                          className="bg-background border-white/10 focus:border-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message" 
                          {...field}
                          className="bg-background border-white/10 focus:border-primary resize-none h-32"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-6 h-auto group"
                >
                  <span className="flex items-center">
                    Send Message
                    <Layers className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </form>
            </Form>
          </motion.div>
          
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div>
              <h3 className="text-2xl font-medium mb-4">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                    <Mail className="text-primary h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-muted-foreground">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-primary hover:underline">
                      {contactInfo.email}
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                    <MapPin className="text-primary h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-muted-foreground">Location</p>
                    <p className="text-foreground">{contactInfo.location}</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-medium mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a 
                  href={contactInfo.social.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-background border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href={contactInfo.social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-background border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href={contactInfo.social.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-background border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href={contactInfo.social.codepen} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-background border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors duration-300"
                  aria-label="CodePen"
                >
                  <Codepen className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-medium mb-4">Resume</h3>
              <a 
                href="/John_Doe_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                id="resume" 
                className="inline-flex items-center px-5 py-3 border border-primary text-primary rounded hover:bg-primary/10 transition-all duration-300"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
