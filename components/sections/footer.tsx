import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-slate-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center space-x-3">
                <Image
                  src="/logo.webp"
                  alt="Location Music Store"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 tracking-wider">VIVEZ CRÉATIF</span>
                  <span className="text-lg font-black text-white tracking-tight">
                    LOCATION MUSIC STORE
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
              Location professionnelle de matériel son et lumière pour tous vos
              événements. Service de qualité avec livraison et installation
              incluses.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com/locationmusicstore"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary transition-colors duration-200 bg-white/5 p-3 hover:bg-white/10 rounded-md"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-black mb-6 uppercase tracking-wide text-sm">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-200 text-sm"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#equipments"
                  className="hover:text-primary transition-colors duration-200 text-sm"
                >
                  Équipements
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary transition-colors duration-200 text-sm"
                >
                  Contact
                </a>
              </li>
              <li>
                <Link
                  href="/mentions-legales"
                  className="hover:text-primary transition-colors duration-200 text-sm"
                >
                  Mentions Légales
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black mb-6 uppercase tracking-wide text-sm">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-sm">Région Redon / Rennes</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                <a
                  href="tel:+33783271173"
                  className="text-sm hover:text-primary transition-colors duration-200"
                >
                  07 83 27 11 73
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                <a
                  href="mailto:contact@locationmusicstore.fr"
                  className="text-sm hover:text-primary transition-colors duration-200"
                >
                  contact@locationmusicstore.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>
            © {currentYear} Location Music Store. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
