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

const introImg = require("@/assets/intro.jpeg");
const aboutImg = require("@/assets/about.jpeg");

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
    </MainContainer>
  );
}
