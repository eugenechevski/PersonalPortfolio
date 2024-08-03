"use client";

import "./globals.css";
import { Providers } from "@/redux/providers";
import { SessionProvider } from "next-auth/react";
import { Analytics } from "@vercel/analytics/react";

import workerSrc from "../../pdf-worker.js";

import { pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <head>
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧑‍💻
</text></svg>"
          />

          <meta
            name="description"
            content="A personal portfolio website to showcase my experience and create the contact point for potential employers or business partners."
          />
          <title>Yauheni Khvashcheuski(Eugene Chevski)</title>
        </head>
        <body
          className={
            "font-mono relative text-shadow bg-grad scroll-smooth hide-scrollbar snap-center snap-normal snap-mandatory max-h-max max-w-max"
          }
        >
          <SessionProvider>{children}</SessionProvider>
          <Analytics />
        </body>
      </html>
    </Providers>
  );
}
