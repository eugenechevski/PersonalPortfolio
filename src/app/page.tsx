"use client";

import Image from "next/image";
import Link from "next/link";

import tw from "tailwind-styled-components";
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
  /**
   * Styled components
   */

  const MainContainer = tw.main`
    w-100vw
    max-h-max
    text-white
    opacity-[50%]
    scroll-smooth
    transition-all
    duration-500
    ease-in-out
  `;

  const Intro = tw.header`
    h-[100vh]
    flex
    flex-col
    items-center
    justify-center
    gap-12
  `;

  const IntroHeading = tw.h1`
    text-2xl
    text-center
    sm:text-6xl
    font-bold
  `;

  const IntroImageContainer = tw.figure`
    rounded-full
    bg-purple-500
    w-[250px]
    h-[250px]
    sm:w-[500px]
    sm:h-[500px]
    overflow-hidden
    shadow-2xl
    drop-shadow-2xl
  `;

  const About = tw.section`
    flex
    flex-col
    sm:flex-row
    items-center
    justify-center
    gap-12
    p-12
  `;

  const AboutImageContainer = tw.figure`
    shadow-2xl
    drop-shadow-2xl
    w-[250px]
    sm:w-[500px]
    sm:mb-6
  `;

  const AboutContent = tw.article`
    flex
    flex-col
    items-center
    justify-center
    gap-6
    sm:gap-12
    lg:w-1/2
  `;

  const SectionHeading = tw.h1`
    text-3xl
    text-center
    sm:text-6xl
    font-bold
  `;
  const AboutText = tw.p`
    text-start
    text-sm
    sm:text-xl
    font-light
    lg:w-3/4
    drop-shadow-2xl
  `;

  const FeaturedProjects = tw.section`
    min-h-[100vh]
    flex
    flex-col
    gap-12
    items-center
    justify-evenly
  `;

  const ProjectsContainer = tw.div`
    flex
    flex-col
    sm:flex-row
  `;

  const Project = tw.article`
    flex
    flex-col
    items-center
    justify-center
    gap-6
  `;

  const ProjectImageContainer = tw.figure`
    flex
    items-center
    rounded-full
    w-[150px]
    h-[150px]
    sm:w-[300px]
    sm:h-[300px]
    shadow-2xl
    drop-shadow-2xl
    overflow-hidden
  `;

  const ProjectTitle = tw.h1`
    text-2xl
    text-center
  `;

  const ProjectDescription = tw.p`
    text-md
    text-center
    w-3/4
  `;

  const ExploreButton = tw.button`
    w-64
    p-4
    bg-white
    rounded-3xl
    shadow-2xl
    drop-shadow-2xl
    text-[#6B21A5]
    text-xl
    mb-12
  `;

  const SocialMedia = tw.section`
    flex
    flex-col
    items-center
    justify-center
    gap-12
    min-h-[100vh]
  `;

  const SocialMediaLinks = tw.div`
    flex  
    items-center
    justify-center
    gap-12
    h-[60vh]
  `;

  const Contact = tw.section`
    flex
    flex-col
    justify-center
    items-center
    sm:gap-12
  `;

  const ContactMessageContainer = tw.article`
    flex
    flex-col
    items-center
    justify-start
    gap-6
    h-[30vh]
    sm:h-[15vh]
  `;

  const ContactMessageParagraph = tw.p`
    text-md
    h-3/4
    text-center
    sm:text-start
  `;

  const ContactForm = tw.form`
    flex
    flex-col
    gap-4
    sm:w-1/2
    lg:w-1/6
  `;

  const Input = tw.input`
    bg-white
    outline-none
    text-black
    p-3
    rounded-xl
  `;

  const Label = tw.label`
    text-md
  `;

  const TextArea = tw.textarea`
    bg-white
    outline-none
    text-black
    p-3
    rounded-xl
    resize-none
  `;

  const SubmitButton = tw.button`
    w-64
    p-2
    bg-white
    rounded-3xl
    shadow-2xl
    drop-shadow-2xl
    text-[#6B21A5]
    text-xl
    mb-12
    self-center
  `;

  /**
   * State
   */

  return (
    <MainContainer>
      <Intro>
        <IntroImageContainer>
          <Image
            src={introImg}
            alt="introduction photo"
            sizes="(max-width: 576px) 250px, 500px"
            quality={100}
            priority={true}
            width={500}
            height={500}
          />
        </IntroImageContainer>
        <IntroHeading>
          Hello, I am Eugene Chevski - a full-stack software engineer.
        </IntroHeading>
      </Intro>
      <About>
        <AboutImageContainer>
          <Image
            className="shadow-2xl
                       drop-shadow-2xl"
            src={aboutImg}
            alt="about photo"
            sizes="(max-width: 576px) 250px, 500px"
            quality={100}
            priority={true}
            width={500}
            height={500}
          />
        </AboutImageContainer>
        <AboutContent>
          <SectionHeading>About me</SectionHeading>
          <AboutText>
            I am a passionate software engineer specializing in innovative and
            user-friendly application development. My expertise spans
            JavaScript, HTML, CSS, React, TypeScript, Tailwind, MongoDB, SQL,
            Java, Python, and Node.js. Fluent in Russian and English, I am
            currently completing my computer science degree at a university in
            Florida. I thrive on new challenges and have a strong desire to
            continuously learn and grow. I am confident that my skills and
            experience would make me a valuable asset to any team. Feel free to
            explore my portfolio for more information about my work.
          </AboutText>
        </AboutContent>
      </About>
      <FeaturedProjects>
        <SectionHeading>Featured Projects</SectionHeading>
        <ProjectsContainer>
          {projects.map(({ name, link, description, image }) => (
            <Project key={uniqid()}>
              <ProjectImageContainer>
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
              </ProjectImageContainer>
              <ProjectTitle>{name}</ProjectTitle>
              <ProjectDescription>{description}</ProjectDescription>
            </Project>
          ))}
        </ProjectsContainer>
        <Link href={"https://github.com/eugenechevski"}>
          <ExploreButton>Explore</ExploreButton>
        </Link>
      </FeaturedProjects>
      <SocialMedia>
        <SectionHeading>Social Media</SectionHeading>
        <SocialMediaLinks>
          <Link href={"https://www.instagram.com/eugenechevski/"}>
            <FontAwesomeIcon size="3x" icon={faInstagram} />
          </Link>
          <Link href={"https://twitter.com/eugenechevski7"}>
            <FontAwesomeIcon size="3x" icon={faTwitter} />
          </Link>
          <Link
            href={
              "https://www.linkedin.com/in/yauheni-khvashcheuski-181b06263/"
            }
          >
            <FontAwesomeIcon size="3x" icon={faLinkedinIn} />
          </Link>
          <Link href={"https://github.com/eugenechevski"}>
            <FontAwesomeIcon size="3x" icon={faGithub} />
          </Link>
        </SocialMediaLinks>
      </SocialMedia>
      <Contact>
        <ContactMessageContainer>
          <SectionHeading>Contact me</SectionHeading>
          <ContactMessageParagraph>
            If you have any questions, concerns, or offers, feel free to contact
            me through this form or the social media above.
          </ContactMessageParagraph>
        </ContactMessageContainer>
        <ContactForm
          action={"/success"}
          name="contact"
          data-netlify="true"
          data-netlify-recaptcha="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <Label htmlFor="first-name">First Name</Label>
          <Input required maxLength={20} type="text" id="first-name" />
          <Label htmlFor="last-name">Last Name</Label>
          <Input required maxLength={20} type="text" id="last-name" />
          <Label htmlFor="email">Email</Label>
          <Input
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            type="email"
            id="email"
          />
          <Label htmlFor="message">Message</Label>
          <TextArea
            required
            minLength={30}
            maxLength={200}
            id="message"
            rows={10}
          />
          <SubmitButton type="submit">Send</SubmitButton>
        </ContactForm>
      </Contact>
    </MainContainer>
  );
}
