import { developerInfo } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-background border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-primary font-bold text-xl">
              <span className="text-white">&lt;</span>Dev<span className="text-secondary">Portfolio</span><span className="text-white">/&gt;</span>
            </div>
          </div>
          
          <p className="text-muted-foreground text-sm text-center md:text-right">
            Designed & Built by <span className="text-primary">{developerInfo.firstName} {developerInfo.lastName}</span> © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
