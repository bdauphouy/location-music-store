import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Button from "@/components/ui/button";
import {
  Music,
  Lightbulb,
  Truck,
  CheckCircle,
  ArrowRight,
  Package,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services - Location Music Store",
  description:
    "Découvrez nos services de location de matériel son et lumière professionnel pour vos événements. Packages personnalisés avec livraison et installation incluses.",
};

const packages = [
  {
    name: "Formule Essentielle",
    price: "À partir de 200€",
    description: "Parfait pour les petites soirées et anniversaires",
    features: [
      "2 enceintes 500W",
      "1 micro sans fil",
      "Éclairage LED de base (2 projecteurs)",
      "Livraison et installation",
      "Support téléphonique",
    ],
    icon: Package,
  },
  {
    name: "Formule Premium",
    price: "À partir de 450€",
    description: "Idéal pour mariages et événements moyens",
    features: [
      "4 enceintes 1000W",
      "2 micros sans fil",
      "Table de mixage numérique",
      "Éclairage LED avancé (4 projecteurs + machine à fumée)",
      "Livraison, installation et assistance sur place",
      "Configuration personnalisée",
    ],
    icon: Music,
    highlighted: true,
  },
  {
    name: "Formule Excellence",
    price: "Sur devis",
    description: "Solution complète pour grands événements",
    features: [
      "Système son complet jusqu'à 5000W",
      "4 micros sans fil + système retour",
      "Table de mixage professionnelle",
      "Éclairage LED complet + effets spéciaux",
      "Technicien dédié pendant l'événement",
      "Configuration sur mesure",
      "Matériel de secours",
    ],
    icon: Lightbulb,
  },
];

const services = [
  {
    icon: Music,
    title: "Matériel Son Professionnel",
    description:
      "Enceintes haute puissance, systèmes de sonorisation complets, microphones sans fil professionnels, tables de mixage numériques et analogiques.",
    details: [
      "Enceintes JBL, Bose, Pioneer (500W à 5000W)",
      "Microphones Shure et Sennheiser",
      "Tables de mixage Yamaha et Behringer",
      "Câblage professionnel inclus",
    ],
  },
  {
    icon: Lightbulb,
    title: "Éclairage et Effets",
    description:
      "Solutions d'éclairage LED programmables, machines à fumée, stroboscopes et effets spéciaux pour créer l'ambiance parfaite.",
    details: [
      "Projecteurs LED RGB avec contrôle DMX",
      "Machines à fumée et brouillard",
      "Stroboscopes et lasers",
      "Contrôleurs d'éclairage programmables",
    ],
  },
  {
    icon: Truck,
    title: "Livraison et Installation",
    description:
      "Nous nous occupons de tout ! Livraison, installation complète, configuration et assistance technique pendant votre événement.",
    details: [
      "Livraison dans la région Redon / Rennes",
      "Installation et configuration complète",
      "Démonstration du matériel",
      "Support téléphonique pendant l'événement",
      "Récupération du matériel",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-slate-900 via-primary/20 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Nos Services
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Location de matériel son et lumière professionnel pour tous vos
              événements. Des solutions adaptées à vos besoins avec un service
              complet de livraison et d&apos;installation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Nos Formules
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Choisissez la formule qui correspond à vos besoins. Tous nos
              packages sont personnalisables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {packages.map((pkg, index) => {
              const Icon = pkg.icon;
              return (
                <Card
                  key={index}
                  variant={pkg.highlighted ? "elevated" : "bordered"}
                  className={`relative ${
                    pkg.highlighted
                      ? "border-2 border-primary shadow-2xl scale-105"
                      : ""
                  }`}
                >
                  {pkg.highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Plus populaire
                      </span>
                    </div>
                  )}
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                    <p className="text-3xl font-bold text-primary mb-2">
                      {pkg.price}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {pkg.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700 dark:text-slate-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button
                        variant={pkg.highlighted ? "primary" : "outline"}
                        className="w-full group"
                      >
                        Réserver
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center bg-muted rounded-2xl p-8">
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Besoin d&apos;un package sur mesure ? Contactez-nous pour un devis
              personnalisé.
            </p>
            <Link href="/contact">
              <Button variant="primary">Demander un devis gratuit</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Détail des Services
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Un service complet pour assurer le succès de votre événement
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} variant="elevated">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-3">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                          <span className="text-sm text-slate-700 dark:text-slate-300">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Prêt à réserver ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contactez-nous pour discuter de votre événement et recevoir un devis
            personnalisé gratuit.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="group"
            >
              Demander un devis
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
