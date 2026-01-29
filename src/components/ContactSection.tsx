import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Bitte geben Sie Ihren Namen ein").max(100, "Name ist zu lang"),
  email: z.string().trim().email("Bitte geben Sie eine gültige E-Mail-Adresse ein").max(255),
  phone: z.string().optional(),
  message: z.string().trim().min(10, "Ihre Nachricht sollte mindestens 10 Zeichen haben").max(2000, "Nachricht ist zu lang"),
});

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      contactSchema.parse(formData);
      
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast.success("Vielen Dank für Ihre Nachricht! Ich melde mich bald bei Ihnen.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-3">
            Kontakt
          </p>
          <h2 className="font-display text-display-sm md:text-display text-foreground mb-4">
            Lassen Sie uns ins Gespräch kommen
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Das Erstgespräch ist unverbindlich und kostenlos. Schreiben Sie mir 
            eine Nachricht oder rufen Sie mich an – ich freue mich auf Sie.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ihr Name"
                    className="bg-card"
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-destructive text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-Mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ihre.email@beispiel.at"
                    className="bg-card"
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-destructive text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Telefon (optional)
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+43 ..."
                  className="bg-card"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Ihre Nachricht *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Wie kann ich Ihnen helfen? Erzählen Sie mir kurz von Ihrem Anliegen..."
                  className="bg-card min-h-[150px]"
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="text-destructive text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                variant="sage"
                disabled={isSubmitting}
                className="w-full sm:w-auto"
              >
                {isSubmitting ? (
                  "Wird gesendet..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Nachricht senden
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="bg-card p-8 rounded-2xl border border-border h-full">
              <h3 className="font-display text-xl text-foreground mb-6">
                So erreichen Sie mich
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sage-light rounded-lg">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Telefon</p>
                    <a 
                      href="tel:+4312345678" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +43 1 234 56 78
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sage-light rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">E-Mail</p>
                    <a 
                      href="mailto:beratung@mariaclar.at" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      beratung@mariaclar.at
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sage-light rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Praxis</p>
                    <p className="text-muted-foreground">
                      Musterstraße 12<br />
                      1010 Wien
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sage-light rounded-lg">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Termine</p>
                    <p className="text-muted-foreground">
                      Nach Vereinbarung<br />
                      Mo–Fr, auch abends
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Erstgespräch:</strong> 30 Minuten, 
                  kostenlos und unverbindlich
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
