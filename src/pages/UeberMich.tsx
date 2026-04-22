import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";

const UeberMich = () => {
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

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Text Content */}
            <div>
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-3">
                Über mich
              </p>
              <h1 className="font-display text-display-sm md:text-display text-foreground mb-6">
                Ihre Begleiterin auf dem Weg zu sich selbst
              </h1>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Ich begleite Menschen in herausfordernden Lebensphasen – einfühlsam, wertschätzend und auf Augenhöhe.
                </p>
                <p>
                  In meiner Arbeit verbinde ich psychologische Beratung mit Coaching und einem ganzheitlichen Blick auf das Leben. Jeder Mensch bringt seine eigene Geschichte, seine Ressourcen und seine Fragen mit – genau dort setze ich an. Mir ist es wichtig, einen geschützten Raum zu schaffen, in dem Klarheit entstehen darf, neue Perspektiven sichtbar werden und Entwicklung möglich ist.
                </p>
                <p>
                  Meine Schwerpunkte liegen in den Bereichen Beziehung, persönliche Entwicklung und berufliche Orientierung. Ich unterstütze dabei, eigene Bedürfnisse besser zu verstehen, Entscheidungen zu treffen und neue Wege zu gehen – in deinem Tempo und mit Blick auf das, was für dich stimmig ist.
                </p>
                <p>
                  Ein besonderes Anliegen ist mir auch die Begleitung von Frauen in Zeiten hormoneller Veränderung. Gerade in den Wechseljahren können innere und äußere Herausforderungen auftreten, die Raum für Verständnis, Stabilität und Neuorientierung brauchen.
                </p>
                <p>
                  Was du bei mir findest: ein offenes Ohr, Klarheit in komplexen Situationen und eine achtsame Begleitung auf deinem Weg.
                </p>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sage-light rounded-lg">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Einfühlsame Begleitung</h3>
                    <p className="text-muted-foreground text-sm">
                      Mit Wärme und Verständnis begleite ich Sie durch schwierige Zeiten.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-berry-light rounded-lg">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Neue Perspektiven</h3>
                    <p className="text-muted-foreground text-sm">
                      Gemeinsam entdecken wir neue Wege und Möglichkeiten für Ihr Leben.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-lg">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Vertraulicher Rahmen</h3>
                    <p className="text-muted-foreground text-sm">
                      Ein geschützter Raum, in dem Sie offen sprechen können.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 pt-10 border-t border-border">
            <h3 className="font-display text-xl text-foreground mb-3">
              Lernen wir uns kennen
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl">
              Das Kennenlerntelefonat ist unverbindlich und kostenlos.
              Das erste Beratungsgespräch ist kostenpflichtig.
            </p>
            <Button size="lg" variant="sage" asChild>
              <a href="/#kontakt">Jetzt Kennenlerntelefonat vereinbaren</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default UeberMich;
