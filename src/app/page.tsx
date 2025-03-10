"use client";

import { useCallback, useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/react";

import Input from "@/components/Input";
import Button from "@/components/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import introImg from "@/assets/intro.jpeg";

import mealMateImg from "@/assets/meal-mate.jpg";
import bookstoreImg from "@/assets/bookstore.jpg";
import reactChatterImg from "@/assets/react-chatter.jpg";

import uniqid from "uniqid";

import { emailPattern } from "@/lib/constants";

import { useForm, ValidationError } from "@formspree/react";
import TextArea from "@/components/TextArea";

import { motion, useScroll, AnimatePresence } from "framer-motion";

const projects = [
  {
    name: "Meal Mate AI",
    link: "https://meal-mate-ai.vercel.app/",
    description: "A team project for generating smart recipes powered by AI.",
    image: mealMateImg,
  },
  {
    name: "Bookstore",
    link: "https://bookstore-f3276.firebaseapp.com/",
    description:
      "A web application that provides content for best-selling books according to New York Times.",
    image: bookstoreImg,
  },
  {
    name: "React Chatter",
    link: "https://github.com/eugenechevski/react-chatter",
    description:
      "A dynamic and feature-rich mobile messaging app built with React Native.",
    image: reactChatterImg,
  },
];

const sentence = "Hey, I'm Eugene👋";
const letters = sentence.split("");

export default function Page() {
  const router = useRouter();
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FRONT_PAGE_FORM
  );

  const { scrollYProgress } = useScroll();
  const [scrollY, setScrollY] = useState(0);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Navigate to the success page if the form was submitted successfully
  if (state.succeeded) {
    router.push("/success");
  }

  const onScroll = useCallback((e) => {
    const { scrollY } = window;
    setScrollY(scrollY);
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <motion.main
      className="primary-page"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 1,
      }}
    >
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar"
      />
      {scrollY > 100 && (
        <motion.div
          className={`primary-icon fixed left-3 top-3 translate-y-[90vh] cursor-pointer`}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          <FontAwesomeIcon icon={faArrowUp} size="2x" onClick={scrollTop} />
        </motion.div>
      )}
      <motion.nav
        initial={{
          x: -100,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        exit={{
          x: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="flex w-full p-5 md:p-12 h-12 gap-6"
      >
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link href={"#about"} className="primary-icon text-2xl">
            ℹ️
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link href={"#socials"} className="primary-icon text-2xl">
            👥
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link href={"#contact"} className="primary-icon text-3xl">
            📧  
          </Link>
        </motion.div>
      </motion.nav>
      <header className="h-[60vh] lg:h-[100vh] flex flex-col items-center justify-center gap-3 lg:gap-12 lg:mb-12">
        <figure className="rounded-3xl w-[300px] h-[250px] overflow-hidden shadow-2xl drop-shadow-2xl relative">
          <Image
            src={introImg}
            alt="introduction photo"
            sizes="(max-width: 576px) 300px, 500px"
            quality={100}
            priority={true}
          />
        </figure>
        <h1 className="text-2xl text-center sm:text-4xl font-bold p-5 lg:p-0">
          <AnimatePresence>
            {letters.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {char}
              </motion.span>
            ))}
          </AnimatePresence>
        </h1>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-5xl absolute right-3 top-3 sm:right-5 sm:top-5"
        >
          <Link
            href={"/blog"}
          >
            ✍️
          </Link>
        </motion.div>
      </header>
      <section
        id="about"
        className="flex flex-col items-center justify-center gap-12 p-12 mb-12"
      >
        <h1 className="text-3xl text-center sm:text-6xl font-bold">About me</h1>
        <p className="text-sm sm:text-xl font-light lg:w-3/4 drop-shadow-2xl">
          Software engineer with a comprehensive background in full-stack
          development, showcasing expertise in JavaScript, React, and Node.js.
          Proficient in Java, Python, and C, with experience in enhancing AI
          models&apos; performance and developing dynamic web applications.
          Skilled in UI/UX design, system architecture, and effective
          collaboration.
        </p>
      </section>
      <section
        id="socials"
        className="flex flex-col items-center justify-center gap-12 lg:min-h-[100vh]"
      >
        <h1 className="text-3xl text-center sm:text-6xl font-bold">
          Social Media
        </h1>
        <div className="flex items-center justify-center gap-12 h-[50vh] lg:h-[60vh]">
          <Link
            href={
              "https://www.linkedin.com/in/eugenechevski/"
            }
          >
            <FontAwesomeIcon className="w-12" size="3x" icon={faLinkedinIn} />
          </Link>
          <Link href={"https://github.com/eugenechevski"}>
            <FontAwesomeIcon className="w-12" size="3x" icon={faGithub} />
          </Link>
        </div>
      </section>
      <section
        id="contact"
        className="flex flex-col justify-center items-center sm:gap-12"
      >
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
          &copy; 2024 Eugene Chevski. All rights
          reserved.
        </p>
      </footer>
    </motion.main>
  );
}
