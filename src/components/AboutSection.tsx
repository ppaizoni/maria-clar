import { Heart, Sparkles, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="ueber-mich" className="section-padding gradient-warm">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-3">
              Über mich
            </p>
            <h2 className="font-display text-display-sm md:text-display text-foreground mb-6">
              Ihre Begleiterin auf dem Weg zu sich selbst
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Mein Name ist <strong className="text-foreground">Maria Clar</strong>, Juristin und
                zertifizierte Lebens- und Sozialberaterin. Seit vielen Jahren begleite ich
                Menschen durch herausfordernde Lebensphasen.
              </p>
              <p>
                Mit viel Empathie und Verständnis unterstütze ich Sie dabei, neue Perspektiven 
                zu entwickeln und Ihren ganz persönlichen Weg zu finden. Ob Lebenskrise, 
                beruflicher Neuanfang oder die Suche nach mehr Selbstfürsorge – gemeinsam 
                finden wir Lösungen, die zu Ihnen passen.
              </p>
              <p>
                In einem geschützten Rahmen können Sie offen sprechen und werden gehört. 
                Denn manchmal braucht es einen neutralen Blick von außen, um die eigenen 
                Stärken wieder zu entdecken.
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-sage-light rounded-lg">
                  <Heart className="w-6 h-6 text-sage-dark" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Einfühlsame Begleitung</h3>
                  <p className="text-muted-foreground text-sm">
                    Mit Wärme und Verständnis begleite ich Sie durch schwierige Zeiten.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-berry-light rounded-lg">
                  <Sparkles className="w-6 h-6 text-berry" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Neue Perspektiven</h3>
                  <p className="text-muted-foreground text-sm">
                    Gemeinsam entdecken wir neue Wege und Möglichkeiten für Ihr Leben.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-lg">
                  <Users className="w-6 h-6 text-warm-brown" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Vertraulicher Rahmen</h3>
                  <p className="text-muted-foreground text-sm">
                    Ein geschützter Raum, in dem Sie offen sprechen können.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
