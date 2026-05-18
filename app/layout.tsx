import type { Metadata } from "next";
import { DM_Sans, Playfair_Display, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eugene Chevski — Software Engineer",
  description:
    "Full-stack engineer shipping AI-powered products — from wearable vision systems and voice agents to luxury automotive data platforms.",
  openGraph: {
    title: "Eugene Chevski — Software Engineer",
    description:
      "Full-stack engineer shipping AI-powered products — from wearable vision systems and voice agents to luxury automotive data platforms.",
    url: "https://eugenechevski.com",
    siteName: "Eugene Chevski",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${playfair.variable} ${jetbrainsMono.variable}`}
    >
      <body className={dmSans.className}>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  );
}
