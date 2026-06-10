import Button from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Lightbulb,
  Mic,
  PartyPopper,
  Projector,
  Sparkles,
  Speaker,
  Tent,
  UtensilsCrossed,
  Wind,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const speakerPacks = [
  {
    name: "Pack 1",
    description: "JBL IRX 1300W x2 + Subwoofer 500W",
    price: "100€",
    power: "3100W",
    image: "/images/pack-1.png",
  },
  {
    name: "Pack 2",
    description: "JBL IRX 1300W x2",
    price: "70€",
    power: "2600W",
    image: "/images/pack-2.png",
  },
  {
    name: "Pack 3",
    description: "JBL IRX 1300W + Subwoofer 500W",
    price: "60€",
    power: "1800W",
    image: "/images/pack-3.png",
  },
  {
    name: "Pack 4",
    description: "Woodbrass 200W x2",
    price: "45€",
    power: "400W",
    image: "/images/pack-4.png",
  },
];

const individualSpeakers = [
  {
    name: "JBL IRX 1300W",
    description: "Enceinte professionnelle haute puissance",
    price: "40€",
    power: "1300W",
    image: "/images/jbl.png",
  },
  {
    name: "Woodbrass 200W",
    description: "Enceinte compacte et polyvalente",
    price: "25€",
    power: "200W",
    image: "/images/woodbrass.png",
  },
];

const birthdayPacks = [
  {
    name: "Pack Anniversaire",
    description: "2 enceintes JBL + un pack lumière + un microphone sans fil",
    price: "90€",
    capacity: "~50 personnes",
  },
  {
    name: "Pack Anniversaire VIP",
    description:
      "2 enceintes JBL + un caisson + 2 packs lumières + 2 microphones sans fil",
    price: "120€",
    capacity: "~100 personnes",
  },
];

const supplements = [
  {
    icon: UtensilsCrossed,
    name: "Mange Debout",
    description: "Loué avec ses housses noires",
    price: "8€",
    image: "/images/mange-debout.png",
  },
  {
    icon: Lightbulb,
    name: "Lumières d'ambiance",
    description: "Calibrée sur la musique",
    price: "15€",
    image: "/images/lumieres-ambiance.png",
  },
  {
    icon: Mic,
    name: "Microphone",
    description: "Sans fil ou filaire selon les besoins",
    price: "20€",
    image: "/images/microphone.png",
  },
  {
    icon: Wind,
    name: "Machine à fumée",
    description: "Liquide compris avec",
    price: "25€",
    image: "/images/machine-fumee.png",
  },
  {
    icon: Projector,
    name: "Vidéoprojecteur",
    description: "Avec câble HDMI",
    price: "15€",
    image: "/images/videoprojecteur.png",
  },
  {
    icon: Sparkles,
    name: "Boule à facettes",
    description: "Avec projecteur LED",
    price: "20€",
    image: "/images/boule-facettes.png",
  },
  {
    icon: Tent,
    name: "Barnum",
    description: "10x6m avec parois latérales",
    price: "250€",
    image: "/images/barnum.png",
    is_weekend: true,
  },
];

