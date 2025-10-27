"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitContactForm, ContactFormData } from "@/lib/actions";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";
import Label from "@/components/ui/label";
import Button from "@/components/ui/button";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  phone: z
    .string()
    .min(10, "Numéro de téléphone invalide")
    .regex(/^[0-9\s+()-]+$/, "Le numéro ne doit contenir que des chiffres"),
  eventType: z.string().min(1, "Veuillez sélectionner un type d'événement"),
  eventDate: z.string().min(1, "Veuillez sélectionner une date"),
  location: z.string().min(2, "Veuillez indiquer le lieu de l'événement"),
  message: z.string().optional(),
});

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [responseMessage, setResponseMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    setResponseMessage("");

    try {
      const result = await submitContactForm(data);

      if (result.success) {
        setStatus("success");
        setResponseMessage(result.message);
        reset();
      } else {
        setStatus("error");
        setResponseMessage(result.message);
      }
    } catch {
      setStatus("error");
      setResponseMessage(
        "Une erreur est survenue. Veuillez réessayer plus tard."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name" required>
            Nom complet
          </Label>
          <Input
            id="name"
            {...register("name")}
            placeholder="Jean Dupont"
            error={errors.name?.message}
          />
        </div>

        <div>
          <Label htmlFor="email" required>
            Email
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="jean.dupont@example.com"
            error={errors.email?.message}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="phone" required>
            Téléphone
          </Label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder="06 00 00 00 00"
            error={errors.phone?.message}
          />
        </div>

        <div>
          <Label htmlFor="eventType" required>
            Type d&apos;événement
          </Label>
          <div className="relative">
            <select
              id="eventType"
              {...register("eventType")}
              className={`flex h-12 w-full rounded-md border border-slate-700 bg-background px-4 py-2 pr-10 text-base transition-all duration-200 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer ${
                errors.eventType
                  ? "border-red-500 focus:ring-red-500"
                  : ""
              }`}
            >
              <option value="" className="bg-background text-slate-400">Sélectionnez un type</option>
              <option value="mariage" className="bg-background text-white">Mariage</option>
              <option value="anniversaire" className="bg-background text-white">Anniversaire</option>
              <option value="entreprise" className="bg-background text-white">Événement d&apos;entreprise</option>
              <option value="autre" className="bg-background text-white">Autre</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          {errors.eventType && (
            <p className="mt-1 text-sm text-red-500">
              {errors.eventType.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="eventDate" required>
            Date de l&apos;événement
          </Label>
          <Input
            id="eventDate"
            type="date"
            {...register("eventDate")}
            error={errors.eventDate?.message}
          />
        </div>

        <div>
          <Label htmlFor="location" required>
            Lieu de l&apos;événement
          </Label>
          <Input
            id="location"
            {...register("location")}
            placeholder="Redon, Rennes..."
            error={errors.location?.message}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="message">
          Message (besoins spécifiques, nombre d&apos;invités...)
        </Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Décrivez-nous votre événement et vos besoins en matériel..."
          rows={5}
        />
      </div>

      {status === "success" && (
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md p-4 flex items-start space-x-3">
          <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
          <p className="text-green-800 dark:text-green-200">{responseMessage}</p>
        </div>
      )}

      {status === "error" && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md p-4 flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
          <p className="text-red-800 dark:text-red-200">{responseMessage}</p>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full md:w-auto bg-white text-navy hover:bg-slate-200 hover:scale-105 font-bold px-6 h-14 text-lg transition-all duration-300"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 w-5 h-5 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          "Envoyer la demande"
        )}
      </Button>
    </form>
  );
}
