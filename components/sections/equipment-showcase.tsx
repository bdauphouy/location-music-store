import Button from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Lightbulb,
  Mic,
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
    price: "90€",
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
    price: "60€",
    power: "400W",
    image: "/images/pack-4.png",
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
    price: "15€",
    image: "/images/microphone.png",
  },
  {
    icon: Wind,
    name: "Machine à fumée",
    description: "Liquide compris avec",
    price: "20€",
    image: "/images/machine-fumee.png",
  },
  {
    icon: Projector,
    name: "Vidéoprojecteur",
    description: "Avec câble HDMI",
    price: "10€",
    image: "/images/videoprojecteur.png",
  },
  {
    icon: Sparkles,
    name: "Boule à facettes",
    description: "Avec projecteur LED",
    price: "20€",
    image: null,
  },
  {
    icon: Tent,
    name: "Barnum",
    description: "4x4m avec parois latérales",
    price: "70€",
    tag: "Bientôt disponible",
    image: null,
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
                    {item.tag && (
                      <div className="absolute top-3 right-3 bg-accent/90 text-navy text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide z-10">
                        {item.tag}
                      </div>
                    )}
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
                            /jour
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
