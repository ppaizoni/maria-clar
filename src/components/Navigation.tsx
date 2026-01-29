const Navigation = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container-narrow">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex flex-col items-start group"
          >
            <span className="font-display text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
              Maria Clar
            </span>
            <span className="w-full h-px bg-border group-hover:bg-primary/50 transition-colors my-0.5" />
            <span className="text-[10px] md:text-xs text-muted-foreground tracking-[0.15em] uppercase font-sans">
              Psychologische Beratung
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("ueber-mich")}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Über mich
            </button>
            <button
              onClick={() => scrollToSection("leistungen")}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Leistungen
            </button>
            <button
              onClick={() => scrollToSection("zielgruppe")}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Für Sie 50+
            </button>
            <button
              onClick={() => scrollToSection("kontakt")}
              className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-all"
            >
              Kontakt
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => scrollToSection("kontakt")}
            className="md:hidden bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium"
          >
            Kontakt
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
