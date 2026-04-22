import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollToContact = () => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      window.location.href = "/#kontakt";
    } else {
      document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container-narrow">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start group">
            <span className="font-display text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
              Maria Clar
            </span>
            <span className="w-full h-px bg-border group-hover:bg-primary/50 transition-colors my-0.5" />
            <span className="text-[10px] md:text-xs text-muted-foreground tracking-[0.15em] uppercase font-sans">
              Psychologische Beratung
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/#leistungen"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Leistungen
            </a>
            <Link
              to="/ueber-mich"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Über mich
            </Link>
            <button
              onClick={scrollToContact}
              className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-all"
            >
              Kontakt
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground"
            aria-label="Menü öffnen"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container-narrow py-6 flex flex-col gap-5">
            <a
              href="/#leistungen"
              onClick={() => setMenuOpen(false)}
              className="text-foreground text-lg font-medium hover:text-primary transition-colors"
            >
              Leistungen
            </a>
            <Link
              to="/ueber-mich"
              className="text-foreground text-lg font-medium hover:text-primary transition-colors"
            >
              Über mich
            </Link>
            <button
              onClick={scrollToContact}
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
