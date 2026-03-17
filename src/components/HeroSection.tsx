import { Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
              Senior QA
              <br />
              Specialist
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                & Base Support
                <br />
                Lead
              </span>
            </h1>
            <p className="mt-6 text-muted-foreground text-lg max-w-md leading-relaxed">
              Senior QA and Base Support specialist who delivers stable and
              business-critical systems with uncompromising quality.
            </p>
            <a
              href="https://www.linkedin.com/in/mindaugas-ulonas-6537b6155/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 border border-border rounded-full px-6 py-3 text-sm text-foreground hover:bg-secondary transition-colors"
            >
              <Linkedin className="w-4 h-4 text-primary" />
              LinkedIn Profile
            </a>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex justify-center md:justify-end">
              <div className="w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden bg-secondary transition-transform duration-300 hover:scale-105">
                <img
                  src={profilePhoto}
                  alt="Professional headshot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
