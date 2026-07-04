import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thirtynighty.com"),
  title: "Thirty Nighty — Hermes Agents & Inference API",
  description:
    "Deploy a managed Hermes agent or plug straight into an OpenAI-compatible inference API. Fixed-cost hardware, private by design, no per-token surprises.",
  openGraph: {
    title: "Thirty Nighty — Hermes Agents & Inference API",
    description:
      "Deploy a managed Hermes agent or plug straight into an OpenAI-compatible inference API.",
    type: "website",
    siteName: "Thirty Nighty",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thirty Nighty — Hermes Agents & Inference API",
    description:
      "Deploy a managed Hermes agent or plug straight into an OpenAI-compatible inference API.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans+Text:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
