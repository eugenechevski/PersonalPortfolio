"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Input from "@/components/Input";
import Button from "@/components/Button";

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

import { emailPattern, textColor } from "@/lib/constants";

import { useForm, ValidationError } from "@formspree/react";
import TextArea from "@/components/TextArea";

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
  const router = useRouter();
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FRONT_PAGE_FORM
  );

  // Navigate to the success page if the form was submitted successfully
  if (state.succeeded) {
    router.push("/success");
  }

  return (
    <main className="w-100vw max-h-max text-white opacity-50 scroll-smooth transition-all duration-500 ease-in-out">
      <header className="h-[100vh] flex flex-col items-center justify-center gap-12 mb-12">
        <figure className="rounded-full bg-purple-500 w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] overflow-hidden shadow-2xl drop-shadow-2xl relative">
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
        <Link
          href={"/blog"}
          className="text-white text-xl absolute right-10 top-10"
        >
          Blog
        </Link>
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
          <Button textContent="Explore" />
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
          onSubmit={handleSubmit}
          method="POST"
          name="contact"
        >
          <label className="text-md" htmlFor="first-name">
            First Name
          </label>
          <Input
            id="first-name"
            name="first-name"
            required={true}
            className="w-full"
          />
          <label className="text-md" htmlFor="last-name">
            Last Name
          </label>
          <Input
            id="last-name"
            name="last-name"
            required={true}
            className="w-full"
          />
          <label className="text-md" htmlFor="email">
            Email
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            required={true}
            className="w-full"
            pattern={emailPattern}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label className="text-md" htmlFor="message">
            Message
          </label>
          <TextArea
            required
            minLength={30}
            maxLength={200}
            id="message"
            rows={10}
            name="message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <div className="self-center">
            <Button
              textContent="Send"
              type="submit"
              size="md"
              disabled={state.submitting}
            />
          </div>
          <ValidationError errors={state.errors} />
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
