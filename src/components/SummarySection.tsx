import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  { value: "9+", label: "YEARS EXPERIENCE" },
  { value: "30+", label: "CLIENTS SUPPORTED" },
  { value: "20+", label: "PNT TEAMS COLLABORATED" },
  { value: "3", label: "TEAM LEAD FOR MEMBERS" },
];

const SummarySection = () => {
  return (
    <section id="about" className="py-20 bg-surface-alt">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Professional Summary</h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Senior QA Specialist with extensive experience supporting large-scale, complex
              applications. Proven expertise in analyzing customer-reported defects and collaborating
              closely with cross-functional domain teams to ensure timely and effective resolutions.
              Experienced in executing regression testing and managing minor releases to maintain
              system stability and product quality.
            </p>
            <p>
              In parallel, serving as Base Support Lead, acting as a main contact person between clients
              and multiple PnT teams. Responsible for prioritizing and delegating client-raised issues,
              ensuring proper handling, driving accountability within the team, and confidently pushing
              back when necessary with clear technical and business justification.
            </p>
            <p>
              Recognized for strong analytical thinking, structured problem-solving, and the ability to
              bridge communication between technical teams and business stakeholders to minimize
              operational risk and maximize customer satisfaction.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 100}>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground tracking-wider mt-2 uppercase">
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SummarySection;
