import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-10">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-xl text-foreground mb-1">Maria Clar</p>
            <p className="text-sm text-muted-foreground">
              Zertifizierte Lebens- und Sozialberaterin
            </p>
          </div>

          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Gestaltet mit</span>
            <Heart className="w-4 h-4 text-berry fill-berry" />
            <span>in Wien</span>
          </div>

          <div className="text-center md:text-right text-sm text-muted-foreground">
            <p>© {currentYear} Maria Clar</p>
            <div className="flex gap-4 mt-1 justify-center md:justify-end">
              <a href="#" className="hover:text-foreground transition-colors">Impressum</a>
              <a href="#" className="hover:text-foreground transition-colors">Datenschutz</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
