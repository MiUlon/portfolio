import { Mail, Linkedin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-surface-alt">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="mailto:mindaugas.ulonas@gmail.com"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground rounded-full px-8 py-3.5 font-medium hover:opacity-90 transition-opacity"
            >
              <Mail className="w-5 h-5" />
              mindaugas.ulonas@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/mindaugas-ulonas-6537b6155/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-border rounded-full px-8 py-3.5 text-foreground hover:bg-secondary transition-colors"
            >
              <Linkedin className="w-5 h-5 text-primary" />
              LinkedIn Profile
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center sm:text-left">
              © 2026 Senior QA Specialist & Base Support Lead. All rights reserved.
            </p>
            <p className="text-primary text-sm">
              Based in Lithuania, Vilnius
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
