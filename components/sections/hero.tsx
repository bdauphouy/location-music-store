import Button from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-background text-white overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-background to-navy"></div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 lg:py-48">
        {/* Main content centered */}
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm px-6 py-3 rounded-full mb-12 animate-fade-in border border-primary/20">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary">
              Redon, Rennes & La Baule
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-8 animate-fade-in-up stagger-1 leading-none">
            <span className="block text-white">VOTRE ÉVÉNEMENT</span>
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mt-2">
              NOTRE PASSION
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up stagger-2">
            Location de matériel son et lumière professionnel pour tous vos
            événements.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20 animate-fade-in-up stagger-3">
            <Link href="#contact">
              <Button
                size="lg"
                className="group w-full sm:w-auto bg-primary text-white hover:bg-primary-dark hover:scale-105 text-lg px-6 h-14 transition-all duration-300 shadow-lg shadow-primary/30"
              >
                Demander un devis gratuit
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </Link>
            <a href="#equipments">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white hover:text-navy hover:scale-105 text-lg px-6 h-14 transition-all duration-300"
              >
                Découvrir nos équipements
              </Button>
            </a>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto animate-fade-in-up stagger-4">
            <div className="bg-navy-light/50 backdrop-blur-sm border border-slate-700 rounded-md p-6 hover:border-primary transition-all duration-300 group">
              <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                3100W
              </div>
              <div className="text-sm text-slate-400 uppercase tracking-wide">
                Puissance max
              </div>
            </div>
            <div className="bg-navy-light/50 backdrop-blur-sm border border-slate-700 rounded-md p-6 hover:border-primary transition-all duration-300 group">
              <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-sm text-slate-400 uppercase tracking-wide">
                Assistance
              </div>
            </div>
            <div className="bg-navy-light/50 backdrop-blur-sm border border-slate-700 rounded-md p-6 hover:border-primary transition-all duration-300 group">
              <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-sm text-slate-400 uppercase tracking-wide">
                Événements réussis
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
