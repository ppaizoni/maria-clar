import { Link } from "react-router-dom";

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

          <div className="text-center md:text-right text-sm text-muted-foreground">
            <p>© {currentYear} Maria Clar</p>
            <div className="flex gap-4 mt-1 justify-center md:justify-end">
              <Link to="/impressum" className="hover:text-foreground transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="hover:text-foreground transition-colors">Datenschutz</Link>
            </div>
            <p className="mt-2">
              Designed by{" "}
              <a
                href="https://www.padigital.at/webdesign"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                PA Digital in Graz
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
