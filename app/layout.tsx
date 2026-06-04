import type React from "react";
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LenisProvider } from "@/components/lenis-provider";
import ClickSpark from "@/components/click-spark";
import { ScrollIndicator } from "@/components/scroll-indicator";
import "./globals.css";
import RegisterSW from "@/components/register-sw";

const _playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Fernanda Talavera | Sua Beleza, Nossa Arte",
  description:
    "Especialista em tranças, Box Braids, Nagô e saúde capilar. Transforme seu visual com proteção e estilo.",
  keywords: [
    "tranças",
    "box braids",
    "nagô",
    "cornrows",
    "trancista",
    "cabelo afro",
    "saúde capilar",
  ],
  generator: "v0.app",
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
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#B47850" />
        <link rel="apple-touch-icon" href="/images/hero-braids.jpg" />
      </head>
      <body className={`font-serif antialiased`}>
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
