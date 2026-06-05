import type React from "react";
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LenisProvider } from "@/components/lenis-provider";
import ClickSpark from "@/components/click-spark";
import { ScrollIndicator } from "@/components/scroll-indicator";
import "./globals.css";
import RegisterSW from "@/components/register-sw";
import { JsonLd } from "@/components/json-ld";
import {
  BRAND_NAME,
  BUSINESS_EMAIL,
  BUSINESS_PHONE_DISPLAY,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  MAIN_KEYWORDS,
  SITE_URL,
  absoluteUrl,
  identityGraphSchema,
} from "@/lib/seo";

const _playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: BRAND_NAME,
  title: {
    default:
      "Fernanda Talavera | Trancista e Hair Braider no Rio de Janeiro",
    template: "%s",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: MAIN_KEYWORDS,
  authors: [{ name: BRAND_NAME, url: SITE_URL }],
  creator: BRAND_NAME,
  publisher: BRAND_NAME,
  category: "beauty",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Fernanda Talavera | Trancista e Hair Braider no Rio de Janeiro",
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: BRAND_NAME,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: absoluteUrl(DEFAULT_OG_IMAGE),
        width: 1200,
        height: 630,
        alt: "Fernanda Talavera, trancista profissional no Rio de Janeiro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fernanda Talavera | Hair Braider Rio de Janeiro",
    description: DEFAULT_DESCRIPTION,
    images: [absoluteUrl(DEFAULT_OG_IMAGE)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/icon.svg", color: "#3D2F26" }],
  },
  manifest: "/manifest.json",
  other: {
    "geo.region": "BR-RJ",
    "geo.placename": "Rio de Janeiro, RJ, Brasil",
    "business:contact_data:locality": "Rio de Janeiro",
    "business:contact_data:region": "RJ",
    "business:contact_data:country_name": "Brasil",
    "business:contact_data:phone_number": BUSINESS_PHONE_DISPLAY,
    "business:contact_data:email": BUSINESS_EMAIL,
  },
};

export const viewport: Viewport = {
  themeColor: "#B47850",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://www.instagram.com" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        <link rel="dns-prefetch" href="https://api.whatsapp.com" />
      </head>
      <body className={`font-serif antialiased`}>
        <JsonLd
          id="fernanda-talavera-identity-jsonld"
          data={identityGraphSchema()}
        />
        <RegisterSW />
        <ClickSpark
          sparkColor="#B47850"
          sparkSize={10}
          sparkRadius={18}
          sparkCount={6}
          duration={500}
          easing="ease-out"
        >
          <LenisProvider>{children}</LenisProvider>
        </ClickSpark>
        <ScrollIndicator />
        <Analytics />
      </body>
    </html>
  );
}
