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
                  Mein Name ist <strong className="text-foreground">Maria Clar</strong> und ich bin
                  zertifizierte Lebens- und Sozialberaterin sowie ausgebildete Mediatorin und Juristin.
                  Seit vielen Jahren begleite ich Menschen – insbesondere Frauen – durch herausfordernde
                  Lebensphasen.
                </p>
                <p>
                  Mit viel Empathie und Verständnis unterstütze ich Sie dabei, neue Perspektiven
                  zu entwickeln und Ihren ganz persönlichen Weg zu finden. Ob Lebenskrise,
                  beruflicher Neuanfang oder die Suche nach mehr Selbstfürsorge – gemeinsam
                  finden wir Lösungen, die zu Ihnen passen.
                </p>
                <p>
                  In einem geschützten Rahmen können Sie offen sprechen und werden gehört.
                  Denn manchmal braucht es einen neutralen Blick von außen, um die eigenen
                  Stärken wieder zu entdecken.
                </p>
                <p>
                  Mein juristischer und mediatorischer Hintergrund gibt mir ein besonderes
                  Verständnis für komplexe Lebens- und Konfliktsituationen. Ich begleite Sie
                  ganzheitlich – mit Herz und Verstand.
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