export default function EquipmentShowcase() {
  return (
    <section id="equipments" className="py-32 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 animate-fade-in-up">
          <p className="text-sm tracking-widest uppercase text-slate-400 mb-4">
            Nos Équipements
          </p>
          <h2 className="text-5xl sm:text-7xl font-black text-white mb-6 uppercase leading-none">
            PACKS
            <br />
            ENCEINTES
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl">
            Du matériel professionnel adapté à tous vos événements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {speakerPacks.map((pack, index) => (
            <Link href="#contact" key={index}>
              <Card
                className={`group bg-gradient-to-br from-navy-light to-navy border-2 border-slate-700 hover:border-primary transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 animate-fade-in-up stagger-${
                  index + 1
                } relative overflow-hidden cursor-pointer`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500"></div>
                <div className="relative w-full size-60 overflow-hidden">
                  <Image
                    src={pack.image}
                    alt={pack.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <CardContent className="pt-6 pb-4 relative">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-primary/10 p-3 rounded-md group-hover:bg-primary/20 transition-colors duration-300">
                        <Speaker className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="text-right">
                        <div className="text-5xl font-bold text-white group-hover:text-primary transition-colors duration-300 leading-none">
                          {pack.price}
                        </div>
                        <div className="text-xs text-slate-400 mt-1 uppercase tracking-wide">
                          par jour
                        </div>
                      </div>
                    </div>
                    <div className="h-1 w-12 bg-primary rounded-full group-hover:w-full transition-all duration-500"></div>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-3 uppercase tracking-tight">
                    {pack.name}
                  </h3>
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed min-h-[3rem]">
                    {pack.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-700">
                    <span className="text-xs text-slate-400 uppercase tracking-wide font-semibold">
                      Puissance
                    </span>
                    <div className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-md group-hover:bg-primary/20 transition-colors duration-300">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      <span className="text-sm text-primary font-black">
                        {pack.power}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mb-20 animate-fade-in-up stagger-5">
          <h3 className="text-4xl font-black text-white mb-8 uppercase">
            Enceintes individuelles
          </h3>
          <p className="text-slate-400 mb-8 text-lg">
            Louez vos enceintes à l&apos;unité selon vos besoins
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {individualSpeakers.map((speaker, index) => (
              <Link href="#contact" key={index}>
                <Card
                  className={`group bg-gradient-to-br from-navy-light to-navy border-2 border-slate-700 hover:border-accent transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-accent/30 animate-fade-in-up stagger-${
                    index + 5
                  } relative overflow-hidden cursor-pointer`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-all duration-500"></div>
                  <div className="relative w-full size-60 overflow-hidden">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <CardContent className="pt-6 pb-4 relative">
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="bg-accent/10 p-3 rounded-md group-hover:bg-accent/20 transition-colors duration-300">
                          <Speaker className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="text-right">
                          <div className="text-5xl font-bold text-white group-hover:text-accent transition-colors duration-300 leading-none">
                            {speaker.price}
                          </div>
                          <div className="text-xs text-slate-400 mt-1 uppercase tracking-wide">
                            par jour
                          </div>
                        </div>
                      </div>
                      <div className="h-1 w-12 bg-accent rounded-full group-hover:w-full transition-all duration-500"></div>
                    </div>
                    <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-tight">
                      {speaker.name}
                    </h3>
                    <p className="text-slate-300 text-sm mb-4 leading-relaxed min-h-[3rem]">
                      {speaker.description}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-slate-700">
                      <span className="text-xs text-slate-400 uppercase tracking-wide font-semibold">
                        Puissance
                      </span>
                      <div className="flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-md group-hover:bg-accent/20 transition-colors duration-300">
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                        <span className="text-sm text-accent font-black">
                          {speaker.power}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-20 animate-fade-in-up stagger-6 relative">
          {/* Confettis décoratifs en arrière-plan */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute top-10 left-[10%] w-3 h-3 bg-pink-500 rounded-full animate-bounce opacity-60"
              style={{ animationDelay: "0s", animationDuration: "2s" }}
            ></div>
            <div
              className="absolute top-20 left-[25%] w-2 h-2 bg-yellow-400 rounded-full animate-bounce opacity-70"
              style={{ animationDelay: "0.3s", animationDuration: "2.5s" }}
            ></div>
            <div
              className="absolute top-5 left-[40%] w-4 h-4 bg-cyan-400 rounded-full animate-bounce opacity-50"
              style={{ animationDelay: "0.6s", animationDuration: "1.8s" }}
            ></div>
            <div
              className="absolute top-16 left-[60%] w-2 h-2 bg-purple-500 rounded-full animate-bounce opacity-60"
              style={{ animationDelay: "0.9s", animationDuration: "2.2s" }}
            ></div>
            <div
              className="absolute top-8 left-[75%] w-3 h-3 bg-green-400 rounded-full animate-bounce opacity-70"
              style={{ animationDelay: "1.2s", animationDuration: "2s" }}
            ></div>
            <div
              className="absolute top-24 left-[85%] w-2 h-2 bg-orange-400 rounded-full animate-bounce opacity-50"
              style={{ animationDelay: "0.5s", animationDuration: "2.3s" }}
            ></div>
            <div
              className="absolute top-12 left-[5%] w-2 h-4 bg-blue-400 rotate-45 animate-bounce opacity-60"
              style={{ animationDelay: "0.7s", animationDuration: "2.1s" }}
            ></div>
            <div
              className="absolute top-4 left-[55%] w-4 h-2 bg-red-400 rotate-12 animate-bounce opacity-50"
              style={{ animationDelay: "1s", animationDuration: "1.9s" }}
            ></div>
            <div
              className="absolute top-28 left-[35%] w-3 h-3 bg-amber-400 rotate-45 animate-bounce opacity-60"
              style={{ animationDelay: "0.2s", animationDuration: "2.4s" }}
            ></div>
            <div
              className="absolute top-6 left-[90%] w-2 h-2 bg-fuchsia-400 rounded-full animate-bounce opacity-70"
              style={{ animationDelay: "0.8s", animationDuration: "2s" }}
            ></div>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <PartyPopper className="w-10 h-10 text-pink-500 animate-pulse" />
            <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 uppercase">
              Packs Anniversaire
            </h3>
            <PartyPopper className="w-10 h-10 text-cyan-400 animate-pulse scale-x-[-1]" />
          </div>
          <p className="text-slate-400 mb-8 text-lg">
            Des packs tout-en-un pour vos fêtes d&apos;anniversaire (prix
            week-end, sans livraison)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {birthdayPacks.map((pack, index) => (
              <Link href="#contact" key={index}>
                <Card
                  className={`group bg-gradient-to-br from-purple-950/50 via-navy-light to-pink-950/30 border-2 border-purple-500/30 hover:border-pink-500 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/30 animate-fade-in-up stagger-${
                    index + 6
                  } relative overflow-hidden cursor-pointer`}
                >
                  {/* Confettis dans la carte - animation continue */}
                  <div
                    className="absolute top-4 right-8 w-2 h-2 bg-yellow-400 rounded-full opacity-60 animate-bounce"
                    style={{ animationDuration: "3s" }}
                  ></div>
                  <div
                    className="absolute top-8 right-16 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-50 animate-bounce"
                    style={{
                      animationDuration: "2.5s",
                      animationDelay: "0.5s",
                    }}
                  ></div>
                  <div
                    className="absolute top-6 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-bounce"
                    style={{ animationDuration: "2.8s", animationDelay: "1s" }}
                  ></div>
                  <div
                    className="absolute top-12 right-12 w-1.5 h-1.5 bg-green-400 rounded-full opacity-50 animate-bounce"
                    style={{
                      animationDuration: "3.2s",
                      animationDelay: "0.3s",
                    }}
                  ></div>

                  {/* Glow effects avec animation pulse */}
                  <div
                    className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-pink-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl animate-pulse"
                    style={{ animationDuration: "4s" }}
                  ></div>
                  <div
                    className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full blur-3xl animate-pulse"
                    style={{ animationDuration: "5s", animationDelay: "1s" }}
                  ></div>

                  <CardContent className="pt-8 pb-6 relative">
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 p-3 rounded-md group-hover:from-pink-500/30 group-hover:to-purple-500/30 transition-colors duration-300">
                          <PartyPopper className="w-8 h-8 text-pink-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                        </div>
                        <div className="text-right">
                          <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 group-hover:from-pink-300 group-hover:to-cyan-300 transition-colors duration-300 leading-none">
                            {pack.price}
                          </div>
                          <div className="text-xs text-slate-400 mt-1 uppercase tracking-wide">
                            pour le week-end
                          </div>
                        </div>
                      </div>
                      <div className="h-1 w-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full group-hover:w-full transition-all duration-500"></div>
                    </div>
                    <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-tight">
                      {pack.name}
                    </h3>
                    <p className="text-slate-300 text-sm mb-4 leading-relaxed min-h-12">
                      {pack.description}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-purple-500/30">
                      <span className="text-xs text-slate-400 uppercase tracking-wide font-semibold">
                        Capacité
                      </span>
                      <div className="flex items-center space-x-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 px-4 py-2 rounded-md group-hover:from-pink-500/20 group-hover:to-purple-500/20 transition-colors duration-300">
                        <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                        <span className="text-sm text-pink-400 font-black">
                          {pack.capacity}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-20 animate-fade-in-up stagger-8">
          <h3 className="text-4xl font-black text-white mb-8 uppercase">
            Suppléments
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supplements.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link href="#contact" key={index}>
                  <Card
                    className={`group bg-navy-light h-full border-slate-700 hover:border-accent transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 animate-fade-in-up stagger-${
                      index + 5
                    } cursor-pointer relative overflow-hidden`}
                  >
                    {/* {item.tag && (
                      <div className="absolute top-3 right-3 bg-accent/90 text-navy text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide z-10">
                        {item.tag}
                      </div>
                    )} */}
                    <div className="relative w-full size-60 overflow-hidden">
                      {item.image && (
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain"
                        />
                      )}
                    </div>
                    <CardContent className="pt-6">
                      <div className="mb-4">
                        <Icon className="w-10 h-10 text-accent group-hover:scale-110 transition-transform duration-300 mb-4" />
                        <div className="flex items-end gap-1">
                          <div className="text-3xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                            {item.price}
                          </div>
                          <div className="text-xs text-slate-400 mb-1">
                            / {item.is_weekend ? "week-end" : "jour"}
                          </div>
                        </div>
                      </div>
                      <h4 className="text-xl font-black text-white uppercase mb-3">
                        {item.name}
                      </h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 border border-primary/30 rounded-md p-12 text-center animate-fade-in-up stagger-6 hover:border-primary transition-all duration-500">
          <h3 className="text-3xl font-black text-white mb-4 uppercase">
            Packages personnalisés disponibles
          </h3>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Nous adaptons notre offre en fonction de vos besoins spécifiques
          </p>
          <Link href="#contact">
            <Button className="bg-white text-navy hover:bg-slate-200 hover:scale-105 font-bold px-6 py-4 min-h-14 text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Demander un devis sur mesure
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
