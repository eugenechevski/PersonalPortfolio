'use client';

import tw from "tailwind-styled-components";
import Image from "next/image";
import { useState, useEffect } from "react";

const introImg = require("@/assets/intro.jpeg");
const aboutImg = require("@/assets/about.jpeg");

export default function Page() {
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
  `;

  const [imgIntroSize, setImgIntroSize] = useState(500);
  
  useEffect(() => {
    if (innerWidth === undefined) return;

    setImgIntroSize(innerWidth > 576 ? 500 : 250);
  }, []);

  return (
    <MainContainer>
      <Intro>
        <IntroImageContainer>
          <Image
            src={introImg}
            alt="introduction photo"
            width={imgIntroSize}
            height={imgIntroSize}
            />
        </IntroImageContainer>
        <IntroHeading>
          Hello, I am Eugene Chevski - a full-stack software engineer.
        </IntroHeading>
      </Intro>
    </MainContainer>
  );
}
