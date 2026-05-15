import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Scale, Users, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Mediation = () => {
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
              Mediation
            </h1>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Mediation ist ein strukturiertes, freiwilliges Verfahren zur außergerichtlichen
                Konfliktlösung. Als zertifizierte Mediatorin begleite ich Menschen dabei,
                festgefahrene Konflikte konstruktiv zu lösen – respektvoll, vertraulich und
                auf Augenhöhe.
              </p>
              <p>
                Im Mittelpunkt steht nicht das Recht haben, sondern das Verstehen:
                Was steckt wirklich hinter dem Konflikt? Was brauchen die Beteiligten?
                Ich schaffe einen sicheren Rahmen, in dem echte Gespräche möglich werden
                und gemeinsame Lösungen entstehen können.
              </p>
              <p>
                Mediation eignet sich für Konflikte im privaten Umfeld, in Partnerschaften,
                Familien, im Beruf oder zwischen Unternehmen. Sie ist oft schneller, günstiger
                und nachhaltiger als ein gerichtliches Verfahren – und stärkt langfristig
                die Beziehung zwischen den Beteiligten.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {[
              { icon: Scale, title: "Neutrale Vermittlung", text: "Als allparteiliche Mediatorin unterstütze ich alle Beteiligten gleichermaßen." },
              { icon: Users, title: "Gemeinsame Lösungen", text: "Ergebnisse, die von allen Seiten getragen und akzeptiert werden." },
              { icon: MessageCircle, title: "Offener Dialog", text: "Ein geschützter Raum für ehrliche Gespräche und echtes Zuhören." },
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

export default Mediation;
