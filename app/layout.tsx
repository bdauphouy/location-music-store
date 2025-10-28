import Footer from "@/components/sections/footer";
import Navigation from "@/components/sections/navigation";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Location Music Store - Location Matériel Son & Lumière Professionnel | Redon, Rennes & La Baule",
  description:
    "Location de matériel son et lumière professionnel pour mariages, anniversaires et événements d&apos;entreprise. Enceintes JBL IRX 3100W, subwoofer, lumières d&apos;ambiance, machine à fumée. Livraison et installation possibles à Redon, Rennes, La Baule et environs. Devis gratuit sous 48h.",
  keywords: [
    "location matériel son",
    "location enceintes",
    "location sono Redon",
    "location sono Rennes",
    "location lumière événement",
    "location JBL IRX",
    "matériel son professionnel",
    "sonorisation mariage",
    "sono anniversaire",
    "location subwoofer",
    "lumières d'ambiance",
    "machine à fumée",
    "sono événement entreprise",
    "location matériel DJ",
    "sono Redon",
    "sono Rennes",
    "location enceintes Bretagne",
    "matériel événementiel",
  ],
  authors: [{ name: "Location Music Store" }],
  creator: "Location Music Store",
  publisher: "Location Music Store",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://locationmusicstore.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Location Music Store - Matériel Son & Lumière Pro | Redon, Rennes & La Baule",
    description:
      "Location de matériel son et lumière professionnel pour tous vos événements. Enceintes JBL 3100W, subwoofer, lumières, machine à fumée. Livraison incluse à Redon et Rennes.",
    url: "https://locationmusicstore.com",
    siteName: "Location Music Store",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Location Music Store - Matériel Son et Lumière Professionnel",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Location Music Store - Matériel Son & Lumière Pro",
    description:
      "Location de matériel son et lumière professionnel pour mariages, anniversaires et événements. Livraison incluse à Redon et Rennes.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
