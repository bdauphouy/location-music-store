import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
} from "@react-email/components";
import * as React from "react";

interface ContactFormEmailProps {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  location: string;
  message?: string;
}

export const ContactFormEmail = ({
  name = "Sophie & Thomas",
  email = "sophie.thomas@example.com",
  phone = "06 12 34 56 78",
  eventType = "Mariage",
  eventDate = "15 juin 2025",
  location = "Redon",
  message = "Nous aimerions avoir un devis pour notre mariage.",
}: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Nouvelle demande de devis - {eventType}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={h1}>Location Music Store</Heading>
            <Text style={tagline}>Votre événement, notre passion</Text>
          </Section>

          {/* Title */}
          <Section style={titleSection}>
            <Heading style={h2}>Nouvelle demande de devis</Heading>
            <Text style={subtitle}>Une nouvelle demande vient d'être reçue</Text>
          </Section>

          {/* Client Information */}
          <Section style={infoCard}>
            <Text style={cardTitle}>👤 Informations du client</Text>
            <Hr style={divider} />
            <InfoRow label="Nom" value={name} />
            <InfoRow label="Email" value={email} />
            <InfoRow label="Téléphone" value={phone} />
          </Section>

          {/* Event Details */}
          <Section style={infoCard}>
            <Text style={cardTitle}>🎉 Détails de l'événement</Text>
            <Hr style={divider} />
            <InfoRow label="Type d'événement" value={eventType} />
            <InfoRow label="Date" value={eventDate} />
            <InfoRow label="Lieu" value={location} />
          </Section>

          {/* Message */}
          {message && (
            <Section style={messageCard}>
              <Text style={cardTitle}>💬 Message</Text>
              <Hr style={divider} />
              <Text style={messageText}>{message}</Text>
            </Section>
          )}

          {/* CTA */}
          <Section style={ctaSection}>
            <Text style={ctaText}>
              📧 Répondez rapidement pour confirmer la disponibilité !
            </Text>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Hr style={footerDivider} />
            <Text style={footerText}>
              Ce message a été envoyé via le formulaire de contact de Location Music Store
            </Text>
            <Text style={footerSubtext}>
              contact@contact.bdau.fr • 07 83 27 11 73
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div style={{ marginBottom: "12px" }}>
    <Text style={infoLabel}>{label}</Text>
    <Text style={infoValue}>{value}</Text>
  </div>
);

export default ContactFormEmail;

// Styles matching the indigo theme
const main = {
  backgroundColor: "#0f172a",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "40px 20px",
  maxWidth: "600px",
};

const header = {
  textAlign: "center" as const,
  marginBottom: "32px",
  padding: "24px",
  background: "linear-gradient(135deg, #312e81 0%, #1e1b4b 100%)",
  borderRadius: "8px",
};

const h1 = {
  color: "#ffffff",
  fontSize: "32px",
  fontWeight: "900",
  textTransform: "uppercase" as const,
  letterSpacing: "-0.02em",
  margin: "0 0 8px 0",
};

const tagline = {
  color: "#a78bfa",
  fontSize: "14px",
  fontWeight: "600",
  textTransform: "uppercase" as const,
  letterSpacing: "0.1em",
  margin: "0",
};

const titleSection = {
  textAlign: "center" as const,
  marginBottom: "32px",
};

const h2 = {
  color: "#818cf8",
  fontSize: "28px",
  fontWeight: "900",
  textTransform: "uppercase" as const,
  margin: "0 0 8px 0",
};

const subtitle = {
  color: "#94a3b8",
  fontSize: "16px",
  margin: "0",
};

const infoCard = {
  backgroundColor: "#1e293b",
  borderRadius: "8px",
  border: "1px solid #334155",
  padding: "24px",
  marginBottom: "16px",
};

const messageCard = {
  backgroundColor: "#312e81",
  borderRadius: "8px",
  border: "1px solid #818cf8",
  padding: "24px",
  marginBottom: "16px",
};

const cardTitle = {
  color: "#f8fafc",
  fontSize: "18px",
  fontWeight: "700",
  margin: "0 0 12px 0",
};

const divider = {
  borderColor: "#334155",
  margin: "16px 0",
};

const infoLabel = {
  color: "#94a3b8",
  fontSize: "12px",
  fontWeight: "600",
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
  margin: "0 0 4px 0",
};

const infoValue = {
  color: "#f8fafc",
  fontSize: "16px",
  fontWeight: "500",
  margin: "0",
};

const messageText = {
  color: "#e0e7ff",
  fontSize: "15px",
  lineHeight: "1.6",
  whiteSpace: "pre-wrap" as const,
  margin: "0",
};

const ctaSection = {
  textAlign: "center" as const,
  padding: "24px",
  backgroundColor: "#818cf8",
  borderRadius: "8px",
  marginBottom: "32px",
};

const ctaText = {
  color: "#0f172a",
  fontSize: "16px",
  fontWeight: "700",
  margin: "0",
};

const footer = {
  marginTop: "32px",
  textAlign: "center" as const,
};

const footerDivider = {
  borderColor: "#334155",
  margin: "24px 0",
};

const footerText = {
  color: "#64748b",
  fontSize: "13px",
  margin: "0 0 8px 0",
};

const footerSubtext = {
  color: "#475569",
  fontSize: "12px",
  margin: "0",
};
