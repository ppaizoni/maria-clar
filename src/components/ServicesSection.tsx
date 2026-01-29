import { Shield, Compass, Sun, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Shield,
    title: "Burnout-Prävention",
    description:
      "Erkennen Sie frühzeitig die Warnsignale und lernen Sie, achtsamer mit Ihren Ressourcen umzugehen. Gemeinsam entwickeln wir Strategien für mehr Balance in Ihrem Alltag.",
    features: ["Stressanalyse", "Ressourcenaufbau", "Selbstfürsorge-Techniken"],
  },
  {
    icon: Compass,
    title: "Lebensphase-Coaching",
    description:
      "Der Übergang in einen neuen Lebensabschnitt kann herausfordernd sein. Ich begleite Sie dabei, diese Zeit als Chance für Neuorientierung zu nutzen.",
    features: ["Neuorientierung", "Zielfindung", "Stärkenanalyse"],
  },
  {
    icon: Sun,
    title: "Psychologische Beratung",
    description:
      "Professionelle Unterstützung bei Lebenskrisen, Beziehungsproblemen oder persönlichen Herausforderungen. Vertraulich und wertschätzend.",
    features: ["Einzelberatung", "Krisenintervention", "Lösungsorientiert"],
  },
  {
    icon: Heart,
    title: "Selbstfindung & Achtsamkeit",
    description:
      "Entdecken Sie Ihre inneren Ressourcen neu. Lernen Sie, sich selbst besser zu verstehen und liebevoller mit sich umzugehen.",
    features: ["Selbstreflexion", "Achtsamkeitstraining", "Persönlichkeitsentwicklung"],
  },
];

const ServicesSection = () => {
  const scrollToContact = () => {
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="leistungen" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-3">
            Meine Leistungen
          </p>
          <h2 className="font-display text-display-sm md:text-display text-foreground mb-4">
            Wie ich Sie unterstützen kann
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Individuelle Beratung, die sich an Ihren Bedürfnissen orientiert. 
            Jeder Mensch ist einzigartig – und so ist auch jeder Beratungsprozess.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="p-4 bg-sage-light rounded-xl group-hover:bg-primary/10 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium px-3 py-1 bg-secondary rounded-full text-secondary-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="sage" onClick={scrollToContact}>
            Beratung anfragen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
