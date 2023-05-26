import "./globals.css";
import { Lato } from "next/font/google";
import Image from "next/image";

const lato = Lato({ weight: "400", subsets: ["latin-ext"] });
const backgroundImg = require("@/assets/background.jpg");

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
      <body className={lato.className + " relative text-shadow"}>
        <Image
          className="absolute -z-10"
          src={backgroundImg}
          alt="purple haze background"
          fill={true}
          quality={100}
          priority={true}
        />
        {children}
      </body>
    </html>
  );
}
