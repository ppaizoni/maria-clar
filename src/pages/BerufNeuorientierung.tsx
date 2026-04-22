import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, Briefcase, Compass } from "lucide-react";
import { Link } from "react-router-dom";

const BerufNeuorientierung = () => {
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
            <h1 className="font-display text-display-sm md:text-display text-foreground mb-6">Beruf & Neuorientierung</h1>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>Berufliche Fragen können belastend sein – ob es um Unzufriedenheit, Veränderungswünsche oder neue Perspektiven geht. Gemeinsam erarbeiten wir Klarheit über deine Ziele, Stärken und Möglichkeiten, damit du stimmige Entscheidungen treffen und deinen eigenen beruflichen Weg gehen kannst.</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {[
              { icon: Compass, title: "Neuorientierung", text: "Neue berufliche Wege entdecken, die wirklich zu Ihnen passen." },
              { icon: TrendingUp, title: "Stärkenanalyse", text: "Ihre Talente und Kompetenzen gezielt einsetzen." },
              { icon: Briefcase, title: "Burnout-Prävention", text: "Warnsignale erkennen und gesunde Balance entwickeln." },
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

export default BerufNeuorientierung;
