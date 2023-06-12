
'use client';

import tw from "tailwind-styled-components";
import Link from "next/link";

export default function Page() {
  const Container = tw.div`
    h-screen
    w-screen
    flex
    flex-col
    items-center
    justify-center
    opacity-[50%]
   `;

  const MessageContainer = tw.div`
    lg:w-1/2
    h-1/2
    flex
    flex-col
    items-center
    justify-center
    text-center
    gap-12
    p-4
    `;

  const Message = tw.h1`
     text-3xl
     font-bold
     text-white
    `;

  const ReturnButton = tw.button`
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

  return (
    <Container>
      <MessageContainer>
        <Message>
          Thank you for your message! I will be in touch soon.
        </Message>
        <Link href="/">
          <ReturnButton>Return Home</ReturnButton>
        </Link>
      </MessageContainer>
    </Container>
  );
}
