"use client";

import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#", label: "ACCUEIL" },
  { href: "#equipments", label: "ÉQUIPEMENTS" },
  { href: "#contact", label: "CONTACT" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-white/10 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden group-hover:scale-110 transition-all duration-300 ring-2 ring-primary/20 group-hover:ring-primary/50 bg-white">
              <Image
                src="/logo.webp"
                alt="Location Music Store Logo"
                fill
                sizes="48px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-400 tracking-wider group-hover:text-primary transition-colors duration-300">
                VIVEZ CRÉATIF
              </span>
              <span className="text-lg font-black text-white tracking-tight group-hover:text-primary transition-colors duration-300">
                LOCATION MUSIC STORE
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-white hover:text-primary transition-all duration-300 text-sm font-semibold tracking-wide relative group animate-fade-in stagger-${
                  index + 1
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a href="#contact" className="animate-fade-in stagger-4">
              <button className="bg-white text-navy hover:bg-slate-200 hover:scale-110 hover:shadow-lg px-6 h-10 font-bold text-sm tracking-wide transition-all duration-300 uppercase rounded-md cursor-pointer">
                Réserver
              </button>
            </a>
          </div>

          <button
            className="md:hidden text-white hover:scale-110 transition-transform duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X
                size={28}
                className="rotate-90 transition-transform duration-300"
              />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 py-6 space-y-4 bg-navy border-b border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-white hover:text-primary transition-colors duration-200 font-semibold py-2 text-sm tracking-wide"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)}>
            <button className="w-full bg-white text-navy hover:bg-slate-200 px-6 h-10 font-bold text-sm tracking-wide transition-all duration-300 uppercase rounded-md cursor-pointer">
              Réserver
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}
