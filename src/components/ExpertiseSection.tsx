import { ShieldCheck, Activity, ClipboardList, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const expertiseCards = [
  {
    icon: ShieldCheck,
    title: "QA Expertise",
    items: [
      "Test cases writing",
      "Regression testing",
      "Quality governance",
      "Defect analysis & root cause",
    ],
  },
  {
    icon: Activity,
    title: "Base Support",
    items: [
      "Incident management",
      "Root cause analysis",
      "SLA & KPI monitoring",
      "Priority alignments with clients",
    ],
  },
  {
    icon: ClipboardList,
    title: "Technical",
    items: [
      "Major version release coordination",
      "Delivering minor version releases",
      "Agile & Scrum",
    ],
  },
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-20">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Expertise</h2>
          <p className="text-muted-foreground max-w-3xl leading-relaxed mb-12">
            Driving product quality and operational stability through comprehensive QA
            practices, client-reported bug analysis, regression testing, and leadership of the
            Base Support team while ensuring SLA compliance.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {expertiseCards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 150}>
              <div className="bg-card border border-border rounded-xl p-8 h-full">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6">
                  <card.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                <ul className="space-y-3">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
