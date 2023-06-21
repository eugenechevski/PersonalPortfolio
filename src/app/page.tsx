'use client';

import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import introImg from "@/assets/intro.jpeg";
import aboutImg from "@/assets/about.jpeg";
import bookstoreImg from "@/assets/bookstore.jpg";
import battleshipImg from "@/assets/battleship.jpg";
import checkersImg from "@/assets/checkers.jpg";

import uniqid from "uniqid";

const projects = [
  {
    name: "Battleship",
    link: "https://github.com/eugenechevski/battleship",
    description: "A responsive web-version of the board-game Battleship.",
    image: battleshipImg,
  },
  {
    name: "Bookstore",
    link: "https://github.com/eugenechevski/bookstore",
    description:
      "A web application that provides content for best-selling books according to New York Times.",
    image: bookstoreImg,
  },
  {
    name: "Checkers",
    link: "https://github.com/eugenechevski/checkers-game",
    description: "A digital version of the classic board game Checkers.",
    image: checkersImg,
  },
];

export default function Page() {
  return (
    <main className="w-100vw max-h-max text-white opacity-50 scroll-smooth transition-all duration-500 ease-in-out">
      <header className="h-[100vh] flex flex-col items-center justify-center gap-12 mb-12">
        <figure className="rounded-full bg-purple-500 w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] overflow-hidden shadow-2xl drop-shadow-2xl">
          <Image
            src={introImg}
            alt="introduction photo"
            sizes="(max-width: 576px) 250px, 500px"
            quality={100}
            priority={true}
            width={500}
            height={500}
          />
        </figure>
        <h1 className="text-2xl text-center sm:text-4xl font-bold">
          Hello, I am Eugene Chevski - a full-stack software engineer.
        </h1>
      </header>
      <section className="flex flex-col sm:flex-row items-center justify-center gap-12 p-12 mb-12">
        <figure className="shadow-2xl drop-shadow-2xl w-[250px] sm:w-[500px] sm:mb-6">
          <Image
            className="shadow-2xl drop-shadow-2xl"
            src={aboutImg}
            alt="about photo"
            sizes="(max-width: 576px) 250px, 500px"
            quality={100}
            priority={true}
            width={500}
            height={500}
          />
        </figure>
        <article className="flex flex-col items-center justify-center gap-6 sm:gap-12 lg:w-1/2">
          <h1 className="text-3xl text-center sm:text-6xl font-bold">
            About me
          </h1>
          <p className="text-start text-sm sm:text-xl font-light lg:w-3/4 drop-shadow-2xl">
            I am a passionate software engineer specializing in innovative and
            user-friendly application development. My expertise spans
            JavaScript, HTML, CSS, React, TypeScript, Tailwind, MongoDB, SQL,
            Java, Python, and Node.js. Fluent in Russian and English, I am
            currently completing my computer science degree at a university in
            Florida. I thrive on new challenges and have a strong desire to
            continuously learn and grow. I am confident that my skills and
            experience would make me a valuable asset to any team. Feel free to
            explore my portfolio for more information about my work.
          </p>
        </article>
      </section>
      <section className="min-h-[100vh] flex flex-col gap-12 items-center justify-evenly">
        <h1 className="text-3xl text-center sm:text-6xl font-bold">
          Featured Projects
        </h1>
        <div className="flex flex-col sm:flex-row">
          {projects.map(({ name, link, description, image }) => (
            <article
              className="flex flex-col items-center justify-center gap-6"
              key={uniqid()}
            >
              <figure className="flex items-center rounded-full w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] shadow-2xl drop-shadow-2xl overflow-hidden">
                <Link className="relative h-full w-full" href={link}>
                  <Image
                    className="rounded-full"
                    src={image}
                    alt="bookstore"
                    quality={100}
                    priority={true}
                    sizes="(max-width: 576px) 150px, 300px"
                    fill
                  />
                </Link>
              </figure>
              <h1 className="text-2xl text-center">{name}</h1>
              <p className="text-md text-center w-3/4">{description}</p>
            </article>
          ))}
        </div>
        <Link href={"https://github.com/eugenechevski"}>
          <button className="w-64 p-4 bg-white rounded-3xl shadow-2xl drop-shadow-2xl text-[#6B21A5] text-xl mb-12 hover:opacity-[35%]">
            Explore
          </button>
        </Link>
      </section>
      <section className="flex flex-col items-center justify-center gap-12 min-h-[100vh]">
        <h1 className="text-3xl text-center sm:text-6xl font-bold">
          Social Media
        </h1>
        <div className="flex items-center justify-center gap-12 h-[60vh]">
          <Link href={"https://www.instagram.com/eugenechevski/"}>
            <FontAwesomeIcon className="w-12" size="3x" icon={faInstagram} />
          </Link>
          <Link href={"https://twitter.com/eugenechevski7"}>
            <FontAwesomeIcon className="w-12" size="3x" icon={faTwitter} />
          </Link>
          <Link
            href={
              "https://www.linkedin.com/in/yauheni-khvashcheuski-181b06263/"
            }
          >
            <FontAwesomeIcon className="w-12" size="3x" icon={faLinkedinIn} />
          </Link>
          <Link href={"https://github.com/eugenechevski"}>
            <FontAwesomeIcon className="w-12" size="3x" icon={faGithub} />
          </Link>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center sm:gap-12">
        <article className="flex flex-col items-center justify-start gap-6 h-[30vh] sm:h-[15vh]">
          <h1 className="text-3xl text-center sm:text-6xl font-bold">
            Contact me
          </h1>
          <p className="text-md h-3/4 text-center sm:text-start">
            If you have any questions, concerns, or offers, feel free to contact
            me through this form or the social media above.
          </p>
        </article>
        <form
          id="contact"
          className="flex flex-col gap-4 sm:w-1/2 lg:w-1/4"
          method="POST"
          action={"/success"}
          name="contact"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <label className="text-md" htmlFor="first-name">
            First Name
          </label>
          <input
            className="bg-white outline-none text-black p-3 rounded-xl"
            required
            maxLength={20}
            type="text"
            id="first-name"
            name="first-name"
          />
          <label className="text-md" htmlFor="last-name">
            Last Name
          </label>
          <input
            className="bg-white outline-none text-black p-3 rounded-xl"
            required
            maxLength={20}
            type="text"
            id="last-name"
            name="last-name"
          />
          <label className="text-md" htmlFor="email">
            Email
          </label>
          <input
            className="bg-white outline-none text-black p-3 rounded-xl"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            type="email"
            id="email"
            name="email"
          />
          <label className="text-md" htmlFor="message">
            Message
          </label>
          <textarea
            className="bg-white outline-none text-black p-3 rounded-xl resize-none"
            required
            minLength={30}
            maxLength={200}
            id="message"
            rows={10}
            name="message"
          />
          <button
            name="submit"
            className="w-64 p-2 bg-white rounded-3xl shadow-2xl drop-shadow-2xl text-[#6B21A5] text-xl mb-12 self-center hover:opacity-[35%]"
            type="submit"
          >
            Send
          </button>
        </form>
      </section>
      <footer className="h-32 flex justify-center items-center">
        <p className="text-center text-md">
          &copy; 2023 Eugene Chevski. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
