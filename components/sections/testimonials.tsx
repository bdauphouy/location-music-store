import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sophie & Thomas",
    event: "Mariage - Redon",
    rating: 5,
    text: "Service exceptionnel pour notre mariage ! Le matériel était de qualité professionnelle et l'installation impeccable. Notre DJ était ravi de travailler avec ce matériel. Merci pour cette soirée inoubliable !",
  },
  {
    name: "Marie Dubois",
    event: "Anniversaire 50 ans - Rennes",
    rating: 5,
    text: "Équipe très professionnelle et à l'écoute. Le son et les lumières ont créé une ambiance parfaite pour l'anniversaire de mon mari. Tous nos invités étaient impressionnés. Je recommande vivement !",
  },
  {
    name: "Jean-Pierre Martin",
    event: "Événement d'entreprise",
    rating: 5,
    text: "Nous faisons appel à Location Music Store depuis 3 ans pour nos événements d'entreprise. Toujours fiables, professionnels et de bon conseil. Le rapport qualité-prix est excellent.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <p className="text-sm tracking-widest uppercase text-slate-400 mb-4">
            Témoignages
          </p>
          <h2 className="text-5xl sm:text-7xl font-black text-white mb-6 uppercase leading-none">
            ILS NOUS
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              FONT CONFIANCE
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits
          </p>
        </div>

        {/* Featured testimonial - Large centered card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-navy-light to-navy border-2 border-primary/30 rounded-md p-6 md:p-12 relative animate-scale-in stagger-1">
            <Quote className="w-16 h-16 text-primary/20 absolute top-8 right-8" />

            <div className="flex items-center space-x-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>

            <p className="text-slate-200 text-xl md:text-2xl mb-8 leading-relaxed font-light">
              &ldquo;{testimonials[0].text}&rdquo;
            </p>

            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary font-black text-xl">
                  {testimonials[0].name.split(" ")[0][0]}
                </span>
              </div>
              <div>
                <p className="font-black text-white text-lg uppercase">
                  {testimonials[0].name}
                </p>
                <p className="text-slate-400 text-sm">
                  {testimonials[0].event}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary testimonials - 2 column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {testimonials.slice(1).map((testimonial, index) => (
            <div
              key={index}
              className={`bg-navy-light border border-slate-700 rounded-md p-6 animate-slide-in-${index === 0 ? "left" : "right"} stagger-${index + 2}`}
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-slate-300 mb-6 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="flex items-center space-x-3 border-t border-slate-700 pt-4">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-accent font-black text-sm">
                    {testimonial.name.split(" ")[0][0]}
                  </span>
                </div>
                <div>
                  <p className="font-black text-white uppercase text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    {testimonial.event}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats - Single centered badge */}
        <div className="text-center animate-fade-in-up stagger-4">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 px-10 py-6 rounded-full">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <div className="text-center">
              <span className="text-4xl font-black text-white">50+</span>
              <span className="text-slate-300 text-lg ml-2">
                clients satisfaits
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
