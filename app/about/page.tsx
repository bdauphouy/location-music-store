import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Button from "@/components/ui/button";
import {
  Heart,
  Award,
  Users,
  MapPin,
  Clock,
  Shield,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "À propos - Location Music Store",
  description:
    "Découvrez l&apos;histoire de Location Music Store, votre partenaire de confiance pour la location de matériel son et lumière dans la région de Redon et Rennes.",
};

const values = [
  {
    icon: Award,
    title: "Qualité Professionnelle",
    description:
      "Nous investissons dans du matériel haut de gamme pour garantir la meilleure qualité sonore et visuelle pour vos événements.",
  },
  {
    icon: Heart,
    title: "Passion du Service",
    description:
      "Chaque événement est unique. Notre équipe s'engage à comprendre vos besoins et à vous accompagner pour créer des moments inoubliables.",
  },
  {
    icon: Shield,
    title: "Fiabilité",
    description:
      "Matériel régulièrement entretenu et testé, avec du matériel de secours disponible pour assurer la réussite de votre événement.",
  },
  {
    icon: Users,
    title: "Proximité",
    description:
      "Une équipe locale disponible et réactive, qui connaît parfaitement la région Redon / Rennes et ses spécificités.",
  },
];

const stats = [
  { number: "5+", label: "Années d'expérience" },
  { number: "500+", label: "Événements réussis" },
  { number: "100%", label: "Clients satisfaits" },
  { number: "24/7", label: "Support disponible" },
];

const coverage = [
  "Redon et agglomération",
  "Rennes et périphérie",
  "Bain-de-Bretagne",
  "Pipriac",
  "Guipry-Messac",
  "Saint-Just",
  "Guer",
  "Ploërmel",
  "Et toute la région sur demande",
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-slate-900 via-primary/20 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              À propos de nous
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Passionnés par la musique et les événements, nous mettons notre
              expertise au service de vos projets depuis 2020.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                <p>
                  Location Music Store est née d&apos;une passion pour la musique et
                  le son. Après avoir organisé et sonorisé de nombreux
                  événements à titre personnel, nous avons décidé en 2020 de
                  professionnaliser notre activité pour aider d&apos;autres personnes
                  à réaliser leurs événements de rêve.
                </p>
                <p>
                  Basés dans la région de Redon et Rennes, nous connaissons
                  parfaitement les salles et lieux de réception locaux. Cette
                  connaissance du terrain nous permet de vous conseiller au mieux
                  sur le matériel adapté à votre événement et votre lieu.
                </p>
                <p>
                  Au fil des années, nous avons développé un parc de matériel
                  professionnel complet et varié, régulièrement renouvelé pour
                  offrir les meilleures technologies disponibles. Notre objectif
                  reste le même : faire de votre événement un moment inoubliable.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Notre Mission</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Fournir du matériel son et lumière professionnel de qualité,
                  accompagné d&apos;un service personnalisé et attentif, pour que
                  chaque événement soit une réussite totale.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm opacity-90">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Nos Valeurs
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Ce qui nous anime au quotidien et guide chacune de nos actions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} variant="elevated" className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Zone d&apos;intervention
                </h2>
              </div>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                Nous intervenons principalement dans la région de Redon et
                Rennes, avec livraison et installation incluses. N&apos;hésitez pas à
                nous consulter pour d&apos;autres destinations.
              </p>
              <div className="bg-muted rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Villes desservies</span>
                </h3>
                <ul className="grid grid-cols-2 gap-3">
                  {coverage.map((city, index) => (
                    <li
                      key={index}
                      className="flex items-center space-x-2 text-slate-700 dark:text-slate-300 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{city}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Card variant="elevated" className="lg:scale-105">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Pourquoi nous choisir ?
                </h3>
                <ul className="space-y-4">
                  {[
                    "Matériel professionnel haut de gamme",
                    "Équipe expérimentée et passionnée",
                    "Service personnalisé et sur mesure",
                    "Livraison et installation incluses",
                    "Support technique pendant l'événement",
                    "Tarifs transparents sans surprise",
                    "Matériel de secours disponible",
                    "Conseils adaptés à votre budget",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-slate-700 dark:text-slate-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Travaillons ensemble
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Vous avez un projet d&apos;événement ? Contactez-nous pour en discuter et
            recevoir un devis personnalisé.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="group">
              Nous contacter
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
