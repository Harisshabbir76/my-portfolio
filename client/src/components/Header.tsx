import { useState, useEffect } from "react";
import { useActiveSection } from "@/hooks/use-active-section";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center py-5 px-4 md:px-8">
        <div className="text-primary font-bold text-2xl">
          <span className="text-white">&lt;</span>Haris
          <span className="text-secondary">Shabbir</span>
          <span className="text-white">/&gt;</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-foreground focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`transition-colors duration-300 ${
                  activeSection === link.href.slice(1)
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/assets/Resume.pdf"
          download
          className="hidden md:block px-5 py-2 border border-primary text-primary rounded hover:bg-primary/10 transition-all duration-300"
        >
          Resume
        </a>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-card absolute w-full border-b border-white/10"
          >
            <ul className="flex flex-col py-4 px-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`block py-3 ${
                      activeSection === link.href.slice(1)
                        ? "text-primary font-medium"
                        : "text-muted-foreground"
                    }`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <a
                  href="/assets/Resume.pdf"
                  download
                  className="block w-full text-center px-5 py-2 border border-primary text-primary rounded hover:bg-primary/10 transition-all duration-300"
                  onClick={closeMenu}
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
