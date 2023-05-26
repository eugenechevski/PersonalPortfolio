"use client";

import tw from "tailwind-styled-components";
import Image from "next/image";

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

  const AboutHeading = tw.h1`
    text-2xl
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
            priority={true}/>
        </AboutImageContainer>
        <AboutContent>
          <AboutHeading>About me</AboutHeading>
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
    </MainContainer>
  );
}
