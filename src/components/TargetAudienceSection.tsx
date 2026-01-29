import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const reasons = [
  "Ein Lebensabschnitt voller Erfahrung und Weisheit verdient besondere Aufmerksamkeit",
  "Die Kinder sind aus dem Haus – Zeit, sich neu zu orientieren",
  "Körperliche Veränderungen fordern eine neue Selbstwahrnehmung",
  "Berufliche Neuorientierung oder Übergang in den Ruhestand",
  "Partnerschaft neu definieren nach vielen gemeinsamen Jahren",
  "Endlich Zeit für die eigenen Träume und Wünsche",
];

const TargetAudienceSection = () => {
  const scrollToContact = () => {
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="zielgruppe" className="section-padding gradient-warm">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-3">
              Für Frauen 50+
            </p>
            <h2 className="font-display text-display-sm md:text-display text-foreground mb-6">
              Die beste Zeit Ihres Lebens verdient Aufmerksamkeit
            </h2>
            
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              Mit 50 und mehr haben Sie bereits viel erlebt und geleistet. Jetzt ist 
              der perfekte Moment, innezuhalten und sich zu fragen: Was möchte ich 
              wirklich? Wie will ich die nächsten Jahre gestalten?
            </p>

            <div className="space-y-4 mb-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-sage-light rounded-full">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-foreground">{reason}</p>
                </div>
              ))}
            </div>

            <Button size="lg" variant="sage" onClick={scrollToContact}>
              Jetzt Erstgespräch vereinbaren
            </Button>
          </div>

          {/* Right Column - Quote */}
          <div className="bg-card p-8 md:p-10 rounded-2xl border border-border shadow-lg">
            <blockquote>
              <p className="font-display text-xl md:text-2xl text-foreground leading-relaxed mb-6">
                „Es ist nie zu spät, die zu werden, die Sie hätten sein können."
              </p>
              <footer className="text-muted-foreground">
                — George Eliot
              </footer>
            </blockquote>

            <div className="mt-8 pt-8 border-t border-border">
              <h4 className="font-semibold text-foreground mb-3">
                Warum gerade jetzt?
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Diese Lebensphase bringt einzigartige Herausforderungen und Chancen. 
                Mit professioneller Begleitung können Sie diese Zeit bewusst gestalten 
                und neue Kraft für den nächsten Lebensabschnitt schöpfen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
