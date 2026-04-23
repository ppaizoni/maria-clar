import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Impressum = () => {
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

          <div className="max-w-3xl space-y-8">
            <div>
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-3">Rechtliches</p>
              <h1 className="font-display text-display-sm md:text-display text-foreground mb-6">Impressum</h1>
            </div>

            <div className="space-y-2 text-muted-foreground leading-relaxed">
              <p className="font-semibold text-foreground">Angaben gemäß § 5 ECG</p>
              <p>Mag. Maria Clar</p>
              <p>Lebens- und Sozialberaterin, Mediatorin</p>
              <p>Dürrgrabenweg 21<br />8045 Graz</p>
              <p>
                E-Mail:{" "}
                <a href="mailto:info@mariaclar.at" className="hover:text-foreground transition-colors">
                  info@mariaclar.at
                </a>
              </p>
            </div>

            <div className="space-y-2 text-muted-foreground leading-relaxed">
              <p className="font-semibold text-foreground">Unternehmensgegenstand</p>
              <p>Psychologische Beratung, Lebens- und Sozialberatung, Mediation, Coaching</p>
            </div>

            <div className="space-y-2 text-muted-foreground leading-relaxed">
              <p className="font-semibold text-foreground">Berufsrechtliche Vorschriften</p>
              <p>
                Berufsbezeichnung: Lebens- und Sozialberaterin (verliehen in Österreich)<br />
                Zuständige Aufsichtsbehörde: Wirtschaftskammer Österreich (WKO),
                Fachverband Personenberatung und Personenbetreuung<br />
                Anwendbare Rechtsvorschrift: Gewerbeordnung 1994 (GewO) –{" "}
                <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors underline">
                  www.ris.bka.gv.at
                </a>
              </p>
            </div>

            <div className="space-y-2 text-muted-foreground leading-relaxed">
              <p className="font-semibold text-foreground">Haftungsausschluss</p>
              <p>
                Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die
                Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird jedoch keine Gewähr
                übernommen. Die Beratungsangebote auf dieser Website ersetzen keine ärztliche,
                psychotherapeutische oder medizinische Behandlung.
              </p>
            </div>

            <div className="space-y-2 text-muted-foreground leading-relaxed">
              <p className="font-semibold text-foreground">Urheberrecht</p>
              <p>
                Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf dieser Website
                unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts
                bedürfen der schriftlichen Zustimmung der jeweiligen Autorin.
              </p>
            </div>

            <div className="space-y-2 text-muted-foreground leading-relaxed">
              <p className="font-semibold text-foreground">Webdesign</p>
              <p>
                <a href="https://www.padigital.at/webdesign" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors underline">
                  PA Digital, Graz
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Impressum;
