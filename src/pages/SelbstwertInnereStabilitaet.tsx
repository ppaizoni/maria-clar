import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Shield, Sun } from "lucide-react";
import { Link } from "react-router-dom";

const SelbstwertInnereStabilitaet = () => {
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
            <h1 className="font-display text-display-sm md:text-display text-foreground mb-6">Selbstwert & innere Stabilität</h1>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>Ein stabiles Selbstwertgefühl ist die Grundlage für ein erfülltes Leben. Doch viele Frauen haben gelernt, ihre eigenen Bedürfnisse zurückzustellen und die Erwartungen anderer zu erfüllen – bis irgendwann die Frage auftaucht: Wer bin ich eigentlich, wenn ich nicht für andere da bin?</p>
              <p>Selbstwert bedeutet nicht Selbstüberschätzung oder Gleichgültigkeit anderen gegenüber. Es bedeutet, sich selbst mit derselben Freundlichkeit und Wertschätzung zu begegnen, die man anderen entgegenbringt. Innere Stabilität wächst, wenn wir uns selbst besser kennen und akzeptieren.</p>
              <p>In der Beratung arbeiten wir daran, alte, einschränkende Glaubenssätze zu erkennen und zu verändern, ein gesundes Verhältnis zu sich selbst aufzubauen und innere Ressourcen zu stärken. Schritt für Schritt entstehen so eine tiefere Selbstachtung und eine unerschütterliche innere Mitte.</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {[
              { icon: Heart, title: "Selbstmitgefühl", text: "Sich selbst mit Freundlichkeit und Verständnis begegnen." },
              { icon: Shield, title: "Innere Stabilität", text: "Eine starke innere Mitte entwickeln, die Stürmen standhält." },
              { icon: Sun, title: "Selbstachtung", text: "Den eigenen Wert erkennen und ohne Bedingungen leben." },
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

export default SelbstwertInnereStabilitaet;
