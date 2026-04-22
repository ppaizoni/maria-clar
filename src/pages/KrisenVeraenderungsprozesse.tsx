import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Zap, Mountain } from "lucide-react";
import { Link } from "react-router-dom";

const KrisenVeraenderungsprozesse = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="section-padding bg-background pt-28 md:pt-36">
        <div className="container-narrow">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
              <ArrowLeft className="w-4 h-4" />
              Zurück zur Startseite
            </Link>
          </div>
          <div className="max-w-3xl">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-3">Schwerpunkt</p>
            <h1 className="font-display text-display-sm md:text-display text-foreground mb-6">Krisen & Veränderungsprozesse</h1>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>Lebenskrisen, Umbrüche oder belastende Situationen können uns aus dem Gleichgewicht bringen. In diesen Phasen biete ich dir einen sicheren Raum, um Gedanken zu ordnen, Gefühle zu verstehen und neue Perspektiven zu entwickeln. Ziel ist es, Stabilität zu finden und gestärkt aus der Situation hervorzugehen.</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {[
              { icon: Shield, title: "Krisenintervention", text: "Professionelle Begleitung in akuten Belastungssituationen." },
              { icon: Zap, title: "Resilienz stärken", text: "Die innere Widerstandskraft aufbauen und festigen." },
              { icon: Mountain, title: "Neuanfang gestalten", text: "Nach der Krise neue Kraft und Richtung finden." },
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
          <div className="mt-16 pt-10 border-t border-border">
            <h3 className="font-display text-xl text-foreground mb-3">Bereit für den ersten Schritt?</h3>
            <p className="text-muted-foreground mb-6">Das Kennenlerntelefonat ist unverbindlich und kostenlos. Das erste Beratungsgespräch ist kostenpflichtig.</p>
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

export default KrisenVeraenderungsprozesse;
