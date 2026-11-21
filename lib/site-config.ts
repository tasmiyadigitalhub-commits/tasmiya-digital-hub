/**
 * Central Business Configuration for TASMIYA DIGITAL HUB.
 *
 * Edit the values below to update brand details, official WhatsApp contact,
 * and site navigation across the entire website.
 */

export const siteConfig = {
  brandName: "TASMIYA DIGITAL HUB",
  shortName: "Tasmiya Digital Hub",
  tagline: "Your Business Deserves a Better Digital Presence.",
  siteUrl: "https://tasmiya-digital-hub.vercel.app",
  defaultTitle:
    "Tasmiya Digital Hub | Digital Marketing Agency & Website Design",
  defaultDescription:
    "Tasmiya Digital Hub is a digital marketing agency offering website design, SEO services, speed optimization, and social media marketing in Pakistan and globally.",
  regionsServed: "Pakistan & International",
  audienceSummary:
    "Small businesses, startups, entrepreneurs, local businesses, academies, and international business owners.",

  contact: {
    whatsappNumberDisplay: "+92 306 5469314",
    whatsappNumberRaw: "923065469314",
    whatsappDefaultMessage:
      "Hello Tasmiya Digital Hub, I am interested in your services.",
    locationDisplay: "Serving Clients in Pakistan & Worldwide (Remote Agency)",
    workingHours: "Remote Consultations by Appointment (Pakistan & Global Time Zones)",
    formBackendNotice:
      "Frontend Validation Only: This enquiry form validates your inputs in the browser, but submissions are not sent or delivered until a working backend email or database service is connected. Please use the WhatsApp button for immediate contact.",
  },

  /**
   * Primary Top-Bar Navigation (visible Home link + 5 core sections)
   */
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
  ],

  allPages: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ],
} as const;

export function getWhatsAppHref(customMessage?: string): string {
  const digits = siteConfig.contact.whatsappNumberRaw.replace(/\D/g, "");
  const message = encodeURIComponent(
    customMessage || siteConfig.contact.whatsappDefaultMessage
  );
  return `https://wa.me/${digits}?text=${message}`;
}
