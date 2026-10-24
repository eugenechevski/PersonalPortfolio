import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const dmSans = localFont({
  src: [
    { path: "../public/fonts/dm-sans-regular.ttf", weight: "400" },
    { path: "../public/fonts/dm-sans-medium.ttf", weight: "500" },
    { path: "../public/fonts/dm-sans-semibold.ttf", weight: "600" },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});

const syne = localFont({
  src: [
    { path: "../public/fonts/syne-regular.ttf", weight: "400" },
    { path: "../public/fonts/syne-bold.ttf", weight: "700" },
  ],
  variable: "--font-syne",
  display: "swap",
});

export const viewport: Viewport = { themeColor: "#f0ece3" };

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
      className={`${dmSans.variable} ${syne.variable}`}
    >
      <body className={dmSans.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
