import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      <section className="flex-1 section-padding bg-background pt-28 md:pt-36 flex items-center">
        <div className="container-narrow text-center max-w-xl mx-auto">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-3">
            Fehler 404
          </p>
          <h1 className="font-display text-display-sm md:text-display text-foreground mb-6">
            Seite nicht gefunden
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Die angeforderte Seite konnte leider nicht gefunden werden.
            Vielleicht wurde sie verschoben oder existiert nicht mehr.
          </p>
          <Button size="lg" variant="sage" asChild>
            <Link to="/" className="inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Zurück zur Startseite
            </Link>
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default NotFound;
