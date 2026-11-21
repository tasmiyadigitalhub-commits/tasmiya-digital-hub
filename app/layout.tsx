import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site-config";

const displayFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.defaultTitle,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.defaultDescription,
  openGraph: {
    type: "website",
    siteName: siteConfig.shortName,
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.shortName,
    description: siteConfig.defaultDescription,
    url: siteConfig.siteUrl,
    areaServed: ["Pakistan", "Worldwide"],
    serviceType: [
      "Website Design",
      "Landing Page Design",
      "SEO Services",
      "Technical SEO Foundations",
      "Website Speed and Mobile Optimization",
      "Social Media Marketing",
    ],
  };

  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-[#F8F7FC] text-[#24143D] antialiased" suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-[#9875E8] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#1B0D30]"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  );
}
