import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, Sparkles, Compass } from "lucide-react";
import { Link } from "react-router-dom";

const PersoenlicheEntwicklung = () => {
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
            <h1 className="font-display text-display-sm md:text-display text-foreground mb-6">Persönliche Entwicklung</h1>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>Persönliche Entwicklung ist ein lebenslanges Abenteuer – und in der zweiten Lebenshälfte gewinnt sie eine ganz besondere Tiefe. Mit den Erfahrungen und der Reife, die Sie mitbringen, haben Sie die beste Voraussetzung, um wirklich authentisch zu wachsen.</p>
              <p>Gemeinsam erkunden wir, wer Sie heute sind und wer Sie sein möchten. Welche Werte leiten Sie? Welche Seiten Ihrer Persönlichkeit wurden vielleicht lange zurückgestellt? Persönliche Entwicklung bedeutet nicht, sich zu verändern, um anderen zu gefallen – sondern immer mehr Sie selbst zu werden.</p>
              <p>In unserem gemeinsamen Prozess arbeiten wir mit Methoden der Selbstreflexion, Stärkenanalyse und Zielfindung. Ich begleite Sie dabei, Ihre inneren Ressourcen zu entdecken und gezielt einzusetzen – für ein Leben, das wirklich zu Ihnen passt.</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {[
              { icon: Star, title: "Selbstreflexion", text: "Tiefes Verstehen der eigenen Werte, Bedürfnisse und Stärken." },
              { icon: Sparkles, title: "Wachstum", text: "Neue Seiten an sich entdecken und mutig entfalten." },
              { icon: Compass, title: "Orientierung", text: "Einen klaren inneren Kompass für Entscheidungen entwickeln." },
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

export default PersoenlicheEntwicklung;
