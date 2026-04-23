import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Flower2, Sun, Wind } from "lucide-react";
import { Link } from "react-router-dom";

const Meditation = () => {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="section-padding bg-background pt-28 md:pt-36">
        <div className="container-narrow">
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Zurück zur Startseite
            </Link>
          </div>

          <div className="max-w-3xl">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-3">
              Methode
            </p>
            <h1 className="font-display text-display-sm md:text-display text-foreground mb-6">
              Meditation
            </h1>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Meditation und Achtsamkeitspraxis sind kraftvolle Werkzeuge, um innere Ruhe,
                Klarheit und ein tieferes Verständnis für sich selbst zu entwickeln.
                Im hektischen Alltag verlieren wir oft den Kontakt zu uns selbst –
                Meditation hilft dabei, wieder anzukommen.
              </p>
              <p>
                In meiner Begleitung lernen Sie verschiedene Meditationstechniken kennen
                und entwickeln eine persönliche Praxis, die zu Ihrem Leben passt.
                Achtsamkeit bedeutet, den gegenwärtigen Moment bewusst wahrzunehmen –
                ohne Bewertung und mit freundlicher Aufmerksamkeit.
              </p>
              <p>
                Meditation kann als eigenständige Praxis oder begleitend zur Beratung
                und zum Coaching eingesetzt werden. Sie stärkt Ihre innere Stabilität
                und unterstützt nachhaltige Veränderungsprozesse.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {[
              { icon: Flower2, title: "Achtsamkeitstraining", text: "Techniken für mehr Präsenz und innere Ruhe im Alltag." },
              { icon: Sun, title: "Selbstreflexion", text: "Den eigenen Gedanken und Gefühlen mit Abstand begegnen." },
              { icon: Wind, title: "Stressreduktion", text: "Wirksame Methoden zur Entspannung und Regeneration." },
            ].map((item, i) => (
              <div key={i} className="bg-card p-6 rounded-xl border border-border">
                <div className="p-3 bg-sage-light rounded-lg w-fit mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.text}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 pt-10 border-t border-border">
            <h3 className="font-display text-xl text-foreground mb-3">
              Bereit für den ersten Schritt?
            </h3>
            <p className="text-muted-foreground mb-6">
              Das Kennenlerntelefonat ist unverbindlich und kostenlos.
              Das erste Beratungsgespräch ist kostenpflichtig.
            </p>
            <Button size="lg" variant="sage" asChild>
              <Link to="/#kontakt">Jetzt Kennenlerntelefonat vereinbaren</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Meditation;
