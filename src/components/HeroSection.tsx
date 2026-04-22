import heroImage from "@/assets/hero-image.jpg";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Einladendes Beratungszimmer mit warmem Licht"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow text-center px-4 py-24 md:py-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-display-sm md:text-display lg:text-display-lg text-foreground mb-6 animate-fade-in-up">
            Zeit für Klarheit und Entwicklung
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-4 animate-fade-in-delay">
            Psychologische Beratung, Meditation und Coaching
          </p>

          <p className="text-xl md:text-2xl lg:text-3xl font-display text-foreground mb-10 animate-fade-in-delay">
            für persönliche, berufliche und zwischenmenschliche Herausforderungen
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay">
            <Button
              size="lg"
              variant="sage"
              onClick={scrollToContact}
              className="group"
            >
              Kennenlerntelefonat vereinbaren
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("leistungen")?.scrollIntoView({ behavior: "smooth" })}
            >
              Mehr erfahren
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => document.getElementById("leistungen")?.scrollIntoView({ behavior: "smooth" })}
          className="text-primary/60 hover:text-primary transition-colors"
          aria-label="Nach unten scrollen"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
