import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const schwerpunkte = [
  { title: "Persönliche Entwicklung", href: "/persoenliche-entwicklung" },
  { title: "Beziehung & Kommunikation", href: "/beziehung-kommunikation" },
  { title: "Selbstwert & innere Stabilität", href: "/selbstwert-innere-stabilitaet" },
  { title: "Beruf & Neuorientierung", href: "/beruf-neuorientierung" },
  { title: "Krisen & Veränderungsprozesse", href: "/krisen-veraenderungsprozesse" },
  { title: "50+ & Longevity", href: "/frauen-longevity" },
];

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const goToAnchor = (anchor: string) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate(`/#${anchor}`);
    } else {
      document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container-narrow">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex flex-col items-start group" aria-label="Zur Startseite">
            <span className="font-display text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
              Maria Clar
            </span>
            <span className="w-full h-px bg-border group-hover:bg-primary/50 transition-colors my-0.5" />
            <span className="text-[10px] md:text-xs text-muted-foreground tracking-[0.15em] uppercase font-sans">
              Psychologische Beratung
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <button
              type="button"
              onClick={() => goToAnchor("leistungen")}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Leistungen
            </button>

            <div ref={servicesRef} className="relative">
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Schwerpunkte
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="absolute right-0 top-full mt-2 w-72 bg-background border border-border rounded-xl shadow-lg overflow-hidden">
                  <ul className="py-2">
                    {schwerpunkte.map((item) => (
                      <li key={item.href}>
                        <Link
                          to={item.href}
                          className="block px-4 py-2.5 text-sm text-foreground hover:bg-muted transition-colors"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <Link
              to="/ueber-mich"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Über mich
            </Link>
            <button
              type="button"
              onClick={() => goToAnchor("kontakt")}
              className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-all"
            >
              Kontakt
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-background border-t border-border max-h-[calc(100vh-4rem)] overflow-y-auto"
        >
          <div className="container-narrow py-6 flex flex-col gap-4">
            <button
              type="button"
              onClick={() => goToAnchor("leistungen")}
              className="text-foreground text-lg font-medium hover:text-primary transition-colors text-left"
            >
              Leistungen
            </button>

            <div>
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                className="flex items-center justify-between w-full text-foreground text-lg font-medium hover:text-primary transition-colors"
                aria-expanded={servicesOpen}
                aria-controls="mobile-schwerpunkte"
              >
                Schwerpunkte
                <ChevronDown className={`w-5 h-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <ul id="mobile-schwerpunkte" className="mt-3 ml-4 flex flex-col gap-3 border-l border-border pl-4">
                  {schwerpunkte.map((item) => (
                    <li key={item.href}>
                      <Link
                        to={item.href}
                        className="text-muted-foreground text-base hover:text-primary transition-colors"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <Link
              to="/ueber-mich"
              className="text-foreground text-lg font-medium hover:text-primary transition-colors"
            >
              Über mich
            </Link>
            <button
              type="button"
              onClick={() => goToAnchor("kontakt")}
              className="bg-primary text-primary-foreground px-5 py-3 rounded-lg text-base font-medium hover:bg-primary/90 transition-all text-left"
            >
              Kontakt
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
