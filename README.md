# Location Music Store

Un site web moderne et professionnel pour Location Music Store, spécialisé dans la location de matériel son et lumière pour événements (mariages, anniversaires, événements d'entreprise) dans la région de Redon et Rennes.

## Technologies utilisées

- **Next.js 15** avec App Router
- **TypeScript** pour la sécurité des types
- **Tailwind CSS** pour le styling
- **React Hook Form** avec validation Zod
- **Lucide React** pour les icônes
- **pnpm** comme gestionnaire de packages

## Fonctionnalités

### Pages principales

- **Accueil** : Hero section, aperçu des services, showcase du matériel, témoignages clients
- **Services** : Description détaillée des services, packages de location, tarification
- **À propos** : Histoire de l'entreprise, valeurs, zone d'intervention
- **Contact** : Formulaire de contact avec validation, informations de contact, horaires

### Caractéristiques techniques

- ✅ Design responsive mobile-first
- ✅ Mode sombre/clair automatique
- ✅ Server Components pour les performances optimales
- ✅ Server Actions pour la soumission de formulaires
- ✅ Validation complète avec Zod
- ✅ SEO optimisé avec métadonnées
- ✅ Sitemap et robots.txt générés automatiquement
- ✅ Composants UI réutilisables
- ✅ Animations et transitions fluides
- ✅ Accessible (WCAG 2.1 AA)

## Installation

1. Cloner le repository
2. Installer les dépendances :

```bash
pnpm install
```

3. Lancer le serveur de développement :

```bash
pnpm dev
```

4. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur

## Structure du projet

```
location-music-store/
├── app/                      # Pages et routes Next.js
│   ├── about/               # Page À propos
│   ├── contact/             # Page Contact
│   ├── services/            # Page Services
│   ├── layout.tsx           # Layout racine
│   ├── page.tsx             # Page d'accueil
│   ├── globals.css          # Styles globaux
│   ├── sitemap.ts           # Configuration sitemap
│   └── robots.ts            # Configuration robots.txt
├── components/
│   ├── ui/                  # Composants UI réutilisables
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   └── label.tsx
│   └── sections/            # Sections de pages
│       ├── navigation.tsx
│       ├── footer.tsx
│       ├── hero.tsx
│       ├── services-overview.tsx
│       ├── equipment-showcase.tsx
│       ├── testimonials.tsx
│       ├── cta.tsx
│       └── contact-form.tsx
├── lib/
│   ├── utils.ts             # Utilitaires
│   └── actions.ts           # Server Actions
└── public/                  # Assets statiques
```

## Scripts disponibles

```bash
# Développement
pnpm dev

# Build de production
pnpm build

# Démarrer en production
pnpm start

# Linter
pnpm lint
```

## Formulaire de contact

Le formulaire de contact utilise :

- React Hook Form pour la gestion du formulaire
- Zod pour la validation des données
- Server Actions Next.js pour la soumission côté serveur
- Affichage des messages de succès/erreur
- Progressive enhancement

Actuellement, les soumissions sont loggées dans la console. Pour la production, vous devrez :

1. Configurer un service d'envoi d'emails (ex: SendGrid, Resend, Nodemailer)
2. Ou connecter à un CRM/base de données
3. Mettre à jour `lib/actions.ts` avec votre logique d'envoi

## Personnalisation

### Couleurs

Les couleurs principales peuvent être modifiées dans `app/globals.css` :

- `--primary`: Couleur principale (violet par défaut)
- `--accent`: Couleur d'accentuation (orange par défaut)

### Contenu

Mettez à jour le contenu dans les fichiers de composants et de pages :

- Textes dans les composants de sections
- Témoignages clients dans `components/sections/testimonials.tsx`
- Informations de contact dans `components/sections/footer.tsx` et `app/contact/page.tsx`

### Métadonnées SEO

Modifiez les métadonnées dans `app/layout.tsx` et dans chaque page.

## Déploiement

### Vercel (recommandé)

1. Push le code sur GitHub
2. Importer le projet sur [Vercel](https://vercel.com)
3. Déployer automatiquement

### Autres plateformes

Le site peut être déployé sur toute plateforme supportant Next.js :

- Netlify
- AWS Amplify
- Railway
- Render

Suivez les instructions de déploiement Next.js pour votre plateforme choisie.

## Variables d'environnement

Pour la production, vous pourriez avoir besoin de :

```env
# API Email (exemple)
SENDGRID_API_KEY=votre_clé
EMAIL_TO=contact@locationmusicstore.com

# Base de données (si nécessaire)
DATABASE_URL=votre_url
```

## Support navigateurs

- Chrome (dernières 2 versions)
- Firefox (dernières 2 versions)
- Safari (dernières 2 versions)
- Edge (dernières 2 versions)

## License

Propriétaire - Location Music Store

## Contact

Pour toute question concernant le code :

- Email : contact@locationmusicstore.com
- Instagram : @locationmusicstore
