"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import tw from "tailwind-styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import { useForm, SubmitHandler } from "react-hook-form";

const introImg = require("@/assets/intro.jpeg");
const aboutImg = require("@/assets/about.jpeg");

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

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
    gap-12
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

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => router.push("/success");

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
          <Project>
            <ProjectImageContainer>
              <Link
                href={"https://github.com/eugenechevski/bookstore"}
                className="h-full"
              >
                <Image
                  src={
                    "https://static01.nyt.com/images/2017/05/11/t-magazine/bookstore-slide-2MCD/bookstore-slide-2MCD-superJumbo.jpg"
                  }
                  alt="bookstore"
                  quality={100}
                  priority={true}
                  fill
                />
              </Link>
            </ProjectImageContainer>
            <ProjectTitle>Bookstore</ProjectTitle>
            <ProjectDescription>
              A web application that provides content for best-selling books
              according to New York Times.
            </ProjectDescription>
          </Project>
          <Project>
            <ProjectImageContainer>
              <Link href={"https://github.com/eugenechevski/battleship"}>
                <Image
                  src={
                    "https://nationalinterest.org/sites/default/files/main_images/RTXI80W.jpg"
                  }
                  alt="battleship"
                  quality={100}
                  priority={true}
                  fill
                />
              </Link>
            </ProjectImageContainer>
            <ProjectTitle>Battleship</ProjectTitle>
            <ProjectDescription>
              A responsive web-version of the board-game Battleship.
            </ProjectDescription>
          </Project>
          <Project>
            <ProjectImageContainer>
              <Link
                href={"https://github.com/eugenechevski/checkers-game"}
                className="h-full"
              >
                <Image
                  src={
                    "https://images.unsplash.com/photo-1551198581-aec5c1556d7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlY2tlcnN8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  }
                  alt="checkers"
                  quality={100}
                  priority={true}
                  fill
                />
              </Link>
            </ProjectImageContainer>
            <ProjectTitle>Checkers</ProjectTitle>
            <ProjectDescription>
              Checkers is a team project to develop a digital version of the
              classic board game Checkers.
            </ProjectDescription>
          </Project>
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
          name="contact"
          onSubmit={handleSubmit(onSubmit)}
          data-netlify="true"
          data-netlify-recaptcha="true"
        >
          <Label htmlFor="first-name">First Name</Label>
          <Input
            type="text"
            id="first-name"
            {...register("firstName", { required: true, maxLength: 20 })}
          />
          {errors.firstName && "First name is required"}
          <Label htmlFor="last-name">Last Name</Label>
          <Input
            type="text"
            id="last-name"
            {...register("firstName", { required: true, maxLength: 20 })}
          />
          {errors.lastName && "Last name is required"}
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            {...register("email", {
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
          />
          {errors.email && "Email is required"}
          <Label htmlFor="message">Message</Label>
          <TextArea
            id="message"
            rows={10}
            {...(register("message"),
            { required: true, minLength: 30, maxLength: 200 })}
          />
          {errors.message && "Message is required"}
          <SubmitButton type="submit">Send</SubmitButton>
        </ContactForm>
      </Contact>
    </MainContainer>
  );
}
