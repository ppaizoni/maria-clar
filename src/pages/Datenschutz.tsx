import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Datenschutz = () => {
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
              <h1 className="font-display text-display-sm md:text-display text-foreground mb-2">Datenschutzerklärung</h1>
              <p className="text-muted-foreground text-sm">Stand: April 2026</p>
            </div>

            <div className="space-y-2 text-muted-foreground leading-relaxed">
              <p className="font-semibold text-foreground">1. Verantwortliche</p>
              <p>
                Mag. Maria Clar<br />
                Dürrgrabenweg 21, 8045 Graz<br />
                E-Mail: <a href="mailto:info@mariaclar.at" className="hover:text-foreground transition-colors">info@mariaclar.at</a>
              </p>
            </div>

            <div className="space-y-2 text-muted-foreground leading-relaxed">
              <p className="font-semibold text-foreground">2. Kontaktformular</p>
              <p>
                Wenn Sie das Kontaktformular auf dieser Website nutzen, werden die von Ihnen
                eingegebenen Daten (Name, E-Mail-Adresse, optional Telefonnummer, Thema und
                Nachricht) zur Bearbeitung Ihrer Anfrage und für die Kontaktaufnahme verarbeitet.
              </p>
              <p>
                <span className="font-medium text-foreground">Rechtsgrundlage:</span> Art. 6 Abs. 1 lit. b DSGVO
                (Vertragsanbahnung bzw. vorvertragliche Maßnahmen).
              </p>
              <p>
                <span className="font-medium text-foreground">Drittanbieter – Web3Forms:</span> Das
                Kontaktformular wird technisch über den Dienst Web3Forms (Web3Forms Inc.) abgewickelt.
                Ihre Formulardaten werden über die Server von Web3Forms weitergeleitet und
                anschließend per E-Mail zugestellt. Web3Forms speichert die übermittelten Daten
                nicht dauerhaft. Weitere Informationen:{" "}
                <a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors underline">
                  web3forms.com/privacy
                </a>
              </p>
              <p>
                Die von Ihnen übermittelten Daten werden ausschließlich zur Beantwortung Ihrer
                Anfrage verwendet und nicht an weitere Dritte weitergegeben.
              </p>
            </div>

            <div className="space-y-2 text-muted-foreground leading-relaxed">
              <p className="font-semibold text-foreground">3. Hosting – Cloudflare Pages</p>
              <p>
                Diese Website wird über Cloudflare Pages (Cloudflare Inc., 101 Townsend St.,
                San Francisco, CA 94107, USA) gehostet. Cloudflare ist unter dem
                EU-US Data Privacy Framework zertifiziert, womit ein angemessenes
                Datenschutzniveau gewährleistet ist. Beim Aufruf der Website werden
                technisch bedingt IP-Adressen und Zugriffsdaten durch Cloudflare verarbeitet.
                Weitere Informationen:{" "}
                <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors underline">
                  cloudflare.com/privacypolicy
                </a>
              </p>
            </div>

            <div className="space-y-2 text-muted-foreground leading-relaxed">
              <p className="font-semibold text-foreground">4. Cookies und Tracking</p>
              <p>
                Diese Website verwendet keine Tracking-Tools, keine Analyse-Dienste (z. B.
                Google Analytics) und setzt keine Marketing-Cookies ein. Es werden ausschließlich
                technisch notwendige Funktionen bereitgestellt.
              </p>
            </div>

            <div className="space-y-2 text-muted-foreground leading-relaxed">
              <p className="font-semibold text-foreground">5. Speicherdauer</p>
              <p>
                Anfragen über das Kontaktformular werden so lange gespeichert, wie dies für
                die Bearbeitung erforderlich ist, bzw. solange gesetzliche Aufbewahrungsfristen
                bestehen.
              </p>
            </div>

            <div className="space-y-2 text-muted-foreground leading-relaxed">
              <p className="font-semibold text-foreground">6. Ihre Rechte</p>
              <p>Sie haben gemäß DSGVO folgende Rechte:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
                <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
                <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
                <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              </ul>
              <p className="mt-2">
                Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
                <a href="mailto:info@mariaclar.at" className="hover:text-foreground transition-colors">
                  info@mariaclar.at
                </a>
              </p>
            </div>

            <div className="space-y-2 text-muted-foreground leading-relaxed">
              <p className="font-semibold text-foreground">7. Beschwerderecht</p>
              <p>
                Sie haben das Recht, bei der österreichischen Datenschutzbehörde Beschwerde
                einzulegen:{" "}
                <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors underline">
                  www.dsb.gv.at
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

export default Datenschutz;
