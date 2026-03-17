import { Linkedin } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-xl font-bold tracking-tight">
          QA<span className="text-primary">.</span>Leader
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">About</a>
          <a href="#expertise" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Expertise</a>
        </div>
        <a
          href="#contact"
          className="border border-border rounded-full px-5 py-2 text-sm text-foreground hover:bg-secondary transition-colors"
        >
          Contact Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
