import ContactForm from "@/components/sections/contact-form";
import EquipmentShowcase from "@/components/sections/equipment-showcase";
import Hero from "@/components/sections/hero";
import Testimonials from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <EquipmentShowcase />
      <Testimonials />
      <section
        id="contact"
        className="py-32 bg-background relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Info */}
            <div className="animate-fade-in-up">
              <p className="text-sm tracking-widest uppercase text-slate-400 mb-4">
                Contactez-nous
              </p>
              <h2 className="text-5xl sm:text-7xl font-black text-white mb-6 uppercase leading-none">
                DEMANDEZ
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  VOTRE DEVIS
                </span>
              </h2>
              <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                Remplissez le formulaire et nous vous répondrons dans les 48h
              </p>

              {/* Contact info cards */}
              <div className="space-y-6">
                <div className="bg-navy-light border border-slate-700 p-6 rounded-md hover:border-primary transition-all duration-300 group">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-md group-hover:bg-primary/20 transition-colors duration-300">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">
                        Téléphone
                      </h3>
                      <a
                        href="tel:+33783271173"
                        className="text-slate-300 hover:text-primary transition-colors duration-200"
                      >
                        07 83 27 11 73
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-navy-light border border-slate-700 p-6 rounded-md hover:border-primary transition-all duration-300 group">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-md group-hover:bg-primary/20 transition-colors duration-300">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:contact@locationmusicstore.fr"
                        className="text-slate-300 hover:text-primary transition-colors duration-200"
                      >
                        contact@locationmusicstore.fr
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-navy-light border border-slate-700 p-6 rounded-md hover:border-primary transition-all duration-300 group">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-md group-hover:bg-primary/20 transition-colors duration-300">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">
                        Zone de couverture
                      </h3>
                      <p className="text-slate-300">
                        Redon, Rennes et environs
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-md">
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-center space-x-2">
                    <span className="text-primary">✓</span>
                    <span>Réponse sous 48h garantie</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary">✓</span>
                    <span>Livraison et installation incluses</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary">✓</span>
                    <span>Matériel professionnel testé</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="bg-navy-light border border-slate-700 p-8 md:p-10 rounded-md animate-fade-in-up stagger-1 hover:border-primary/50 transition-all duration-300">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
