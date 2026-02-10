// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://arraframework.org"),
  title: {
    default: "A-R-R-A Framework (2012–2026)",
    template: "%s | ARRA Framework",
  },
  description:
    "A-R-R-A Framework (2012–2026): Art → Right → Respect → Alignment. A human-centric framework for interpreting expression, preserving dignity, understanding roots, and choosing ethical alignment.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "A-R-R-A Framework (2012–2026)",
    description:
      "Art → Right → Respect → Alignment (Alignment via Appreciation or Association). Read the paper and the Symbol & Semiotics note.",
    url: "/",
    siteName: "ARRA Framework",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "A-R-R-A Framework (2012–2026)",
    description:
      "Art → Right → Respect → Alignment. Read the paper and Symbol & Semiotics.",
  },
  robots: { index: true, follow: true },
};

import Script from "next/script";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
          <body>{children}</body>
    </html>
  );
}
