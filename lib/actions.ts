"use server";

import { z } from "zod";
import { Resend } from "resend";
import { ContactFormEmail } from "@/emails/contact-form-email";

const contactFormSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  phone: z
    .string()
    .min(10, "Numéro de téléphone invalide"),
  eventType: z.string().min(1, "Veuillez sélectionner un type d'événement"),
  eventDate: z.string().min(1, "Veuillez sélectionner une date"),
  location: z.string().min(2, "Veuillez indiquer le lieu de l'événement"),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(data: ContactFormData) {
  try {
    const validatedData = contactFormSchema.parse(data);

    // Format event type for display
    const eventTypeLabels: Record<string, string> = {
      mariage: "Mariage",
      anniversaire: "Anniversaire",
      entreprise: "Événement d'entreprise",
      autre: "Autre",
    };

    const eventTypeDisplay = eventTypeLabels[validatedData.eventType] || validatedData.eventType;

    // Format the date for display
    const formattedDate = new Date(validatedData.eventDate).toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Send email with Resend using React Email template
    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_TO!,
      subject: `Nouvelle demande de devis - ${eventTypeDisplay}`,
      react: ContactFormEmail({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        eventType: eventTypeDisplay,
        eventDate: formattedDate,
        location: validatedData.location,
        message: validatedData.message,
      }),
    });

    return {
      success: true,
      message:
        "Merci pour votre demande ! Nous vous contacterons dans les 48 heures.",
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Veuillez vérifier les informations saisies",
        errors: error.issues.reduce(
          (acc, curr) => {
            acc[curr.path[0] as string] = curr.message;
            return acc;
          },
          {} as Record<string, string>
        ),
      };
    }

    console.error("Error sending email:", error);

    return {
      success: false,
      message:
        "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter par téléphone au 07 83 27 11 73.",
    };
  }
}
