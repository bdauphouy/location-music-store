import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "@/components/sections/contact-form";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact - Location Music Store",
  description:
    "Contactez Location Music Store pour la location de matériel son et lumière. Devis gratuit sous 48h. Téléphone, email ou formulaire de contact.",
};

const contactInfo = [
  {
    icon: Phone,
    title: "Téléphone",
    content: "+33 6 00 00 00 00",
    link: "tel:+33600000000",
    description: "Lundi - Dimanche, 9h - 20h",
  },
  {
    icon: Mail,
    title: "Email",
    content: "contact@locationmusicstore.fr",
    link: "mailto:contact@locationmusicstore.fr",
    description: "Réponse sous 24h",
  },
  {
    icon: MapPin,
    title: "Zone d'intervention",
    content: "Région Redon / Rennes",
    description: "Livraison et installation incluses",
  },
  {
    icon: Instagram,
    title: "Instagram",
    content: "@locationmusicstore",
    link: "https://instagram.com/locationmusicstore",
    description: "Suivez nos actualités",
  },
];

export default function ContactPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-slate-900 via-primary/20 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Une question ? Un projet d&apos;événement ? Nous sommes là pour vous
              accompagner. Remplissez le formulaire et nous vous répondrons dans
              les 48 heures.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} variant="bordered" className="group hover:border-primary transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-primary hover:text-primary-dark font-medium transition-colors duration-200 block mb-1"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium mb-1">
                        {info.content}
                      </p>
                    )}
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Demander un devis
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Remplissez le formulaire ci-dessous et nous vous contacterons
              rapidement
            </p>
          </div>

          <Card variant="elevated" className="shadow-2xl">
            <CardContent className="pt-8">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  Horaires & Disponibilité
                </h2>
              </div>
              <div className="space-y-4 text-slate-700 dark:text-slate-300">
                <p className="text-lg leading-relaxed">
                  Nous sommes disponibles 7 jours sur 7 pour répondre à vos
                  questions et préparer vos événements.
                </p>
                <div className="bg-muted rounded-xl p-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Lundi - Vendredi</span>
                    <span className="text-primary font-semibold">9h - 20h</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Samedi - Dimanche</span>
                    <span className="text-primary font-semibold">10h - 18h</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  En dehors de ces horaires, laissez-nous un message via le
                  formulaire ou par email, nous vous répondrons dès que possible.
                </p>
              </div>
            </div>

            <Card variant="elevated" className="bg-gradient-to-br from-primary to-accent text-white">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-bold mb-4">
                  Réservez dès maintenant
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  Pour garantir la disponibilité du matériel pour votre
                  événement, nous vous recommandons de réserver au moins 2
                  semaines à l&apos;avance, surtout pour les weekends et périodes de
                  forte demande.
                </p>
                <ul className="space-y-3">
                  {[
                    "Réponse à votre demande sous 48h",
                    "Devis gratuit et sans engagement",
                    "Conseils personnalisés",
                    "Visite possible de notre showroom",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mt-2"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
