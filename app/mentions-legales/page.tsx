import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Mentions Légales | Location Music Store",
  description: "Mentions légales et informations sur Location Music Store",
};

export default function MentionsLegales() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Retour à l&apos;accueil</span>
        </Link>

        <h1 className="text-4xl font-black mb-12">Mentions Légales</h1>

        <div className="space-y-8 text-slate-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              1. Identification de l&apos;entreprise
            </h2>
            <div className="space-y-2">
              <p>
                <strong className="text-white">
                  Nom de l&apos;entreprise :
                </strong>{" "}
                Location Music Store
              </p>
              <p>
                <strong className="text-white">Forme juridique :</strong>{" "}
                Auto-entreprise
              </p>
              <p>
                <strong className="text-white">Zone d&apos;activité :</strong>{" "}
                Région Redon / Rennes, La Baule, France
              </p>
              <p>
                <strong className="text-white">Téléphone :</strong>{" "}
                <a
                  href="tel:+33783271173"
                  className="text-primary hover:underline"
                >
                  07 83 27 11 73
                </a>
              </p>
              <p>
                <strong className="text-white">Email :</strong>{" "}
                <a
                  href="mailto:contact@locationmusicstore.com"
                  className="text-primary hover:underline"
                >
                  contact@locationmusicstore.com
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              2. Hébergement du site
            </h2>
            <div className="space-y-2">
              <p>
                <strong className="text-white">Hébergeur :</strong> Vercel Inc.
              </p>
              <p>
                <strong className="text-white">Adresse :</strong> 340 S Lemon
                Ave #4133, Walnut, CA 91789, USA
              </p>
              <p>
                <strong className="text-white">Site web :</strong>{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  vercel.com
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              3. Nom de domaine
            </h2>
            <div className="space-y-2">
              <p>
                <strong className="text-white">Registrar :</strong>{" "}
                Spaceship.com
              </p>
              <p>
                <strong className="text-white">Nom de domaine :</strong>{" "}
                locationmusicstore.com
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              4. Directeur de la publication
            </h2>
            <p>
              Le directeur de la publication du site est le représentant légal
              de Location Music Store.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              5. Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, logos,
              vidéos, etc.) est la propriété exclusive de Location Music Store,
              sauf mention contraire. Toute reproduction, distribution,
              modification, adaptation, retransmission ou publication de ces
              différents éléments est strictement interdite sans l&apos;accord
              écrit de Location Music Store.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              6. Données personnelles
            </h2>
            <p>
              Les informations collectées via le formulaire de contact sont
              destinées exclusivement à Location Music Store pour le traitement
              de votre demande. Conformément à la loi « Informatique et Libertés
              » et au RGPD, vous disposez d&apos;un droit d&apos;accès, de
              rectification et de suppression des données vous concernant. Pour
              exercer ce droit, vous pouvez nous contacter à l&apos;adresse :{" "}
              <a
                href="mailto:contact@locationmusicstore.com"
                className="text-primary hover:underline"
              >
                contact@locationmusicstore.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Cookies</h2>
            <p>
              Ce site n&apos;utilise pas de cookies de tracking ou de publicité.
              Seuls des cookies techniques essentiels au fonctionnement du site
              peuvent être utilisés.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              8. Responsabilité
            </h2>
            <p>
              Location Music Store s&apos;efforce d&apos;assurer
              l&apos;exactitude et la mise à jour des informations diffusées sur
              ce site. Toutefois, Location Music Store ne peut garantir
              l&apos;exactitude, la précision ou l&apos;exhaustivité des
              informations mises à disposition sur ce site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              9. Droit applicable
            </h2>
            <p>
              Les présentes mentions légales sont régies par le droit français.
              En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </section>

          <section className="pt-8 border-t border-white/10">
            <p className="text-sm text-slate-400">
              Dernière mise à jour : {currentYear}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
