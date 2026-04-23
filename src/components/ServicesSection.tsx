import { BookOpen, Target, Flower2, Users, Star, TrendingUp, Shield, Heart, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const methods = [
  {
    icon: BookOpen,
    title: "Beratung",
    description: "Professionelle psychologische Beratung in einem sicheren, wertschätzenden Rahmen.",
    href: "/beratung",
  },
  {
    icon: Target,
    title: "Coaching",
    description: "Zielgerichtetes Coaching für persönliche und berufliche Veränderungsprozesse.",
    href: "/coaching",
  },
  {
    icon: Flower2,
    title: "Meditation",
    description: "Achtsamkeit und Meditation für innere Ruhe, Klarheit und neue Kraft.",
    href: "/meditation",
  },
];

const topics = [
  {
    icon: Star,
    title: "Persönliche Entwicklung",
    href: "/persoenliche-entwicklung",
  },
  {
    icon: Users,
    title: "Beziehung & Kommunikation",
    href: "/beziehung-kommunikation",
  },
  {
    icon: Heart,
    title: "Selbstwert & innere Stabilität",
    href: "/selbstwert-innere-stabilitaet",
  },
  {
    icon: TrendingUp,
    title: "Beruf & Neuorientierung",
    href: "/beruf-neuorientierung",
  },
  {
    icon: Shield,
    title: "Krisen & Veränderungsprozesse",
    href: "/krisen-veraenderungsprozesse",
  },
  {
    icon: Leaf,
    title: "50+ & Longevity",
    href: "/frauen-longevity",
  },
];

const ServicesSection = () => {
  const scrollToContact = () => {
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="leistungen" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-3">
            Meine Leistungen
          </p>
          <h2 className="font-display text-display-sm md:text-display text-foreground mb-4">
            Wie ich Sie unterstützen kann
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Individuelle Beratung, die sich an Ihren Bedürfnissen orientiert.
            Jeder Mensch ist einzigartig – und so ist auch jeder Beratungsprozess.
          </p>
        </div>

        {/* 3 Method Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {methods.map((method, index) => (
            <Link
              key={index}
              to={method.href}
              className="group bg-card p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col items-start"
            >
              <div className="p-4 bg-sage-light rounded-xl group-hover:bg-primary/10 transition-colors mb-5">
                <method.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">
                {method.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                {method.description}
              </p>
              <span className="mt-4 text-primary text-sm font-medium group-hover:underline">
                Mehr erfahren →
              </span>
            </Link>
          ))}
        </div>

        {/* Quote */}
        <div className="bg-card p-8 md:p-12 rounded-2xl border border-border shadow-sm mb-16 text-center">
          <blockquote>
            <p className="font-display text-xl md:text-2xl text-foreground leading-relaxed">
              „Die zweite Lebenshälfte ist nicht das Ende von etwas – sie ist der Anfang von Ihnen."
            </p>
          </blockquote>
        </div>

        {/* 6 Topic Tiles */}
        <div className="mb-12">
          <h3 className="font-display text-display-sm text-foreground text-center mb-8">
            Schwerpunkte
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="group bg-card p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-sage-light rounded-lg group-hover:bg-primary/10 transition-colors">
                    <topic.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm leading-tight">
                    {topic.title}
                  </h4>
                </div>
                <Button size="sm" variant="outline" asChild className="w-full">
                  <Link to={topic.href}>Mehr erfahren</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" variant="sage" onClick={scrollToContact}>
            Kennenlerntelefonat vereinbaren
          </Button>
          <p className="text-muted-foreground text-sm mt-3">
            Das erste Beratungsgespräch ist kostenpflichtig.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
