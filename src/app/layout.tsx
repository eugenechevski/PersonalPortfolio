import Loading from "./loading";

import "./globals.css";
import { Lato } from "next/font/google";

const lato = Lato({
  weight: "400",
  subsets: ["latin-ext"],
  fallback: ["system-ui", "roboto", "arial"],
});

export const metadata = {
  title: "Eugene Chevski - Software Engineer",
  description:
    "A personal portfolio website to showcase my experience and create the contact point for potential employers or business partners.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={
          lato.className + " relative text-shadow purple-haze scroll-smooth hide-scrollbar snap-center snap-normal snap-mandatory"
        }
      >
        {children}
      </body>
    </html>
  );
}
